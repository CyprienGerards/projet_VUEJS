// src/i18n.js
import { createI18n } from 'vue-i18n';

import en from './languages/en.js';
import fr from './languages/fr.js';

const i18n = createI18n({
  locale: 'en', // ou 'fr' par défaut si tu préfères
  fallbackLocale: 'en',
  messages: {
    en,
    fr
  }
});


export default i18n;
