<template>
  <main>
    <canvas
      v-if="navigatorWebGpu"
      ref="canvas"
      width="576"
      height="576"
      class="m-4 mx-auto p-2 shadow-md"
    ></canvas>
    <div v-else-if="isChecking" class="m-auto my-20 text-center">
      <div
        class="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-current
          border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span
          class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0
            ![clip:rect(0,0,0,0)]"
          >Loading...</span
        >
      </div>
    </div>
    <div v-else class="m-auto my-20 text-center text-xl">WebGPU not supported :/</div>
  </main>
</template>

<script setup lang="ts">
import shader from '~/public/playground/shader.wgsl?raw';
import computeShader from '~/public/playground/compute.wgsl?raw';

const canvas = ref<HTMLCanvasElement | null>(null);
const navigatorWebGpu = ref<GPU | null>(null);
const isChecking = ref(true);
const GRID_SIZE = 64;
const UPDATE_INTERVAL = 100; // Update every 200ms (5 times/sec)
let step = 0; // Track how many simulation steps have been run
const WORKGROUP_SIZE = 8;

onMounted(async () => {
  // Check for WebGPU support on client-side only
  navigatorWebGpu.value = navigator.gpu || null;
  isChecking.value = false;

  if (!navigatorWebGpu.value) return;

  const adapter = await navigatorWebGpu.value.requestAdapter();
  if (!adapter) return;

  const device = await adapter.requestDevice();

  const ctx = canvas.value?.getContext('webgpu');
  if (!ctx) return;

  const canvasFormat = navigatorWebGpu.value.getPreferredCanvasFormat();
  ctx.configure({ device, format: canvasFormat });

  // Create a uniform buffer that describes the grid.
  const uniformArray = new Float32Array([GRID_SIZE, GRID_SIZE]);
  const uniformBuffer = device.createBuffer({
    label: 'Grid Uniforms',
    size: uniformArray.byteLength,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });
  device.queue.writeBuffer(uniformBuffer, 0, uniformArray);

  // prettier-ignore
  const vertices = new Float32Array([
  //   X,    Y,
    -0.8, -0.8, // Triangle 1 (Blue)
    0.8, -0.8,
    0.8,  0.8,

    -0.8, -0.8, // Triangle 2 (Red)
    0.8,  0.8,
    -0.8,  0.8,
  ]);
  const cellStateArray = new Uint32Array(GRID_SIZE * GRID_SIZE);
  // Create two storage buffers to hold the cell state.
  const cellStateStorage = [
    device.createBuffer({
      label: 'Cell State A',
      size: cellStateArray.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    }),
    device.createBuffer({
      label: 'Cell State B',
      size: cellStateArray.byteLength,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST,
    }),
  ];
  // Mark every third cell of the first grid as active.
  for (let i = 0; i < cellStateArray.length; i += 3) {
    cellStateArray[i] = Math.random() > 0.6 ? 1 : 0;
  }
  device.queue.writeBuffer(cellStateStorage[0], 0, cellStateArray);

  // Mark every other cell of the second grid as active.
  for (let i = 0; i < cellStateArray.length; i++) {
    cellStateArray[i] = i % 2;
  }
  device.queue.writeBuffer(cellStateStorage[1], 0, cellStateArray);

  const vertexBuffer = device.createBuffer({
    label: 'Cell vertices',
    size: vertices.byteLength,
    usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
  });

  device.queue.writeBuffer(vertexBuffer, 0, vertices);

  const vertexBufferLayout: GPUVertexBufferLayout = {
    arrayStride: 8,
    attributes: [
      {
        format: 'float32x2',
        offset: 0,
        shaderLocation: 0, // Position, see vertex shader
      },
    ],
  };

  const cellShaderModule = device.createShaderModule({
    label: 'Cell shader',
    code: shader,
  });

  // Create the compute shader that will process the simulation.
  const simulationShaderModule = device.createShaderModule({
    label: 'Game of Life simulation shader',
    code: computeShader
      .replaceAll('{{WORKGROUP_SIZE_X}}', WORKGROUP_SIZE.toString())
      .replaceAll('{{WORKGROUP_SIZE_Y}}', WORKGROUP_SIZE.toString()),
  });

  const bindGroupLayout = device.createBindGroupLayout({
    label: 'Cell Bind Group Layout',
    entries: [
      {
        binding: 0,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.COMPUTE | GPUShaderStage.FRAGMENT,
        buffer: {},
      },
      {
        binding: 1,
        visibility: GPUShaderStage.VERTEX | GPUShaderStage.COMPUTE,
        buffer: { type: 'read-only-storage' },
      },
      {
        binding: 2,
        visibility: GPUShaderStage.COMPUTE,
        buffer: { type: 'storage' },
      },
    ],
  });

  // Create a bind group to pass the grid uniforms into the pipeline
  const bindGroups = [
    device.createBindGroup({
      label: 'Cell renderer bind group A',
      layout: bindGroupLayout,
      entries: [
        {
          binding: 0,
          resource: { buffer: uniformBuffer },
        },
        {
          binding: 1,
          resource: { buffer: cellStateStorage[0] },
        },
        {
          binding: 2, // New Entry
          resource: { buffer: cellStateStorage[1] },
        },
      ],
    }),
    device.createBindGroup({
      label: 'Cell renderer bind group B',
      layout: bindGroupLayout,

      entries: [
        {
          binding: 0,
          resource: { buffer: uniformBuffer },
        },
        {
          binding: 1,
          resource: { buffer: cellStateStorage[1] },
        },
        {
          binding: 2,
          resource: { buffer: cellStateStorage[0] },
        },
      ],
    }),
  ];

  const pipelineLayout = device.createPipelineLayout({
    label: 'Cell Pipeline Layout',
    bindGroupLayouts: [bindGroupLayout],
  });

  const cellPipeline = device.createRenderPipeline({
    label: 'Cell pipeline',
    layout: pipelineLayout,
    vertex: {
      module: cellShaderModule,
      entryPoint: 'vertexMain',
      buffers: [vertexBufferLayout],
    },
    fragment: {
      module: cellShaderModule,
      entryPoint: 'fragmentMain',
      targets: [
        {
          format: canvasFormat,
        },
      ],
    },
  });

  const simulationPipeline = device.createComputePipeline({
    label: 'Simulation pipeline',
    layout: pipelineLayout,
    compute: {
      module: simulationShaderModule,
      entryPoint: 'computeMain',
    },
  });

  const render = () => {
    const encoder = device.createCommandEncoder();

    const computePass = encoder.beginComputePass();

    computePass.setPipeline(simulationPipeline);
    computePass.setBindGroup(0, bindGroups[step % 2]);

    // New lines
    const workgroupCount = Math.ceil(GRID_SIZE / WORKGROUP_SIZE);
    computePass.dispatchWorkgroups(workgroupCount, workgroupCount);

    computePass.end();

    const pass = encoder.beginRenderPass({
      colorAttachments: [
        {
          view: ctx.getCurrentTexture().createView(),
          loadOp: 'clear',
          clearValue: { r: 0.2, g: 0.2, b: 0.2, a: 1 },
          storeOp: 'store',
        },
      ],
    });

    pass.setPipeline(cellPipeline);
    pass.setBindGroup(0, bindGroups[step % 2]);
    pass.setVertexBuffer(0, vertexBuffer);
    pass.draw(vertices.length / 2, GRID_SIZE * GRID_SIZE);

    pass.end();
    device.queue.submit([encoder.finish()]);
    step++;
  };

  setInterval(render, UPDATE_INTERVAL);
});
</script>
