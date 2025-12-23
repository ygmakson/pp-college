<script setup>

import FormInput from "@/components/Inputs/FormInput.vue";
import CustomCheckbox from "@/components/Inputs/CustomCheckbox.vue";
import ButtonTransparent from "@/components/UI/ButtonTransparent.vue";
</script>

<template>
  <form
      action="#"
      class="form"
  >
    <FormInput id="name" placeholder="Введите имя" label="Имя:" type="text"/>
    <FormInput id="telephone" mask="+{7} (000) 000-00-00" placeholder="+7 (___) ___-__-__" label="Телефон:" type="tel"/>

    <div class="form__bottom">
      <CustomCheckbox />
      <ButtonTransparent class="form__btn">Отправить</ButtonTransparent>
    </div>


  </form>
</template>

<style scoped lang="scss">
@use "@/styles/helpers" as *;

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__bottom {
    display: flex;
    gap: 1rem;
    justify-content: space-between;

    @include mobile {
      flex-direction: column;
    }
  }

  &__btn {
    width: 100%;
    padding-block: .5rem;
  }
}
</style>