<script setup>
import { Search } from "@element-plus/icons-vue";
</script>

<template>
  <div>
    <div class="header">
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
        router="true"
      >
        <router-link to="/home">
          <el-menu-item index="0">
            <img index="0" src="../../assets/instructables-logo-2023.svg" />
          </el-menu-item>
        </router-link>
        <div class="flex-grow" />
          <el-menu-item index="/projects">项目</el-menu-item>
          <el-menu-item index="/contest">比赛</el-menu-item>
          <el-menu-item index="/competition" >教学</el-menu-item>
          <template class="input">
            <el-input placeholder="请输入您要搜索的内容" text="input" style="width: 600px; height: 40px; ">
                <template #append>
                    <el-button :icon="Search" />
                </template>
            </el-input>
        </template>
    
        <template class="btn">
          <router-link to="/login"><el-button type="primary" size="large" style="margin-right: 10px;" >登录</el-button></router-link>
          <el-button type="success" size="large">注册</el-button>
        </template>
      </el-menu>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  img {
    height: 52px;
    width: auto;
    margin: 20px 30px;
  }
  .btn {
    display: flex;
    align-items: center;
    margin-left:80px;
  }
  .input {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }
}
</style>
