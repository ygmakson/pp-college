<script setup>

import NewsCard from "@/components/News/NewsCard.vue";
import {ref} from "vue";
import PortfolioCard from "@/components/Portfolio/PortfolioCard.vue";

const projects = ref([
  {
    img: new URL('@/assets/images/portfolio/p1.jpg', import.meta.url).href,
    title: 'Портфолио-минимализм',
    disc: 'Портфолио, которое отразит вашу деятельность'
  },
  {
    img: new URL('@/assets/images/portfolio/p2.jpg', import.meta.url).href,
    title: 'Портфолио веб-разработчик',
    disc: 'Наглядно продемонстрирует аудитории ваши навыки и уже готовые работы'
  },
  {
    img: new URL('@/assets/images/portfolio/p3.jpg', import.meta.url).href,
    title: 'Портфолио фотограф',
    disc: 'Позволит клиентам в полной мере насладиться красотой ваших снимков '
  },
  {
    img: new URL('@/assets/images/portfolio/p1.jpg', import.meta.url).href,
    title: 'Портфолио-минимализм',
    disc: 'Портфолио, которое отразит вашу деятельность'
  },
  {
    img: new URL('@/assets/images/portfolio/p2.jpg', import.meta.url).href,
    title: 'Портфолио веб-разработчик',
    disc: 'Наглядно продемонстрирует аудитории ваши навыки и уже готовые работы'
  },
  {
    img: new URL('@/assets/images/portfolio/p3.jpg', import.meta.url).href,
    title: 'Портфолио фотограф',
    disc: 'Позволит клиентам в полной мере насладиться красотой ваших снимков '
  },
  {
    img: new URL('@/assets/images/portfolio/p1.jpg', import.meta.url).href,
    title: 'Портфолио-минимализм',
    disc: 'Портфолио, которое отразит вашу деятельность'
  },
  {
    img: new URL('@/assets/images/portfolio/p2.jpg', import.meta.url).href,
    title: 'Портфолио веб-разработчик',
    disc: 'Наглядно продемонстрирует аудитории ваши навыки и уже готовые работы'
  },
  {
    img: new URL('@/assets/images/portfolio/p3.jpg', import.meta.url).href,
    title: 'Портфолио фотограф',
    disc: 'Позволит клиентам в полной мере насладиться красотой ваших снимков '
  },
])
</script>

<template>
<ul class="newslist">
  <li v-for="p in projects" class="newslist__item">
    <PortfolioCard :img="p.img" :title="p.title" :disc="p.disc"/>
  </li>
</ul>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.newslist {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mobile {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>