<script setup lang="ts">
</script>

<template>
  <span
    class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
           border border-border bg-bg-surface/50 text-gradient-from backdrop-blur-sm"
  >
    <span class="w-2 h-2 rounded-full bg-gradient-from animate-pulse" />
    <slot />
  </span>
</template>
