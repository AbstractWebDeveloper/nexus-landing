<script setup lang="ts">
import { features } from '@/data/features'
import SectionHeading from './ui/SectionHeading.vue'
import FeatureCard from './ui/FeatureCard.vue'
</script>

<template>
  <section id="features" class="relative py-24 md:py-32 px-6 sm:px-8 lg:px-12">
    <!-- Decorative line -->
    <div class="max-w-7xl mx-auto mb-4">
      <div data-animate="line-grow" class="h-px bg-gradient-to-r from-gradient-from/60 via-gradient-to/40 to-transparent" />
    </div>

    <div class="max-w-7xl mx-auto">
      <SectionHeading
        badge="Features"
        title="Everything you need to automate"
        subtitle="Powerful features designed for teams who refuse to waste time on repetitive tasks."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-animate-stagger>
        <FeatureCard
          v-for="feature in features"
          :key="feature.title"
          :feature="feature"
        />
      </div>
    </div>
  </section>
</template>
