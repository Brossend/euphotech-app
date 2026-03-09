<template>
  <NuxtLayout name="default">
    <div
        class="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-6 pb-12 pt-24"
    >
      <div
          class="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4F7CFF] opacity-20 blur-[150px] mix-blend-screen"
      />

      <div class="relative z-10 w-full max-w-2xl">
        <div
            class="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 shadow-2xl backdrop-blur-xl"
        >
          <div class="flex items-center border-b border-white/10 bg-white/5 px-4 py-3">
            <div class="flex gap-2">
              <div class="h-3 w-3 rounded-full bg-red-500/80"/>
              <div class="h-3 w-3 rounded-full bg-yellow-500/80"/>
              <div class="h-3 w-3 rounded-full bg-green-500/80"/>
            </div>

            <div class="mx-auto flex items-center gap-2 font-mono text-xs text-white/40">
              <Icon class="h-3 w-3" name="lucide:terminal"/>
              euphotech-server.log
            </div>
          </div>

          <div class="overflow-x-auto p-6 font-mono text-sm text-white/70 md:p-8 md:text-base">
            <p>
              <span class="text-[#8B5CF6]">euphotech@production</span>
              <span class="text-white/40">:~$</span>
              GET {{ route.fullPath }}
            </p>

            <p class="mt-2 text-red-400">
              [Error]: {{ statusCode }} - {{ errorMessage }}
            </p>

            <p class="mt-2 text-[#6EE7FF]">
              [System]: Analyzing root cause...
            </p>

            <p class="mt-1 text-white/50">
              &gt; Кажется, наш Техлид удалил эту страницу, потому что она была недостаточно технологичной.
            </p>

            <p class="mt-4 text-[#8B5CF6]">
              [Suggestion]:
            </p>

            <p class="mt-1 pl-4">
              - Проверьте URL на опечатки
            </p>
            <p class="pl-4">
              - Откатитесь на стабильный коммит (Вернитесь на главную)
            </p>

            <p class="mt-6 flex items-center gap-2">
              <span class="text-[#8B5CF6]">euphotech@production</span>
              <span class="text-white/40">:~$</span>
              <span class="block h-5 w-2.5 animate-pulse bg-white/70"/>
            </p>
          </div>
        </div>

        <div class="flex flex-col items-center justify-center text-center">
          <h1 class="mb-4 text-3xl font-bold text-white md:text-4xl">
            Страница ушла в
            <span class="bg-gradient-to-r from-[#4F7CFF] to-[#6EE7FF] bg-clip-text text-transparent">
            rollback
          </span>
          </h1>

          <p class="mb-8 max-w-md text-white/60">
            Похоже, этот маршрут существует только в параллельной вселенной или еще не прошел код-ревью.
          </p>

          <button
              class="group flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)] transition-all hover:bg-white/10 hover:shadow-[0_0_20px_-3px_rgba(255,255,255,0.2)]"
              type="button"
              @click="handleClearError"
          >
            <Icon class="h-[18px] w-[18px]" name="lucide:house"/>
            Сделать git checkout main
            <Icon
                class="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                name="lucide:arrow-right"
            />
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
const props = defineProps<{
  error?: {
    statusCode?: number
    statusMessage?: string
    message?: string
  }
}>()

const route = useRoute()

const statusCode = computed(() => props.error?.statusCode ?? 500)
const errorMessage = computed(() => {
  return props.error?.statusMessage || props.error?.message || 'Unexpected error'
})

const handleClearError = () => clearError({redirect: '/'})
</script>

<style lang="scss" scoped/>