<template>
  <div class="mx-auto max-w-7xl px-6 pb-24 pt-32">
    <div class="mb-16 md:mb-24">
      <h1 class="mb-6 text-4xl font-bold text-white md:text-6xl">
        Блог и
        <span class="bg-gradient-to-r from-[#4F7CFF] to-[#6EE7FF] bg-clip-text text-transparent">
          Инсайты
        </span>
      </h1>

      <p class="max-w-2xl text-xl text-white/60">
        Делимся опытом разработки, дизайна и управления сложными IT-продуктами.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
          v-for="post in blogPosts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="group flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/5 bg-[#111827] transition-all hover:border-white/20"
      >
        <div class="relative h-56 overflow-hidden">
          <div class="absolute inset-0 z-10 bg-[#0B0F19]/20 transition-opacity group-hover:opacity-0"/>
          <img
              :alt="post.title"
              :src="post.image"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          >
        </div>

        <div class="flex flex-1 flex-col p-8">
          <div class="mb-4 flex items-center gap-3">
            <span
                class="rounded-md border border-[#4F7CFF]/20 bg-[#4F7CFF]/10 px-2.5 py-1 text-xs font-medium text-[#4F7CFF]"
            >
              {{ post.category }}
            </span>
            <span class="text-xs text-white/40">
              {{ post.date }}
            </span>
          </div>

          <h3 class="text-xl font-semibold leading-snug text-white transition-colors group-hover:text-[#6EE7FF]">
            {{ post.title }}
          </h3>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const blogPosts = [
  {
    slug: 'highload-architecture-2026',
    title: 'Архитектура высоконагруженных систем в 2026 году: Тренды и паттерны',
    date: '12 Марта 2026',
    category: 'Backend',
    image:
        'https://images.unsplash.com/photo-1762279389042-9439bfb6c155?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzAwNDY2NHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    slug: 'ai-ux-design-process',
    title: 'Как AI меняет процесс UX/UI дизайна и разработку прототипов',
    date: '08 Марта 2026',
    category: 'Design',
    image:
        'https://images.unsplash.com/photo-1627827963179-a8bb14121eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBkYXNoYm9hcmQlMjBVSXxlbnwxfHx8fDE3NzMwMDQ2NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    slug: 'monolith-to-microservices',
    title: 'Миграция монолита на микросервисы: наш опыт и лучшие практики',
    date: '25 Февраля 2026',
    category: 'Engineering',
    image:
        'https://images.unsplash.com/photo-1651804805680-3565ef7807f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFyayUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NzI5NzI1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
]
</script>

<style lang="scss" scoped/>