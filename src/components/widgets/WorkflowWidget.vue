<script setup lang="ts">
import { ref } from 'vue'
import { useInView } from '@/composables/useInView'

const el = ref<HTMLElement | null>(null)
const visible = useInView(el)

const nodes = [
  { x: 30, y: 90, label: 'API', delay: 0 },
  { x: 130, y: 40, label: 'Validate', delay: 0.6 },
  { x: 130, y: 140, label: 'Log', delay: 0.8 },
  { x: 250, y: 90, label: 'Transform', delay: 1.2 },
  { x: 360, y: 90, label: 'Deploy', delay: 1.8 },
]

const lines = [
  { x1: 65, y1: 90, x2: 115, y2: 50, delay: 0.3 },
  { x1: 65, y1: 90, x2: 115, y2: 140, delay: 0.4 },
  { x1: 165, y1: 50, x2: 235, y2: 90, delay: 0.9 },
  { x1: 165, y1: 140, x2: 235, y2: 90, delay: 1.0 },
  { x1: 285, y1: 90, x2: 345, y2: 90, delay: 1.5 },
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
      <span class="ml-2 text-xs text-text-muted font-mono">Workflow</span>
    </div>

    <div class="p-5">
      <svg viewBox="0 0 400 180" class="w-full h-auto">
        <!-- Connecting lines -->
        <line
          v-for="(l, i) in lines"
          :key="'l' + i"
          :x1="l.x1" :y1="l.y1" :x2="l.x2" :y2="l.y2"
          stroke="var(--gradient-from)"
          stroke-width="2"
          stroke-dasharray="6 4"
          class="flow-line"
          :style="{ animationDelay: `${l.delay}s` }"
          opacity="0.3"
        />

        <!-- Nodes -->
        <g
          v-for="(n, i) in nodes"
          :key="'n' + i"
          class="wf-node"
          :style="{ animationDelay: `${n.delay}s` }"
        >
          <rect
            :x="n.x - 15" :y="n.y - 18" width="70" height="36" rx="8"
            fill="var(--bg-surface)" stroke="var(--gradient-from)" stroke-width="1.5"
          />
          <text
            :x="n.x + 20" :y="n.y + 1"
            text-anchor="middle"
            fill="var(--text-primary)"
            font-size="11"
            font-weight="500"
            font-family="Inter, system-ui, sans-serif"
          >
            {{ n.label }}
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.wf-node {
  opacity: 0.3;
  transition: opacity 0.4s ease, filter 0.4s ease;
}

.animate .wf-node {
  animation: node-activate 0.5s ease-out forwards;
}

.flow-line {
  animation-play-state: paused;
}

.animate .flow-line {
  opacity: 0.6;
  animation: dash-flow 0.8s linear infinite;
  animation-play-state: running;
}
</style>
