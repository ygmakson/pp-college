<script setup>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Pagination, Autoplay, Navigation} from "swiper/modules";

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {ref} from "vue";
import BannerImg from '@/assets/images/main-banner/banner1.jpg'
import Arrow from '@/assets/images/icons/arrow.svg'

const modules = [Pagination, Autoplay, Navigation]

const bannerLists = ref([
  {img: BannerImg, path: '/portfolio'},
  {img: BannerImg, path: '/portfolio'},
  {img: BannerImg, path: '/portfolio'},
  {img: BannerImg, path: '/portfolio'},
])
</script>

<template>
<section class="mslider">
  <Swiper :navigation="{nextEl: '.swiper-next', prevEl: '.swiper-prev'}" :loop="true" :autoplay="{delay: 3000, disableOnInteraction: false}" :modules="modules" navigation :pagination="{clickable: true}">
    <SwiperSlide v-for="(list, index) in bannerLists" :key="index">
      <div class="mslider__list">
        <router-link :to="list.path">
          <img
              :src="list.img"
              alt="bannerList"
          >
        </router-link>
      </div>
    </SwiperSlide>
    <button class="swiper-next"><Arrow /></button>
    <button class="swiper-prev" :style="{transform: 'rotateZ(180deg)'}"><Arrow /></button>
  </Swiper>

  <div class="swiper-pagination"></div>
</section>
</template>

<style
    scoped
    lang="scss"
>
@use '@/styles/helpers' as *;

.mslider {
  position: relative;
  @media (max-width: 650px) {
    display: none;
  }

  &__list {
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

:deep(.swiper-pagination-bullet) {
  background: #fff;
}

.swiper {
  &-next {
    position: absolute;
    top: 50%;
    right: 1rem;
    z-index: 10;
  }
  &-prev {
    position: absolute;
    top: 50%;
    left: 1rem;
    z-index: 10;
  }
}
</style>