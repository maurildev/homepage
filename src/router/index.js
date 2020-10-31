import { createRouter, createWebHashHistory } from 'vue-router'
import Language from '@/views/Language.vue';

const routes = [
  {
    path: '/',
    name: 'Language',
    component: Language
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
