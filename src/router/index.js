import { createRouter, createWebHashHistory } from "vue-router";
import { constRoute } from "./routes";

// 创建路由器并导出
const routes = createRouter({
  history: createWebHashHistory(),
  routes: constRoute,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // 如果之前已经保存了滚动位置，则跳转到保存的位置
      return savedPosition;
    } else if (to.hash) {
      // 如果跳转带有锚点（hash），则滚动到对应的元素
      return {
        selector: to.hash,
        behavior: "smooth", // 可选的平滑滚动效果
      };
    } else {
      // 默认情况下，滚动到页面顶部
      return { x: 0, y: 0 };
    }
  },
});

export default routes