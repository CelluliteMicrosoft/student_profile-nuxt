<script setup lang="ts">
useSeoMeta({
  title: 'Student Portal | Overview',
  description: 'Announcements, academic guidelines, and featured students.',
})

const students = ref(useStudents())
const activeOnly = ref(false)

const featured = computed(() => {
  const list = activeOnly.value ? students.value.filter((s) => s.status === 'Active') : students.value
  return list.slice(0, 3)
})

function goToDirectory() {
  navigateTo('/students')
}

function resetFeatured() {
  activeOnly.value = false
}
</script>

<template>
  <div class="space-y-12">
    <!-- Hero -->
    <section class="rounded-3xl bg-white px-6 py-12 text-center shadow-sm ring-1 ring-slate-200 sm:px-12">
      <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        Student Information Portal
      </h1>
      <p class="mx-auto mt-3 max-w-2xl text-slate-600">
        Browse student records, read academic announcements, and stay up to date with
        important guidelines, all in one place.
      </p>
      <div class="mt-6 flex justify-center">
        <AppButton label="View Directory" color="primary" @click="goToDirectory" />
      </div>
    </section>

    <!-- Info cards -->
    <section aria-labelledby="overview-heading">
      <h2 id="overview-heading" class="mb-4 text-xl font-bold text-slate-900">Portal Overview</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <InfoCard
          icon="📢"
          title="Announcements"
          description="Midterm examinations begin next week. Check your course schedules and room assignments."
        />
        <InfoCard
          icon="📘"
          title="Academic Guidelines"
          description="Students must maintain a minimum attendance of 80% to remain eligible for final exams."
        />
        <InfoCard
          icon="🗓️"
          title="Enrollment Period"
          description="Enrollment for the next semester opens soon. Settle all balances before registering."
        />
      </div>
    </section>

    <!-- Featured students -->
    <section aria-labelledby="featured-heading">
      <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 id="featured-heading" class="text-xl font-bold text-slate-900">Featured Students</h2>
        <div class="flex gap-2">
          <AppButton label="Filter Active" color="success" @click="activeOnly = true" />
          <AppButton label="Reset" color="secondary" @click="resetFeatured" />
        </div>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StudentCard v-for="student in featured" :key="student.studentId" v-bind="student" />
      </div>
    </section>
  </div>
</template>