import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import PTBR from './locales/PT/pt-br.json';
import ENUS from './locales/EN/en-us.json';

const resources = {
    'pt-BR': PTBR,
    'en-us':ENUS
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'PT',
        interpolation: {
            escapeValue : false,
        }
    
    }) 

export default i18n;