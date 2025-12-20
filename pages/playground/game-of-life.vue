<template>
  <main>
    <canvas
      v-if="navigatorWebGpu"
      ref="canvas"
      width="1024"
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

const canvas = ref<HTMLCanvasElement | null>(null);
const navigatorWebGpu = ref<GPU | null>(null);
const isChecking = ref(true);

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

  const encoder = device.createCommandEncoder();

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

  const cellPipeline = device.createRenderPipeline({
    label: 'Cell pipeline',
    layout: 'auto',
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

  const pass = encoder.beginRenderPass({
    colorAttachments: [
      {
        view: ctx.getCurrentTexture().createView(),
        loadOp: 'clear',
        clearValue: { r: 0.2, g: 0.5, b: 0.7, a: 1 },
        storeOp: 'store',
      },
    ],
  });

  pass.setPipeline(cellPipeline);
  pass.setVertexBuffer(0, vertexBuffer);
  pass.draw(vertices.length / 2);

  pass.end();
  device.queue.submit([encoder.finish()]);
});
</script>
