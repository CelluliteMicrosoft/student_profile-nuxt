<script setup lang="ts">
useSeoMeta({
  title: 'Student Portal | Directory',
  description: 'Full student directory with filtering and detail toggles.',
})

type Filter = 'all' | 'active'

const students = ref(useStudents())
const filter = ref<Filter>('all')
const showDetails = ref(false)
const selectedId = ref<string | null>(null)

const visibleStudents = computed(() =>
  filter.value === 'active' ? students.value.filter((s) => s.status === 'Active') : students.value,
)

const selectedStudent = computed(() => students.value.find((s) => s.studentId === selectedId.value) ?? null)

function removeInactive() {
  students.value = students.value.filter((s) => s.status !== 'Inactive')
  if (selectedId.value && !selectedStudent.value) selectedId.value = null
}

function reset() {
  students.value = useStudents()
  filter.value = 'all'
  showDetails.value = false
  selectedId.value = null
}
</script>

<template>
  <div class="space-y-8">
    <header>
      <h1 class="text-3xl font-extrabold tracking-tight text-slate-900">Student Directory</h1>
      <p class="mt-1 text-slate-600">Filter, inspect, and manage the list of enrolled students.</p>
    </header>

    <!-- Info cards -->
    <section class="grid gap-4 sm:grid-cols-2" aria-label="Directory information">
      <InfoCard
        icon="🔎"
        title="Using the Directory"
        description="Use the filter buttons to show only active students, or toggle details to reveal contact information."
      />
      <InfoCard
        icon="🏷️"
        title="Status Legend"
        description="Active students are currently enrolled. On Leave and Inactive students need registrar approval to re-enroll."
      />
    </section>

    <!-- Controls -->
    <section class="flex flex-wrap items-center gap-2" aria-label="Directory controls">
      <AppButton label="Show All" color="primary" @click="filter = 'all'" />
      <AppButton label="Filter Active" color="success" @click="filter = 'active'" />
      <AppButton
        :label="showDetails ? 'Hide Details' : 'Show Details'"
        color="primary"
        @click="showDetails = !showDetails"
      />
      <AppButton label="Remove Inactive" color="danger" @click="removeInactive" />
      <AppButton label="Reset" color="secondary" @click="reset" />
      <span class="ml-auto text-sm text-slate-500">
        Showing {{ visibleStudents.length }} of {{ students.length }} students
      </span>
    </section>

    <!-- Selected student -->
    <p
      v-if="selectedStudent"
      class="rounded-xl bg-blue-50 px-4 py-3 text-sm text-blue-800 ring-1 ring-blue-200"
      role="status"
    >
      Selected: <strong>{{ selectedStudent.name }}</strong> &middot; {{ selectedStudent.program }}
      &middot; {{ selectedStudent.studentId }}
    </p>

    <!-- Student grid -->
    <section v-if="visibleStudents.length" class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <StudentCard
        v-for="student in visibleStudents"
        :key="student.studentId"
        v-bind="student"
        :show-details="showDetails"
        @select="selectedId = $event"
      />
    </section>

    <p v-else class="rounded-2xl bg-white p-8 text-center text-slate-500 ring-1 ring-slate-200">
      No students match the current filter. Press <strong>Reset</strong> to restore the list.
    </p>
  </div>
</template>