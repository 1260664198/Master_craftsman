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


    <Content class="content">
      <template #h1>
        <h1>探索项目</h1>
          <div>
          <router-link class="span" to="/projects/circuits">电路
            <el-icon style="vertical-align: top; color: #aeaeae">
              <ArrowRightBold /> 
            </el-icon>
          </router-link>
          </div>
      </template>
    </Content>

    <Content class="content">
    <template #title>
      <div>
        <router-link class="span" to="/projects/workshop">作坊
        <el-icon style="vertical-align: top; color: #aeaeae">
          <ArrowRightBold /> 
        </el-icon>
      </router-link>
      </div>
    </template>
    </Content>

    <Content class="content">
      <template #title>
        <div>
          <router-link class="span" to="/projects/craft">工艺
            <el-icon style="vertical-align: top; color: #aeaeae">
              <ArrowRightBold /> 
            </el-icon>
          </router-link>
        </div>
      </template>
    </Content>

    <Content class="content">
      <template #title>
        <div>
          <router-link class="span" to="/projects/cooking">烹饪
            <el-icon style="vertical-align: top; color: #aeaeae">
              <ArrowRightBold /> 
            </el-icon>
          </router-link>
        </div>
      </template>
    </Content>

    <Content class="content">
      <template #title>
        <div>
          <router-link class="span" to="/projects/living">活的
            <el-icon style="vertical-align: top; color: #aeaeae">
              <ArrowRightBold /> 
            </el-icon>
          </router-link>
        </div>
      </template>
    </Content>

    <Content class="content">
      <template #title>
        <div>
          <router-link class="span" to="/projects/outside">外部
            <el-icon style="vertical-align: top; color: #aeaeae">
              <ArrowRightBold /> 
            </el-icon>
          </router-link>
        </div>
      </template>
    </Content>

    <Content class="content">
      <template #title>
        <div>
          <router-link class="span" to="/projects/teachers">教师
          <el-icon style="vertical-align: top; color: #aeaeae">
            <ArrowRightBold /> 
          </el-icon>
        </router-link>
        </div>
      </template>
    </Content>
  </div>
</template>

<style lang="scss" scoped>
  .content {
    margin-top: 40px;
    div {
      margin-bottom: 10px;
    }
  }
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
</style>
