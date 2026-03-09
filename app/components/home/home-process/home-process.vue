<template>
  <section
      id="process"
      class="relative border-t border-white/5 bg-gradient-to-b from-[#0B0F19] to-[#111827]/50 py-24"
  >
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-20 text-center">
        <h2 class="mb-6 text-3xl font-bold text-white md:text-5xl">
          Как мы работаем
        </h2>
        <p class="mx-auto max-w-2xl text-white/60">
          Прозрачный и понятный процесс разработки, который позволяет выпускать продукты точно в срок.
        </p>
      </div>

      <div class="relative grid grid-cols-1 gap-8 md:grid-cols-4">
        <div
            class="absolute left-10 right-10 top-12 hidden h-[1px] bg-gradient-to-r from-[#4F7CFF]/0 via-[#8B5CF6]/50 to-[#6EE7FF]/0 md:block"
        />

        <div
            v-for="step in steps"
            :key="step.title"
            class="relative"
        >
          <div
              class="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-[#0B0F19] text-[#6EE7FF] shadow-[0_0_20px_-5px_rgba(110,231,255,0.2)] md:mx-0"
          >
            <Icon :name="step.icon" class="h-6 w-6"/>
          </div>

          <h3 class="mb-3 text-center text-xl font-semibold text-white md:text-left">
            {{ step.title }}
          </h3>

          <p class="text-center text-sm leading-relaxed text-white/60 md:text-left">
            {{ step.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const steps = [
  {
    icon: 'lucide:search',
    title: '1. Аналитика и Архитектура',
    desc: 'Анализируем бизнес-требования, составляем ТЗ и проектируем базу данных и архитектуру.',
  },
  {
    icon: 'lucide:pen-tool',
    title: '2. UX/UI Дизайн',
    desc: 'Создаем кликабельные прототипы и современный дизайн, ориентированный на конверсию и удобство.',
  },
  {
    icon: 'lucide:braces',
    title: '3. Разработка',
    desc: 'Пишем чистый, тестируемый код. Настраиваем CI/CD и прозрачно ведем процесс в трекерах.',
  },
  {
    icon: 'lucide:rocket',
    title: '4. Релиз и Поддержка',
    desc: 'Выкатываем продукт на production-сервер, проводим релиз и оказываем долгосрочную поддержку.',
  },
]
</script>

<style lang="scss" scoped/>