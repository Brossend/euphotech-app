<template>
  <section id="tech" class="relative border-t border-white/5 bg-[#0B0F19] py-24">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex flex-col items-start gap-16 md:flex-row">
        <div class="md:w-1/3">
          <h2 class="mb-6 text-3xl font-bold text-white md:text-5xl">
            Технологии
          </h2>
          <p class="leading-relaxed text-white/60">
            Мы используем передовой стек технологий, чтобы создавать надежные и масштабируемые решения.
            Выбор инструмента всегда зависит от задачи вашего бизнеса.
          </p>
        </div>

        <div class="grid w-full grid-cols-1 gap-8 md:w-2/3 sm:grid-cols-2">
          <div
              v-for="tech in technologies"
              :key="tech.category"
              class="rounded-2xl border border-white/5 bg-[#111827]/40 p-6"
          >
            <h3 class="mb-4 font-medium text-[#6EE7FF]">
              {{ tech.category }}
            </h3>

            <div class="flex flex-wrap gap-2">
              <span
                  v-for="tool in tech.tools"
                  :key="tool"
                  class="cursor-default rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 transition-colors hover:bg-white/10"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const technologies = [
  {category: 'Frontend', tools: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS', 'Redux']},
  {category: 'Backend', tools: ['Node.js', 'Python', 'Go', 'NestJS', 'PostgreSQL', 'Redis']},
  {category: 'Mobile', tools: ['Swift', 'Kotlin', 'Flutter', 'React Native']},
  {category: 'DevOps & AI', tools: ['Docker', 'Kubernetes', 'AWS', 'TensorFlow', 'OpenAI API']},
]
</script>

<style lang="scss" scoped/>