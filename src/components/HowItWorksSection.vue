<script setup lang="ts">
import { steps } from '@/data/steps'
import SectionHeading from './ui/SectionHeading.vue'
import StepCard from './ui/StepCard.vue'
</script>

<template>
  <section id="how-it-works" class="relative py-24 md:py-32 px-6 sm:px-8 lg:px-12">
    <!-- Decorative line -->
    <div class="max-w-3xl mx-auto mb-4">
      <div data-animate="line-grow" class="h-px bg-gradient-to-r from-transparent via-gradient-from/60 to-transparent" />
    </div>

    <div class="max-w-3xl mx-auto">
      <SectionHeading
        badge="How It Works"
        title="Up and running in minutes"
        subtitle="Three simple steps to transform your workflow from chaos to clockwork."
      />

      <div data-animate-stagger>
        <StepCard
          v-for="(step, i) in steps"
          :key="step.number"
          :step="step"
          :is-last="i === steps.length - 1"
        />
      </div>
    </div>
  </section>
</template>
