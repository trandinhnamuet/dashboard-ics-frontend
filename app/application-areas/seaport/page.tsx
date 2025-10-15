"use client"

import { Anchor, TrendingUp, Shield, Clock, BarChart3, Ship, ChevronLeft, ChevronRight, Settings, Leaf, Zap, Factory } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "@/components/common/Image"
import Link from "next/link"
import { useState, useRef, useEffect, useCallback } from "react"
import { useTranslation } from "react-i18next"

export default function SeaportPage() {
  const { t } = useTranslation()
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    { src: "/application-areas/8.png", alt: t("seaport.slideshow.digitalTwin") },
    { src: "/application-areas/9.png", alt: t("seaport.slideshow.realTimeKPIs") },
    { src: "/application-areas/10.png", alt: t("seaport.slideshow.automation") }
  ]

  // Auto slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
  }

  const features = [
    {
      icon: TrendingUp,
      title: t("seaport.features.productivity.title"),
      description: t("seaport.features.productivity.description")
    },
    {
      icon: BarChart3,
      title: t("seaport.features.monitoring.title"),
      description: t("seaport.features.monitoring.description")
    },
    {
      icon: Shield,
      title: t("seaport.features.safety.title"),
      description: t("seaport.features.safety.description")
    }
  ]

  const metrics = [
    { label: t("seaport.metrics.productivity"), value: "30%" },
    { label: t("seaport.metrics.turnaroundTime"), value: "20%" },
    { label: t("seaport.metrics.safetyImprovement"), value: "40%" },
    { label: t("seaport.metrics.operationalEfficiency"), value: "35%" }
  ]

  const benefits = [
    t("seaport.benefits.automation"),
    t("seaport.benefits.logisticsCost"),
    t("seaport.benefits.accuracy"),
    t("seaport.benefits.customerExperience")
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/application-areas/seaport/image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Overlay (bỏ gradient) */}
        <div className="absolute inset-0 z-10" />
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl text-left ml-0 mr-auto">
            <div className="flex justify-start mb-6">
              <div className="p-4 rounded-full backdrop-blur-sm flex items-center justify-center">
                <div className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("seaport.hero.title")}
            </h1>
            <p className="text-xl text-blue-100 max-w-xl leading-relaxed">
              {t("seaport.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Industry Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Giới thiệu chung */}
            <div className="mb-16">
              
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  {t("seaport.introduction.paragraph1")}
                </p>

                <div className="mb-8 flex justify-center">
                  <Image 
                    src="/application-areas/6.png" 
                    alt={t("seaport.introduction.imageAlt")} 
                    className="max-w-lg h-auto rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                  <p className="text-gray-700 dark:text-gray-300">
                    {t("seaport.introduction.paragraph2")}
                  </p>
                </div>
              </div>
            </div>

            {/* Thách thức thực tế */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">{t("seaport.challenges.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t("seaport.challenges.description")}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Ảnh minh họa thách thức - Cột trái */}
                <div className="h-full flex items-center justify-center">
                  <Image 
                    src="/application-areas/7.png" 
                    alt={t("seaport.challenges.imageAlt")} 
                    className="object-contain max-h-80 md:max-h-96 w-auto rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Accordion cards - Cột phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="challenge-1" className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 rounded-lg">
                      <AccordionTrigger className="text-red-800 dark:text-red-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        {t("seaport.challenges.challenge1.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        <p className="mb-3">
                          {t("seaport.challenges.challenge1.description")}
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-red-300 dark:border-red-500">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {t("seaport.challenges.challenge1.impact")}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-2" className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                      <AccordionTrigger className="text-orange-800 dark:text-orange-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Clock className="h-5 w-5 mr-2" />
                        {t("seaport.challenges.challenge2.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t("seaport.challenges.challenge2.description")}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-3" className="border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                      <AccordionTrigger className="text-yellow-800 dark:text-yellow-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        {t("seaport.challenges.challenge3.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t("seaport.challenges.challenge3.description")}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-4" className="border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                      <AccordionTrigger className="text-purple-800 dark:text-purple-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Shield className="h-5 w-5 mr-2" />
                        {t("seaport.challenges.challenge4.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t("seaport.challenges.challenge4.description")}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Ứng dụng Smart Dashboard */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">{t("seaport.applications.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t("seaport.applications.description")}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Accordion cards - Cột trái */}
                <div className="space-y-4 order-2 md:order-1">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="application-1" className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                      <AccordionTrigger className="text-blue-800 dark:text-blue-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🏗️ {t("seaport.applications.digitalTwin.title")}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">{t("seaport.applications.digitalTwin.realityTitle")}</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.applications.digitalTwin.realityContent")}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">{t("seaport.applications.digitalTwin.applicationTitle")}</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.applications.digitalTwin.applicationContent")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-2" className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border border-green-200 dark:border-green-700">
                      <AccordionTrigger className="text-green-800 dark:text-green-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        📊 {t("seaport.applications.kpiMonitoring.title")}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">{t("seaport.applications.kpiMonitoring.realityTitle")}</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.applications.kpiMonitoring.realityContent")}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">{t("seaport.applications.kpiMonitoring.applicationTitle")}</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.applications.kpiMonitoring.applicationContent")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-3" className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                      <AccordionTrigger className="text-purple-800 dark:text-purple-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🚨 {t("seaport.applications.incidentManagement.title")}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">{t("seaport.applications.incidentManagement.realityTitle")}</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.applications.incidentManagement.realityContent")}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">{t("seaport.applications.incidentManagement.applicationTitle")}</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.applications.incidentManagement.applicationContent")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-4" className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 rounded-lg border border-orange-200 dark:border-orange-700">
                      <AccordionTrigger className="text-orange-800 dark:text-orange-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        ⚙️ {t("seaport.applications.automation.title")}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-orange-700 dark:text-orange-400 mb-2">{t("seaport.applications.automation.realityTitle")}</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.applications.automation.realityContent")}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-700 dark:text-orange-400 mb-2">{t("seaport.applications.automation.applicationTitle")}</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.applications.automation.applicationContent")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Slideshow - Cột phải */}
                <div className="h-full flex items-center justify-center order-1 md:order-2">
                  <div className="relative w-full max-w-[37rem]">
                    {/* Slideshow Container */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {slideshowImages.map((image, index) => (
                          <div key={index} className="w-full flex-shrink-0">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-auto max-h-96 object-contain"
                            />
                          </div>
                        ))}
                      </div>
                      {/* Navigation buttons */}
                      <button
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                      {/* Dots indicator */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {slideshowImages.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    {/* Image caption */}
                    <div className="mt-4 text-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {slideshowImages[currentSlide].alt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lợi ích chiến lược */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">{t("seaport.strategicBenefits.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t("seaport.strategicBenefits.description")}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Cột ảnh bên trái */}
                <div className="flex justify-center">
                  <Image 
                    src="/application-areas/23.jpg" 
                    alt={t("seaport.strategicBenefits.imageAlt")} 
                    className="max-w-2xl max-h-[32rem] w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                {/* Cột các card bên phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="benefit-1" className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border dark:border-blue-700">
                      <AccordionTrigger className="text-blue-800 dark:text-blue-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        {t("seaport.strategicBenefits.benefit1.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-400 dark:border-blue-500">
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">{t("seaport.strategicBenefits.benefit1.evidenceTitle")}</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.strategicBenefits.benefit1.evidenceContent")}
                            </p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-400 dark:border-blue-500">
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">{t("seaport.strategicBenefits.benefit1.benefitsTitle")}</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.strategicBenefits.benefit1.benefitsContent")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-2" className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border dark:border-green-700">
                      <AccordionTrigger className="text-green-800 dark:text-green-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Shield className="h-5 w-5 mr-2" />
                        {t("seaport.strategicBenefits.benefit2.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400 dark:border-green-500">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">{t("seaport.strategicBenefits.benefit2.evidenceTitle")}</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.strategicBenefits.benefit2.evidenceContent")}
                            </p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400 dark:border-green-500">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">{t("seaport.strategicBenefits.benefit2.benefitsTitle")}</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.strategicBenefits.benefit2.benefitsContent")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-3" className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg border dark:border-purple-700">
                      <AccordionTrigger className="text-purple-800 dark:text-purple-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        {t("seaport.strategicBenefits.benefit3.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400 dark:border-purple-500">
                            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">{t("seaport.strategicBenefits.benefit3.evidenceTitle")}</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.strategicBenefits.benefit3.evidenceContent")}
                            </p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400 dark:border-purple-500">
                            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">{t("seaport.strategicBenefits.benefit3.benefitsTitle")}</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("seaport.strategicBenefits.benefit3.benefitsContent")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-4" className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-lg border dark:border-orange-700">
                      <AccordionTrigger className="text-orange-800 dark:text-orange-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Ship className="h-5 w-5 mr-2" />
                        {t("seaport.strategicBenefits.benefit4.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        {t("seaport.strategicBenefits.benefit4.content")}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">{t("seaport.metricsSection.title")}</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{metric.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">{t("seaport.featuresSection.title")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">{t("seaport.featuresSection.subtitle")}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-blue-800 dark:text-blue-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">{t("seaport.benefitsSection.title")}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full mr-4">
                    <Anchor className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("seaport.cta.title")}</h2>
          <p className="text-xl mb-8">{t("seaport.cta.subtitle")}</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact-info">{t("seaport.cta.contactButton")}</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white text-blue-600 hover:bg-gray-100">
              <Link href="/">{t("seaport.cta.homeButton")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
