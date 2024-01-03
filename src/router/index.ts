import type { App } from 'vue'
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw,
} from 'vue-router'
import LayoutMain from '../components/layout/LayoutMain.vue'
import Error from '../views/Error.vue'
import Home from '../views/Home.vue'

const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/list',
    name: 'ConferenceList',
    component: () => import('../views/List/index.vue'),
  },
  {
    path: '/list/:id',
    name: 'ConferencePage',
    component: () => import('../views/List/Detail.vue'),
  },
]

const routes: RouteRecordRaw[] = [
  {
    path: '/error',
    alias: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error,
  },
  {
    path: '/',
    component: LayoutMain,
    children: mainRoutes,
  },
]

export default function initializeRouter(app: App): Router {
  const router: Router = createRouter({
    history: createWebHistory(),
    routes,
  })

  app.use(router)

  return router
}
