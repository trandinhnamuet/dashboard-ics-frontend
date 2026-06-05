'use client'

import { ReactNode, useEffect } from 'react'
import '@/i18n'
import i18n from '@/i18n'

interface I18nProviderProps {
  children: ReactNode
}

export function I18nProvider({ children }: I18nProviderProps) {
  // Restore saved language only AFTER hydration to avoid server/client mismatch
  useEffect(() => {
    const savedLang = localStorage.getItem('preferred-language')
    if (savedLang && ['vi', 'en', 'zh', 'ja', 'ko'].includes(savedLang) && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang)
    }
  }, [])

  return <>{children}</>
}