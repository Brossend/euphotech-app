<template>
  <section id="cases" class="relative py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <h2 class="mb-6 text-3xl font-bold text-white md:text-5xl">
            Избранные кейсы
          </h2>
          <p class="max-w-xl text-white/60">
            Примеры систем и продуктов, которые мы разработали для стартапов и enterprise-компаний.
          </p>
        </div>

        <button
            class="flex items-center gap-2 font-medium text-[#6EE7FF] transition-colors hover:text-[#4F7CFF]"
            type="button"
        >
          Все проекты
          <Icon class="h-5 w-5" name="lucide:arrow-up-right"/>
        </button>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
            v-for="project in casesData"
            :key="project.slug"
            :to="`/cases/${project.slug}`"
            class="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111827] transition-all hover:border-white/20"
        >
          <div class="relative h-60 overflow-hidden">
            <div class="absolute inset-0 z-10 bg-gradient-to-t from-[#111827] to-transparent"/>
            <img
                :alt="project.title"
                :src="project.image"
                class="h-full w-full object-cover brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:brightness-100"
            >
          </div>

          <div class="relative z-20 -mt-10 flex flex-1 flex-col p-8">
            <h3 class="mb-3 text-2xl font-semibold text-white transition-colors group-hover:text-[#4F7CFF]">
              {{ project.title }}
            </h3>

            <p class="mb-6 flex-1 text-white/60">
              {{ project.desc }}
            </p>

            <div class="mt-auto flex flex-wrap gap-2">
              <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="rounded border border-white/5 bg-[#0B0F19] px-2.5 py-1 text-xs text-white/50"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const casesData = [
  {
    slug: 'fintech-dashboard',
    title: 'FinTech Dashboard',
    desc: 'Платформа для аналитики криптовалютных портфелей с интеграцией AI для прогнозирования.',
    tags: ['React', 'Node.js', 'AI', 'WebSockets'],
    image: 'https://images.unsplash.com/photo-1627827963179-a8bb14121eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBkYXNoYm9hcmQlMjBVSXxlbnwxfHx8fDE3NzMwMDQ2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    slug: 'neurohealth-app',
    title: 'NeuroHealth App',
    desc: 'Мобильное приложение для отслеживания здоровья с использованием машинного обучения.',
    tags: ['Swift', 'Kotlin', 'Python Backend'],
    image: 'https://images.unsplash.com/photo-1651804805680-3565ef7807f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFyayUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NzI5NzI1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    slug: 'logistics-saas',
    title: 'Logistics SaaS',
    desc: 'Сложная система управления логистикой (ERP) для международных перевозок.',
    tags: ['Next.js', 'Go', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzAwNDY2NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
]
</script>

<style lang="scss" scoped/>