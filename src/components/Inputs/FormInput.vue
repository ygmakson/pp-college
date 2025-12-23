<script setup>
import {IMaskDirective} from "vue-imask";
const props = defineProps({
  label: String,
  type: String,
  placeholder: String,
  id: String,
  mask: String
})
</script>

<template>
<label class="field">
  <span class="field__name">{{props.label}}</span>
  <input class="field__input" v-mask="props.mask" :id="props.id" :type="props.type" required :placeholder="props.placeholder">
</label>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.field {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: .5rem;

  &__name {
    font-size: rem(16);
    color: var(--color-blue-dark);
    font-weight: 500;
  }

  &__input {
    border: rem(2) solid  var(--color-blue-dark);
    padding: 1rem;
    border-radius: var(--radius-m);
  }
}
</style>