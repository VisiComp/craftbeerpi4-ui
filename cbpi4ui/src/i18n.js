import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from './locales/pt-BR/translation.json';
import ENUS from './locales/en/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from "i18next-http-backend" // <---- add this


i18n
  .use(XHR) // <---- add this

  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    
    resources : {
        en:{
            translation: ENUS
        },
        "pt-BR":{
            translation: PTBR
        }
    }
});

export default i18n;