<script setup>
import { ArrowRightBold } from "@element-plus/icons-vue";
</script>

<template>
  <div>
    <div class="feature">
      <div class="title">
        <h1>特色项目</h1>
        <el-icon><ArrowRightBold color="#aeaeae" /></el-icon>
      </div>
      <div class="grid">
        <div class="gridBox">
          <a href=""><img src="../../assets/python.png" /></a>
          <div class="text">
            <span>3-5年级生物工匠在课堂上种植螺旋藻</span>
          </div>
          <div class="love">
            <span>❤30</span>
            <span style="margin-left: 10px">❤30</span>
          </div>
        </div>
        <div class="gridBox">
          <a href=""><img src="../../assets/python.png" /></a>
          <div class="text">
            <span>3-5年级生物工匠在课堂上种植螺旋藻</span>
          </div>
          <div class="love">
            <span>❤30</span>
            <span style="margin-left: 10px">❤30</span>
          </div>
        </div>
        <div class="gridBox">
          <a href=""><img src="../../assets/python.png" /></a>
          <div class="text">
            <span>3-5年级生物工匠在课堂上种植螺旋藻</span>
          </div>
          <div class="love">
            <span>❤30</span>
            <span style="margin-left: 10px">❤30</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feature {
  .title {
    display: flex;
    align-items: center;
    h1 {
      font-size: 18px;
      font-weight: 700;
      margin: 15px 0;
    }
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; /* 创建3列 */
    gap: 22px; /* 列间隔 */
    .gridBox {
      display: flex;
      flex-direction: column;
      border: 1px solid #ddd;
      width: 300px;
      border-radius: 4px;
      a {
        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-size: 14px;
        color: #333;
      }
      .love {
        border-top: 1px solid #e7e7e7;
        display: flex;
        justify-content: flex-end;
        padding: 10px;
        background: #f6f6f6;
        font-size: 12px;
        color: #76736e;
      }
    }
  }
}
</style>
