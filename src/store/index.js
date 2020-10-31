import { createStore } from 'vuex';
import { deTranslations } from '../config/deTranslations';
import { enTranslations } from '../config/enTranslations';

const state = {
  translations: undefined,
}

const getters = {
  translations(state) {
    return state.translations;
  }
}

const mutations = {
  initiliaseLanguageFromLocalStorage(state){
    switch (localStorage.getItem('languageCode')) {
      case 'de':
        state.translations = deTranslations;
        break;
      case 'en':
        state.translations = enTranslations;
        break;
    }
  },
  setLanguage(state, languageCode) {
    switch (languageCode) {
      case 'de':
        state.translations = deTranslations;
        localStorage.setItem('languageCode', 'de');
        break;
      case 'en':
        state.translations = enTranslations;
        localStorage.setItem('languageCode', 'en');
        break;
    }
  }
}

export default createStore({
  state,
  getters,
  mutations
})
