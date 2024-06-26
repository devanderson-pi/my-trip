import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import resources from '../data/translations';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  fallbackLng: 'en-US',
  interpolation: {
    escapeValue: false,
  },
  resources,
  supportedLngs: ['en-US', 'pt-BR'],
});
