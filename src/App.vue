<script setup>
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";

</script>

<template>
  <div>
    <!-- 头部导航栏 -->
    <Header />

    <!-- 路由出口 -->
    <router-view></router-view>
    
    <!-- 底部导航栏 -->
    <Footer />
  </div>
</template>

<style lang="scss" scoped></style>
