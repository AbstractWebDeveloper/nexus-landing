<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { nextTheme, currentTheme } = useTheme()
const scrolled = ref(false)
const expanded = ref(false)

const themeLabels: Record<string, string> = {
  'theme-cosmic': 'Cosmic',
  'theme-ocean': 'Ocean',
  'theme-aurora': 'Aurora',
  'theme-ember': 'Ember',
}

function onScroll() {
  const wasScrolled = scrolled.value
  scrolled.value = window.scrollY > 80
  // Auto-collapse when scrolling starts
  if (!wasScrolled && scrolled.value) expanded.value = false
}

function toggle() {
  expanded.value = !expanded.value
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <!-- Full navbar (top / expanded) -->
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
      scrolled && !expanded
        ? 'opacity-0 -translate-y-full pointer-events-none'
        : 'opacity-100 translate-y-0',
      scrolled && expanded
        ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border shadow-xl'
        : scrolled
          ? ''
          : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
      <a href="#" class="text-lg sm:text-xl font-bold text-text-primary flex items-center gap-2 flex-shrink-0">
        <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-gradient-from to-gradient-to flex items-center justify-center text-white text-xs sm:text-sm">N</span>
        <span>Nexus</span>
      </a>

      <div class="hidden md:flex items-center gap-8">
        <a href="#features" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Features</a>
        <a href="#how-it-works" class="text-sm text-text-secondary hover:text-text-primary transition-colors">How it Works</a>
        <a href="#pricing" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Pricing</a>
      </div>

      <div class="flex items-center gap-2 sm:gap-3">
        <button
          @click="nextTheme"
          class="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-lg border border-border text-text-muted
                 hover:text-text-primary hover:border-gradient-from/50 transition-all cursor-pointer whitespace-nowrap"
        >
          {{ themeLabels[currentTheme] }}
        </button>
        <a href="#" class="px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl
                           bg-gradient-to-r from-gradient-from to-gradient-to text-white
                           hover:scale-105 transition-transform whitespace-nowrap">
          Get Started
        </a>
      </div>
    </div>
  </nav>

  <!-- Collapsed pill (appears when scrolled & not expanded) -->
  <div
    :class="[
      'fixed top-4 left-4 z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
      scrolled && !expanded
        ? 'opacity-100 translate-y-0 scale-100'
        : 'opacity-0 -translate-y-3 scale-90 pointer-events-none',
    ]"
  >
    <button
      @click="toggle"
      class="nav-pill group relative flex items-center justify-center w-11 h-11 rounded-full
             bg-bg-surface/60 backdrop-blur-2xl border border-gradient-from/20
             shadow-[0_0_20px_rgba(var(--gradient-from),0.15)]
             hover:shadow-[0_0_30px_rgba(var(--gradient-from),0.25)]
             hover:border-gradient-from/40 hover:bg-bg-surface/80
             transition-all duration-500 cursor-pointer"
    >
      <!-- Shimmer border -->
      <span class="pill-shimmer" />

      <!-- Chevron with gradient color -->
      <svg
        class="w-5 h-5 relative z-10 transition-all duration-500
               group-hover:translate-y-0.5"
        fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="url(#chevron-grad)"
      >
        <defs>
          <linearGradient id="chevron-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="var(--gradient-from)" />
            <stop offset="100%" stop-color="var(--gradient-to)" />
          </linearGradient>
        </defs>
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.nav-pill {
  position: relative;
  overflow: hidden;
}

.pill-shimmer {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
}

.pill-shimmer::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: inherit;
  background: conic-gradient(
    from var(--shimmer-angle, 0deg),
    transparent 0%,
    var(--gradient-from) 8%,
    var(--gradient-to) 16%,
    transparent 24%
  );
  opacity: 0.5;
  animation: pill-rotate 4s linear infinite;
}

.pill-shimmer::after {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: var(--bg-primary);
  opacity: 0.8;
}

@supports (animation-timeline: scroll()) {
  /* future enhancement */
}

@property --shimmer-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@keyframes pill-rotate {
  to { --shimmer-angle: 360deg; }
}
</style>
