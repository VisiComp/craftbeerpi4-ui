import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from './locales/pt-BR/translation.json';
import ENUS from './locales/en/translation.json';

const resources = {
    en:{
        translation: ENUS
    },
    ptbr:{
        translation: PTBR
    }
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ptbr',
        interpolation: {
            escapeValue : false,
        }
    
    }) 

export default i18n;