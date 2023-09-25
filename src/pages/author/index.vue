<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>

<template>
     <el-row class="container">
        <!-- 左侧内容区 -->
        <el-col class="left" :span="18">
            <h1>使用 Arduino 的 PPG 心电图</h1>
            <div class="content">
                <p class="author">
                    <span>作者：</span>
                    <span class="aBox">
                        <router-link to="/">
                            Peter Balch
                        </router-link>
                    </span>
                </p>
                <p class="author">
                    <span class="aBox">
                        <router-link to="/">
                            Arduino 电路
                        </router-link>
                    </span>
                </p>
                <div class="svg">
                    <svg class='svg-icon views' xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path fill='#00A1CF' d='M4.37 12c0-3.41 2.23-6.29 5.31-7.27C3.42 6.02.02 12 .02 12s3.4 5.98 9.67 7.26A7.622 7.622 0 0 1 4.37 12zm19.61 0s-3.4-5.98-9.67-7.27c3.08.98 5.31 3.86 5.31 7.27 0 3.4-2.23 6.28-5.31 7.26 6.27-1.28 9.67-7.26 9.67-7.26zm-7.03-2.43c-.33.66-1.01 1.12-1.8 1.12-1.11 0-2.02-.91-2.02-2.02 0-.75.41-1.41 1.02-1.75-.66-.28-1.39-.44-2.15-.44-3.05 0-5.52 2.47-5.52 5.52 0 3.05 2.47 5.52 5.52 5.52 3.05 0 5.52-2.47 5.52-5.52 0-.87-.2-1.7-.57-2.43z'/></svg>
                    <span>613</span>
                    
                    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path fill='#C20089' d='M11.98 21s-.5-.71-3.38-3.16-5.09-5.12-5.53-7.95c-.44-2.83 1.22-5.72 4.32-5.88 3.1-.16 4.59 2.18 4.59 2.18h.04s1.5-2.34 4.59-2.18c3.1.16 4.76 3.05 4.32 5.88-.44 2.83-2.66 5.5-5.53 7.95S12.02 21 12.02 21h-.04z'/></svg>
                    <span>7</span>
                    
                    <svg class='svg-icon featured' xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path fill='#faac18' d='M21.89 9.88c0 .17-.1.36-.31.57l-4.32 4.21 1.02 5.94c.01.06.01.14.01.24 0 .17-.04.31-.12.42a.42.42 0 0 1-.36.17c-.15 0-.31-.05-.48-.14L12 18.49 6.66 21.3c-.17.09-.33.14-.48.14-.17 0-.29-.06-.37-.17a.717.717 0 0 1-.12-.42c0-.05.01-.13.02-.24l1.02-5.94-4.33-4.21c-.2-.21-.3-.4-.3-.57 0-.29.22-.48.67-.55l5.97-.87 2.67-5.41c.15-.32.34-.49.58-.49s.43.16.58.49l2.67 5.41 5.97.87c.46.06.68.24.68.54z'/></svg>
                    <span>精选</span>
                </div>
            </div>

            <div class="body">
                <img src="https://content.instructables.com/FRZ/G2PF/LMDGTKN1/FRZG2PFLMDGTKN1.jpg?auto=webp&frame=1&fit=bounds&md=33013f394bff1653995f42f15dd86881" alt="">
            </div>
        </el-col>

        <!-- 广告区域 -->
        <el-col class="right" :span="6">
            <router-link to="path">
                <img src="https://images.ctfassets.net/jl5ii4oqrdmc/44cEYosx5cehaLlQp0skc3/1fe8810c00bbd7118e532d2e3c79713c/project-based-learning_inhouse-promo_600x1200.jpg?w=600&fm=webp">
            </router-link>
        </el-col>
    </el-row>
</template>

<style lang="scss" scoped>
.container {
    margin: 0 20px;
    .left {
        padding: 4em 0 0;
        h1 {
            color: #333;
            font-weight: 700;
            font-size: 28px;
            line-height: 34px;
            margin-bottom: 10px;
        }
        .content {
            color: #555;
            font-size: 14px;
            display: flex;
            align-items: center;

            .author {
                .aBox {
                    a {
                        color: #555;
                        position: relative;
                        transition: color 0.3s, border-bottom-width 0.3s;
                    }
                    a::before {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        left: 50%;
                        transform: translateX(-50%);
                        width: 0;
                        height: 2px; /* Adjust the height of the underline as needed */
                        background-color: #555; /* You can change this color to your preference */
                        transition: width 0.3s ease;
                        }

                        a:hover {
                        color: #000; /* Change the text color on hover if desired */
                        }

                        a:hover::before {
                        width: 100%;
                        }
                }
            }
            .author::after {
                content: ">";
                margin: 0 5px;
                color: #999;
                
            }
           
            .svg {
                display: flex;
                align-items: center;
                color: #999;
            }
        }
    }
    .right {
       margin-top: 2em;
       a {
        position: sticky; 
        top: 80px;
        img {
            width:100%;
        }
       }
    }
}

</style>