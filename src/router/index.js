import Language from '@/views/Language.vue';
import Home from "@/views/Home.vue";
import Chat from '@/views/Chat.vue';
import Contact from '@/views/Contact.vue';
import Mails from "@/views/Mails.vue";
import Photos from "@/views/Photos.vue";
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
  {
    path: '/de/kontakt/',
    name: 'contact-de',
    meta: {
      languageCode: "de",
    },
    component: Contact
  },
  {
    path: '/en/contact/',
    name: 'contact-en',
    meta: {
      languageCode: "en",
    },
    component: Contact
  },
  {
    path: '/de/mails/',
    name: 'mails-de',
    meta: {
      languageCode: "de",
    },
    component: Mails
  },
  {
    path: '/en/mails/',
    name: 'mails-en',
    meta: {
      languageCode: "en",
    },
    component: Mails
  },
  {
    path: '/de/fotos/',
    name: 'photos-de',
    meta: {
      languageCode: "de",
    },
    component: Photos
  },
  {
    path: '/en/photos/',
    name: 'photos-en',
    meta: {
      languageCode: "en",
    },
    component: Photos
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
