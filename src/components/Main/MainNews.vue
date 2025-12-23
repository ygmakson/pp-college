<script setup>

import NewsCard from "@/components/News/NewsCard.vue";
import {ref} from "vue";

const news = ref([
  {
    img: new URL('@/assets/images/news/n1.jpg', import.meta.url).href,
    title: 'Тренды веб-разработки 2025',
    disc: 'Новые технологии и тренды в веб-разработке'
  },
  {
    img: new URL('@/assets/images/news/n2.jpg', import.meta.url).href,
    title: 'Кризис оперативной памяти',
    disc: 'Свежие новости о скандальной ситуации на рынке'
  },
  {
    img: new URL('@/assets/images/news/n3.jpg', import.meta.url).href,
    title: 'Облачные технологии',
    disc: 'Расскажем о базовых понятиях в сфере облачных технологий'
  }
])
</script>

<template>
<div class="news">
  <div class="news__inner container">
    <h2>Последние новости веб-индустрии</h2>
    <ul class="news__list">
      <li v-for="n in news" class="news__item">
        <NewsCard :img="n.img" :title="n.title" :disc="n.disc"/>
      </li>
    </ul>
    <router-link class="news__link" to="/portfolio">Показать еще...</router-link>
  </div>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.news {
  padding-block: 2rem;
  background-color: var(--color-blue-light-3);
  &__inner {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
  }

  &__list {
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