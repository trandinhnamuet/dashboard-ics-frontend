import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from './vi.json'
import en from './en.json'
import zh from './zh.json'
import ja from './ja.json'
import ko from './ko.json'

// Khởi tạo i18n
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
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false // React đã escape HTML
    },
    debug: process.env.NODE_ENV === 'development'
  })

export default i18n