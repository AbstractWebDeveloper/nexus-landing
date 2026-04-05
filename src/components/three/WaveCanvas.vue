<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useWaveScene } from '@/composables/useWaveScene'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const { init } = useWaveScene(canvasRef)

onMounted(() => {
  init()
})
</script>

<template>
  <canvas ref="canvasRef" class="absolute inset-0 w-full h-full" />
</template>
