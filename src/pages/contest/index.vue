<script setup></script>

<template>
  <div class="container">
    <!-- 比赛区域内容 -->
    <div class="contest">
      <img src="../../assets/contest-badge.png" />
      <h1>比赛</h1>
      <p>
        迄今为止，我们已经举办了
        <router-link to="path" class="underline">
          1,000 多场比赛，获奖者超过 19,000 名 </router-link
        >加入
        <router-link to="path" class="underline">赢家圈子</router-link>
        ！
      </p>
    </div>

    <!-- 卡片区域内容 -->
    <div class="flex">
      <div class="flexItem">
        <router-link to="path">
          <img
            src="https://content.instructables.com/FUP/T1ET/LLNQWK8W/FUPT1ETLLNQWK8W.jpg?auto=webp&frame=1&width=1000"
          />
        </router-link>
        <div class="box">
          <div>
            <p><span>11</span> 月 <span>13</span> 日截止</p>
            <p><span>25</span>奖品 <span>|</span> <span>0</span>条目</p>
          </div>
          <el-button type="large" color="#f6f6f6" dark>立即进入！</el-button>
        </div>
      </div>

      <div class="flexItem">
        <router-link to="path">
          <img
            src="https://content.instructables.com/FUP/T1ET/LLNQWK8W/FUPT1ETLLNQWK8W.jpg?auto=webp&frame=1&width=1000"
          />
        </router-link>
        <div class="box">
          <div>
            <p><span>11</span> 月 <span>13</span> 日截止</p>
            <p><span>25</span>奖品 <span>|</span> <span>0</span>条目</p>
          </div>
          <el-button type="large" color="#f6f6f6" dark>立即进入！</el-button>
        </div>
      </div>

      <div class="flexItem">
        <router-link to="path">
          <img
            src="https://content.instructables.com/FUP/T1ET/LLNQWK8W/FUPT1ETLLNQWK8W.jpg?auto=webp&frame=1&width=1000"
          />
        </router-link>
        <div class="box">
          <div>
            <p><span>11</span> 月 <span>13</span> 日截止</p>
            <p><span>25</span>奖品 <span>|</span> <span>0</span>条目</p>
          </div>
          <el-button type="large" color="#f6f6f6" dark>立即进入！</el-button>
        </div>
      </div>

      <div class="flexItem">
        <router-link to="path">
          <img
            src="https://content.instructables.com/FUP/T1ET/LLNQWK8W/FUPT1ETLLNQWK8W.jpg?auto=webp&frame=1&width=1000"
          />
        </router-link>
        <div class="box">
          <div>
            <p><span>11</span> 月 <span>13</span> 日截止</p>
            <p><span>25</span>奖品 <span>|</span> <span>0</span>条目</p>
          </div>
          <el-button type="large" color="#f6f6f6" dark>立即进入！</el-button>
        </div>
      </div>
    </div>

    <!-- 查看未来和过去的比赛 -->
    <div class="btnBox">
      <h1>查看未来和过去的比赛。</h1>
      <div class="btn">
        <el-button type="info" size="large">即将举行的比赛</el-button>
        <el-button type="info" size="large">比赛档案</el-button>
      </div>
    </div>

    <!-- 优胜者圈子 -->
    <div class="success">
      <h1>优胜者圈子</h1>
      <p>查看最近结束的这些比赛的最佳获胜者！</p>
      <hr class="hr" />
      <div class="successBox">
        <div class="left">
          <div>
            <router-link to="path">
              <img
                src="https://content.instructables.com/F45/MPO1/LIOKVJPE/F45MPO1LIOKVJPE.jpg?auto=webp&crop=1240%2C600"
              />
            </router-link>
          </div>
          <router-link class="a" to="path">查看所有获奖者</router-link>

        </div>
        <div class="right">
          <ul>
            <li>
              <span class="position">
                <span>123123</span>
                <span></span>
              </span>
              <img
                src="https://content.instructables.com/FNZ/SVG7/LKL60B1X/FNZSVG7LKL60B1X.png?auto=webp&crop=1%3A1&frame=1&width=320"
              />
              <div>
                <p>不锈钢大马士革戒指</p>
                <p>通过GoldenFabrications</p>
              </div>
            </li>
            <li>
              <img
                src="https://content.instructables.com/FNZ/SVG7/LKL60B1X/FNZSVG7LKL60B1X.png?auto=webp&crop=1%3A1&frame=1&width=320"
              />
              <div>
                <p>不锈钢大马士革戒指</p>
                <p>通过GoldenFabrications</p>
              </div>
            </li>
            <li>
              <img
                src="https://content.instructables.com/FNZ/SVG7/LKL60B1X/FNZSVG7LKL60B1X.png?auto=webp&crop=1%3A1&frame=1&width=320"
              />
              <div>
                <p>不锈钢大马士革戒指</p>
                <p>通过GoldenFabrications</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <hr class="hr" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .contest {
    padding: 23px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 75px;
      height: 75px;
      margin: 10px;
    }
    h1 {
      font-weight: 700;
      font-size: 42px;
      font-family: myriad-pro, sans-serif;
      text-transform: uppercase;
      color: #333;
      vertical-align: inherit;
      margin: 6px 0;
    }
    p {
      margin: 3px 0 10px;
      text-align: center;
      font-size: 18px;
      line-height: 1.45;
      font-family: Helvetica, Arial, sans-serif;
      color: #555;
    }
  }
  .flex {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 20px;
    .flexItem {
      width: 45%;
      box-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
      border: 1px solid rgba(0, 0, 0, 0.1);
      margin-bottom: 20px;
      img {
        width: 100%;
      }
      .box {
        display: flex;
        padding: 20px 15px 15px 25px;
        color: #757575;
        justify-content: space-between;
        div {
          display: flex;
          flex-direction: column;
          p:nth-child(1) {
            font-size: 18px;
            font-weight: 400;
            color: #333;
          }
          p:nth-child(2) {
            margin-top: 10px;
            font-size: 14px;
            color: #757575;
          }
        }
      }
    }
  }

  .btnBox {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: #f6f6f6;
    margin: 30px 0 60px;
    padding-top: 30px;
    padding-bottom: 30px;
    text-align: center;
    h1 {
      font-size: 18px;
      margin: 20px 0;
    }
    .btn {
      display: flex;
    }
  }

  .success {
    background: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0;
    h1 {
      font-weight: 700;
      font-size: 42px;
      font-family: myriad-pro, sans-serif;
      text-transform: uppercase;
      color: #333;
      margin-bottom: 5px;
    }
    p {
      text-align: center;
      font-size: 18px;
      line-height: 1.45;
      font-family: Helvetica, Arial, sans-serif;
      color: #555;
    }
    .hr {
      width: 95.4%;
      border: 0;
      border-top: 1px solid #eee;
      margin: 30px 0;
      border-bottom: 1px solid #fff;
    }
    .successBox {
      display: flex;
      background-color: #f6f6f6;
      justify-content: space-between;
      margin: 0 30px;
      .left {
        width: 40%;
        display: flex;
        align-items: center;
        flex-direction: column;
        div {
          width: 100%;
          img {
            width: 100%;
            object-fit: cover;
          }
        }
        .a {
          font-size: 17.5px;
          border-radius: 6px;
          border: 1px solid #dedede;
          padding: 17px 19px;
          margin-top: 9px;
          width: 90%;
          text-align: center;
          color: #333;
        }
        .a:hover {
          background: #757575;
        }
      }
      .right {
        margin-left: 20px;
        font-size: 14px;
        text-align: left;
        width: 58%;
        position: relative;
        ul {
          display: flex;
          justify-content: space-evenly;
          li {
            .position {
              position: absolute; 
              top: 20px;
              span:nth-child(1) {
                font-weight: 600;
                color: #fff;
                font-family: myriad-pro,sans-serif;
                text-transform: uppercase;
                font-size: 16px;
                padding: 6px 10px;
                background-color: #f6b21f;
              }
              span:nth-child(2) {
                content:" ";
                background: url(https://www.instructables.com/assets/img/contest/contest-flag-endcap.png) no-repeat;
                background-size: contain;
                width: 7px;
                height: 32px;
                position: absolute;
                margin-top: -9px;
              } 
            }
            padding: 0 4px;
            width: 32%;
            img {
              width: 100%;
            }
            div {
              display: flex;
              flex-direction: column;
              padding: 10px 13px 20px;
              background: #fff;
              p {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
