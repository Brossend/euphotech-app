<template>
  <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div
        v-if="isOpen"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
    >
      <div
          class="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-sm"
          @click="closeModal"
      />

      <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-5 scale-95 opacity-0"
          enter-to-class="translate-y-0 scale-100 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 scale-100 opacity-100"
          leave-to-class="translate-y-5 scale-95 opacity-0"
          appear
      >
        <div
            class="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#111827] p-8 shadow-2xl"
        >
          <div class="pointer-events-none absolute right-0 top-0 h-[200px] w-[200px] rounded-full bg-[#4F7CFF] opacity-20 blur-[80px]" />
          <div class="pointer-events-none absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-[#8B5CF6] opacity-20 blur-[80px]" />

          <button
              class="absolute right-6 top-6 z-120 p-1 text-white/50 transition-colors hover:text-white"
              type="button"
              @click="closeModal"
          >
            <Icon name="lucide:x" class="h-6 w-6" />
          </button>

          <div class="relative z-10">
            <h3 class="mb-2 text-2xl font-bold text-white">
              Обсудить проект
            </h3>
            <p class="mb-6 text-sm text-white/60">
              Оставьте заявку, и мы свяжемся с вами в течение часа для обсуждения деталей.
            </p>

            <form class="space-y-5" @submit.prevent="onSubmit">
              <div>
                <label class="mb-1.5 block text-sm font-medium text-white/80">
                  Ваше имя
                </label>
                <input
                    v-model="form.name"
                    type="text"
                    placeholder="Александр"
                    class="w-full rounded-xl border border-white/10 bg-[#0B0F19]/50 px-4 py-3 text-white placeholder-white/30 transition-all focus:border-[#4F7CFF] focus:outline-none focus:ring-1 focus:ring-[#4F7CFF]"
                >
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-white/80">
                  Telegram или Email
                </label>
                <input
                    v-model="form.contact"
                    type="text"
                    placeholder="@username или почта"
                    class="w-full rounded-xl border border-white/10 bg-[#0B0F19]/50 px-4 py-3 text-white placeholder-white/30 transition-all focus:border-[#4F7CFF] focus:outline-none focus:ring-1 focus:ring-[#4F7CFF]"
                >
              </div>

              <div>
                <label class="mb-1.5 block text-sm font-medium text-white/80">
                  Кратко о задаче
                </label>
                <textarea
                    v-model="form.task"
                    rows="4"
                    placeholder="Опишите, какой продукт вы хотите разработать..."
                    class="w-full resize-none rounded-xl border border-white/10 bg-[#0B0F19]/50 px-4 py-3 text-white placeholder-white/30 transition-all focus:border-[#4F7CFF] focus:outline-none focus:ring-1 focus:ring-[#4F7CFF]"
                />
              </div>

              <button
                  type="submit"
                  class="mt-2 w-full rounded-xl bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] py-4 font-medium text-white transition-all hover:shadow-[0_0_20px_-5px_#4F7CFF]"
              >
                Отправить заявку
              </button>
            </form>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { isOpen, closeModal } = useContactModal()

const form = reactive({
  name: '',
  contact: '',
  task: '',
})

const onSubmit = () => {
  closeModal()
}
</script>

<style scoped lang="scss" />