<script setup lang="ts">
import { ref } from 'vue'
import { useInView } from '@/composables/useInView'

const el = ref<HTMLElement | null>(null)
const visible = useInView(el)

const bars = [65, 40, 85, 55, 75]
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
      <span class="ml-2 text-xs text-text-muted font-mono">Dashboard</span>
    </div>

    <div class="p-5">
      <!-- Top row: metric + progress ring -->
      <div class="flex items-center justify-between mb-5">
        <div>
          <div class="text-xs text-text-muted mb-1">Total Revenue</div>
          <div class="text-2xl font-bold text-text-primary" data-counter="84" data-counter-suffix="k">0</div>
        </div>

        <!-- SVG Progress Ring -->
        <svg viewBox="0 0 100 100" class="w-16 h-16">
          <circle cx="50" cy="50" r="42" fill="none" stroke="var(--border-color)" stroke-width="5" />
          <circle
            cx="50" cy="50" r="42" fill="none"
            stroke="var(--gradient-from)" stroke-width="5" stroke-linecap="round"
            stroke-dasharray="264" stroke-dashoffset="264"
            transform="rotate(-90 50 50)"
            class="progress-ring"
          />
          <text x="50" y="54" text-anchor="middle" fill="var(--text-primary)" font-size="16" font-weight="600">
            75%
          </text>
        </svg>
      </div>

      <!-- Bar chart -->
      <div class="flex items-end gap-2 h-24">
        <div
          v-for="(h, i) in bars"
          :key="i"
          class="flex-1 rounded-t-md bg-gradient-to-t from-gradient-from to-gradient-to bar"
          :style="{
            height: `${h}%`,
            '--bar-index': i,
            transformOrigin: 'bottom',
            transform: 'scaleY(0)',
          }"
        />
      </div>
      <div class="flex justify-between mt-2">
        <span v-for="d in ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']" :key="d" class="text-[10px] text-text-muted flex-1 text-center">{{ d }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate .bar {
  animation: bar-grow 0.8s ease-out forwards;
  animation-delay: calc(var(--bar-index) * 0.15s);
}

.animate .progress-ring {
  animation: ring-fill 1.5s ease-out 0.5s forwards;
}
</style>
