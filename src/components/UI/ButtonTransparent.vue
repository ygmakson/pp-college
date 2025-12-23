<script setup>

</script>

<template>
<button class="button-purple">
  <slot></slot>
</button>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.button-purple {
  border-radius: var(--radius-l);
  border: rem(2) solid var(--color-blue-dark);
  color: var(--color-blue-dark);
  font-weight: 600;
  height: fit-content;
  width: fit-content;

  @include hover {
    background-color: var(--color-blue-dark);
    color: var(--color-light);
  }
}
</style>