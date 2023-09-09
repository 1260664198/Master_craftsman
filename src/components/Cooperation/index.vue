<script setup></script>

<template>
  <div>
    <div class="cooperation">
      <h1>教育合作伙伴</h1>
      <div class="cooperationBox">
        <div style="margin-right: 20px">
          <a href="">
            <img src="../../assets/instructables-logo-2023.svg" />
          </a>
        </div>
        <div style="margin-right: 20px">
          <a href="">
            <img src="../../assets/instructables-logo-2023.svg" />
          </a>
        </div>
        <div>
          <a href="">
            <img src="../../assets/instructables-logo-2023.svg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cooperation {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h1 {
    font-size: 18px;
    font-weight: 700;
    margin: 15px 0;
  }
  .cooperationBox {
    display: flex;
    justify-content: space-around;
    align-items: center;
    div {
      height: 140px;
      background: #eee;
      display: flex; /* 使用 flex 布局 */
      justify-content: center; /* 水平居中对齐 */
      align-items: center; /* 垂直居中对齐 */
      a {
        padding: 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
