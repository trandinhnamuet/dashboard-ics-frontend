"use client"

import { useState, useEffect, useRef } from "react"
import { Building2, BarChart3, Users, Clock, Shield, Target, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function GovernmentPage() {
  const { t } = useTranslation()
  
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Modal state for image zoom
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [imageScale, setImageScale] = useState(1)
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  // Reset scale when modalImage changes
  useEffect(() => {
    setImageScale(1)
    setImgPos({ x: 0, y: 0 })
  }, [modalImage])

  // Wheel zoom handler
  useEffect(() => {
    if (!modalImage || !imgRef.current) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault()
        setImageScale(prev => {
          let next = prev + (e.deltaY < 0 ? 0.1 : -0.1)
          next = Math.max(0.2, Math.min(next, 5))
          return next
        })
      }
    }
    const img = imgRef.current
    img.addEventListener('wheel', handleWheel, { passive: false })
    return () => img.removeEventListener('wheel', handleWheel)
  }, [modalImage])

  // Mouse drag to move image
  useEffect(() => {
    if (!modalImage || !imgRef.current) return;
    const img = imgRef.current
    let lastPos = { x: imgPos.x, y: imgPos.y }
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault()
      setDragging(true)
      setDragStart({ x: e.clientX - lastPos.x, y: e.clientY - lastPos.y })
    }
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging && dragStart) {
        setImgPos({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
      }
    }
    const handleMouseUp = () => {
      setDragging(false)
      setDragStart(null)
    }
    img.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      img.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [modalImage, dragging, dragStart, imgPos])
  
  const slideshowImages = [
    { src: "/application-areas/3.png", alt: t("government.slideshow.image1Alt") },
    { src: "/application-areas/4.png", alt: t("government.slideshow.image2Alt") }
  ]

  // Auto slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const handleImageClick = (imageSrc: string) => {
    setModalImage(imageSrc)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
  }

  const features = [
    {
      icon: BarChart3,
      title: t("government.features.monitoring.title"),
      description: t("government.features.monitoring.description")
    },
    {
      icon: Clock,
      title: t("government.features.projectTracking.title"),
      description: t("government.features.projectTracking.description")
    },
    {
      icon: Users,
      title: t("government.features.budgetAnalysis.title"),
      description: t("government.features.budgetAnalysis.description")
    }
  ]

  const benefits = [
    t("government.benefits.efficiency"),
    t("government.benefits.reportingTime"),
    t("government.benefits.transparency"),
    t("government.benefits.decisionProcess")
  ]

  return (
    <div className="min-h-screen">
      {/* Modal hiển thị ảnh lớn */}
      {modalImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70" onClick={() => setModalImage(null)}>
          <div className="relative" onClick={e => e.stopPropagation()}>
            <img
              ref={imgRef}
              src={modalImage}
              alt="Ảnh phóng to"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl border-4 border-white cursor-move select-none"
              style={{ transform: `scale(${imageScale}) translate(${imgPos.x}px, ${imgPos.y}px)`, transition: dragging ? 'none' : 'transform 0.2s' }}
              draggable={false}
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-white/80 text-black rounded-full px-3 py-1 font-bold text-lg shadow-lg hover:bg-white"
              onClick={e => { e.stopPropagation(); setModalImage(null); }}
            >
              &times;
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/80 text-black rounded px-3 py-1 text-xs shadow">{t("government.modal.instructions")}</div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image Only */}
        <div 
          className="absolute inset-0 z-0 dark:opacity-80"
          style={{
            backgroundImage: 'url(/application-areas/government/image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-left ml-0 mr-auto">
            <div className="flex justify-start mb-6">
              <div className="p-4 rounded-full backdrop-blur-sm flex items-center justify-center">
                <div className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t("government.hero.title")}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              {t("government.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Industry Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Thách thức thực tế */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">{t("government.challenges.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t("government.challenges.description")}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Ảnh minh họa thách thức - Cột trái */}
                <div className="h-full flex items-center justify-center">
                  <img 
                    src="/application-areas/21.jpg" 
                    alt={t("government.challenges.imageAlt")} 
                    className="object-contain max-h-80 md:max-h-96 w-auto rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Accordion cards - Cột phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="challenge-1" className="border border-red-200 bg-red-50 rounded-lg">
                      <AccordionTrigger className="text-red-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Clock className="h-5 w-5 mr-2" />
                        {t("government.challenges.challenge1.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t("government.challenges.challenge1.content")}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-2" className="border border-orange-200 bg-orange-50 rounded-lg">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        {t("government.challenges.challenge2.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t("government.challenges.challenge2.content")}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-3" className="border border-purple-200 bg-purple-50 rounded-lg">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Users className="h-5 w-5 mr-2" />
                        {t("government.challenges.challenge3.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t("government.challenges.challenge3.content")}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-4" className="border border-yellow-200 bg-yellow-50 rounded-lg">
                      <AccordionTrigger className="text-yellow-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Shield className="h-5 w-5 mr-2" />
                        {t("government.challenges.challenge4.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t("government.challenges.challenge4.content")}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-5" className="border border-green-200 bg-green-50 rounded-lg">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Target className="h-5 w-5 mr-2" />
                        {t("government.challenges.challenge5.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t("government.challenges.challenge5.content")}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Ứng dụng Smart Dashboard */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">{t("government.applications.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t("government.applications.description")}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Cards - Cột trái */}
                <div className="space-y-4 order-2 md:order-1">
                  <Accordion type="multiple" className="space-y-4">
                    {/* ...existing card AccordionItems... */}
                    <AccordionItem value="application-1" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🏛️ {t("government.applications.application1.title")}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h5 className="font-medium text-blue-700 mb-2">{t("government.applications.realityLabel")}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("government.applications.application1.reality")}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-700 mb-2">{t("government.applications.applicationLabel")}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("government.applications.application1.application")}
                            </p>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-3">{t("government.applications.application1.evidenceTitle")}:</h5>
                          <div className="space-y-3">
                            <div className="border-l-4 border-blue-300 pl-4">
                              <h6 className="font-medium text-blue-600">{t("government.applications.application1.dalat.title")}:</h6>
                              <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {t("government.applications.application1.dalat.description")}
                              </p>
                            </div>
                            <div className="border-l-4 border-green-300 pl-4">
                              <h6 className="font-medium text-green-600">{t("government.applications.application1.binhduong.title")}:</h6>
                              <p className="text-gray-700 dark:text-gray-300 text-sm">
                                {t("government.applications.application1.binhduong.description")}
                              </p>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="application-2" className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        📊 {t("government.applications.application2.title")}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">{t("government.applications.realityLabel")}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("government.applications.application2.reality")}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">{t("government.applications.applicationLabel")}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("government.applications.application2.application")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="application-3" className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🎯 {t("government.applications.application3.title")}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-purple-700 mb-2">{t("government.applications.realityLabel")}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("government.applications.application3.reality")}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">{t("government.applications.applicationLabel")}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("government.applications.application3.application")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="application-4" className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        📢 {t("government.applications.application4.title")}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-orange-700 mb-2">{t("government.applications.realityLabel")}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("government.applications.application4.reality")}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-700 dark:text-orange-400 mb-2">{t("government.applications.applicationLabel")}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("government.applications.application4.application")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Slideshow - Cột phải */}
                <div className="h-full flex items-center justify-center order-1 md:order-2">
                  <div className="relative w-full max-w-[37rem]"> {/* max-w-[32rem] ~ 512px, similar to 2.png */}
                    {/* Slideshow Container */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {slideshowImages.map((image, index) => (
                          <div key={index} className="w-full flex-shrink-0">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-auto max-h-96 object-contain cursor-pointer"
                              style={{ aspectRatio: 'auto' }}
                              onClick={() => handleImageClick(image.src)}
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
                  </div>
                </div>
              </div>
            </div>

            {/* Lợi ích chiến lược */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">{t("government.strategicBenefits.title")}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t("government.strategicBenefits.description")}
              </p>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Cột ảnh bên trái */}
                <div className="flex justify-center">
                  <img 
                    src="/application-areas/5.png" 
                    alt={t("government.strategicBenefits.imageAlt")} 
                    className="max-w-lg h-auto rounded-lg shadow-lg"
                  />
                </div>
                {/* Cột các card bên phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="benefit-1" className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg border">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Target className="h-5 w-5 mr-2" />
                        {t("government.strategicBenefits.benefit1.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <span className="font-medium">{t("government.strategicBenefits.benefit1.benefitsLabel")}:</span> {t("government.strategicBenefits.benefit1.content")}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="benefit-2" className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg border">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Clock className="h-5 w-5 mr-2" />
                        {t("government.strategicBenefits.benefit2.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">{t("government.strategicBenefits.benefit2.evidenceLabel")}:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("government.strategicBenefits.benefit2.evidence")}
                            </p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">{t("government.strategicBenefits.benefit2.benefitsLabel")}:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t("government.strategicBenefits.benefit2.benefits")}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="benefit-3" className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg border">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Users className="h-5 w-5 mr-2" />
                        {t("government.strategicBenefits.benefit3.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <span className="font-medium">{t("government.strategicBenefits.benefit3.benefitsLabel")}:</span> {t("government.strategicBenefits.benefit3.content")}
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="benefit-4" className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg border">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        {t("government.strategicBenefits.benefit4.title")}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <span className="font-medium">{t("government.strategicBenefits.benefit4.benefitsLabel")}:</span> {t("government.strategicBenefits.benefit4.content")}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* Features & Benefits Section - 2 columns */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-10 text-center">{t("government.whyChooseUs.title")}</h3>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Tính năng chính - cột trái */}
            <div>
              <div className="mb-8 text-center">
                <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">{t("government.whyChooseUs.featuresTitle")}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">{t("government.whyChooseUs.featuresSubtitle")}</p>
              </div>
              <div className="space-y-4">
                <Accordion type="multiple" className="space-y-4">
                  {features.map((feature, index) => (
                    <AccordionItem key={index} value={`feature-${index}`} className="border rounded-lg">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <div className="bg-blue-100 p-3 rounded-lg w-fit mr-4">
                          <feature.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        {feature.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            {/* Lợi ích mang lại - cột phải */}
            <div>
              <div className="mb-8 text-center">
                <h2 className="text-xl font-semibold text-red-600 dark:text-red-400 mb-4">{t("government.whyChooseUs.benefitsTitle")}</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">{t("government.whyChooseUs.benefitsSubtitle")}</p>
              </div>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <Target className="h-5 w-5 text-green-600" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-gray-100 text-center w-full">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t("government.cta.title")}</h2>
          <p className="text-xl mb-8">{t("government.cta.description")}</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact-info">{t("government.cta.contactButton")}</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white text-blue-600">
              <Link href="/">{t("government.cta.homeButton")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modal for image enlargement removed */}
    </div>
  )
}