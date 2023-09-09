<script setup>
import Swiper from "@/components/Swiper/index.vue";
import List from "@/components/List/index.vue";
import CardSwiper from "@/components/CardSwiper/index.vue";
import Cooperation from "@/components/Cooperation/index.vue";
import Feature from "@/components/Feature/index.vue";
import Contest from '@/components/Contest/index.vue'
</script>

<template>
  <div class="competition">
    <Swiper />
    <div class="list">
      <!-- 年级列表组件 -->
      <List />
      <!-- 卡片轮播图组件 -->
      <CardSwiper />
      <!-- 教育合作伙伴  cooperation:合作-->
      <Cooperation />
      <!-- 特色项目  feature:特色 特点-->
      <Feature />
      <!-- 比赛 contest:比赛-->
      <Contest />

    </div>
  </div>
</template>

<style lang="scss" scoped>
.competition {
  .list {
    margin: 0 200px;
  }
}
</style>
