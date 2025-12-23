<script setup>
import ButtonTransparent from "@/components/UI/ButtonTransparent.vue";

const props = defineProps({
  img: String,
  title: String,
  disc: String
})
</script>

<template>
<div class="pcard">
  <div class="pcard__img">
    <img
        :src="props.img"
        alt="#"
    >
  </div>
  <div class="pcard__info">
    <h3>{{props.title}}</h3>
    <p class="pcard__disc">{{props.disc}}</p>
    <ButtonTransparent class="pcard__btn">Подробнее</ButtonTransparent>
  </div>
</div>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;
.pcard {
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
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

  }

  &__btn {
    margin-top: auto;
    padding: .5rem 1rem;
  }
}
</style>