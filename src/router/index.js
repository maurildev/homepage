import Chat from '@/views/Chat.vue';
import Language from '@/views/Language.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Language',
    component: Language
  },
  {
    path: '/de/chat/',
    name: 'deChat',
    meta: {
      languageCode: "de",
    },
    component: Chat
  },
  {
    path: '/en/chat/',
    name: 'enChat',
    meta: {
      languageCode: "en",
    },
    component: Chat
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
