<script setup>
import Phone from '@/assets/images/icons/phone.svg'
import Mail from '@/assets/images/icons/mail.svg'
import Vk from '@/assets/images/icons/vk.svg'
import Tg from '@/assets/images/icons/tg.svg'
</script>

<template>
<footer class="footer">
  <div class="footer__inner container">
    <div class="footer__left">
      Copyright © 2003 - 2025 OOO «Протон-Web»
    </div>
    <div class="footer__right">
      <div class="footer__right-top">
        <div><Phone /><span>+7 (123) 123-12-12</span></div>
        <div><Mail /><span>web@proton.ru</span></div>
      </div>
      <div class="footer__right-bottom">
        <router-link to="#"><Vk /></router-link>
        <router-link to="#"><Tg /></router-link>
      </div>
    </div>
  </div>
</footer>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.footer {
  padding-block: 2rem;
  background-color: #1E2A3C;
  color: var(--color-white);

  &__inner {
    display: flex;
    justify-content: space-between;

    @include tablet {
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
    }
  }

  &__right {
    &-top {
      display: flex;
      gap: 2rem;
      align-items: center;
      @include tablet {
        flex-direction: column;
        align-items: start;
        gap: 1rem;
      }
      div {
        display: flex;
        gap: .5rem;
        align-items: center;
      }
    }

    &-bottom {
      display: flex;
      gap: 1rem;
      justify-content: end;

      @include tablet {
        justify-content: start;
        margin-top: 1rem;
      }

    }
  }
}
</style>