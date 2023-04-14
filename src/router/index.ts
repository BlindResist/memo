import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'
import MainPage from '../views/main-page.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  },
  {
    path: '/memos',
    name: 'memos',
    component: () => import('../views/memos-page.vue')
  },
  {
    path: '/checklists',
    name: 'checklists',
    component: () => import('../views/checklists/root-page.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/checklists/list-page.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
