"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Menu, X, User, LogOut, Settings } from "lucide-react"
import { SimpleDropdown } from "@/components/ui/simple-dropdown"
import { LanguageSelector } from "@/components/ui/language-selector"
import { ThemeToggle } from "@/components/ui/theme-toggle"

import useAuthStore from "@/hooks/use-auth-store"
import { useToast } from "@/hooks/use-toast"
import { authApi } from "@/lib/auth-api"

export function Header() {
  const { t } = useTranslation()
  const { toast } = useToast()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, isAuthenticated, logout, setLoading, setError, initAuth } = useAuthStore()

  // {t('header.comments.initAuth')}
  useEffect(() => {
    initAuth()
  }, [initAuth])

  // {t('header.comments.handleScroll')}
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const sectionId = hash.substring(1) // {t('header.comments.removeHash')}
      setTimeout(() => {
        handleSmoothScroll(sectionId)
      }, 100) // {t('header.comments.delayLoad')}
    }
  }, [])

  const handleLogout = async () => {
    try {
      setLoading(true)
      await authApi.logout()
      logout()
      toast({
        title: t('common.logoutSuccess'),
        variant: 'success'
      })
      router.push('/')
    } catch (error: any) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleLoginClick = () => {
    router.push('/login')
  }

  const handleProfileClick = () => {
    router.push('/profile')
  }

  // {t('header.comments.smoothScroll')}
  const handleSmoothScroll = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  // {t('header.comments.navigateSection')}
  const handleNavigateToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      // {t('header.comments.notHomePage')}
      router.push(`/#${sectionId}`)
    } else {
      // {t('header.comments.alreadyHome')}
      handleSmoothScroll(sectionId)
    }
  }

  // {t('header.comments.scrollToTop')}
  const handleHomeClick = () => {
    if (window.location.pathname !== "/") {
      router.push("/")
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* {t('header.comments.logo')} */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image
              src="/SMART DASHBOARD.png"
              alt={t('header.altText')}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">{t('header.logoTitle')}</h1>
              <p className="text-xs text-muted-foreground">{t('header.logoSubtitle')} </p>
            </div>
          </Link>

          {/* {t('header.comments.desktopNav')} */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0"
              onClick={handleHomeClick}
            >
              {t('header.home')}
            </button>
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0"
              onClick={() => handleNavigateToSection('services')}
            >
              {t('header.services')}
            </button>
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0"
              onClick={() => handleNavigateToSection('pricing')}
            >
              {t('header.pricing')}
            </button>
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0"
              onClick={() => handleNavigateToSection('industries')}
            >
              {t('header.customers')}
            </button>
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            >
              {t('header.support')}
            </button>
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0"
              onClick={() => router.push('/articles/articles-list')}
            >
              {t('header.news')}
            </button>
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0"
              onClick={() => router.push('/contact-info')}
            >
              {t('header.contact')}
            </button>
          </nav>

          <span className="hidden 2xl:inline-block bg-red-600 text-white font-semibold rounded-full px-4 py-1 text-sm shadow-md mr-2 select-none">
            {t('header.hotline')}
          </span>

          {/* {t('header.comments.authSection')} */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* {t('header.comments.mobileMenuButton')} */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* {t('header.comments.mobileMenu')} */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-3">
              <button
                type="button"
                className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0 text-left"
                onClick={() => { setIsMenuOpen(false); handleHomeClick() }}
              >
                {t('header.home')}
              </button>
              <button
                type="button"
                className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0 text-left"
                onClick={() => { setIsMenuOpen(false); handleNavigateToSection('services') }}
              >
                {t('header.services')}
              </button>
              <button
                type="button"
                className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0 text-left"
                onClick={() => { setIsMenuOpen(false); handleNavigateToSection('pricing') }}
              >
                {t('header.pricing')}
              </button>
              <button
                type="button"
                className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0 text-left"
                onClick={() => { setIsMenuOpen(false); handleNavigateToSection('industries') }}
              >
                {t('header.customers')}
              </button>
              <button
                type="button"
                className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0 text-left"
                onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }) }}
              >
                {t('header.support')}
              </button>
              <button
                type="button"
                className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0 text-left"
                onClick={() => { setIsMenuOpen(false); router.push('/articles/articles-list') }}
              >
                {t('header.news')}
              </button>
              <button
                type="button"
                className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0 text-left"
                onClick={() => { setIsMenuOpen(false); router.push('/contact-info') }}
              >
                {t('header.contact')}
              </button>
            </nav>
            <div className="mt-4 pt-4 border-t border-border space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{t('header.language')}</span>
                <div className="flex items-center space-x-2">
                  <LanguageSelector />
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
