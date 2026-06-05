import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from './vi.json'
import en from './en.json'
import zh from './zh.json'
import ja from './ja.json'
import ko from './ko.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
      zh: { translation: zh },
      ko: { translation: ko },
      ja: { translation: ja },
    },
    lng: 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    },
    debug: process.env.NODE_ENV === 'development'
  })

// Persist language selection — runs only on client, safe to call after hydration
i18n.on('languageChanged', (lng: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('preferred-language', lng)
  }
})

export default i18n