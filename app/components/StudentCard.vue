<script setup lang="ts">
type StudentStatus = 'Active' | 'Inactive' | 'On Leave'

const props = withDefaults(
  defineProps<{
    name: string
    studentId: string
    program: string
    yearLevel: number
    status: StudentStatus
    email?: string
    showDetails?: boolean
  }>(),
  {
    email: '',
    showDetails: false,
  },
)

const emit = defineEmits<{
  (e: 'select', studentId: string): void
}>()

const initials = computed(() =>
  props.name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase(),
)

const yearLabel = computed(() => {
  const ordinals = ['1st', '2nd', '3rd', '4th']
  return `${ordinals[props.yearLevel - 1] ?? `${props.yearLevel}th`} Year`
})

const statusClasses: Record<StudentStatus, string> = {
  Active: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  Inactive: 'bg-slate-100 text-slate-600 ring-slate-200',
  'On Leave': 'bg-amber-50 text-amber-700 ring-amber-200',
}
</script>

<template>
  <article class="flex flex-col rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
    <div class="flex items-center gap-4">
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-base font-bold text-blue-700"
        aria-hidden="true"
      >
        {{ initials }}
      </div>
      <div class="min-w-0">
        <h3 class="truncate text-base font-semibold text-slate-900">{{ name }}</h3>
        <p class="text-sm text-slate-500">{{ studentId }}</p>
      </div>
    </div>

    <dl class="mt-4 space-y-2 text-sm">
      <div class="flex justify-between gap-4">
        <dt class="text-slate-500">Program</dt>
        <dd class="text-right font-medium text-slate-800">{{ program }}</dd>
      </div>
      <div class="flex justify-between gap-4">
        <dt class="text-slate-500">Year Level</dt>
        <dd class="font-medium text-slate-800">{{ yearLabel }}</dd>
      </div>
      <div class="flex items-center justify-between gap-4">
        <dt class="text-slate-500">Status</dt>
        <dd>
          <span
            :class="['rounded-full px-2.5 py-0.5 text-xs font-semibold ring-1 ring-inset', statusClasses[status]]"
          >
            {{ status }}
          </span>
        </dd>
      </div>
      <div v-if="showDetails && email" class="flex justify-between gap-4 border-t border-slate-100 pt-2">
        <dt class="text-slate-500">Email</dt>
        <dd class="truncate font-medium text-slate-800">{{ email }}</dd>
      </div>
    </dl>

    <div class="mt-5">
      <AppButton label="View Profile" color="primary" @click="emit('select', studentId)" />
    </div>
  </article>
</template>