<template>
  <nav
      :class="[
      'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
      isScrolled
        ? 'border-b border-white/5 bg-[#0B0F19]/80 backdrop-blur-xl'
        : 'bg-transparent',
    ]"
  >
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
      <NuxtLink to="/" class="group flex items-center gap-3">
        <Icon
            :name="logo"
            class="h-8 w-8 text-white transition-transform group-hover:scale-110"
        />
        <span class="text-xl font-bold tracking-wider text-white">
          EUPHOTECH
        </span>
      </NuxtLink>

      <div class="hidden items-center gap-8 md:flex">
        <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="text-sm font-medium text-white/60 transition-colors hover:text-white"
        >
          {{ link.name }}
        </NuxtLink>

        <button
            class="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_15px_-3px_rgba(79,124,255,0.3)] transition-all hover:bg-white/10 hover:shadow-[0_0_20px_-3px_rgba(79,124,255,0.5)]"
            type="button"
            @click="openModal"
        >
          Обсудить проект
        </button>
      </div>

      <button
          class="p-2 text-white/80 hover:text-white md:hidden"
          type="button"
          @click="isOpen = !isOpen"
      >
        <Icon
            :name="isOpen ? 'lucide:x' : 'lucide:menu'"
            class="h-6 w-6"
        />
      </button>
    </div>

    <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="-translate-y-2 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-2 opacity-0"
    >
      <div
          v-if="isOpen"
          class="absolute left-0 right-0 top-20 flex flex-col gap-4 border-b border-white/10 bg-[#0B0F19]/95 p-6 backdrop-blur-xl md:hidden"
      >
        <NuxtLink
            v-for="link in navLinks"
            :key="link.name"
            :to="link.href"
            class="text-lg font-medium text-white/80 hover:text-white"
        >
          {{ link.name }}
        </NuxtLink>

        <button
            class="mt-4 w-full rounded-full bg-gradient-to-r from-[#4F7CFF] to-[#8B5CF6] py-3 font-medium text-white"
            type="button"
            @click="openModal"
        >
          Обсудить проект
        </button>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  logo?: string
}>()

const logo = computed(() => props.logo ?? 'icons:logo')

const route = useRoute()
const { openModal } = useContactModal()

const isScrolled = ref(false)
const isOpen = ref(false)

const navLinks = [
  { name: 'О нас', href: '/about' },
  { name: 'Услуги', href: '/#services' },
  { name: 'Кейсы', href: '/#cases' },
  { name: 'Блог', href: '/blog' },
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

watch(
    () => [route.path, route.fullPath],
    () => {
      isOpen.value = false
    }
)

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped lang="scss" />