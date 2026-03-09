<template>
  <div class="pb-24 pt-24">
    <section class="relative overflow-hidden px-6 pb-16 pt-12">
      <div
          class="absolute right-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#4F7CFF] opacity-20 blur-[150px] mix-blend-screen"
      />

      <div class="relative z-10 mx-auto max-w-4xl">
        <NuxtLink
            class="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
            to="/#cases"
        >
          <Icon class="h-4 w-4" name="lucide:arrow-left"/>
          Назад к кейсам
        </NuxtLink>

        <div>
          <div class="mb-6 flex flex-wrap gap-2">
            <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80"
            >
              {{ tag }}
            </span>
          </div>

          <h1 class="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            {{ project.title }}
          </h1>

          <p class="max-w-2xl text-xl leading-relaxed text-white/60">
            {{ project.desc }}
          </p>
        </div>
      </div>
    </section>

    <section class="mb-24 px-6">
      <div
          class="relative mx-auto h-[400px] max-w-6xl overflow-hidden rounded-3xl border border-white/10 md:h-[600px]"
      >
        <img
            :alt="project.title"
            :src="project.image"
            class="h-full w-full object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"/>
      </div>
    </section>

    <section class="mx-auto max-w-4xl space-y-24 px-6">
      <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h3 class="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
            <Icon class="h-6 w-6 text-[#6EE7FF]" name="lucide:activity"/>
            Задача
          </h3>
          <p class="leading-relaxed text-white/60">
            Клиенту требовалась масштабируемая платформа, способная выдерживать высокие нагрузки
            при обработке данных в реальном времени. Старая система не справлялась с объемом
            транзакций и имела устаревший интерфейс.
          </p>
        </div>

        <div>
          <h3 class="mb-4 flex items-center gap-3 text-2xl font-bold text-white">
            <Icon class="h-6 w-6 text-[#8B5CF6]" name="lucide:layout-template"/>
            Решение
          </h3>
          <p class="leading-relaxed text-white/60">
            Мы спроектировали микросервисную архитектуру, переработали UI/UX с фокусом
            на минимализм и внедрили современные фреймворки для обеспечения максимальной
            производительности и безопасности.
          </p>
        </div>
      </div>

      <div
          class="grid grid-cols-1 gap-8 rounded-3xl border border-white/10 bg-[#111827]/60 p-10 text-center backdrop-blur-xl sm:grid-cols-3"
      >
        <div>
          <div class="mb-2 text-4xl font-bold text-[#6EE7FF]">
            3x
          </div>
          <div class="text-sm text-white/60">
            Ускорение загрузки
          </div>
        </div>

        <div>
          <div class="mb-2 text-4xl font-bold text-[#8B5CF6]">
            99.9%
          </div>
          <div class="text-sm text-white/60">
            Uptime системы
          </div>
        </div>

        <div>
          <div class="mb-2 text-4xl font-bold text-[#4F7CFF]">
            +45%
          </div>
          <div class="text-sm text-white/60">
            Рост конверсии
          </div>
        </div>
      </div>

      <div>
        <h3 class="mb-6 flex items-center gap-3 text-2xl font-bold text-white">
          <Icon class="h-6 w-6 text-[#4F7CFF]" name="lucide:database"/>
          Стек и особенности
        </h3>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div
              v-for="feature in features"
              :key="feature"
              class="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-4"
          >
            <Icon class="h-5 w-5 text-[#8B5CF6]" name="lucide:check-circle-2"/>
            <span class="text-white/80">
              {{ feature }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto mt-32 max-w-4xl px-6 text-center">
      <div
          class="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#111827] to-[#0B0F19] p-12"
      >
        <div
            class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div class="relative z-10">
          <h2 class="mb-4 text-3xl font-bold text-white">
            Впечатлены результатом?
          </h2>
          <p class="mx-auto mb-8 max-w-lg text-white/60">
            Мы можем разработать подобное решение и для вашего бизнеса. Давайте обсудим ваши задачи.
          </p>
          <NuxtLink
              class="inline-flex rounded-full bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-gray-200"
              to="/"
          >
            Обсудить проект
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

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

const project = computed(() => {
  return casesData.find(item => item.slug === slug.value) || casesData[0]
})

const features = [
  'Микросервисная архитектура',
  'Real-time WebSockets',
  'GraphQL API',
  'Сквозное шифрование',
  'CI/CD автоматизация',
  'Оптимизация рендеринга',
]
</script>

<style lang="scss" scoped/>