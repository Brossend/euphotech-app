<template>
  <div class="mx-auto max-w-7xl px-6 pb-24 pt-32">
    <div class="mb-16 text-center md:mb-24">
      <h1 class="mb-6 text-4xl font-bold text-white md:text-6xl">
        О
        <span class="bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] bg-clip-text text-transparent">
          нас
        </span>
      </h1>

      <p class="mx-auto max-w-2xl text-xl text-white/60">
        Мы — команда инженеров, архитекторов и стратегов, объединенных общей целью
        создавать инновационные и масштабируемые цифровые продукты для бизнеса.
      </p>
    </div>

    <div class="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div
          v-for="item in aboutItems"
          :key="item.title"
          class="rounded-2xl border border-white/5 bg-[#111827]/50 p-8 backdrop-blur-sm"
      >
        <div class="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          <Icon :class="item.iconClass" :name="item.icon" class="h-8 w-8"/>
        </div>

        <h3 class="mb-2 text-xl font-semibold text-white">
          {{ item.title }}
        </h3>

        <p class="text-white/60">
          {{ item.desc }}
        </p>
      </div>
    </div>

    <div class="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111827] p-10 md:p-16">
      <div
          class="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#4F7CFF] opacity-10 blur-[100px]"/>

      <div class="relative z-10 flex flex-col items-center gap-12 md:flex-row">
        <div class="md:w-1/2">
          <h2 class="mb-6 text-3xl font-bold text-white md:text-4xl">
            Наша миссия
          </h2>

          <p class="text-lg leading-relaxed text-white/60">
            Мы верим, что технологии должны решать реальные проблемы и быть простыми
            в использовании. Наша цель — трансформировать сложные бизнес-процессы
            в элегантные и эффективные цифровые решения.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-6 md:w-1/2">
          <div
              v-for="stat in stats"
              :key="stat.label"
              class="rounded-2xl border border-white/5 bg-white/5 p-6 text-center"
          >
            <div :class="stat.valueClass" class="mb-2 text-4xl font-bold">
              {{ stat.value }}
            </div>
            <div class="text-sm text-white/60">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const aboutItems = [
  {
    icon: 'lucide:users',
    iconClass: 'text-[#4F7CFF]',
    title: 'Команда',
    desc: 'Сильная in-house команда разработчиков и аналитиков.',
  },
  {
    icon: 'lucide:target',
    iconClass: 'text-[#8B5CF6]',
    title: 'Фокус',
    desc: 'Концентрируемся на бизнес-результате, а не только на коде.',
  },
  {
    icon: 'lucide:zap',
    iconClass: 'text-[#6EE7FF]',
    title: 'Скорость',
    desc: 'Быстрый time-to-market с Agile-подходом.',
  },
  {
    icon: 'lucide:shield-check',
    iconClass: 'text-[#4F7CFF]',
    title: 'Надежность',
    desc: 'Многоуровневое тестирование и высокие стандарты безопасности.',
  },
]

const stats = [
  {
    value: '5+',
    valueClass: 'text-[#6EE7FF]',
    label: 'Лет на рынке',
  },
  {
    value: '60+',
    valueClass: 'text-[#8B5CF6]',
    label: 'Завершенных проектов',
  },
  {
    value: '98%',
    valueClass: 'text-[#4F7CFF]',
    label: 'Довольных клиентов',
  },
  {
    value: '12+',
    valueClass: 'text-[#6EE7FF]',
    label: 'Стран присутствия',
  },
]
</script>

<style lang="scss" scoped/>