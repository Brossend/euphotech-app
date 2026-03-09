<template>
  <section class="relative overflow-hidden py-24">
    <div
        class="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#4F7CFF]/20 to-[#8B5CF6]/20 opacity-60 blur-[150px] mix-blend-screen"
    />

    <div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <div class="rounded-3xl border border-white/10 bg-[#111827]/40 p-12 backdrop-blur-xl md:p-20">
        <h2 class="mb-6 text-4xl font-bold text-white md:text-6xl">
          Готовы начать <br class="hidden md:block">
          <span class="bg-gradient-to-r from-[#4F7CFF] to-[#6EE7FF] bg-clip-text text-transparent">
            цифровую трансформацию?
          </span>
        </h2>

        <p class="mx-auto mb-10 max-w-2xl text-lg text-white/60">
          Оставьте заявку, и мы свяжемся с вами для обсуждения архитектуры, сроков и стоимости вашего будущего продукта.
        </p>

        <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
              class="group flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-gray-200 sm:w-auto"
              type="button"
              @click="openModal"
          >
            Начать проект
            <Icon class="h-[18px] w-[18px] transition-transform group-hover:translate-x-1" name="lucide:arrow-right"/>
          </button>

          <a
              class="flex w-full items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-4 font-medium text-white transition-all hover:bg-white/10 sm:w-auto"
              href="https://t.me/euphotech"
              rel="noreferrer"
              target="_blank"
          >
            Написать в Telegram
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const {openModal} = useContactModal()
</script>

<style lang="scss" scoped/>