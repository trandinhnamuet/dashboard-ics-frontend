"use client"

import { useState, useEffect } from "react"
import { useTranslation } from 'react-i18next'
import { Building, Thermometer, TrendingDown, Shield, Zap, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "@/components/common/Image"

export default function BuildingPage() {
  const { t } = useTranslation()
  
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    { src: "/application-areas/16.png", alt: t('building.slideshow.slide1Alt') },
    { src: "/application-areas/17.png", alt: t('building.slideshow.slide2Alt') }
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
      icon: TrendingDown,
      title: t('building.features.energySaving.title'),
      description: t('building.features.energySaving.description')
    },
    {
      icon: Shield,
      title: t('building.features.security.title'),
      description: t('building.features.security.description')
    },
    {
      icon: Settings,
      title: t('building.features.automation.title'),
      description: t('building.features.automation.description')
    }
  ]

  const metrics = [
    { label: t('building.metrics.energySaving'), value: "35%" },
    { label: t('building.metrics.costReduction'), value: "25%" },
    { label: t('building.metrics.efficiency'), value: "40%" },
    { label: t('building.metrics.safety'), value: "50%" }
  ]

  const benefits = [
    t('building.benefits.monitoring'),
    t('building.benefits.automation'),
    t('building.benefits.satisfaction'),
    t('building.benefits.maintenance')
  ]

  const services = [
    { name: t('building.services.hvac'), icon: Thermometer },
    { name: t('building.services.lighting'), icon: Zap },
    { name: t('building.services.security'), icon: Shield },
    { name: t('building.services.accessControl'), icon: Shield },
    { name: t('building.services.energyManagement'), icon: TrendingDown },
    { name: t('building.services.fireSystem'), icon: Settings }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 dark:opacity-80"
          style={{
            backgroundImage: 'url(/application-areas/building/image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
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
              {t('building.hero.title')}
            </h1>
            <p className="text-xl text-gray-100 max-w-xl leading-relaxed">
              {t('building.hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Industry Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Giới thiệu chung */}
            <div className="mb-16">
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  {t('building.introduction.overview')}
                </p>

                {/* Ảnh minh họa */}
              <div className="mb-8 flex justify-center">
                <Image 
                  src="/application-areas/15.png" 
                  alt={t('building.introduction.imageAlt')}
                  className="max-w-lg h-auto rounded-lg shadow-lg"
                />
              </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-gray-50 dark:from-blue-900/30 dark:to-gray-800/30 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 dark:text-gray-300">
                    {t('building.introduction.systems')}
                  </p>
                </div>
              </div>
            </div>

            {/* Thách thức thực tế */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">{t('building.challenges.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t('building.challenges.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Ảnh minh họa thách thức - Cột trái */}
                <div className="h-full flex items-center justify-center">
                  <Image 
                    src="/application-areas/16.png" 
                    alt={t('building.challenges.imageAlt')}
                    className="object-contain max-h-80 md:max-h-96 w-auto rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Accordion cards - Cột phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="challenge-1" className="border border-red-200 bg-red-50 rounded-lg">
                      <AccordionTrigger className="text-red-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Building className="h-5 w-5 mr-2" />
                        {t('building.challenges.dataFragmentation.title')}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        <p className="mb-3">
                          {t('building.challenges.dataFragmentation.description')}
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-red-300">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            {t('building.challenges.dataFragmentation.example')}
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-2" className="border border-orange-200 bg-orange-50 rounded-lg">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingDown className="h-5 w-5 mr-2" />
                        {t('building.challenges.reactiveManagement.title')}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t('building.challenges.reactiveManagement.description')}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-3" className="border border-yellow-200 bg-yellow-50 rounded-lg">
                      <AccordionTrigger className="text-yellow-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Zap className="h-5 w-5 mr-2" />
                        {t('building.challenges.energyWaste.title')}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t('building.challenges.energyWaste.description')}
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-4" className="border border-purple-200 bg-purple-50 rounded-lg">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Settings className="h-5 w-5 mr-2" />
                        {t('building.challenges.slowResponse.title')}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        {t('building.challenges.slowResponse.description')}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Ứng dụng Smart Dashboard */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">{t('building.applications.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t('building.applications.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Accordion cards - Cột trái */}
                <div className="space-y-4 order-2 md:order-1">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="application-1" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🏢 {t('building.applications.digitalTwin.title')}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-blue-700 mb-2">{t('building.applications.realityLabel')}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t('building.applications.digitalTwin.reality')}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">{t('building.applications.applicationLabel')}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t('building.applications.digitalTwin.application')}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-2" className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🌡️ {t('building.applications.environmentalMonitoring.title')}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">{t('building.applications.realityLabel')}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t('building.applications.environmentalMonitoring.reality')}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">{t('building.applications.applicationLabel')}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t('building.applications.environmentalMonitoring.application')}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-3" className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🛡️ {t('building.applications.securityManagement.title')}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-purple-700 mb-2">{t('building.applications.realityLabel')}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t('building.applications.securityManagement.reality')}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">{t('building.applications.applicationLabel')}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t('building.applications.securityManagement.application')}
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-4" className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🔧 {t('building.applications.maintenanceSupport.title')}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-orange-700 mb-2">{t('building.applications.realityLabel')}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t('building.applications.maintenanceSupport.reality')}
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-700 dark:text-orange-400 mb-2">{t('building.applications.applicationLabel')}:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              {t('building.applications.maintenanceSupport.application')}
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
                  </div>
                </div>
              </div>
            </div>

            {/* Lợi ích chiến lược */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">{t('building.strategicBenefits.title')}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                {t('building.strategicBenefits.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Cột ảnh bên trái */}
                <div className="flex justify-center">
                  <Image 
                    src="/application-areas/17.png" 
                    alt={t('building.strategicBenefits.imageAlt')}
                    className="max-w-lg h-auto rounded-lg shadow-lg"
                  />
                </div>
                {/* Cột các card bên phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="benefit-1" className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg border">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingDown className="h-5 w-5 mr-2" />
                        Tiết kiệm chi phí vận hành đáng kể
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-400">
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Minh chứng: </p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Việc áp dụng các giải pháp quản lý tích hợp và tự động hóa đã giúp tiết kiệm 
                              <span className="font-bold text-blue-600"> 20% chi phí nhân lực vận hành hàng năm</span> 
                              tại các trung tâm dữ liệu.
                            </p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-400">
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Lợi ích:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Tối ưu hóa việc sử dụng năng lượng thông qua giám sát liên tục giúp giảm đáng kể chi phí tiền điện, 
                              một trong những khoản chi lớn nhất trong vận hành trung tâm dữ liệu.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-2" className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg border">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Zap className="h-5 w-5 mr-2" />
                        Nâng cao hiệu quả và giảm thời gian phản ứng
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">Minh chứng:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Khả năng xác định nguyên nhân và vị trí sự cố nhanh chóng giúp rút ngắn thời gian cần thiết 
                              để xử lý sự cố kỹ thuật tới <span className="font-bold text-green-600">90%</span>.
                            </p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">Lợi ích:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Thay vì tốn thời gian kiểm tra nhiều hệ thống, đội ngũ vận hành có thể chẩn đoán và hành động 
                              ngay từ một giao diện duy nhất, giảm thiểu tác động của sự cố.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-3" className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg border">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Shield className="h-5 w-5 mr-2" />
                        Đảm bảo độ tin cậy và tính sẵn sàng cao (Uptime)
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <span className="font-medium">Lợi ích:</span> Đối với các trung tâm dữ liệu, lợi ích lớn nhất là đảm bảo uptime. 
                        Bằng cách giám sát chủ động và thực hiện bảo trì dự đoán, Smart Dashboard giúp ngăn ngừa các sự cố nghiêm trọng 
                        liên quan đến nguồn điện và hệ thống làm mát, bảo vệ hoạt động kinh doanh liên tục.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-4" className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg border">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Settings className="h-5 w-5 mr-2" />
                        Tăng cường an ninh, an toàn và tuân thủ
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <span className="font-medium">Lợi ích:</span> Một hệ thống giám sát tập trung giúp tăng cường an ninh vật lý, 
                        phát hiện sớm các mối đe dọa và phối hợp phản ứng nhanh chóng hơn. Nó cũng giúp đảm bảo các điều kiện môi trường 
                        luôn tuân thủ các tiêu chuẩn vận hành nghiêm ngặt của ngành.
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
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">{t('building.metrics.title')}</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/30 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{metric.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">{t('building.featuresSection.title')}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">{t('building.featuresSection.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-blue-200">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl text-blue-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}

      {/* Hệ thống được quản lý & Lợi ích mang lại - 2 cột */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Cột 1: Hệ thống được quản lý */}
            <div>
              <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-6 text-center">{t('building.systemsManagement.title')}</h2>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {services.map((service, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-900 border-2 border-blue-200 dark:border-blue-700 shadow flex items-center justify-center mb-2">
                      <service.icon className="h-9 w-9 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-gray-100 text-center text-sm max-w-[90px]">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Cột 2: Lợi ích mang lại */}
            <div>
              <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-6 text-center">{t('building.benefitsSection.title')}</h2>
              <div className="grid grid-cols-2 gap-12 relative py-6 px-2">
                {/* Card 0 */}
                <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm z-20">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mb-2">
                    <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{benefits[0]}</span>
                </div>
                {/* Card 1 */}
                <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm z-20">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mb-2">
                    <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{benefits[1]}</span>
                </div>
                {/* Card 2 */}
                <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm z-20">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mb-2">
                    <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{benefits[2]}</span>
                </div>
                {/* Card 3 */}
                <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm z-20">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mb-2">
                    <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{benefits[3]}</span>
                </div>

                {/* Arrow: Card 0 → Card 1 */}
                <svg className="hidden sm:block absolute left-1/2 top-8 w-12 h-6 z-10" style={{transform: 'translateX(-50%)'}} viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12h40m0 0l-6-6m6 6l-6 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* Arrow: Card 1 → Card 3 */}
                <svg className="hidden sm:block absolute right-4 top-1/2 w-6 h-12 z-10" style={{transform: 'translateY(-50%)'}} viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4v40m0 0l6-6m-6 6l-6-6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* Arrow: Card 3 → Card 2 */}
                <svg className="hidden sm:block absolute left-1/2 bottom-4 w-12 h-6 z-10" style={{transform: 'translateX(-50%) rotate(180deg)'}} viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12h40m0 0l-6-6m6 6l-6 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {/* Arrow: Card 2 → Card 0 (lên trên) */}
                <svg className="hidden sm:block absolute left-4 bottom-1/2 w-6 h-12 z-10" style={{transform: 'translateY(50%)'}} viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 44V4m0 0l-6 6m6-6l6 6" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('building.cta.title')}</h2>
          <p className="text-xl mb-8">{t('building.cta.subtitle')}</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact-info">{t('building.cta.contactButton')}</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white text-blue-600">
              <Link href="/">{t('building.cta.homeButton')}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}