<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElNotification } from "element-plus";

// 引入用户相关的小仓库
//   import useUserStore from '@/store/modules/user'
//   let userStore = useUserStore()

// 获取路由对象
let $route = useRoute();

// 获取el-from组件
let loginFroms = ref();

// 获取路由器
let $router = useRouter();

// 定义变量控制按钮加载效果
let loading = ref(false);

// 收集账号与密码的数据
let loginFrom = reactive({
  username: "admin",
  password: "111111",
});
// 登录按钮回调
const login = async () => {
  // 保证全部表单项校验通过再发请求
  await loginFroms.value.validate();

  loading.value = true;
  // 用户登录的方法
  try {
    // @ts-ignore
    await userStore.userLogin(loginFrom);
    // 编程式导航跳转到展示数据首页
    // 判断登陆的时候,路由路劲当中是否有query参数,如果有就用query,没有跳转到首页
    let redirect = $route.query.redirect;
    $router.push({ path: redirect || "/" });
    ElNotification({
      type: "success",
      message: "欢迎回来",
      title: `HI,${getTime()}好!`,
    });
    loading.value = false;
  } catch (error) {
    loading.value = false;
    // 登陆失败的提示信息
    ElNotification({
      type: "error",
      message: error.message,
    });
  }
};

// 自定义表单校验规则
const validatorUserName = (rele, value, callback) => {
  // rele:即为校验规则对象 value:即为表单元素文本内容 函数:如果符合条件callback放行通过 不符合条件callback方法,注入错误提示信息
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error("账号长度至少5位"));
  }
};

const validatorPassword = (rele, value, callback) => {
  if (value.length >= 6) {
    callback();
  } else {
    callback(new Error("密码长度至少6位"));
  }
};
// 定义表单校验需要的配置对象
const rules = {
  username: [
    // { require: true, min: 6, max: 10, message: '账号长度至少六位', trigger: 'change',},
    { trigger: "change", validator: validatorUserName },
  ],
  password: [
    // {require: true,min: 6,max: 15,message: '账号长度至少六位',trigger: 'change',},
    { trigger: "change", validator: validatorPassword },
  ],
};
</script>
<template>
  <div class="login_container">
    <el-row>
        <el-col :span="12">
        <el-form
          class="login_from"
          :model="loginFrom"
          :rules="rules"
          ref="loginFroms"
        >
          <h1>尊敬的用户!</h1>
          <h2>欢迎来到工艺大师</h2>
          <el-form-item prop="username">
            <el-input
              :prefix-icon="User"
              v-model="loginFrom.username"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              :prefix-icon="Lock"
              v-model="loginFrom.password"
              show-password
            ></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-button
              :loading="loading"
              class="login_btn"
              type="primary"
              size="default"
              @click="login"
            >
              登录
            </el-button>
          </el-form-item>

          <p class="goReg">
            <span>已有帐号？</span>
            <span>
              <router-link to="/login">去登录</router-link>
            </span>
          </p>
        </el-form>
      </el-col>
      <el-col :span="12"></el-col>
      
    </el-row>
  </div>
</template>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("https://www.instructables.com/assets/img/signup/signup-background-workshop2.jpg")
    no-repeat center center fixed;
  background-size: cover;
  .login_from {
    margin-left: 60px;
    position: relative;
    width: 80%;
    top: 30vh;
    //   background: url('@/assets/images/login_form.png') no-repeat;
    background: rgba(34, 34, 34, 0.25);
    background-size: cover;
    padding: 40px;

    h1 {
      color: white;
      font-size: 40px;
    }
    h2 {
      color: white;
      font-size: 20px;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
    .goReg {
      span {
        color: #fff;
      }
      span {
        a {
          color: #fff;
          position: relative;
        }
        a::after {
          content: ''; /* 添加伪元素内容 */
          position: absolute; /* 设置伪元素的位置为绝对定位 */
          bottom: 0; /* 距离底部0像素 */
          left: 0; /* 距离左侧0像素 */
          width: 100%; /* 伪元素宽度与链接相同 */
          height: 2px; /* 伪元素高度，即短横线的高度 */
          background-color: #fff; /* 短横线的颜色 */
          opacity: 0; /* 初始时设置透明度为0 */
          transition: opacity 0.3s ease; /* 添加透明度过渡效果 */
        }

        /* 鼠标悬停时显示短横线 */
        a:hover::after {
          opacity: 1; /* 鼠标悬停时显示短横线，将透明度设置为1 */
        }
      }
    }
  }
}
</style>

<!-- https://www.instructables.com/assets/img/signup/signup-background-craft3.jpg -->
