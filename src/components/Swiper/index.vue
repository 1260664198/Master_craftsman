<script setup></script>

<template>
  <div>
    <div class="swiper">
      <el-carousel height="400px" indicator-position="left">
        <el-carousel-item v-for="item in 4" :key="item">
          <!-- <h3 class="small justify-center" text="2xl">{{ item }}</h3> -->
          <img
            src="https://content.instructables.com/FG5/AL9Y/LK9ZY6SJ/FG5AL9YLK9ZY6SJ.jpg?auto=webp&width=1600"
            style="width: 100%; height: 100%"
          />
        </el-carousel-item>
      </el-carousel>
      <div class="text">
        <h1>供您制作</h1>
        <div>
          <span>Instructables 是一个为喜欢创造事物的人们提供的社区。</span>&nbsp;
          <span>快来与我们一起探索、分享并制作您的下一个项目！</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  // margin: 20px 0;
  position: relative;
  .text {
    position: absolute;
    left: 40%;
    top: 50%;
    transform: translate(-50%,-50%);
    color: #fff;
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    padding: 25px 0;
    text-shadow: 0 1px 4px rgba(0,0,0,0.15);
    z-index: 2;
    font-family: "myriad-pro",Helvetica,Arial,sans-serif;
    width:40%;

    h1 {
      font-size: 60px;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 15px;
    }
    div {
      font-size: 18px;
      span {
        line-height: 1.45;
      }
    }
  }
}
</style>
