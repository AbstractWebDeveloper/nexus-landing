<script setup lang="ts">
import type { PricingTier } from '@/data/pricing'
import GradientButton from './GradientButton.vue'

defineProps<{
  tier: PricingTier
}>()
</script>

<template>
  <div
    :class="[
      'relative rounded-2xl p-8 transition-all duration-300',
      tier.highlighted
        ? 'bg-gradient-to-b from-gradient-from/10 to-bg-surface border-2 border-gradient-from shadow-[0_0_60px_rgba(var(--gradient-from),0.15)] scale-105 z-10'
        : 'bg-bg-surface/40 border border-border hover:border-gradient-from/30',
    ]"
  >
    <!-- Popular badge -->
    <div
      v-if="tier.highlighted"
      class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold
             bg-gradient-to-r from-gradient-from to-gradient-to text-white"
    >
      Most Popular
    </div>

    <h3 class="text-lg font-semibold text-text-primary mb-2">{{ tier.name }}</h3>
    <p class="text-text-secondary text-sm mb-6">{{ tier.description }}</p>

    <div class="mb-6">
      <span class="text-4xl font-bold text-text-primary">{{ tier.price }}</span>
      <span v-if="tier.period" class="text-text-muted">{{ tier.period }}</span>
    </div>

    <GradientButton
      :variant="tier.highlighted ? 'primary' : 'outline'"
      class="w-full mb-8"
    >
      {{ tier.cta }}
    </GradientButton>

    <ul class="space-y-3">
      <li
        v-for="feature in tier.features"
        :key="feature"
        class="flex items-center gap-3 text-sm text-text-secondary"
      >
        <svg class="w-4 h-4 text-gradient-from flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        {{ feature }}
      </li>
    </ul>
  </div>
</template>
