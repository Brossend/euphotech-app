// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/styles/global.scss'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './assets/icons',
      },
    ],
  },
  i18n: {
    defaultLocale: 'ru',
    locales: [
      { code: 'ru', name: 'Russian', language: 'ru-RU', file: 'ru.json' },
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' }
    ],
  },
  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/i18n'
  ]
})