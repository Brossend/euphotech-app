<template>
  <section class="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
    <div
        class="absolute left-1/4 top-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-[#4F7CFF] opacity-20 blur-[120px] mix-blend-screen"
    />
    <div
        class="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[#8B5CF6] opacity-20 blur-[150px] mix-blend-screen"
    />

    <div
        class="absolute inset-0 z-0 opacity-[0.03]"
        style="
        background-image:
          linear-gradient(to right, white 1px, transparent 1px),
          linear-gradient(to bottom, white 1px, transparent 1px);
        background-size: 40px 40px;
      "
    />

    <div class="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
      <div
          class="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-[#6EE7FF] shadow-[0_0_15px_-3px_rgba(110,231,255,0.2)]"
      >
        <Icon name="lucide:sparkles" class="h-4 w-4" />
        <span>Инновации в разработке</span>
      </div>

      <h1 class="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
        Разрабатываем <br class="hidden md:block">
        <span class="bg-gradient-to-r from-[#4F7CFF] via-[#8B5CF6] to-[#6EE7FF] bg-clip-text text-transparent">
          цифровые продукты
        </span>
        <br class="hidden md:block">
        для бизнеса
      </h1>

      <p class="mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
        Создаем веб-сервисы, мобильные приложения и сложные IT-системы под задачи вашего бизнеса.
        Мы переводим инновации в работающий код.
      </p>

      <div class="flex flex-col items-center gap-4 sm:flex-row">
        <button
            type="button"
            class="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] px-8 py-4 font-medium text-white transition-all hover:shadow-[0_0_30px_-5px_#4F7CFF] sm:w-auto"
            @click="openModal"
        >
          Обсудить проект
          <Icon name="lucide:arrow-right" class="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" />
        </button>

        <NuxtLink
            to="/public#cases"
            class="flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition-all hover:bg-white/10 sm:w-auto"
        >
          Посмотреть кейсы
        </NuxtLink>
      </div>

      <div
          class="relative mt-20 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 shadow-2xl backdrop-blur-xl"
      >
        <div class="flex items-center border-b border-white/10 bg-white/5 px-4 py-3">
          <div class="flex gap-2">
            <div class="h-3 w-3 rounded-full bg-red-500/80" />
            <div class="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div class="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div class="mx-auto text-xs font-mono text-white/40">
            euphotech-deploy.sh
          </div>
        </div>

        <div class="overflow-x-auto p-6 text-left font-mono text-sm text-white/70">
          <p>
            <span class="text-[#8B5CF6]">import</span>
            <span class="text-[#6EE7FF]"> {'{ Innovation }'} </span>
            <span class="text-[#8B5CF6]">from</span>
            <span class="text-[#4F7CFF]"> '@euphotech/core'</span>;
          </p>

          <p class="mt-2">
            <span class="text-[#8B5CF6]">const</span> project =
            <span class="text-[#8B5CF6]"> new</span>
            <span class="text-[#6EE7FF]"> Innovation</span>();
          </p>

          <p class="mt-2">
            project.<span class="text-[#4F7CFF]">build</span>({`{`}
          </p>
          <p class="pl-4">
            stack: [
            <span class="text-[#4F7CFF]">'Nuxt'</span>,
            <span class="text-[#4F7CFF]">'Node.js'</span>,
            <span class="text-[#4F7CFF]">'AI'</span>
            ],
          </p>
          <p class="pl-4">
            quality: <span class="text-[#8B5CF6]">true</span>,
          </p>
          <p class="pl-4">
            scale: <span class="text-[#4F7CFF]">'global'</span>
          </p>
          <p>{`}`});</p>

          <p class="mt-2 text-[#6EE7FF]/70">
            // &gt; Deploying to production...
          </p>
          <p class="mt-1 text-green-400">
            // &gt; Success! All systems online.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { openModal } = useContactModal()
</script>

<style lang="scss" scoped />