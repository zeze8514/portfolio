import { createRouter, createWebHistory } from 'vue-router'

// 경로 지정
const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/views/main'), // 동적 import
    },
    {
        path: '/test1',
        name: 'test1',
        component: () => import('@/views/test1'),
    },
    {
        path: '/test2',
        name: 'test2',
        component: () => import('@/views/test2'),
    },
]
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// export const router = createRouter({
//   history: createWebHistory(),
//   routes,
// });

export default router;