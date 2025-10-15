import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Banknote, Factory, Building, Ship, Users2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useTranslation } from 'react-i18next';

export function IndustriesSection() {
  const { t } = useTranslation();
  const router = useRouter()
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)
  const [pinnedApp, setPinnedApp] = useState<string | null>(null)
  const [expandedApp, setExpandedApp] = useState<string | null>(null)
  
  const industries = [
    {
      icon: Building2,
      title: t('industries.government.title'),
      description: t('industries.government.description'),
      benefits: [
        t('industries.government.benefits.0'),
        t('industries.government.benefits.1'),
        t('industries.government.benefits.2')
      ],
      link: '/application-areas/government',
      image: '/application-areas/government/thumbnail.jpg'
    },
    {
      icon: Banknote,
      title: t('industries.finance.title'),
      description: t('industries.finance.description'),
      benefits: [
        t('industries.finance.benefits.0'),
        t('industries.finance.benefits.1'),
        t('industries.finance.benefits.2')
      ],
      link: '/application-areas/finance',
      image: '/application-areas/finance/thumbnail.jpg'
    },
    {
      icon: Factory,
      title: t('industries.manufacturing.title'),
      description: t('industries.manufacturing.description'),
      benefits: [
        t('industries.manufacturing.benefits.0'),
        t('industries.manufacturing.benefits.1'),
        t('industries.manufacturing.benefits.2')
      ],
      link: '/application-areas/manufacturing',
      image: '/application-areas/manufacturing/thumbnail.jpg'
    },
    {
      icon: Building,
      title: t('industries.building.title'),
      description: t('industries.building.description'),
      benefits: [
        t('industries.building.benefits.0'),
        t('industries.building.benefits.1'),
        t('industries.building.benefits.2')
      ],
      link: '/application-areas/building',
      image: '/application-areas/building/thumbnail.jpg'
    },
    {
      icon: Ship,
      title: t('industries.seaport.title'),
      description: t('industries.seaport.description'),
      benefits: [
        t('industries.seaport.benefits.0'),
        t('industries.seaport.benefits.1'),
        t('industries.seaport.benefits.2')
      ],
      link: '/application-areas/seaport',
      image: '/application-areas/seaport/thumbnail.jpg'
    }
  ]

  const applications = [
    { 
      icon: Factory, 
      name: t('applications.factory.name'),
      id: "factory",
      image: "/homepage/factory.webp",
      stats: t('applications.factory.stats'),
      description: t('applications.factory.description')
    },
    { 
      icon: Ship, 
      name: t('applications.port.name'),
      id: "port",
      image: "/homepage/seaport.jpg", 
      stats: t('applications.port.stats'),
      description: t('applications.port.description')
    },
    { 
      icon: Banknote, 
      name: t('applications.bank.name'),
      id: "bank",
      image: "/homepage/bank.webp",
      stats: t('applications.bank.stats'),
      description: t('applications.bank.description')
    },
    { 
      icon: Users2, 
      name: t('applications.government.name'),
      id: "government",
      image: "/homepage/public-administration.jpg",
      stats: t('applications.government.stats'),
      description: t('applications.government.description')
    },
    { 
      icon: Building, 
      name: t('applications.building.name'),
      id: "building",
      image: "/homepage/factory.webp",
      stats: t('applications.building.stats'),
      description: t('applications.building.description')
    },
    { 
      icon: Building2, 
      name: t('applications.logistics.name'),
      id: "logistics",
      image: "/homepage/seaport.jpg",
      stats: t('applications.logistics.stats'),
      description: t('applications.logistics.description')
    }
  ]

  return (
    <section id="industries" className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            {t('industries.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            {t('industries.subtitle')}
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => router.push(industry.link)}
            >
              <Card className="border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:h-96`}>
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-64 lg:h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-1/2 flex items-center lg:h-full">
                    <CardContent className="p-8 lg:p-12 w-full h-full flex flex-col justify-center bg-blue-50/80 dark:bg-gray-800/50">
                      <div className="mb-6 rounded-lg bg-primary/10 p-4 w-fit group-hover:bg-primary/20 transition-colors">
                        <industry.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-4 text-2xl lg:text-3xl font-bold text-foreground">{industry.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base">{industry.description}</p>
                      <div className="space-y-3">
                        {industry.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-foreground font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center relative">
          <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-foreground">{t('applications.title')}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-center justify-center sm:space-x-2 lg:space-x-3 bg-background rounded-lg px-3 sm:px-4 lg:px-6 py-3 sm:py-4 shadow-sm transition-all duration-300 ease-in-out border cursor-pointer transform hover:scale-105 ${
                  expandedApp === app.id 
                    ? 'border-primary/70 bg-primary/10 shadow-lg scale-105' 
                    : 'border-border hover:border-primary/50 hover:bg-primary/5 hover:shadow-md'
                } ${
                  pinnedApp === app.id 
                    ? 'ring-2 ring-primary/30 bg-primary/15' 
                    : ''
                }`}
                onMouseEnter={() => {
                  if (!pinnedApp) {
                    setHoveredApp(app.id)
                    setExpandedApp(app.id)
                  }
                }}
                onMouseLeave={() => {
                  if (!pinnedApp) {
                    setHoveredApp(null)
                    setExpandedApp(null)
                  }
                }}
                onClick={() => {
                  if (pinnedApp === app.id) {
                    // Unpin if clicking the same card
                    setPinnedApp(null)
                    setExpandedApp(null)
                  } else {
                    // Pin the clicked card
                    setPinnedApp(app.id)
                    setExpandedApp(app.id)
                  }
                  setHoveredApp(null)
                }}
              >
                <app.icon className={`h-4 w-4 sm:h-5 sm:w-5 mb-1 sm:mb-0 flex-shrink-0 transition-all duration-300 ${
                  expandedApp === app.id ? 'text-primary scale-110' : 'text-primary'
                }`} />
                <span className={`font-medium text-foreground text-xs sm:text-sm lg:text-base text-center sm:text-left transition-all duration-300 ${
                  expandedApp === app.id ? 'font-semibold' : ''
                }`}>{app.name}</span>
                {pinnedApp === app.id && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center animate-bounce-in shadow-lg">
                    <div className="text-white text-xs">📌</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Expandable Detail Section */}
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expandedApp 
              ? 'max-h-96 opacity-100 mt-6 animate-slide-down' 
              : 'max-h-0 opacity-0 mt-0'
          }`}>
            {expandedApp && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-fade-in-slide-up">
                <div className="grid md:grid-cols-3 gap-6 items-center max-w-4xl mx-auto">
                  {/* Image */}
                  <div className="md:col-span-1 opacity-0 animate-[fadeInSlideUp_0.6s_ease-out_0.1s_forwards]">
                    <img 
                      src={applications.find(app => app.id === expandedApp)?.image} 
                      alt={applications.find(app => app.id === expandedApp)?.name}
                      className="w-full h-32 sm:h-40 object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                    />
                  </div>
                  
                  {/* Stats */}
                  <div className="md:col-span-1 text-center opacity-0 animate-[fadeInSlideUp_0.6s_ease-out_0.3s_forwards]">
                    <div className="text-3xl font-bold text-primary mb-2 transition-all duration-300 hover:scale-110 hover:text-primary/80">
                      {applications.find(app => app.id === expandedApp)?.stats.split(' ')[0]}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {applications.find(app => app.id === expandedApp)?.stats.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="md:col-span-1 opacity-0 animate-[fadeInSlideUp_0.6s_ease-out_0.5s_forwards]">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg text-foreground">
                        {applications.find(app => app.id === expandedApp)?.name}
                      </h4>
                      {pinnedApp && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full animate-bounce-in">
                          📌 {t('applications.pinned')}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {applications.find(app => app.id === expandedApp)?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}