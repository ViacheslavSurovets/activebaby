import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEng from '../../locales/en-EN/translation';
import translationRu from '../../locales/ru-RU/translation';

i18n
  .use ( Backend )
  .use ( LanguageDetector )
  .use ( initReactI18next )
  .init ( {
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: [ 'querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag', 'path', 'subdomain' ],
      // keys or params to lookup language from
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      // cache user language on
      caches: [ 'localStorage', 'cookie' ],
      excludeCacheFor: [ 'cimode' ], // languages to not persist (cookie, localStorage)
      // optional expire and domain for set cookie
      cookieMinutes: 10,
      cookieDomain: 'myDomain',
    },
    resources: {
      en: {
        translations: translationEng
      },
      'ru-RU': {
        translations: translationRu
      }
    },
    ns: [ 'translations' ],
    defaultNS: [ 'translations' ],
    react: {
      wait: true
    }

  }
  );

export default i18n;
