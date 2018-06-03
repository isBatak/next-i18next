import * as i18next from 'i18next';
import * as I18NextXhrBackend from 'i18next-xhr-backend';
import * as I18NextBrowserLanguageDetector from 'i18next-browser-languagedetector';

const options = {
  fallbackLng: 'en',
  load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  debug: false, // process.env.NODE_ENV !== 'production',
  saveMissing: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
    format: (value, format) => {
      if (format === 'uppercase') return value.toUpperCase()
      return value;
    }
  }
}

export const i18nInstance = i18next;

// for browser use xhr backend to load translations and browser lng detector
if (process['browser']) {
  i18nInstance
    .use(I18NextXhrBackend)
    // .use(Cache)
    .use(I18NextBrowserLanguageDetector);
}

// initialize if not already initialized
if (!i18nInstance.isInitialized) {
  // @ts-ignore
  i18nInstance.init(options);
}

// a simple helper to getInitialProps passed on loaded i18n data
export const getInitialProps = (req, namespaces) => {
  if (!namespaces) namespaces = i18nInstance.options.defaultNS;
  if (typeof namespaces === 'string') namespaces = [namespaces];

  req.i18n.toJSON = () => null; // do not serialize i18next instance and send to client

  const initialI18nStore = {};
  req.i18n.languages.forEach((l) => {
    initialI18nStore[l] = {}
    namespaces.forEach((ns) => {
      initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {};
    })
  })

  return {
    i18n: req.i18n, // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore,
    initialLanguage: req.i18n.language
  };
}

// @ts-ignore
export const I18n = i18next.default;
