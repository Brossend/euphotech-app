<template>
  <div
      id="__div"
      class="flex flex-col bg-[#0B0F19] font-sans text-white selection:bg-[#4F7CFF]/30 selection:text-white"
  >
    <layout-navbar />
    <main class="flex-1">
      <slot />
    </main>
    <layout-footer />
    <modals-contact />
  </div>
</template>

<script setup lang="ts">

import LayoutNavbar from "~/components/layout/layout-navbar/layout-navbar.vue";
import LayoutFooter from "~/components/layout/layout-footer/layout-footer.vue";
import ModalsContact from "~/components/modals/modals-contact/modals-contact.vue";
</script>

<style scoped lang="scss" />