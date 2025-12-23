<script setup>

import Line from "@/components/UI/Line.vue";
import {ref} from "vue";

const partners = ref([
  new URL('@/assets/images/partners/p1.svg', import.meta.url).href,
  new URL('@/assets/images/partners/p2.svg', import.meta.url).href,
  new URL('@/assets/images/partners/p3.svg', import.meta.url).href,
  new URL('@/assets/images/partners/p4.svg', import.meta.url).href,
])
</script>

<template>
<section class="partners">
  <div class="partners__inner container">
    <h2>Наши партнеры</h2>
    <Line />
    <ul class="partners__list">
      <li v-for="p in partners" class="partners__item">
        <img
            :src="p"
            alt="#"
        >
      </li>
      <li v-for="p in partners" class="partners__item">
        <img
            :src="p"
            alt="#"
        >
      </li>
    </ul>
  </div>
</section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.partners {
  padding-block: 2rem;
  &__inner {
    overflow-inline: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  &__list {
    display: flex;
    gap: 10rem;
    overflow-inline: hidden;
    animation: slide 30s linear infinite;
    width: max-content;

    @keyframes slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  }
}
</style>