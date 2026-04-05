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
    </div>
  </section>
</template>
