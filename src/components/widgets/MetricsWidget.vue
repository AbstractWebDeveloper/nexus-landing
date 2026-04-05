<script setup lang="ts">
import { ref } from 'vue'
import { useInView } from '@/composables/useInView'

const el = ref<HTMLElement | null>(null)
const visible = useInView(el)

const metrics = [
  { label: 'Requests', value: '2.8', suffix: 'k', path: 'M0,20 L10,15 L20,18 L30,8 L40,12 L50,5 L60,10 L70,3 L80,8', color: 'var(--gradient-from)' },
  { label: 'Latency', value: '42', suffix: 'ms', path: 'M0,25 L10,20 L20,22 L30,15 L40,18 L50,12 L60,14 L70,8 L80,10', color: 'var(--gradient-to)' },
  { label: 'Success', value: '99.8', suffix: '%', path: 'M0,15 L10,12 L20,14 L30,10 L40,8 L50,6 L60,5 L70,4 L80,3', color: 'var(--accent)' },
  { label: 'Workers', value: '128', suffix: '', path: 'M0,22 L10,18 L20,20 L30,12 L40,15 L50,10 L60,8 L70,12 L80,6', color: 'var(--gradient-from)' },
]
</script>

<template>
  <div
    ref="el"
    :class="['card-shimmer rounded-2xl border border-border bg-bg-surface/40 overflow-hidden', { animate: visible }]"
  >
    <!-- Title bar -->
    <div class="flex items-center gap-2 px-5 py-3 border-b border-border/50">
      <span class="w-2.5 h-2.5 rounded-full bg-red-500/70" />
      <span class="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
      <span class="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      <span class="ml-2 text-xs text-text-muted font-mono">Metrics</span>
    </div>

    <div class="grid grid-cols-2 gap-3 p-5">
      <div
        v-for="m in metrics"
        :key="m.label"
        class="p-3 rounded-xl bg-bg-primary/50 border border-border/30"
      >
        <div class="flex items-center justify-between mb-2">
          <span class="text-[10px] text-text-muted uppercase tracking-wider">{{ m.label }}</span>
          <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        </div>
        <div class="text-lg font-bold text-text-primary mb-2" :data-counter="m.value" :data-counter-suffix="m.suffix">0</div>
        <svg viewBox="0 0 80 28" class="w-full h-6">
          <path
            :d="m.path"
            fill="none"
            :stroke="m.color"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="sparkline"
            stroke-dasharray="200"
            stroke-dashoffset="200"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate .sparkline {
  animation: draw-line 1.5s ease-out forwards;
}
</style>
