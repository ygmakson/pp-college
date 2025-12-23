<script setup>

import ButtonTransparent from "@/components/UI/ButtonTransparent.vue";
import Arrow from '@/assets/images/icons/arrow.svg'

const props = defineProps({
  img: String,
  title: String,
  disc: String
})
</script>

<template>
  <div class="ncard">
    <div class="ncard__img">
      <img
          :src="props.img"
          alt="#"
      >
    </div>
    <div class="ncard__info">
      <h3>{{props.title}}</h3>
      <p class="ncard__disc">{{props.disc}}</p>
      <router-link to="" class="ncard__link">Читать <Arrow class="arrow" /></router-link>
    </div>
  </div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;
.ncard {
  overflow: hidden;
  background-color: var(--color-white);
  box-shadow: var(--shadow);
  border-radius: var(--radius-m);
  display: flex;
  flex-direction: column;
  gap: .5rem;
  width: 100%;
  transition-duration: .2s;

  @include hover {
    transform: scale(1.02);
  }

  &__img {
    width: 100%;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    min-height: rem(200);
    padding-inline: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

  }

  &__link {
    margin-top: auto;
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    border-top: 1px solid var(--color-blue-light-2);

    @include hover {
      text-decoration: underline;
    }
    .arrow {
      fill: var(--color-blue-dark);
      width: 2rem;
      height: 2rem;
    }
  }
}
</style>