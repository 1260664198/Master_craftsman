<script setup>
import { reactive, ref } from "vue";
const isActiveLink = ref(0); // 初始化为0
const links = reactive([
  { to: "/projects", text: "全部" },
  { to: "/projects/circuits", text: "电路" },
  { to: "/projects/workshop", text: "作坊" },
  { to: "/projects/craft", text: "工艺" },
  { to: "/projects/cooking", text: "烹饪" },
  { to: "/projects/living", text: "活的" },
  { to: "/projects/outside", text: "外部" },
  { to: "/projects/teachers", text: "教师" },
]);
const highlightLink = (index) => {
  isActiveLink.value = index;
};

import { useRouter } from "vue-router"; // 导入useRouter
const router = useRouter(); // 获取路由器实例
// 使用beforeEach导航守卫监听路由变化
router.beforeEach((to, from, next) => {
  const index = links.findIndex((link) => link.to === to.path);
  if (index !== -1) {
    isActiveLink.value = index;
  } 
  next();
});
</script>

<template>
  <div class="container">
    <!-- stretch -->
    <div class="tabs">
      <div class="tabbar1">
        <div class="left">
          <ul>
            <li v-for="(link, index) in links" :key="index">
              <router-link
                :to="link.to"
                @click="highlightLink(index)"
                :class="{ active: isActiveLink === index }"
              >
                {{ link.text }}
              </router-link>
            </li>
          </ul>
        </div>
        <div class="right">
          <el-button type="">你好</el-button>
        </div>
      </div>
      <div class="body">
        <!-- 二级路由出口 -->
        <router-view></router-view>
        <div class="cards">
          <div class="cardsItem">
            <div class="top">
              <router-link to="path">
                <img src="https://content.instructables.com/FLO/GHH7/LA13VB0P/FLOGHH7LA13VB0P.jpg?auto=webp&crop=1.2%3A1&frame=1&width=500">
                <div>
                  <strong>
                    <router-link to="path">
                      构建自动浇水系统（土壤湿度传感器 - 水泵 - 水位传感器 - MOSFET - 电路 - 代码）
                    </router-link>
                  </strong>
                  <br>
                  <span>作者:</span><span>xxx</span>
                </div>
              </router-link>
            </div>
            <div class="bottom">
              <div class="left">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.999 9.138c0 .194-.115.406-.344.635l-4.8 4.684 1.138 6.616c.009.062.013.15.013.265a.78.78 0 0 1-.14.47.465.465 0 0 1-.402.192c-.168 0-.343-.053-.528-.16l-5.937-3.121-5.936 3.122c-.194.106-.37.159-.528.159-.186 0-.325-.065-.418-.193a.78.78 0 0 1-.137-.47c0-.053.008-.14.026-.264l1.137-6.616L1.33 9.773c-.22-.238-.33-.45-.33-.635 0-.327.247-.53.74-.61l6.637-.965 2.975-6.02C11.52 1.181 11.735 1 12 1s.48.181.648.543l2.975 6.02 6.637.966c.494.079.74.282.74.609h-.001Z"></path></svg>
              </div>
              <div class="right">
                <div>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path d="M12 21.5s-9.996-6-9.996-12.614c.06-1.734.93-3.396 2.339-4.376C6.982 2.674 10.24 3.531 12 5.632c1.759-2.1 5.018-2.968 7.657-1.122 1.41.98 2.279 2.642 2.339 4.376C21.996 15.5 12 21.5 12 21.5Z"></path></svg>
                  <span>8</span>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.099 11.702a.9.9 0 0 0 0 .596C2.222 15.507 5.795 20.5 12 20.5s9.778-4.993 10.901-8.202a.9.9 0 0 0 0-.596C21.778 8.493 18.205 3.5 12 3.5S2.222 8.493 1.099 11.702ZM16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"></path></svg>
                  <span>468</span>
                </div>
              </div>
            </div>
          </div>
          <div class="cardsItem">
            <div class="top">
              <router-link to="path">
                <img src="https://content.instructables.com/FLO/GHH7/LA13VB0P/FLOGHH7LA13VB0P.jpg?auto=webp&crop=1.2%3A1&frame=1&width=500">
                <div>
                  <strong>
                    <router-link to="path">
                      构建自动浇水系统（土壤湿度传感器 - 水泵 - 水位传感器 - MOSFET - 电路 - 代码）
                    </router-link>
                  </strong>
                  <br>
                  <span>作者:</span><span>xxx</span>
                </div>
              </router-link>
            </div>
            <div class="bottom">
              <div class="left">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.999 9.138c0 .194-.115.406-.344.635l-4.8 4.684 1.138 6.616c.009.062.013.15.013.265a.78.78 0 0 1-.14.47.465.465 0 0 1-.402.192c-.168 0-.343-.053-.528-.16l-5.937-3.121-5.936 3.122c-.194.106-.37.159-.528.159-.186 0-.325-.065-.418-.193a.78.78 0 0 1-.137-.47c0-.053.008-.14.026-.264l1.137-6.616L1.33 9.773c-.22-.238-.33-.45-.33-.635 0-.327.247-.53.74-.61l6.637-.965 2.975-6.02C11.52 1.181 11.735 1 12 1s.48.181.648.543l2.975 6.02 6.637.966c.494.079.74.282.74.609h-.001Z"></path></svg>
              </div>
              <div class="right">
                <div>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path d="M12 21.5s-9.996-6-9.996-12.614c.06-1.734.93-3.396 2.339-4.376C6.982 2.674 10.24 3.531 12 5.632c1.759-2.1 5.018-2.968 7.657-1.122 1.41.98 2.279 2.642 2.339 4.376C21.996 15.5 12 21.5 12 21.5Z"></path></svg>
                  <span>8</span>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.099 11.702a.9.9 0 0 0 0 .596C2.222 15.507 5.795 20.5 12 20.5s9.778-4.993 10.901-8.202a.9.9 0 0 0 0-.596C21.778 8.493 18.205 3.5 12 3.5S2.222 8.493 1.099 11.702ZM16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"></path></svg>
                  <span>468</span>
                </div>
              </div>
            </div>
          </div>
          <div class="cardsItem">
            <div class="top">
              <router-link to="path">
                <img src="https://content.instructables.com/FLO/GHH7/LA13VB0P/FLOGHH7LA13VB0P.jpg?auto=webp&crop=1.2%3A1&frame=1&width=500">
                <div>
                  <strong>
                    <router-link to="path">
                      构建自动浇水系统（土壤湿度传感器 - 水泵 - 水位传感器 - MOSFET - 电路 - 代码）
                    </router-link>
                  </strong>
                  <br>
                  <span>作者:</span><span>xxx</span>
                </div>
              </router-link>
            </div>
            <div class="bottom">
              <div class="left">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.999 9.138c0 .194-.115.406-.344.635l-4.8 4.684 1.138 6.616c.009.062.013.15.013.265a.78.78 0 0 1-.14.47.465.465 0 0 1-.402.192c-.168 0-.343-.053-.528-.16l-5.937-3.121-5.936 3.122c-.194.106-.37.159-.528.159-.186 0-.325-.065-.418-.193a.78.78 0 0 1-.137-.47c0-.053.008-.14.026-.264l1.137-6.616L1.33 9.773c-.22-.238-.33-.45-.33-.635 0-.327.247-.53.74-.61l6.637-.965 2.975-6.02C11.52 1.181 11.735 1 12 1s.48.181.648.543l2.975 6.02 6.637.966c.494.079.74.282.74.609h-.001Z"></path></svg>
              </div>
              <div class="right">
                <div>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path d="M12 21.5s-9.996-6-9.996-12.614c.06-1.734.93-3.396 2.339-4.376C6.982 2.674 10.24 3.531 12 5.632c1.759-2.1 5.018-2.968 7.657-1.122 1.41.98 2.279 2.642 2.339 4.376C21.996 15.5 12 21.5 12 21.5Z"></path></svg>
                  <span>8</span>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.099 11.702a.9.9 0 0 0 0 .596C2.222 15.507 5.795 20.5 12 20.5s9.778-4.993 10.901-8.202a.9.9 0 0 0 0-.596C21.778 8.493 18.205 3.5 12 3.5S2.222 8.493 1.099 11.702ZM16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"></path></svg>
                  <span>468</span>
                </div>
              </div>
            </div>
          </div>
          <div class="cardsItem">
            <div class="top">
              <router-link to="path">
                <img src="https://content.instructables.com/FLO/GHH7/LA13VB0P/FLOGHH7LA13VB0P.jpg?auto=webp&crop=1.2%3A1&frame=1&width=500">
                <div>
                  <strong>
                    <router-link to="path">
                      构建自动浇水系统（土壤湿度传感器 - 水泵 - 水位传感器 - MOSFET - 电路 - 代码）
                    </router-link>
                  </strong>
                  <br>
                  <span>作者:</span><span>xxx</span>
                </div>
              </router-link>
            </div>
            <div class="bottom">
              <div class="left">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.999 9.138c0 .194-.115.406-.344.635l-4.8 4.684 1.138 6.616c.009.062.013.15.013.265a.78.78 0 0 1-.14.47.465.465 0 0 1-.402.192c-.168 0-.343-.053-.528-.16l-5.937-3.121-5.936 3.122c-.194.106-.37.159-.528.159-.186 0-.325-.065-.418-.193a.78.78 0 0 1-.137-.47c0-.053.008-.14.026-.264l1.137-6.616L1.33 9.773c-.22-.238-.33-.45-.33-.635 0-.327.247-.53.74-.61l6.637-.965 2.975-6.02C11.52 1.181 11.735 1 12 1s.48.181.648.543l2.975 6.02 6.637.966c.494.079.74.282.74.609h-.001Z"></path></svg>
              </div>
              <div class="right">
                <div>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path d="M12 21.5s-9.996-6-9.996-12.614c.06-1.734.93-3.396 2.339-4.376C6.982 2.674 10.24 3.531 12 5.632c1.759-2.1 5.018-2.968 7.657-1.122 1.41.98 2.279 2.642 2.339 4.376C21.996 15.5 12 21.5 12 21.5Z"></path></svg>
                  <span>8</span>
                </div>
                <div>
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#bbb"><path d="M14.5 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M1.099 11.702a.9.9 0 0 0 0 .596C2.222 15.507 5.795 20.5 12 20.5s9.778-4.993 10.901-8.202a.9.9 0 0 0 0-.596C21.778 8.493 18.205 3.5 12 3.5S2.222 8.493 1.099 11.702ZM16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"></path></svg>
                  <span>468</span>
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .tabs {
    margin: 10px;
    .tabbar1 {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 1em;
      justify-content: space-between;
      padding: 0 2em;
      .left {
        ul {
          display: flex;
          gap: 26px;
          text-transform: capitalize;
          top: 1px;
          li {
            a {
              color: #707070;
            }
          }
          .active {
            color: #333;
            border-bottom: 4px solid #faac18;
          }
        }
      }
      .right {
      }
    }
    .body {
      .cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(285px, max-content));
        gap: 2em;
        padding: 0 2em 0;

        .cardsItem {
          display: flex;
          flex-direction: column;
          border: 1px solid #ddd;
          border-radius: 6px;
          justify-content: space-between;
          max-width: 450px;
          color: #707070;
          .top {
            img {
              border-top-left-radius: 6px;
              border-top-right-radius: 6px;
              width: 100%;
              clip-path: inset(0 0 0 round 1% 1% 0 0);
            }
            div {
              font-size: 14px;
                color: #333;
              padding: 1em;
              min-height: 4em;
              a {
                font-size: 14px;
                color: #333;
                font-weight: 700;
                display: -webkit-box;
                overflow: hidden;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                line-height: 20px;
              }
              span {
                
            }
          }
        }
        .bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #fff;
          font-size: 12px;
          border-top: 1px solid #ddd;
          border-bottom-left-radius: 6px;
          border-bottom-right-radius: 6px;
          .left {
            border-right: 1px solid #ddd;
            padding: 8px;
          }
          .right {
            display: flex;
            align-items: center;
            padding: 6px;
            div:nth-child(1) {
              padding: 0 4px;
              display: flex;
              align-items: center;
              gap: 4px;
            }
            div:nth-child(2) {
              display: flex;
              align-items: center;
              gap: 4px;
            }
          }
        }
      }
    }
  }
}
}
</style>
