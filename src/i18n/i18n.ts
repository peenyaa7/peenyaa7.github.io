import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { es } from './es';
import { en } from './en';

type Locale = {
    [key: string]: string
}

export const LOCALES: Locale = {
    es: 'Español',
    en: 'English',
}

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            es: { translation: es }
        },
        lng: "es",
        fallbackLng: "es",
        interpolation: {
            escapeValue: false
        },
    });

export default i18n;