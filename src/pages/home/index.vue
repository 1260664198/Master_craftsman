<script setup>
import Swiper from "@/components/Swiper/index.vue";
import Text from "@/components/text/index.vue";
import Content from "@/components/Content/index.vue";
import { ArrowRightBold } from "@element-plus/icons-vue";
</script>

<template>
  <div>
    <!-- 首页轮播图 -->
    <Swiper />
    <!-- 轮播图下方文字 -->
    <Text />
    <!-- 探索项目部分 -->

    


    <Content>
      <template #h1>
        <h1>探索项目</h1>
        <router-link class="span" to="path">电路
          <el-icon style="vertical-align: top; color: #aeaeae">
            <ArrowRightBold /> 
          </el-icon>
       </router-link>
      </template>
    </Content>

    <Content>
    <template #title>
      <router-link class="span" to="path">作坊
        <el-icon style="vertical-align: top; color: #aeaeae">
          <ArrowRightBold /> 
        </el-icon>
      </router-link>
    </template>
    </Content>

    <Content>
      <template #title>
        <router-link class="span" to="path">工艺
          <el-icon style="vertical-align: top; color: #aeaeae">
            <ArrowRightBold /> 
          </el-icon>
        </router-link>
      </template>
    </Content>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 100px;
  margin-bottom: 40px;
  h1 {
    font-size: 34px;
    font-weight: bold;
    margin: 25px 0;
  }
  .span {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
    color: #000;
    position: relative;
  }
  .span::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px; /* 横线宽度 */
    height: 2px; /* 横线高度 */
    background-color: #999; /* 横线颜色 */
    transform: scaleX(0); /* 初始时横线不可见 */
    transition: transform 0.2s ease-in-out; /* 添加平滑过渡效果 */
  }

  .span:hover::after {
    transform: scaleX(1); /* 鼠标悬停时显示横线 */
  }
}
</style>
