import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import ar from './translations/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar }
    },
    lng: 'ar',
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false
    }
  });

// Set initial RTL direction and Arabic font
document.documentElement.dir = 'rtl';
document.documentElement.lang = 'ar';
document.documentElement.className = 'font-arabic';

export default i18n;