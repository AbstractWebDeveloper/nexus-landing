<script setup lang="ts">
import type { Feature } from '@/data/features'

defineProps<{
  feature: Feature
}>()
</script>

<template>
  <div
    class="card-shimmer group p-6 rounded-2xl border border-border bg-bg-surface/40 backdrop-blur-sm
           hover:bg-bg-surface-hover hover:border-gradient-from/30 transition-all duration-300"
  >
    <div
      class="w-12 h-12 mb-4 flex items-center justify-center rounded-xl
             bg-gradient-to-br from-gradient-from/20 to-gradient-to/20
             text-gradient-from group-hover:scale-110 transition-transform duration-300"
      v-html="feature.icon"
    />
    <h3 class="text-lg font-semibold text-text-primary mb-2">{{ feature.title }}</h3>
    <p class="text-sm text-text-secondary leading-relaxed">{{ feature.description }}</p>
  </div>
</template>
