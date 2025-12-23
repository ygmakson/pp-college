<script setup>
import Close from '@/assets/images/icons/close.svg'

const props = defineProps({
  title: String,
  id: String,
})
</script>

<template>

<div :style="{display: 'none'}">
  <div class="modal" :id="props.id">
    <div class="modal__head">
      <h2>{{ props.title }}</h2>
      <button data-fancybox-close class="modal__btn">
        <Close />
      </button>
    </div>
    <slot>

    </slot>
  </div>
</div>

</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.modal {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: rem(550);
  @include mobile {
    width: 100vw;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>