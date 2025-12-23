<script setup>
import {ref} from "vue";
import ButtonTransparent from "@/components/UI/ButtonTransparent.vue";

const categories = ref([
    'Все', 'Лендинги', 'Многостраничные сайты', 'Дизайн-макеты'
])

const activeC = ref('Все')

function setActiveC(value) {
  activeC.value = value
}
</script>

<template>
<ul class="categories">
  <li v-for="c in categories" class="categories__item">
    <ButtonTransparent :class="{active: activeC === c}" @click="setActiveC(c)" class="categories__btn">{{ c }}</ButtonTransparent>
  </li>
</ul>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.categories {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  @include tablet {
    gap: 1rem;
  }
  &__btn {
    padding: .5rem 1rem;
  }
}

.active {
  background-color: var(--color-blue-dark);
  color: var(--color-light);
}
</style>