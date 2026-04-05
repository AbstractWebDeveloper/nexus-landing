<script setup lang="ts">
import { pricingTiers } from '@/data/pricing'
import SectionHeading from './ui/SectionHeading.vue'
import PricingCard from './ui/PricingCard.vue'
</script>

<template>
  <section id="pricing" class="relative py-24 md:py-32 px-6 sm:px-8 lg:px-12">
    <div class="max-w-5xl mx-auto">
      <SectionHeading
        badge="Pricing"
        title="Simple, transparent pricing"
        subtitle="Start free, scale when you're ready. No hidden fees, no surprises."
      />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-center" data-animate-stagger>
        <PricingCard
          v-for="tier in pricingTiers"
          :key="tier.name"
          :tier="tier"
        />
      </div>
    </div>
  </section>
</template>
