<template>
  <footer class="border-t border-white/10 bg-[#0B0F19] pb-8 pt-16">
    <div class="mx-auto max-w-7xl px-6">
      <div class="mb-16 flex flex-col items-start justify-between gap-12 md:flex-row">
        <div class="max-w-xs">
          <NuxtLink class="mb-6 flex items-center gap-3" to="/">
            <Icon :name="logo" class="h-8 w-8 text-white"/>
            <span class="text-xl font-bold tracking-wider text-white">
              EUPHOTECH
            </span>
          </NuxtLink>

          <p class="text-sm leading-relaxed text-white/50">
            Разработка передовых цифровых продуктов для бизнеса. Инновации,
            архитектура и премиальный дизайн.
          </p>
        </div>

        <div class="flex flex-wrap gap-16">
          <div>
            <h4 class="mb-4 font-medium text-white">Навигация</h4>
            <ul class="space-y-3">
              <li>
                <NuxtLink class="text-sm text-white/50 transition-colors hover:text-white" to="/about">
                  О нас
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-sm text-white/50 transition-colors hover:text-white" to="/#services">
                  Услуги
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-sm text-white/50 transition-colors hover:text-white" to="/#tech">
                  Технологии
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-sm text-white/50 transition-colors hover:text-white" to="/#cases">
                  Кейсы
                </NuxtLink>
              </li>
              <li>
                <NuxtLink class="text-sm text-white/50 transition-colors hover:text-white" to="/blog">
                  Блог
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="mb-4 font-medium text-white">Контакты</h4>
            <ul class="space-y-3">
              <li>
                <a
                    class="text-sm text-white/50 transition-colors hover:text-[#6EE7FF]"
                    href="mailto:hello@euphotech.io"
                >
                  hello@euphotech.io
                </a>
              </li>
              <li>
                <a
                    class="text-sm text-white/50 transition-colors hover:text-[#6EE7FF]"
                    href="https://t.me/euphotech"
                    rel="noreferrer"
                    target="_blank"
                >
                  Telegram: @euphotech
                </a>
              </li>
              <li>
                <span class="text-sm text-white/50">Москва, Сити</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
        <p class="text-sm text-white/40">
          © {{ currentYear }} Euphotech. Все права защищены.
        </p>

        <div class="flex gap-6 text-sm text-white/40">
          <NuxtLink class="transition-colors hover:text-white" to="/privacy">
            Политика конфиденциальности
          </NuxtLink>
          <NuxtLink class="transition-colors hover:text-white" to="/terms">
            Условия использования
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
const props = defineProps<{
  logo?: string
}>()

const logo = computed(() => props.logo ?? 'icons:logo')

const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped/>