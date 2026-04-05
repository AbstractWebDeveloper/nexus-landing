<script setup lang="ts">
import { ref } from 'vue'
import { useInView } from '@/composables/useInView'

const el = ref<HTMLElement | null>(null)
const visible = useInView(el)
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
      <span class="ml-2 text-xs text-text-muted font-mono">pipeline.ts</span>
    </div>

    <div class="p-5 font-mono text-xs sm:text-sm leading-6 overflow-hidden">
      <div class="code-line"><span class="text-text-muted italic">// Initialize automation</span></div>
      <div class="code-line"><span class="text-gradient-from">const</span> <span class="text-text-primary">pipeline</span> = <span class="text-gradient-from">new</span> <span class="text-gradient-to">Nexus</span>.<span class="text-text-primary">Pipeline</span>({</div>
      <div class="code-line">&nbsp;&nbsp;<span class="text-text-primary">trigger</span>: <span class="text-accent">'webhook'</span>,</div>
      <div class="code-line">&nbsp;&nbsp;<span class="text-text-primary">steps</span>: [<span class="text-accent">'validate'</span>, <span class="text-accent">'transform'</span>],</div>
      <div class="code-line">&nbsp;&nbsp;<span class="text-text-primary">retries</span>: <span class="text-gradient-to">3</span>,</div>
      <div class="code-line">});</div>
      <div class="code-line"><span class="text-gradient-from">await</span> <span class="text-text-primary">pipeline</span>.<span class="text-gradient-to">execute</span>();</div>
      <div class="code-line"><span class="text-text-muted italic">// Done in 2.4ms</span></div>
    </div>
  </div>
</template>

<style scoped>
.code-line {
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  border-right: 2px solid transparent;
}

.animate .code-line {
  animation: typewriter 0.6s steps(25) forwards;
}

.animate .code-line:nth-child(1) { animation-delay: 0s; }
.animate .code-line:nth-child(2) { animation-delay: 0.5s; }
.animate .code-line:nth-child(3) { animation-delay: 1.0s; }
.animate .code-line:nth-child(4) { animation-delay: 1.4s; }
.animate .code-line:nth-child(5) { animation-delay: 1.8s; }
.animate .code-line:nth-child(6) { animation-delay: 2.1s; }
.animate .code-line:nth-child(7) { animation-delay: 2.4s; }
.animate .code-line:nth-child(8) { animation-delay: 2.8s; }

.animate .code-line:last-child {
  border-right-color: var(--gradient-from);
  animation: typewriter 0.6s steps(25) forwards, blink-cursor 0.8s step-end infinite;
  animation-delay: 2.8s, 3.4s;
}
</style>
