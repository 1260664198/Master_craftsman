<script setup>

</script>

<template>
  <div>
    <!-- 标题部分 -->
    <div class="title">
      <slot name="h1"></slot>
      <slot name="title"></slot>
    </div>
    <!-- 图片部分 -->
    <div class="text">
      <div class="text1">
        <router-link to="path">
        <img
          src="https://content.instructables.com/F50/8U2M/LLWBKQ13/F508U2MLLWBKQ13.jpg?auto=webp&crop=1.2%3A1&frame=1&width=306"
        />
      </router-link>
        <div>
          <span
            >Apple Pocket Pi - Applepie1928 在Raspberry Pi 中3D
            打印复古手持游戏机</span
          >
        </div>
      </div>
      <div class="text1">
        <img
          src="https://content.instructables.com/F7N/HS5U/LLCBDUMV/F7NHS5ULLCBDUMV.jpg?auto=webp&crop=1.2%3A1&frame=1&width=306"
        />
        <div>
          <span>Bekathwia LED串珠 窗帘_</span>
        </div>
      </div>
      <div class="text1">
        <img
          src="https://content.instructables.com/F1C/UYNK/LKQVW2EY/F1CUYNKLKQVW2EY.jpg?auto=webp&crop=1.2%3A1&frame=1&width=306"
        />
        <div>
          <span
            >可调多色 LED Orb（无需 Arduino）， 由​​wanbemadsci
            设计，用于LED</span
          >
        </div>
      </div>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 100px;
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
.text {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 40px;
  .text1 {
    border: 1px solid #ccc;
    width: 300px;
    border-radius: 4px;
    box-shadow: inset;
    img {
      border-radius: 4px 4px 0 0;
      width: 100%;
      height: 255px;
    }
    h1 {
      font-size: 2.125rem;
      text-align: center;
      margin-bottom: 1.25rem;
      font-weight: bold;
    }
    div {
      padding: 10px 13px;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
      height: 50px;
      overflow: hidden;
      color: #999;
      span {
        font-size: 1.125rem;
        margin-bottom: 10px;
        height: 50px;
        overflow: hidden;
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
