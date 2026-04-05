<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { nextTheme, currentTheme } = useTheme()
const scrolled = ref(false)

const themeLabels: Record<string, string> = {
  'theme-cosmic': 'Cosmic',
  'theme-ocean': 'Ocean',
  'theme-aurora': 'Aurora',
  'theme-ember': 'Ember',
}

function onScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled
        ? 'bg-bg-primary/80 backdrop-blur-xl border-b border-border shadow-lg'
        : 'bg-transparent',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
      <!-- Logo -->
      <a href="#" class="text-lg sm:text-xl font-bold text-text-primary flex items-center gap-2 flex-shrink-0">
        <span class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-gradient-from to-gradient-to flex items-center justify-center text-white text-xs sm:text-sm">
          N
        </span>
        <span class="hidden min-[400px]:inline">Nexus</span>
      </a>

      <!-- Nav links — hidden on mobile -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#features" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Features</a>
        <a href="#how-it-works" class="text-sm text-text-secondary hover:text-text-primary transition-colors">How it Works</a>
        <a href="#pricing" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Pricing</a>
      </div>

      <!-- Actions — compact on mobile -->
      <div class="flex items-center gap-2 sm:gap-3">
        <button
          @click="nextTheme"
          class="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs rounded-lg border border-border text-text-muted
                 hover:text-text-primary hover:border-gradient-from/50 transition-all cursor-pointer whitespace-nowrap"
          :title="`Theme: ${themeLabels[currentTheme]}`"
        >
          {{ themeLabels[currentTheme] }}
        </button>

        <a
          href="#"
          class="px-3 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-xl
                 bg-gradient-to-r from-gradient-from to-gradient-to text-white
                 hover:scale-105 transition-transform whitespace-nowrap"
        >
          <span class="hidden sm:inline">Get Started</span>
          <span class="sm:hidden">Start</span>
        </a>
      </div>
    </div>
  </nav>
</template>
