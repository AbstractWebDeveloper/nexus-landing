<script setup lang="ts">
import type { Step } from '@/data/steps'

defineProps<{
  step: Step
  isLast?: boolean
}>()
</script>

<template>
  <div class="relative flex items-start gap-6">
    <!-- Number -->
    <div class="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl
                bg-gradient-to-br from-gradient-from to-gradient-to text-white
                text-xl font-bold shadow-lg">
      {{ step.number }}
    </div>

    <!-- Connector line -->
    <div
      v-if="!isLast"
      class="absolute left-8 top-16 w-px h-[calc(100%)] bg-gradient-to-b from-gradient-from/40 to-transparent"
    />

    <!-- Content -->
    <div class="pb-12">
      <h3 class="text-xl font-semibold text-text-primary mb-2">{{ step.title }}</h3>
      <p class="text-text-secondary leading-relaxed">{{ step.description }}</p>
    </div>
  </div>
</template>
