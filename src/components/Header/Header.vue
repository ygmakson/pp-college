<script setup>
import Logo from '@/assets/images/logo.svg'
import {ref} from "vue";
import MainView from "@/views/MainView.vue";
import ButtonTransparent from "@/components/UI/ButtonTransparent.vue";

import {useRoute} from "vue-router";
import ModalWindow from "@/components/Modal/ModalWindow.vue";
import FormModal from "@/components/Form/FormModal.vue";
import Burger from "@/components/Header/Burger.vue";

const route = useRoute()

const activeBurger = ref(false)

function setActiveBurger(value) {
  activeBurger.value = value
  console.log(`Бургер меню ${activeBurger.value}`)
}

const pages = ref([
  {page: 'Главная', path: '/'},
  {page: 'Контакты', path: '/contacts'},
  {page: 'Портфолио', path: '/portfolio'},
  {page: 'Новости', path: '/news'},
])
</script>

<template>
<header class="header">
  <div class="header__inner container">
    <router-link to="/">
      <Logo class="header__logo"/>
    </router-link>
    <nav class="header__nav tablet-overlay" :class="{'tablet-overlay-active': activeBurger}">
      <ul class="header__nav-list">
        <li v-for="page in pages" :key="page" class="header__nav-item" :class="{active: route.path === page.path}">
          <router-link :to="page.path">{{page.page}}</router-link>
        </li>
      </ul>
    </nav>
    <ButtonTransparent data-fancybox data-src="#form-modal" class="header__btn">+7 (123) 123-12-12</ButtonTransparent>
    <Burger @OpenCloseNav="setActiveBurger" class="header__burger"/>
  </div>
</header>
  <ModalWindow title="Заказать звонок" id="form-modal">
    <FormModal />
  </ModalWindow>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.header {
  padding-block: 1rem;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  &__logo {
    width: fluid(130, 93);
  }

  &__nav {
    @include tablet {
      position: fixed;
      inset: 0;
      max-height: rem(350);
      background-color: var(--color-light);
      @include flex-center;
    }

    &-list {
      display: flex;
      gap: 1rem;
      @include tablet {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
        font-size: 1rem;
      }
    }

    &-item {
      position: relative;

      @include tablet {
        width: fit-content;
      }
    }
  }

  &__btn {
    padding: rem(10);
    font-size: fluid(16, 12);
  }

  &__burger {
    @include tablet-above {
      @include visually-hidden
    }
  }
}

.active {
  font-weight: 500;
  &::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -2px;
    left: 0;
    background-color: var(--color-blue-dark);
  }
}

.tablet-overlay {
  transition-duration: .2s;
  @include tablet-above {
    display: contents;
  }
  transform: translateX(100%);

  &-active {
    transform: translateX(0);
  }
}
</style>