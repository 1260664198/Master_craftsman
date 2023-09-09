<script setup></script>

<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <img
          style="width: 100%; height: 100%"
          src="../../assets/instructables-logo-2023.svg"
          alt=""
        />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped></style>
