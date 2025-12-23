<script setup>

import Categories from "@/components/Categories/Categories.vue";
import PortfolioList from "@/components/Portfolio/PortfolioList.vue";
import Pagination from "@/components/UI/Pagination.vue";
</script>

<template>
<div class="portfolio">
  <div class="portfolio__inner container">
    <h2>Проекты</h2>
    <Categories />
    <PortfolioList />
    <Pagination />
  </div>
</div>
</template>

<style scoped lang="scss">
@use '@/styles/helpers' as *;

.portfolio {
  &__inner {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
}
</style>