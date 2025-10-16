import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from './vi.json'
import en from './en.json'
import zh from './zh.json'
import ja from './ja.json'
import ko from './ko.json'

// SSR: Luôn dùng 'vi' khi render server, chỉ đổi sau khi client mount
const isClient = typeof window !== 'undefined'

// Khởi tạo i18n
// Luôn dùng 'vi' khi SSR, chỉ đổi sau khi client mount
// (Tránh mismatch giữa server và client)
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
    lng: 'vi', // SSR luôn là 'vi'
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false // React đã escape HTML
    },
    debug: process.env.NODE_ENV === 'development'
  })

// Sau khi client mount, đổi sang ngôn ngữ đã lưu (nếu có)
if (isClient) {
  const savedLang = localStorage.getItem('preferred-language')
  if (savedLang && ['vi', 'en', 'zh', 'ja', 'ko'].includes(savedLang) && savedLang !== i18n.language) {
    i18n.changeLanguage(savedLang)
  }
}

// Lưu ngôn ngữ vào localStorage khi thay đổi
i18n.on('languageChanged', (lng: string) => {
  if (isClient) {
    localStorage.setItem('preferred-language', lng)
  }
})

export default i18n