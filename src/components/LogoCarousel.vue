<script setup lang="ts">
import { row1, row2, row3 } from '@/data/logos'

const track1 = [...row1, ...row1]
const track2 = [...row2, ...row2]
const track3 = [...row3, ...row3]
</script>

<template>
  <section class="py-14 md:py-20 overflow-hidden" data-animate="fade-up">
    <p class="text-center text-sm text-text-muted mb-8 tracking-widest uppercase">
      Trusted by teams at
    </p>

    <div class="relative space-y-4">
      <!-- Fade masks -->
      <div class="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
      <div class="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

      <!-- Row 1: left to right -->
      <div class="flex gap-4 sm:gap-6 scroll-row scroll-left">
        <div v-for="(logo, i) in track1" :key="'a'+i" class="logo-chip">{{ logo }}</div>
      </div>

      <!-- Row 2: right to left -->
      <div class="flex gap-4 sm:gap-6 scroll-row scroll-right">
        <div v-for="(logo, i) in track2" :key="'b'+i" class="logo-chip">{{ logo }}</div>
      </div>

      <!-- Row 3: left to right (slower) -->
      <div class="flex gap-4 sm:gap-6 scroll-row scroll-left-slow">
        <div v-for="(logo, i) in track3" :key="'c'+i" class="logo-chip">{{ logo }}</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logo-chip {
  flex-shrink: 0;
  padding: 8px 20px;
  border-radius: 10px;
  border: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-muted);
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.02em;
  white-space: nowrap;
  transition: color 0.3s, border-color 0.3s;
}

.logo-chip:hover {
  color: var(--text-primary);
  border-color: var(--gradient-from);
}

@keyframes scroll-l {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-r {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

.scroll-left {
  animation: scroll-l 35s linear infinite;
}

.scroll-right {
  animation: scroll-r 30s linear infinite;
}

.scroll-left-slow {
  animation: scroll-l 45s linear infinite;
}

.scroll-row:hover {
  animation-play-state: paused;
}
</style>
