<script setup lang="ts">
import SectionHeading from './ui/SectionHeading.vue'
import DashboardWidget from './widgets/DashboardWidget.vue'
import MetricsWidget from './widgets/MetricsWidget.vue'
import CodeWidget from './widgets/CodeWidget.vue'
import WorkflowWidget from './widgets/WorkflowWidget.vue'
</script>

<template>
  <section class="py-24 md:py-32 px-6 sm:px-8 lg:px-12">
    <div class="max-w-5xl mx-auto">
      <SectionHeading
        badge="Product"
        title="See it in action"
        subtitle="From real-time dashboards to automated pipelines — experience the power of Nexus."
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-animate-stagger>
        <DashboardWidget />
        <MetricsWidget />
        <CodeWidget />
        <WorkflowWidget />
      </div>

      <!-- Animated section divider -->
      <div class="mt-20 flex flex-col items-center gap-4" data-animate="fade-up">
        <!-- Flowing gradient line -->
        <div class="w-full max-w-md h-px relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gradient-from to-transparent animate-pulse" />
        </div>

        <!-- Animated dots -->
        <div class="flex items-center gap-3">
          <div class="w-1.5 h-1.5 rounded-full bg-gradient-from/40 animate-ping" style="animation-delay: 0s; animation-duration: 2s;" />
          <div class="w-2 h-2 rounded-full bg-gradient-to-r from-gradient-from to-gradient-to shadow-[0_0_12px_var(--gradient-from)]" />
          <div class="w-1.5 h-1.5 rounded-full bg-gradient-from/40 animate-ping" style="animation-delay: 1s; animation-duration: 2s;" />
        </div>

        <!-- Flowing gradient line -->
        <div class="w-full max-w-md h-px relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gradient-to to-transparent animate-pulse" style="animation-delay: 0.5s;" />
        </div>
      </div>
    </div>
  </section>
</template>
