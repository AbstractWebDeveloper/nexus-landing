<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { testimonials } from '@/data/testimonials'
import SectionHeading from './ui/SectionHeading.vue'

const current = ref(0)
let interval: ReturnType<typeof setInterval> | null = null

const row1 = testimonials.slice(0, 3)
const row2 = testimonials.slice(3, 6)

onMounted(() => {
  interval = setInterval(() => {
    current.value = (current.value + 1) % testimonials.length
  }, 4000)
})

onUnmounted(() => {
  if (interval) clearInterval(interval)
})
</script>

<template>
  <section class="py-24 md:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <SectionHeading
        badge="Testimonials"
        title="Loved by engineering teams"
        subtitle="See what teams are saying about transforming their workflows with Nexus."
      />

      <!-- Desktop: 2-row grid -->
      <div class="hidden md:block">
        <div class="grid grid-cols-3 gap-6 mb-6" data-animate-stagger>
          <div
            v-for="t in row1"
            :key="t.name"
            class="card-shimmer p-6 rounded-2xl border border-border bg-bg-surface/40 backdrop-blur-sm
                   hover:bg-bg-surface-hover hover:border-gradient-from/30 transition-all duration-500
                   group"
          >
            <p class="text-text-secondary text-sm leading-relaxed mb-6 italic">
              "{{ t.quote }}"
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gradient-from to-gradient-to
                          flex items-center justify-center text-white text-xs font-bold
                          group-hover:scale-110 transition-transform duration-300">
                {{ t.avatar }}
              </div>
              <div>
                <div class="text-sm font-semibold text-text-primary">{{ t.name }}</div>
                <div class="text-xs text-text-muted">{{ t.role }}, {{ t.company }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-3 gap-6" data-animate-stagger>
          <div
            v-for="t in row2"
            :key="t.name"
            class="card-shimmer p-6 rounded-2xl border border-border bg-bg-surface/40 backdrop-blur-sm
                   hover:bg-bg-surface-hover hover:border-gradient-from/30 transition-all duration-500
                   group"
          >
            <p class="text-text-secondary text-sm leading-relaxed mb-6 italic">
              "{{ t.quote }}"
            </p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gradient-from to-gradient-to
                          flex items-center justify-center text-white text-xs font-bold
                          group-hover:scale-110 transition-transform duration-300">
                {{ t.avatar }}
              </div>
              <div>
                <div class="text-sm font-semibold text-text-primary">{{ t.name }}</div>
                <div class="text-xs text-text-muted">{{ t.role }}, {{ t.company }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: auto-scrolling carousel -->
      <div class="md:hidden relative" data-animate="fade-up">
        <div class="overflow-hidden rounded-2xl">
          <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${current * 100}%)` }"
          >
            <div
              v-for="t in testimonials"
              :key="t.name"
              class="card-shimmer w-full flex-shrink-0 p-6 border border-border bg-bg-surface/40 rounded-2xl"
            >
              <p class="text-text-secondary text-sm leading-relaxed mb-6 italic">
                "{{ t.quote }}"
              </p>
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-gradient-from to-gradient-to
                            flex items-center justify-center text-white text-xs font-bold">
                  {{ t.avatar }}
                </div>
                <div>
                  <div class="text-sm font-semibold text-text-primary">{{ t.name }}</div>
                  <div class="text-xs text-text-muted">{{ t.role }}, {{ t.company }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Dots -->
        <div class="flex justify-center gap-2 mt-6">
          <div
            v-for="(_, i) in testimonials"
            :key="i"
            :class="[
              'w-2 h-2 rounded-full transition-all duration-300',
              i === current ? 'bg-gradient-from w-6' : 'bg-text-muted/30',
            ]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
