<script setup lang="ts">
import { useScrollAnimations } from '@/composables/useScrollAnimations'
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import LogoCarousel from '@/components/LogoCarousel.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import HowItWorksSection from '@/components/HowItWorksSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import PricingSection from '@/components/PricingSection.vue'
import CtaSection from '@/components/CtaSection.vue'
import FooterSection from '@/components/FooterSection.vue'

useScrollAnimations()
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <LogoCarousel />
    <FeaturesSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <PricingSection />
    <CtaSection />
  </main>
  <FooterSection />
</template>
