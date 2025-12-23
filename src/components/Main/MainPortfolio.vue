<script setup>

import PortfolioCard from "@/components/Portfolio/PortfolioCard.vue";
import {ref} from "vue";

const portfolios = ref([
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
  }
])
</script>

<template>
<section class="portfolio">
  <div class="portfolio__inner container">
    <h2>Наше портфолио</h2>
    <ul class="portfolio__list">
      <PortfolioCard class="portfolio__item" v-for="p in portfolios" :img="p.img" :title="p.title" :disc="p.disc"/>
    </ul>
    <router-link class="portfolio__link" to="/portfolio">Показать еще...</router-link>
  </div>
</section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.portfolio {
  background-color: var(--color-blue-light-3);
  padding-block: 2rem;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  &__list {
    display: flex;
    gap: 1rem;
  }

  &__item {
    @include tablet {
      &:last-child {
        display: none;
      }
    }

    @include mobile {
      &:nth-child(2) {
        display: none;
      }
    }
  }

  &__link {
    @include hover {
      text-decoration: underline;
    }
  }
}
</style>