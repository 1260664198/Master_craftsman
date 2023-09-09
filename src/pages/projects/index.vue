<script setup>
// el-tabs 的事件回调
import { ref } from "vue";
const activeName = ref("first");
const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>

<template>
  <div class="container">
    <!-- stretch -->
    <div class="tabs">
      <el-tabs stretch v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="全部" name="first">全部</el-tab-pane>
        <el-tab-pane label="电路" name="second">电路</el-tab-pane>
        <el-tab-pane label="作坊" name="third">作坊</el-tab-pane>
        <el-tab-pane label="工艺" name="工艺">工艺</el-tab-pane>
        <el-tab-pane label="烹饪" name="烹饪">烹饪</el-tab-pane>
        <el-tab-pane label="活的" name="活的">活的</el-tab-pane>
        <el-tab-pane label="外部" name="外部">外部</el-tab-pane>
        <el-tab-pane label="教师" name="教师">教师</el-tab-pane>
        <el-tab-pane #label>
            <template>
                <el-dropdown>
      <el-button type="primary">
        Dropdown List<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
            </template>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
    .tabs {
        margin: 10px;
    }
}
v-deep.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
