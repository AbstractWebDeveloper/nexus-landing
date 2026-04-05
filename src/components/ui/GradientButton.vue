<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'outline'
}>()
</script>

<template>
  <button
    :class="[
      'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer',
      'hover:scale-105 hover:shadow-lg active:scale-[0.98]',
      size === 'sm' ? 'px-5 py-2.5 text-sm' : size === 'lg' ? 'px-8 py-4 text-lg' : 'px-6 py-3 text-base',
      variant === 'outline'
        ? 'border border-text-muted/40 text-text-primary bg-bg-surface/30 hover:bg-bg-surface hover:border-gradient-from/50 backdrop-blur-sm'
        : 'bg-gradient-to-r from-gradient-from to-gradient-to text-white shadow-[0_0_30px_rgba(var(--gradient-from),0.3)]',
    ]"
  >
    <slot />
  </button>
</template>
