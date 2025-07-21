// src/i18n.js
import { createI18n } from 'vue-i18n';

import en from './languages/en.js';
import fr from './languages/fr.js';

const i18n = createI18n({
  legacy: false,//composition API mode not legacy #VUE2
  locale: 'en', //default
  fallbackLocale: 'en',
  globalInjection: true,//for $t()
  messages: {
    en,
    fr
  }
});


export default i18n;
