<script setup></script>

<template>
  <!-- 全局底部导航组件 -->
  <footer class="footer">
    <div class="body">
      <!-- logo -->
      <div class="content1"></div>
      <!-- 类别 -->
      <div class="content2">
        <span class="title">类别</span>
        <ul>
          <li>
            <router-link to="/projects/circuits">
              <img src="../../assets/svg/chip-full.svg" />
              <span>电路</span>
            </router-link>
          </li>
          <li>
            <router-link to="/projects/workshop">
              <img src="../../assets/svg/wrench-full.svg" />
              <span>作坊</span>
            </router-link>
          </li>
          <li>
            <router-link to="/projects/craft">
              <img src="../../assets/svg/jianqie.svg" />
              <span>工艺</span>
            </router-link>
          </li>
          <li>
            <router-link to="/projects/cooking">
              <img src="../../assets/svg/daquanicon_icon-meishi.svg" />
              <span>烹饪</span>
            </router-link>
          </li>
          <li>
            <router-link to="/projects/living">
              <img src="../../assets/svg/fangzi.svg" />
              <span>活的</span>
            </router-link>
          </li>
          <li>
            <router-link to="/projects/outside">
              <img src="../../assets/svg/zihangche_2.svg" />
              <span>外部</span>
            </router-link>
          </li>
          <li>
            <router-link to="/projects/teachers">
              <img src="../../assets/svg/jurassic_book.svg" />
              <span>教师</span>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 资源 -->
      <div class="content3">
        <span class="head">资源</span>
        <ul>
          <li>
            <router-link to="path"><span>网站地图</span></router-link>
          </li>
          <li>
            <router-link to="path"><span>帮助</span></router-link>
          </li>
          <li>
            <router-link to="path"><span>接触</span></router-link>
          </li>
        </ul>
      </div>
      <!-- 关于我们 -->
      <div class="content3">
        <span class="head">关于我们</span>
        <ul>
          <li>
            <router-link to="path">
              <span>我们是谁</span>
            </router-link>
          </li>
          <li>
            <router-link to="path">
              <span>为什么要发布</span>
            </router-link>
          </li>
        </ul>
      </div>
      
      <!-- 找到我们 -->
      <div class="content5" style="width: 190px">
        <span>找到我们</span>
        <ul>
          <li>
            <router-link to="path">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.0948 14.998C17.3307 14.99 15.0838 17.2169 15.0597 19.985C15.0377 22.7591 17.2886 25.0341 20.0667 25.0442C22.8429 25.0542 25.1078 22.7892 25.1018 20.0131C25.0958 17.247 22.8589 15.0061 20.0948 14.998ZM28.1456 13.7785C27.1253 13.7765 26.3155 12.9687 26.3236 11.9585C26.3296 10.9363 27.1333 10.1445 28.1536 10.1505C29.1738 10.1565 29.9676 10.9683 29.9535 11.9886C29.9415 12.9848 29.1357 13.7805 28.1456 13.7785ZM20.0359 27.7774C15.7284 27.7473 12.2808 24.2476 12.3209 19.9441C12.363 15.6427 15.8546 12.2332 20.1882 12.2632C24.4295 12.2933 27.8671 15.805 27.8411 20.0764C27.813 24.3559 24.3173 27.8075 20.0359 27.7774ZM30.0697 8.84168C28.9553 8.05595 27.6685 7.76732 26.3435 7.75729C22.1703 7.72522 17.9931 7.72923 13.8199 7.75529C12.6253 7.76331 11.4547 8.00785 10.4124 8.63523C8.8049 9.60136 8.04723 11.1147 7.9009 12.9147C7.76661 14.6004 7.72852 16.2981 7.72451 17.9898C7.72051 20.7399 7.75458 23.49 7.81271 26.24C7.84077 27.5509 8.09533 28.8277 8.853 29.9402C9.83917 31.3854 11.2904 32.0869 12.9781 32.1971C15.3393 32.3535 22.5933 32.4136 23.846 32.3695C25.1429 32.3294 26.4498 32.3054 27.7266 32.111C29.8553 31.7842 31.3526 30.5936 31.9759 28.487C32.1964 27.7513 32.3207 26.9636 32.3428 26.1979C32.4129 23.492 32.447 20.782 32.441 18.074C32.437 16.3522 32.3909 14.6304 32.2606 12.9147C32.1323 11.263 31.4728 9.83187 30.0697 8.84168ZM35.0751 26.4355C35.0411 27.6421 34.8366 28.8247 34.3756 29.9452C33.219 32.7634 31.0683 34.3749 28.1038 34.8179C26.5223 35.0524 24.9007 35.0885 23.2952 35.0965C20.0801 35.1126 16.861 35.0705 13.6459 35.0083C12.0464 34.9803 10.505 34.6275 9.10792 33.8137C6.89905 32.5249 5.63427 30.5585 5.2855 28.065C5.061 26.4675 5.0129 24.8319 5.00287 23.2144C4.98684 20.0113 5.04096 16.8082 5.08906 13.6052C5.1071 12.4426 5.31356 11.3001 5.7405 10.2137C6.877 7.32735 9.04378 5.67972 12.0584 5.22472C13.6399 4.98619 23.2711 4.97016 26.4762 5.02829C28.0897 5.05835 29.6432 5.40512 31.0543 6.22693C33.2611 7.51577 34.542 9.4821 34.8727 11.9736C35.1092 13.7295 35.0972 15.5194 35.1673 17.2913C35.2014 18.1953 35.1733 19.0993 35.1733 20.0013C35.1874 20.0033 35.1994 20.0033 35.2114 20.0033C35.1693 22.146 35.1333 24.2927 35.0751 26.4355Z"
                  fill="white"
                />
              </svg>
            </router-link>
          </li>
          <li>
            <router-link to="path">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M29.4367 10.1115C27.6068 8.93415 26.2858 6.99412 25.8995 4.7228C25.8625 4.50591 25.8347 4.28665 25.8139 4.06738V3.33331H20.2409V26.1204C20.2316 28.7754 18.138 30.9276 15.5562 30.9276C14.7974 30.9276 14.0826 30.7417 13.4487 30.4128C11.9195 29.6191 10.8716 27.9865 10.8716 26.1037C10.8716 23.4391 12.9698 21.2798 15.5562 21.2798C16.0513 21.2798 16.5302 21.3585 16.979 21.5062V16.966V15.6742C16.514 15.6099 16.0444 15.5765 15.5747 15.5765C9.91844 15.5765 5.33325 20.2979 5.33325 26.1228C5.33325 29.774 7.1354 32.9915 9.87217 34.8839C11.5008 36.0112 13.4626 36.6666 15.5747 36.6666C21.231 36.6666 25.8162 31.9453 25.8162 26.1204V14.4778C27.9931 16.0794 30.6582 17.0208 33.5384 17.0208V11.3151C32.0902 11.3151 30.6674 10.9004 29.439 10.1091"
                  fill="white"
                />
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 分割线 -->
    <div class="hr">
      <hr />
    </div>
    <!-- 底部 -->
    <div class="foot">
      <div>
        <p>© 2023 创客世界公司</p>
      </div>
      <div>
        <ul>
          <li>
            <router-link to="">
            服务条款
            </router-link>
        </li>
          <span>|</span>
          <li>
            <router-link to="">
              隐私声明
            </router-link>
          </li>
          <span>|</span>
          <li>
            <router-link to="">
              隐私设置
            </router-link>
          </li>
          <span>|</span>
          <li>
            <router-link to="">
              法律声明和商标         
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <router-link to="path">
          <img
            style="height: 24px; width: auto"
            src="https://www.instructables.com/assets/img/footer/autodesk-logo-primary-white.png"
            alt=""
          />
        </router-link>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  background: rgb(85, 85, 85);
  padding: 30px 2.5vw 10px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .body {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    .content1 {
      height: 130px;
      width: 150px;
      margin-right: 10px;
      background: url("@/assets/robot-category-sprite.png") 0px 0px no-repeat;
    }
    .content2 {
      width: 425px;
      .title {
        color: rgb(255, 255, 255);
        display: inline-block;
        margin-bottom: 12px;
        font-weight: 500;
        letter-spacing: 0.5px;
        font-size: 18px;
      }
      ul {
        width: 280px;
        column-width: auto;
        column-count: 2;
        font-size: 14px;
        li {
          line-height: normal;
          a {
            color: rgb(187, 187, 187);
            line-height: 21px;
            display: inline-block;
            padding: 2px 0px;
            span {
              vertical-align: super;
              margin: -3px 12px 0 5px;
            }
          }
          a:hover {
            color: #fff;
          }
        }
      }
    }

    .content3 {
      width: 135px;
      .head {
        color: #fff;
        font-size: 18px;
        display: inline-block;
        margin-bottom: 12px;
        font-weight: 500;
        letter-spacing: 0.5px;
      }
      ul {
        list-style: none outside none;
        li {
          line-height: normal;
          span {
            font-size: 14px;
            color: #bbb;
            line-height: 21px;
            padding: 2px 0;
            display: inline-block;
          }
        }
        span:hover {
          color: #fff;
        }
      }
    }
    .content5 {
      span {
        color: #fff;
        font-size: 18px;
        display: inline-block;
        margin-bottom: 12px;
        font-weight: 500;
        letter-spacing: 0.5px;
      }
      ul {
        display: flex;
        li {
          a {
            fill: #bbb;
            margin-right: 5px;
            display: inline-block;
            vertical-align: middle;
          }
          a:hover {
            filter: brightness(0.7); /* 降低亮度，使图片变暗 */
          }
        }
      }
    }
  }
  .hr {
    width: 100%;
    hr {
      margin: 20px 0;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #fff;
    }
  }
  .foot {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #bbb;
    flex-wrap: wrap;
    p {
      margin: 3px 0 10px;
      font-size: 14px;
    }
    ul {
      display: flex; 
      color: #bbb;
      margin: 0 15px;
      li {
        a {
          color: #bbb;
          padding: 2px 0;
          font-size: 14px;
        }
        a:hover {
          color: #fff;
        }
      }
      span {
        margin: 0 5px;
      }
    }
  }
}
</style>
