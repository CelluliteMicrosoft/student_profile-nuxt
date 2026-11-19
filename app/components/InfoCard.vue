<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon?: string
}>()
</script>

<template>
  <article class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
    <div class="flex items-start gap-3">
      <span v-if="icon" class="text-2xl" aria-hidden="true">{{ icon }}</span>
      <div>
        <h3 class="text-base font-semibold text-slate-900">{{ title }}</h3>
        <p class="mt-1 text-sm leading-relaxed text-slate-600">{{ description }}</p>
      </div>
    </div>
  </article>
</template>