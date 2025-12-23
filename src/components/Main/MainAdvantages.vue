<script setup>
import {ref} from "vue";
const advantages = ref([
  {head: '150+', disc: 'Успешных проектов'},
  {head: '15 лет', disc: 'На рынке'},
  {head: '10+', disc: 'Партнеров'},
  {head: '5+', disc: 'Наград в индустрии'},
])
</script>

<template>
<section class="advantages">
  <div class="advantages__inner container">
    <h2>Наши достижения</h2>
    <ul class="advantages__list">
      <li v-for="a in advantages" class="advantages__item">
        <span>{{a.head}}</span>
        <span>{{a.disc}}</span>
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

.advantages {
  padding-block: 2rem;
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: 100%;
    @include tablet {
      grid-template-columns: repeat(2, 1fr);
    }
    @include mobile {
      grid-template-columns: repeat(1, 1fr);
    }
    gap: 1rem;
  }

  &__item {
    width: 100%;
    border: rem(2) solid var(--color-blue-dark);
    border-radius: var(--radius-l);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    height: rem(150);
    transition-duration: .1s;

    @include hover {
      background-color: var(--color-blue-dark);
      color: var(--color-light);
    }

    span {
      font-weight: 500;
      &:first-child {
        font-size: fluid(48, 30);
        font-weight: 600;
      }
    }
  }
}
</style>