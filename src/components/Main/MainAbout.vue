<script setup>

import Line from "@/components/UI/Line.vue";
</script>

<template>
<section class="about">
  <div class="about__inner container">
    <h2>О нас</h2>
    <Line />
    <p>Мы создаем современные и эффективные веб-решения доли вашего бизнеса.
      <br>
      Ваш опыт и профессионализм - залог вашего успеха</p>
  </div>
</section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.about {
  padding-block: 2rem;

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-weight: 600;
    align-items: center;
  }
  
  p {
    text-align: center;
    font-size: fluid(16, 12);
  }
}
</style>