<script setup lang="ts">
defineProps<{
  badge?: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <div class="text-center max-w-2xl mx-auto mb-16" data-animate="fade-up">
    <span
      v-if="badge"
      class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase
             text-gradient-from border border-border rounded-full bg-bg-surface/50"
    >
      {{ badge }}
    </span>
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg text-text-secondary">
      {{ subtitle }}
    </p>
  </div>
</template>
