'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Globe, Award } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import useAuthStore from "@/hooks/use-auth-store"

export function HeroSection() {
  const { t } = useTranslation()
  const { isAuthenticated } = useAuthStore()

  return (
    <section id="home" className="relative py-15 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
      <div className="absolute inset-0 bg-[url('/abstract-cloud-network-pattern.jpg')] opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm font-medium">
                <Award className="h-4 w-4 mr-2" />
                {t('homepage.hero.subtitle')}
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance leading-tight text-foreground">
                {t('homepage.hero.title')}
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty leading-relaxed">
                {t('homepage.hero.description')}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-card border border-border">
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm text-foreground truncate">Trực quan hóa dữ liệu</p>
                  <p className="text-xs text-muted-foreground">2D/3D Dashboard interface</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-card border border-border">
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm text-foreground truncate">Tối ưu vận hành</p>
                  <p className="text-xs text-muted-foreground">Tốc độ vượt trội</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-card border border-border">
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm text-foreground truncate">Tích hợp đa nền tảng</p>
                  <p className="text-xs text-muted-foreground">Hỗ trợ tích hợp các hệ thống</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                onClick={() => {
                  const el = document.getElementById('pricing')
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    window.location.href = '/#pricing'
                  }
                }}
              >
                {t('homepage.hero.getStarted')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-transparent text-foreground border-foreground hover:bg-foreground hover:text-background"
                >
                  <Link href="/contact-info">
                    {t('homepage.hero.contact')}
                  </Link>
                </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-between sm:justify-start sm:space-x-6 pt-4">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">400+</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Khách hàng</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">100%</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Real time</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-primary">24/7</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Hỗ trợ</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          {/* <div className="relative mt-8 lg:mt-0"> */}
          <div className="relative">
              <div className="relative z-10">
                <video
                  src="/Smart-dashboard-overview.mp4"
                  controls
                  autoPlay
                  muted
                  loop
                  className="w-full h-auto min-h-[250px] sm:min-h-[300px] lg:min-h-[500px] rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl border border-border"
                  style={{ aspectRatio: '16/9' }}
                >
                  <p>Trình duyệt của bạn không hỗ trợ phát video.</p>
                </video>
              </div>
            {/* Floating Elements */}
            {/* <div className="absolute -top-20 -right-6 bg-primary text-primary-foreground p-4 rounded-xl shadow-lg animate-bounce z-20">
              <p className="text-sm font-semibold">Tiết kiệm 40% chi phí</p>
            </div>
            <div className="absolute -bottom-20 -left-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg animate-bounce z-20">
              <p className="text-sm font-semibold">Triển khai trong 24h</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}
