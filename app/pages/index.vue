<template>
  <div>
    <home-hero/>
    <home-services/>
    <home-tech-stack/>
    <home-cases/>
    <home-process/>
    <home-advantages/>
    <home-cta/>
  </div>
</template>

<script lang="ts" setup>
import HomeHero from "~/components/home/home-hero/home-hero.vue";
import HomeServices from "~/components/home/home-services/home-services.vue";
import HomeTechStack from "~/components/home/home-tech-stack/home-tech-stack.vue";
import HomeCases from "~/components/home/home-cases/home-cases.vue";
import HomeProcess from "~/components/home/home-process/home-process.vue";
import HomeAdvantages from "~/components/home/home-advantages/home-advantages.vue";
import HomeCta from "~/components/home/home-cta/home-cta.vue";
</script>

<style lang="scss" scoped/>