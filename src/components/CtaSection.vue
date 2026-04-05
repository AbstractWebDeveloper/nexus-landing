<script setup lang="ts">
import GradientButton from './ui/GradientButton.vue'
</script>

<template>
  <section class="relative py-24 md:py-32 px-6">
    <div
      class="max-w-4xl mx-auto rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
      data-animate="scale-in"
    >
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-br from-gradient-from/20 via-bg-surface to-gradient-to/20 rounded-3xl" />
      <div class="absolute inset-0 border border-gradient-from/20 rounded-3xl" />

      <!-- Glow -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-gradient-from/20 rounded-full blur-[100px]" />

      <div class="relative z-10">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 tracking-tight">
          Ready to automate?
        </h2>
        <p class="text-lg text-text-secondary max-w-xl mx-auto mb-8">
          Join thousands of teams who've already transformed their workflows. Start building in minutes.
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <GradientButton size="lg">
            Get Started Free
            <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </GradientButton>
          <GradientButton size="lg" variant="outline">Talk to Sales</GradientButton>
        </div>
      </div>
    </div>
  </section>
</template>
