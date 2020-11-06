import Home from "@/views/Home.vue";
import Chat from '@/views/Chat.vue';
import Language from '@/views/Language.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: undefined,
    beforeEnter: (from, to, next) => {
      const languageCode = localStorage.getItem("languageCode");
      (languageCode) ? next({ name: `home-${languageCode}` }) : next({ name: "language" });
    }
  },
  {
    path: '/select-language/',
    name: 'language',
    component: Language
  },
  {
    path: '/de/',
    name: 'home-de',
    meta: {
      languageCode: "de",
    },
    component: Home
  },
  {
    path: '/en/',
    name: 'home-en',
    meta: {
      languageCode: "en",
    },
    component: Home
  },
  {
    path: '/de/chat/',
    name: 'chat-de',
    meta: {
      languageCode: "de",
    },
    component: Chat
  },
  {
    path: '/en/chat/',
    name: 'chat-en',
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
