<template>
  <div class="pb-24 pt-24">
    <section class="mx-auto max-w-4xl px-6 pb-16 pt-12">
      <NuxtLink
          class="mb-10 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
          to="/blog"
      >
        <Icon class="h-4 w-4" name="lucide:arrow-left"/>
        Назад в блог
      </NuxtLink>

      <div>
        <div class="mb-6 flex items-center gap-3">
          <span
              class="rounded-md border border-[#4F7CFF]/20 bg-[#4F7CFF]/10 px-3 py-1 text-sm font-medium text-[#4F7CFF]"
          >
            {{ post.category }}
          </span>

          <span class="flex items-center gap-1 text-sm text-white/40">
            <Icon class="h-[14px] w-[14px]" name="lucide:clock-3"/>
            6 мин чтения
          </span>
        </div>

        <h1 class="mb-8 text-3xl font-bold leading-tight text-white md:text-5xl">
          {{ post.title }}
        </h1>

        <div class="mb-12 flex flex-wrap items-center justify-between gap-4 border-y border-white/10 py-6">
          <div class="flex items-center gap-3">
            <div
                class="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-tr from-[#4F7CFF] to-[#8B5CF6]"
            >
              <Icon class="h-5 w-5 text-white" name="lucide:user"/>
            </div>

            <div>
              <div class="text-sm font-medium text-white">
                Alexey Ivanov
              </div>
              <div class="text-xs text-white/50">
                {{ post.date }} • Tech Lead
              </div>
            </div>
          </div>

          <button
              class="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
              type="button"
          >
            <Icon class="h-4 w-4" name="lucide:share-2"/>
            Поделиться
          </button>
        </div>
      </div>
    </section>

    <section class="mb-16 px-6">
      <div class="mx-auto h-[300px] max-w-5xl overflow-hidden rounded-3xl border border-white/10 md:h-[500px]">
        <img
            :alt="post.title"
            :src="post.image"
            class="h-full w-full object-cover"
        >
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-6">
      <div class="max-w-none text-white/70 prose prose-invert prose-lg">
        <p class="lead mb-8 text-xl text-white/90">
          Современная архитектура приложений требует гибкости, отказоустойчивости и возможности
          быстрого масштабирования. В этой статье мы разберем основные паттерны, которые актуальны
          для разработки enterprise-решений.
        </p>

        <h2 class="mb-6 mt-12 text-2xl font-bold text-white">
          Эволюция архитектуры
        </h2>
        <p class="mb-6">
          С переходом от монолитных систем к микросервисам индустрия получила невероятный буст
          в производительности команд. Однако, микросервисы принесли с собой сложность инфраструктуры.
          Сейчас мы наблюдаем тренд на «модульные монолиты», которые позволяют сохранить простоту
          развертывания, оставляя код разделенным по доменам.
        </p>

        <div class="my-10 rounded-2xl border border-[#4F7CFF]/20 border-l-4 border-l-[#4F7CFF] bg-[#111827] p-6">
          <p class="m-0 italic text-white/80">
            «Выбирайте микросервисы не потому что это модно, а когда боль от координации команд
            превышает боль от поддержки распределенной системы.»
          </p>
        </div>

        <h2 class="mb-6 mt-12 text-2xl font-bold text-white">
          Ключевые паттерны масштабирования
        </h2>

        <ul class="mb-8 list-disc space-y-4 pl-6">
          <li>
            <strong class="text-white">CQRS (Command Query Responsibility Segregation)</strong>
            — разделение моделей чтения и записи для независимого масштабирования.
          </li>
          <li>
            <strong class="text-white">Event-Driven Architecture</strong>
            — асинхронное взаимодействие между сервисами через брокеры сообщений
            (Kafka, RabbitMQ).
          </li>
          <li>
            <strong class="text-white">Service Mesh</strong>
            — управление сетевым взаимодействием, observability и безопасностью на уровне инфраструктуры.
          </li>
        </ul>

        <p class="mb-6">
          Интеграция этих паттернов в сочетании с оркестрацией контейнеров (Kubernetes)
          и грамотно выстроенным пайплайном CI/CD позволяет компаниям деплоить изменения
          десятки раз в день без даунтайма.
        </p>

        <h2 class="mb-6 mt-12 text-2xl font-bold text-white">
          Заключение
        </h2>
        <p class="mb-6">
          Идеальной архитектуры не существует, есть только компромиссы. Наш опыт в Euphotech
          показывает, что успех проекта на 80% зависит от глубокого понимания бизнес-требований
          и лишь на 20% от выбранного технологического стека.
        </p>
      </div>

      <div class="mt-16 flex items-center gap-4 border-t border-white/10 pt-8">
        <div class="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#111827]">
          <Icon class="h-6 w-6 text-[#4F7CFF]" name="lucide:user"/>
        </div>

        <div>
          <div class="font-semibold text-white">
            Alexey Ivanov
          </div>
          <div class="text-sm text-white/50">
            Tech Lead & Solutions Architect
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

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

const post = computed(() => {
  return blogPosts.find(item => item.slug === slug.value) || blogPosts[0]
})
</script>

<style lang="scss" scoped/>