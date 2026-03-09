<template>
  <section id="services" class="relative z-10 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-16 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white md:text-5xl">
          Экспертиза и Услуги
        </h2>
        <p class="mx-auto max-w-2xl text-white/60">
          Мы покрываем полный цикл разработки — от бизнес-анализа до поддержки и масштабирования готового продукта.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
            v-for="service in services"
            :key="service.title"
            class="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111827]/50 p-8 backdrop-blur-sm transition-all hover:border-white/15 hover:bg-[#111827]/80"
        >
          <div
              class="absolute inset-0 bg-gradient-to-br from-[#4F7CFF]/0 to-[#8B5CF6]/0 transition-all duration-500 group-hover:from-[#4F7CFF]/5 group-hover:to-[#8B5CF6]/5"
          />

          <div class="relative z-10">
            <div
                class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 transition-transform group-hover:scale-110"
            >
              <Icon :name="service.icon" class="h-6 w-6" :class="service.iconClass" />
            </div>

            <h3 class="mb-3 text-xl font-semibold text-white">
              {{ service.title }}
            </h3>

            <p class="text-sm leading-relaxed text-white/60">
              {{ service.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: 'lucide:code-2',
    iconClass: 'text-[#4F7CFF]',
    title: 'Web-разработка',
    desc: 'Создаем современные, быстрые и масштабируемые веб-приложения (SaaS, ERP, CRM) с использованием React и Node.js.',
  },
  {
    icon: 'lucide:smartphone',
    iconClass: 'text-[#8B5CF6]',
    title: 'Мобильные приложения',
    desc: 'Нативная и кроссплатформенная разработка для iOS и Android с высоким качеством пользовательского опыта.',
  },
  {
    icon: 'lucide:database',
    iconClass: 'text-[#6EE7FF]',
    title: 'Backend & Архитектура',
    desc: 'Проектирование высоконагруженных API и микросервисных архитектур, обеспечивающих стабильность и скорость.',
  },
  {
    icon: 'lucide:cpu',
    iconClass: 'text-[#4F7CFF]',
    title: 'AI & Machine Learning',
    desc: 'Интеграция искусственного интеллекта, LLM моделей и нейросетей для автоматизации бизнес-процессов.',
  },
  {
    icon: 'lucide:layout-template',
    iconClass: 'text-[#8B5CF6]',
    title: 'UX/UI Дизайн',
    desc: 'Проектирование удобных, минималистичных и эстетичных интерфейсов с фокусом на пользовательский опыт.',
  },
  {
    icon: 'lucide:shield-check',
    iconClass: 'text-[#6EE7FF]',
    title: 'DevOps & Безопасность',
    desc: 'Настройка CI/CD, облачной инфраструктуры и аудит безопасности ваших цифровых продуктов.',
  },
]
</script>

<style scoped lang="scss" />