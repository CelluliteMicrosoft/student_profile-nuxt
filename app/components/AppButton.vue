<script setup lang="ts">
type ButtonColor = 'primary' | 'secondary' | 'success' | 'danger'

const props = withDefaults(
  defineProps<{
    label: string
    color?: ButtonColor
    disabled?: boolean
  }>(),
  {
    color: 'primary',
    disabled: false,
  },
)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

// Full class names are written out so Tailwind can detect them.
const colorClasses: Record<ButtonColor, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:ring-blue-400',
  secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300 focus-visible:ring-slate-400',
  success: 'bg-emerald-600 text-white hover:bg-emerald-500 focus-visible:ring-emerald-400',
  danger: 'bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-400',
}

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      colorClasses[color],
    ]"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>