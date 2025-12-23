<script setup>
import {ref} from "vue";
import Arrow from '@/assets/images/icons/arrow.svg'

const activePage = ref(1)

function setActivePage(value) {
  activePage.value = value
}

const pages = ref([
    1, 2, 3, 4, 5
])
</script>

<template>
<ul class="pagination">
  <li v-for="p in pages" class="pagination__item" >
    <button @click="setActivePage(p)" :class="{active: activePage === p}">
      {{p}}
    </button>
  </li>
  <li class="pagination__item">
    <button>
      <Arrow class="arrow" />
    </button>
  </li>
</ul>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.pagination {
  display: flex;
  align-items: center;
  gap: .5rem;
  padding-block: 1rem;

  &__item {
    button {
      width: 2rem;
      height: 2rem;
      border: rem(2) solid var(--color-blue-dark);
      border-radius: var(--radius-m);
      display: flex;
      @include flex-center;
      font-weight: 500;
      @include hover {
        background-color: var(--color-blue-dark);
        color: var(--color-light);

        .arrow {
          fill: var(--color-light);
        }
      }

      .arrow {
        width: 1.5rem;
        height: 1.5rem;
        fill: var(--color-blue-dark);
      }
    }
  }
}

.active {
  background-color: var(--color-blue-dark);
  color: var(--color-light);
}
</style>