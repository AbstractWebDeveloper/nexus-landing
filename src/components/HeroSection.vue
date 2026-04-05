<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import WaveCanvas from './three/WaveCanvas.vue'
import GlowBadge from './ui/GlowBadge.vue'
import GradientButton from './ui/GradientButton.vue'

const heroRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!heroRef.value) return
  const els = heroRef.value.querySelectorAll('[data-hero-anim]')
  gsap.set(els, { y: 30, opacity: 0 })

  gsap.to(els, {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    delay: 0.4,
  })
})
</script>

<template>
  <section ref="heroRef" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Three.js background -->
    <div class="absolute inset-0 z-0">
      <WaveCanvas />
      <div class="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/70 to-bg-primary/20" />
      <div class="absolute inset-0 bg-bg-primary/30" />
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-24 pb-20">
      <div data-hero-anim class="mb-8">
        <GlowBadge>Now in Public Beta</GlowBadge>
      </div>

      <h1
        data-hero-anim
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight
               text-text-primary mb-6 leading-[1.1] drop-shadow-lg"
      >
        Automate Everything.<br class="hidden sm:block" />
        <span class="bg-gradient-to-r from-gradient-from to-gradient-to bg-clip-text text-transparent">
          Ship Faster.
        </span>
      </h1>

      <p
        data-hero-anim
        class="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        The intelligent automation platform that connects your tools,
        streamlines your workflows, and scales with your ambition.
      </p>

      <div data-hero-anim class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
        <GradientButton size="lg">
          Start Building Free
          <svg class="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </GradientButton>
        <GradientButton size="lg" variant="outline">View Demo</GradientButton>
      </div>

      <!-- Stats with counter animation -->
      <div data-hero-anim class="grid grid-cols-3 gap-6 sm:gap-10 max-w-md mx-auto">
        <div>
          <div class="text-2xl md:text-3xl font-bold text-text-primary" data-counter="10" data-counter-suffix="M+">0</div>
          <div class="text-xs text-text-muted mt-1.5">Executions/day</div>
        </div>
        <div>
          <div class="text-2xl md:text-3xl font-bold text-text-primary" data-counter="99.9" data-counter-suffix="%">0</div>
          <div class="text-xs text-text-muted mt-1.5">Uptime SLA</div>
        </div>
        <div>
          <div class="text-2xl md:text-3xl font-bold text-text-primary" data-counter="200" data-counter-suffix="+">0</div>
          <div class="text-xs text-text-muted mt-1.5">Integrations</div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted z-10">
      <span class="text-xs tracking-[0.2em] uppercase">Scroll</span>
      <div class="w-5 h-8 border-2 border-text-muted/30 rounded-full flex justify-center pt-1.5">
        <div class="w-1 h-2 bg-gradient-from rounded-full animate-bounce" />
      </div>
    </div>
  </section>
</template>
