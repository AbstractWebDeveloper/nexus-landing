<script setup lang="ts">
import { logos } from '@/data/logos'

// Double the logos for seamless infinite scroll
const doubledLogos = [...logos, ...logos]
</script>

<template>
  <section class="py-16 md:py-20 overflow-hidden" data-animate="fade-up">
    <p class="text-center text-sm text-text-muted mb-10 tracking-widest uppercase">
      Trusted by teams at
    </p>

    <div class="relative">
      <!-- Left/right fade masks -->
      <div class="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-primary to-transparent z-10" />
      <div class="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-primary to-transparent z-10" />

      <!-- Scrolling track -->
      <div class="flex gap-12 animate-scroll">
        <div
          v-for="(logo, i) in doubledLogos"
          :key="i"
          class="flex-shrink-0 px-6 py-3 rounded-xl border border-border/50 bg-bg-surface/30
                 text-text-muted font-semibold text-lg tracking-wide whitespace-nowrap
                 hover:text-text-primary hover:border-gradient-from/30 transition-all duration-300"
        >
          {{ logo }}
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.animate-scroll:hover {
  animation-play-state: paused;
}
</style>
