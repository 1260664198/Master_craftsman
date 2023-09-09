// 对外暴露常量路由
export const constRoute = [
  {
    path: "/home",
    component: () => import("../pages/home/index.vue"),
    name: "home",
  },
  {
    path: "/404",
    component: () => import("../pages/404/index.vue"),
    name: "404",
  },
  {
    path: '/upload',
    component: () => import('../pages/upload/index.vue'),
    name: 'upload'
  },
  {
    path: '/competition',
    component: () => import('../pages/competition/index.vue'),
    name: 'competition'
  },
  {
    path: '/projects',
    component: () => import('../pages/projects/index.vue'),
    name: 'projects',
    meta: { title: '项目' }
  },
  {
    path: '/contest',
    component: () => import('../pages/contest/index.vue'),
    name: 'contest',
    meta: { title: '比赛' }
  },
  // 重定向
  {
    path: "/",
    redirect: { name: "404" },
  },
];
