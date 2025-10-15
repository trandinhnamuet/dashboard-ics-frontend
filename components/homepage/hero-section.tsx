'use client'

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Zap, Globe, Award } from "lucide-react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import useAuthStore from "@/hooks/use-auth-store"
import FlipNumbers from "react-flip-numbers"
import { useEffect, useState } from "react"

export function HeroSection() {
  const { t } = useTranslation();
  const { isAuthenticated } = useAuthStore()
  const [isVisible, setIsVisible] = useState(false)

  // Trigger animation when component becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('trust-indicators')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="home" className="relative py-15 lg:py-24 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50" />
      <div className="absolute inset-0 bg-[url('/abstract-cloud-network-pattern.jpg')] opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
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
            <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-card border border-border">
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-xs sm:text-sm text-foreground">{t('homepage.hero.features.visualization')}</p>
                  <p className="text-xs text-muted-foreground">{t('homepage.hero.features.visualizationDescription')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-card border border-border">
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                  <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-xs sm:text-sm text-foreground">{t('homepage.hero.features.optimization')}</p>
                  <p className="text-xs text-muted-foreground">{t('homepage.hero.features.optimizationDescription')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 rounded-lg bg-card border border-border">
                <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                  <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-xs sm:text-sm text-foreground">{t('homepage.hero.features.integration')}</p>
                  <p className="text-xs text-muted-foreground">{t('homepage.hero.features.integrationDescription')}</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6"
                onClick={() => {
                  const el = document.getElementById('pricing');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#pricing';
                  }
                }}
              >
                {t('homepage.hero.getStarted')}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
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
            <div id="trust-indicators" className="flex items-center justify-between sm:justify-start sm:space-x-6 pt-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary flex items-center justify-center">
                  <FlipNumbers
                    height={24}
                    width={16}
                    color="hsl(var(--primary))"
                    play={isVisible}
                    duration={4}
                    numbers="400"
                    numberStyle={{
                      fontFamily: 'inherit',
                      fontWeight: 'bold',
                    }}
                  />
                  <span className="ml-1">+</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{t('homepage.hero.trustIndicators.customers')}</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary flex items-center justify-center">
                  <FlipNumbers
                    height={24}
                    width={16}
                    color="hsl(var(--primary))"
                    play={isVisible}
                    duration={4}
                    numbers="100"
                    numberStyle={{
                      fontFamily: 'inherit',
                      fontWeight: 'bold',
                    }}
                  />
                  <span className="ml-1">%</span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{t('homepage.hero.trustIndicators.realTime')}</p>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary flex items-center justify-center">
                  <FlipNumbers
                    height={24}
                    width={16}
                    color="hsl(var(--primary))"
                    play={isVisible}
                    duration={4}
                    numbers="24"
                    numberStyle={{
                      fontFamily: 'inherit',
                      fontWeight: 'bold',
                    }}
                  />
                  <span className="mx-0.5">/</span>
                  <FlipNumbers
                    height={24}
                    width={16}
                    color="hsl(var(--primary))"
                    play={isVisible}
                    duration={4}
                    numbers="7"
                    numberStyle={{
                      fontFamily: 'inherit',
                      fontWeight: 'bold',
                    }}
                  />
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">{t('homepage.hero.trustIndicators.support')}</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative lg:-ml-8">
            <div className="relative z-10">
              <video
                playsInline={true}
                width="100%"
                style={{ objectFit: 'contain', aspectRatio: '16/9' }}
                autoPlay={true}
                muted={true}
                loop={true}
                preload="auto"
                controls={true}
                className="w-full max-[1800px]:max-w-full min-[1800px]:lg:min-w-[925px] h-auto rounded-xl lg:rounded-2xl shadow-xl lg:shadow-2xl min-[1150px]:max-[1280px]:min-w-[570px] min-[1350px]:max-[1400px]:min-w-[670px] min-[1400px]:max-[1500px]:min-w-[700px]  min-[1500px]:max-[1535px]:min-w-[750px]"
              >
                <source src="/Smart-dashboard-overview.mp4" type="video/mp4" />
                {t('homepage.hero.videoFallback')}
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}