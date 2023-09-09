<script setup>
import { ArrowRightBold } from "@element-plus/icons-vue";
</script>

<template>
  <div class="contst">
    <div class="title">
      <h1>比赛</h1>
      <el-icon><ArrowRightBold color="#aeaeae" /></el-icon>
    </div>
    <div class="body">
      <div>
        <a>
          <img src="../../assets/FJY6432LLAVY9C1.png" />
        </a>
      </div>
      <div>
        <a>
          <img src="../../assets/FJY6432LLAVY9C1.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  margin: 25px 0 15px 0;
  h1 {
    font-size: 18px;
    font-weight: 700;
  }
}
.body {
  // flex-flow: row nowrap;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  div {
    width: 400px;
    a {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
