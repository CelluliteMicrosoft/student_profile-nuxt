<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'Students', to: '/students' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
    <nav
      class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
      aria-label="Main navigation"
    >
      <NuxtLink to="/" class="flex items-center gap-2 text-lg font-bold text-blue-700">
        <span aria-hidden="true">🎓</span>
        <span>Student Portal</span>
      </NuxtLink>

      <ul class="flex items-center gap-1 sm:gap-2">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            exact-active-class="bg-blue-50! text-blue-700!"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>