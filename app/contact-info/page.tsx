"use client"

import { Cloud, Mail, Phone, MapPin, Building2, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useTranslation } from "react-i18next"
import { PageTracker } from "@/components/common/page-tracker"

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function ContactPage() {
  const { t } = useTranslation()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
      {/* Hero Section */}
      <AnimatedSection>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 dark:from-blue-900 dark:to-blue-950 dark:text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm dark:bg-white/10">
                <Cloud className="h-12 w-12 text-white dark:text-blue-200" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-blue-100">
              {t('contactInfo.hero.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto dark:text-blue-200">
              {t('contactInfo.hero.description')}
            </p>
          </div>
        </div>
        </div>
      </AnimatedSection>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-[1400px] mx-auto">
          {/* All Cards in same row */}
          <div className="grid xl:grid-cols-3 grid-cols-1 gap-8">
            {/* Company Info */}
            <AnimatedSection delay={0.1}>
              <a href="https://icss.com.vn/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm dark:bg-gray-900/80 dark:shadow-blue-900 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl dark:from-blue-800 dark:to-blue-900">
                      <Building2 className="h-6 w-6 text-white dark:text-blue-200" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{t('contactInfo.companyInfo.title')}</CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{t('contactInfo.companyInfo.companyName')}</p>
                    </div>
                  </div>
                </CardHeader>
              <CardContent className="space-y-6">
                {/* <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 mt-1 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">Trụ sở chính</p>
                      <p className="text-gray-700">Đường Vũ Văn Cẩn, Phường Bần Yên Nhân, Thị Xã Mỹ Hào, Hưng Yên</p>
                    </div>
                  </div>
                </div> */}
                <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg dark:from-green-900 dark:to-green-800">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 mt-1 text-green-600 dark:text-green-300" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 dark:text-white">{t('contactInfo.companyInfo.office')}</p>
                      <p className="text-gray-700 dark:text-gray-200">{t('contactInfo.companyInfo.officeAddress')}</p>
                    </div>
                  </div>
                </div>
                <motion.a
                  href="https://icss.com.vn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.04, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className="relative flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 shadow-md hover:shadow-[0_8px_30px_rgba(96,165,250,0.6)] overflow-hidden group"
                >
                  {/* Shimmer overlay */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 pointer-events-none" />
                  <Globe className="h-4 w-4 group-hover:rotate-[360deg] transition-transform duration-500" />
                  Visit icss.com.vn
                  <span className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-200">→</span>
                </motion.a>
              </CardContent>
            </Card>
              </a>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2}>
              <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm dark:bg-gray-900/80 dark:shadow-green-900 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-3 rounded-xl dark:from-green-800 dark:to-green-900">
                    <Phone className="h-6 w-6 text-white dark:text-green-200" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{t('contactInfo.contactDetails.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg dark:from-orange-900 dark:to-orange-800">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-600 dark:text-orange-300" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 dark:text-white">{t('contactInfo.contactDetails.phoneHotline')}</p>
                      <p className="text-gray-700 dark:text-gray-200">{t('contactInfo.contactDetails.phoneNumber')}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg dark:from-purple-900 dark:to-purple-800">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple-600 dark:text-purple-300" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 dark:text-white">{t('contactInfo.contactDetails.emailLabel')}</p>
                      <p className="text-gray-700 dark:text-gray-200">{t('contactInfo.contactDetails.email')}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-lg dark:from-indigo-900 dark:to-indigo-800">
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                    <div>
                      <p className="font-semibold text-gray-900 mb-1 dark:text-white">{t('contactInfo.contactDetails.websiteLabel')}</p>
                      <p className="text-gray-700 dark:text-gray-200">{t('contactInfo.contactDetails.website')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>

            {/* Google Map */}
            <AnimatedSection delay={0.3}>
              <Card className="border-0 shadow-xl bg-white/70 backdrop-blur-sm dark:bg-gray-900/80 dark:shadow-red-900 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 p-3 rounded-xl dark:from-red-800 dark:to-red-900">
                    <MapPin className="h-6 w-6 text-white dark:text-red-200" />
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{t('contactInfo.mapSection.title')}</CardTitle>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{t('contactInfo.mapSection.description')}</p>
              </CardHeader>
              <CardContent>
                <div className="rounded-2xl overflow-hidden shadow-lg dark:shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.393073964479!2d105.813893!3d20.9801586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad001d0b43d3%3A0xaf34a145d9051cd8!2sICS!5e0!3m2!1svi!2s!4v1694339200000!5m2!1svi!2s"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={t('contactInfo.mapSection.mapTitle')}
                    className="w-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  )
}
