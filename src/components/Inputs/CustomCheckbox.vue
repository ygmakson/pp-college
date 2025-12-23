<script setup>

</script>

<template>
  <label class="checkbox">
    <input type="checkbox" class="checkbox__input">
    <span class="checkbox__custom"></span>
    <router-link to="#">Даю согласие на обработку персональных данных</router-link>
  </label>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.checkbox {
  position: relative;
  display: flex;
  gap: .5rem;
  align-items: center;
  &__input {
    width: rem(24);
    height: rem(24);
    opacity: 0;
    z-index: 10;
    background: none;
    border: 1px solid var(--color-blue-dark);

    &:checked + .checkbox__custom {
      background-color: var(--color-blue-dark);
      background-image: url("@/assets/images/icons/checkbox-true.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &__custom {
    width: rem(24);
    height: rem(24);
    position: absolute;
    left: 0;
    border: 2px solid var(--color-blue-dark);
    border-radius: rem(4);
  }

  a {
    font-size: rem(12);
    white-space: nowrap;

    @include mobile {
      white-space: wrap;
    }
  }
}
</style>