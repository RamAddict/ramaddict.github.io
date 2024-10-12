<template>
    <Header></Header>
    <slot />
    <Footer></Footer>
</template>

<script setup lang="ts">
useHead({
    title: 'Arthur Bianco\'s - Personal website', 
    // bodyAttrs: {
    //     style: 'background-color: #15c7ff;'
    //     }
    })
</script>