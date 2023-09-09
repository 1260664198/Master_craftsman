<script setup></script>

<template>
  <div>
    <div class="text">
      <div class="text1">
        <h1>一步步</h1>
        <span
          >我们让学习如何制作任何东西变得容易，一次一步。从炉灶到车间，您一定会从每天分享的精彩项目中受到启发。</span
        >
      </div>
      <div class="text1">
        <h1>由你制作</h1>
        <span
          >指令是由您创建的。无论您是谁，我们都有秘密技能可以分享。欢迎加入我们由充满好奇心的创客、创新者、教师和终身学习者组成的社区，他们热衷于分享自己的作品。</span
        >
      </div>
      <div class="text1">
        <h1>一个快乐的地方</h1>
        <span
          >创造事物使人快乐。我们无法证明这一点，但我们知道这是真的。找到您快乐的地方，并加入世界上最友好的在线社区之一。</span
        >
      </div>
    </div>
    <el-divider style="margin: 10px auto; width: 90%" />
  </div>
</template>

<style lang="scss" scoped>
.text {
  height: 260px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 40px;
  font-family: "myriad-pro", Helvetica, Arial, sans-serif;
  .text1 {
    // margin-right: 100px;
    width: 300px;
    h1 {
      font-size: 2.125rem;
      text-align: center;
      margin-bottom: 30px 0;
      font-weight: bold;
      font-family: "myriad-pro",Helvetica,Arial,sans-serif;
      margin-bottom: 15px;
    }
    span {
      font-size: 1.125rem;
      line-height: 1.45;
    }
  }
}
</style>
