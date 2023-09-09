<script setup></script>

<template>
  <div>
    <ul>
      <li><a href="">k-2年级</a></li>
      <li><a href="">3-5年级</a></li>
      <li><a href="">6-8年级</a></li>
      <li><a href="">9-12年级</a></li>
      <li><a href="">大学+</a></li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 28px;
  margin: 20px 0;
  li {
    width: 180px;
    height: 50px;
    text-align: center; /* 将文字居中对齐 */
    line-height: 50px;
    a {
      color: #fff;
      font-weight: bold;
    }
  }
  li:nth-child(1) {
    background: #b2419e;
  }
  li:nth-child(2) {
    background: #0c9ba3;
  }
  li:nth-child(3) {
    background: #be3e42;
  }
  li:nth-child(4) {
    background: #eeb300;
  }
  li:nth-child(5) {
    background: #809e13;
  }
}
</style>
