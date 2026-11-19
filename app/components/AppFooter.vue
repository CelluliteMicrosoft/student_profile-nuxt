<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-slate-200 bg-white">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-slate-500 sm:flex-row sm:px-6 sm:text-left lg:px-8"
    >
      <p>&copy; {{ year }} Student Information Portal. All rights reserved.</p>
      <p>Registrar's Office &middot; portal@example.edu &middot; Mon&ndash;Fri, 8:00 AM&ndash;5:00 PM</p>
    </div>
  </footer>
</template>