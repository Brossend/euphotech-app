# Euphotech App

![Nuxt](https://img.shields.io/badge/Nuxt-4.x-00DC82?logo=nuxt.js&logoColor=white)
![Vue](https://img.shields.io/badge/Vue-3.x-4FC08D?logo=vuedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.x-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Status](https://img.shields.io/badge/status-in_development-orange)
![License](https://img.shields.io/badge/license-private-red)

Современный сайт студии **Euphotech**, собранный на **Nuxt 4**, **Vue 3** и **Tailwind CSS**.

Проект представляет собой маркетинговый сайт / digital studio website с акцентом на:

- премиальный dark UI
- сервисные страницы
- блог
- кейсы
- кастомную 404-страницу
- масштабируемую структуру для дальнейшего развития

## Что уже есть

- Главная страница с секциями:
    - Hero
    - Services
    - Tech Stack
    - Cases
    - Process
    - Advantages
    - CTA
- Страницы:
    - About
    - Blog
    - Blog Detail (`/blog/[slug]`)
    - Privacy
    - Terms
    - Case Detail (`/cases/[slug]`)
- Глобальный layout
- Модальное окно для обсуждения проекта
- Error page / 404
- Иконки через `@nuxt/icon`
- Tailwind-стилизация
- Структура, удобная для дальнейшего рефакторинга

## Технологии

- Nuxt 4
- Vue 3
- TypeScript
- Tailwind CSS
- Figma AI

## Структура

```bash
app/
├─ app.vue
├─ error.vue
├─ layouts/
├─ pages/
│  ├─ index.vue
│  ├─ about.vue
│  ├─ privacy.vue
│  ├─ terms.vue
│  ├─ blog/
│  │  ├─ index.vue
│  │  └─ [slug].vue
│  └─ cases/
│     └─ [slug].vue
├─ components/
│  ├─ home/
│  ├─ layout/
│  └─ modals/
├─ composables/
├─ data/
└─ assets/
```

## Статус

Проект находится в стадии активной разработки.  
Сейчас уже собрана сильная базовая архитектура и основная UI-структура, дальше планируется:

- рефакторинг компонентов
- вынос данных в отдельные модули
- улучшение SEO
- анимации и микроинтеракции
- подключение формы обратной связи
- наполнение реальными кейсами и статьями
- интеграция с backend

## Запуск проекта

```bash
npm install
npm run dev
```

## Планы

- SSR/SEO доработка
- CMS или файловый контент для блога
- реальная интеграция формы заявок
- улучшение accessibility
- оптимизация изображений
- production-ready deployment
- интеграция с backend
