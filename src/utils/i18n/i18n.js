import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './en.json'
import ptbr from './ptbr.json'

i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'ptbr',
    resources: {
        en: en,
        ptbr: ptbr
    },
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false,
    }
})

export default i18n;
