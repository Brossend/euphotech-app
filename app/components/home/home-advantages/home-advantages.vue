<template>
  <section class="relative border-t border-white/5 py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div
          class="relative overflow-hidden rounded-3xl border border-white/5 bg-[#111827]/60 p-10 backdrop-blur-xl md:p-16"
      >
        <div class="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[#4F7CFF] opacity-10 blur-[100px]"/>
        <div class="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#8B5CF6] opacity-10 blur-[100px]"/>

        <div class="relative z-10 flex flex-col gap-12 md:flex-row">
          <div class="md:w-1/2">
            <h2 class="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
              Почему выбирают
              <span class="bg-gradient-to-r from-[#4F7CFF] to-[#6EE7FF] bg-clip-text text-transparent">
                Euphotech
              </span>
            </h2>

            <p class="mb-8 text-lg leading-relaxed text-white/60">
              Мы не просто пишем код, мы создаем инженерные шедевры, которые масштабируются вместе с вашим бизнесом.
              Премиальное качество и инновационный подход — наше главное отличие.
            </p>
          </div>

          <div class="md:w-1/2">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div
                  v-for="advantage in advantages"
                  :key="advantage"
                  class="flex items-start gap-3 rounded-xl border border-white/5 bg-white/5 p-4 transition-colors hover:border-white/10"
              >
                <Icon class="mt-0.5 h-5 w-5 shrink-0 text-[#8B5CF6]" name="lucide:check-circle-2"/>
                <span class="text-sm text-white/80">
                  {{ advantage }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const advantages = [
  'Современный стек (React, Next.js, Node.js)',
  'Фокус на бизнес-показатели',
  'Чистый код и микросервисная архитектура',
  'Высокий уровень безопасности данных',
  'Прозрачность на каждом этапе (Agile/Scrum)',
  'Глубокая экспертиза в UI/UX',
]
</script>

<style lang="scss" scoped/>