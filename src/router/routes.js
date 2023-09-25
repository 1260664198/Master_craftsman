// 对外暴露常量路由
export const constRoute = [
  {
    path: "/home",
    component: () => import("@/pages/home/index.vue"),
    name: "Home",
    meta: { title: '首页' }
  },
  {
    path: "/404",
    component: () => import("@/pages/404/index.vue"),
    name: "404",
    meta: { title: '404' }
  },
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
    name: "Logon",
    meta: { title: '登录' }
  },
  {
    path: "/register",
    component: () => import("@/pages/register/index.vue"),
    name: "Register",
    meta: { title: '注册' }
  },
  {
    path: '/upload',
    component: () => import('@/pages/upload/index.vue'),
    name: 'Upload',
    meta: { title: '上传' }

  },
  {
    path: '/competition',
    component: () => import('@/pages/competition/index.vue'),
    name: 'Competition',
    meta: { title: '教学' }
  },
  {
    path: '/projects',
    component: () => import('@/pages/projects/index.vue'),
    name: 'Projects',
    meta: { title: '项目' },
    children: [
      {
        path: '/projects/circuits',
        name: 'Circuits',
        component: () => import('@/pages/projects/circuits/index.vue'),
        meta: { title: '电路' }
      },
      {
        path: '/projects/workshop',
        name: 'Workshop',
        component: () => import('@/pages/projects/workshop/index.vue'),
        meta: { title: '作坊' }
      },
      {
        path: '/projects/craft',
        name: 'Craft',
        component: () => import('@/pages/projects/craft/index.vue'),
        meta: { title: '工艺' }
      },
      {
        path: '/projects/cooking',
        name: 'Cooking',
        component: () => import('@/pages/projects/cooking/index.vue'),
        meta: { title: '烹饪' }
      },
      {
        path: '/projects/living',
        name: 'Living',
        component: () => import('@/pages/projects/living/index.vue'),
        meta: { title: '活的' }
      },
      {
        path: '/projects/outside',
        name: 'Outside',
        component: () => import('@/pages/projects/outside/index.vue'),
        meta: { title: '外部' }
      },
      {
        path: '/projects/teachers',
        name: 'Teachers',
        component: () => import('@/pages/projects/teachers/index.vue'),
        meta: { title: '教师' }
      },
    ]
  },
  {
    path: '/competition',
    component: () => import('@/pages/competition/index.vue'),
    name: 'Competition',
    meta: { title: '教学' }
  },
  {
    path: '/author',
    component: () => import('@/pages/author/index.vue'),
    name: 'Author',
    meta: { title: '作品' }
  },
  // 重定向
  {
    path: "/",
    redirect: { name: "404" },
  },
];
