import { createStore } from 'vuex';
import { deTranslations } from '../config/translations/deTranslations';
import { enTranslations } from '../config/translations/enTranslations';

const state = {
  translations: undefined,
}

const getters = {
  translations(state) {
    return state.translations;
  }
}

const mutations = {
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
