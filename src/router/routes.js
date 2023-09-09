// 对外暴露常量路由
export const constRoute = [
  {
    path: "/home",
    component: () => import("../pages/home/index.vue"),
    name: "Home",
    meta: { title: '首页' }
  },
  {
    path: "/404",
    component: () => import("../pages/404/index.vue"),
    name: "404",
    meta: { title: '404' }
  },
  {
    path: "/login",
    component: () => import("../pages/login/index.vue"),
    name: "Logon",
    meta: { title: '登录' }
  },
  {
    path: '/upload',
    component: () => import('../pages/upload/index.vue'),
    name: 'Upload',
    meta: { title: '上传' }

  },
  {
    path: '/competition',
    component: () => import('../pages/competition/index.vue'),
    name: 'Competition',
    meta: { title: '教学' }
  },
  {
    path: '/projects',
    component: () => import('../pages/projects/index.vue'),
    name: 'Projects',
    meta: { title: '项目' }
  },
  {
    path: '/contest',
    component: () => import('../pages/contest/index.vue'),
    name: 'Contest',
    meta: { title: '比赛' }
  },
  // 重定向
  {
    path: "/",
    redirect: { name: "404" },
  },
];
