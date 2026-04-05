<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme'
import GradientButton from './ui/GradientButton.vue'

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
    <div class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="text-xl font-bold text-text-primary flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-gradient-to-br from-gradient-from to-gradient-to flex items-center justify-center text-white text-sm">
          N
        </span>
        Nexus
      </a>

      <!-- Nav links -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#features" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Features</a>
        <a href="#how-it-works" class="text-sm text-text-secondary hover:text-text-primary transition-colors">How it Works</a>
        <a href="#pricing" class="text-sm text-text-secondary hover:text-text-primary transition-colors">Pricing</a>
      </div>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <!-- Theme switcher (dev) -->
        <button
          @click="nextTheme"
          class="px-3 py-1.5 text-xs rounded-lg border border-border text-text-muted
                 hover:text-text-primary hover:border-gradient-from/50 transition-all cursor-pointer"
          :title="`Theme: ${themeLabels[currentTheme]}`"
        >
          {{ themeLabels[currentTheme] }}
        </button>

        <GradientButton size="sm">Get Started</GradientButton>
      </div>
    </div>
  </nav>
</template>
