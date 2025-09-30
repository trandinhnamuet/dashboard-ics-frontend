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

  // Khởi tạo auth khi component mount
  useEffect(() => {
    initAuth()
  }, [initAuth])

  // Xử lý scroll khi có hash trong URL
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const sectionId = hash.substring(1) // Bỏ ký tự '#'
      setTimeout(() => {
        handleSmoothScroll(sectionId)
      }, 100) // Delay nhỏ để đảm bảo page đã load
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

  // Scroll mượt đến section
  const handleSmoothScroll = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Scroll đến section, nếu không ở trang chủ thì quay về trang chủ trước
  const handleNavigateToSection = (sectionId: string) => {
    if (window.location.pathname !== "/") {
      // Nếu không ở trang chủ, chuyển về trang chủ với hash
      router.push(`/#${sectionId}`)
    } else {
      // Nếu đã ở trang chủ, scroll trực tiếp
      handleSmoothScroll(sectionId)
    }
  }

  // Scroll lên đầu trang
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
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image
              src="/SMART DASHBOARD.png"
              alt="Smart Dashboard Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-foreground">ICS Smart Dashboard</h1>
              <p className="text-xs text-muted-foreground">Bảng điều khiển thông minh </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
              Khách hàng
            </button>
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0"
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            >
              {t('header.support')}
            </button>
            {/* <button
              type="button"
              className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0"
              onClick={() => router.push('/articles/articles-list')}
            >
              Tin tức
            </button> */}
            <button
              type="button"
              className="text-foreground hover:text-primary transition-colors font-medium bg-transparent border-none px-0"
              onClick={() => router.push('/contact-info')}
            >
              {t('header.contact')}
            </button>
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
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
                Khách hàng
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
                Tin tức
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
                <span className="text-sm text-muted-foreground">Ngôn ngữ</span>
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
