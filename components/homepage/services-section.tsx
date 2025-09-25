'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Shield, Zap, Globe, BarChart3, Cpu, HardDrive, Network, Lock, CloudCog } from "lucide-react"
import { useTranslation } from "react-i18next"
import FlipNumbers from "react-flip-numbers"
import { useEffect, useState } from "react"

const services = [
  {
    icon: Database,
    title: "Data Intergration",
    description: "Kết nối và thu thập dữ liệu từ nhiều hệ thống khác nhau của doanh nghiệp",
    features: ["Kết nối dữ liệu thời gian thực từ nhiều nguồn", "Hỗ trợ cả dữ liệu truyền thống (SQL, Excel) và dữ liệu IOT/SCADA", "Làm sạch, chuẩn hóa và đồng bộ dữ liệu", "API mở, dễ dàng tích hợp mở rộng"],
    image: "/service-section/data-itergration.jpg"
  },
  {
    icon: Cpu,
    title: "Visual & Reporting",
    description: "Cung cấp bảng điều khiển trực quan với các biểu đồ, báo cáo động giúp người dùng nắm bắt nhanh tình hình hoạt động",
    features: ["Biểu đồ KPI, heatmap, gauge chart, bảng phân tích đa chiều", "Dashboard tùy biến theo nhu cầu", "Xuất báo cáo tự động", "Chi tiết đến từng bộ phận"],
    image: "/service-section/visual-and-reporting.jpg"
  },
  {
    icon: HardDrive,
    title: "Mornitoring & Alerts",
    description: "Theo dõi dữ liệu theo thời gian thực, đưa ra cảnh báo tức thì khi phát hiện bất thường hoặc vượt ngưỡng",
    features: ["Giám sát tiến độ", "Hệ thống cảnh báo qua Email, SMS,...", "Thiết lập ngưỡng linh hoạt", "Nhật ký theo dõi để truy vết sự cố"],
    image: "/service-section/mornitoring-and-alert.jpg"
  },
  {
    icon: Network,
    title: "Collaboration & Remote Access",
    description: "Cho phép các phòng ban phối hợp trên cùng một nền tảng và truy cập dữ liệu mọi lúc, mọi nơi",
    features: ["Truy cập từ xa", "Chia sẻ dashboard theo vai trò, phòng ban", "Dữ liệu real time", "FastConnect"],
    image: "/service-section/collabration.jpg"
  },
  {
    icon: Shield,
    title: "Security & Governance",
    description: "Đảm bảo an toàn, phân quyền và tuân thủ quy định trong toàn bộ quá trình quản trị dữ liệu",
    features: ["Phân quyền theo vai trò", "Mã hóa dữ liệu và truyền thông an toàn", "Quản lý truy cập, lưu vết hoạt động", "Tuân thủ các chuẩn bảo mật"],
    image: "/service-section/security.jpg"
  },
  {
    icon: BarChart3,
    title: "Analytics & AI",
    description: "Ứng dụng phân tích dữ liệu thông minh và AI để dự báo xu hướng, gợi ý quyết định chiến lược",
    features: ["Phân tích xu hướng kinh doanh, sản xuất", "Machine Learning phát hiện bất thường", "Dự báo nhu cầu (nhân sự, nguyên liệu, năng lượng) ", "Đưa ra khuyến nghị hành động dựa trên dữ liệu"],
    image: "/service-section/ai.jpg"
  },
]

export function ServicesSection() {
  const { t } = useTranslation()
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

    const element = document.getElementById('additional-benefits')
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-10 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-balance text-foreground">
            {t('homepage.services.subtitle')}
          </h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
            Từ dữ liệu vận hành đến phân tích thông minh, chúng tôi mang đến giải pháp Smart Dashboard giúp doanh nghiệp quản trị tập trung, giám sát trực quan và ra quyết định nhanh chóng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="group h-64 perspective-1000"
                style={{ perspective: '1000px' }}
              >
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                  {/* Front Face */}
                  <Card className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-card to-background border border-border shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 z-0"
                      style={{
                        backgroundImage: `url(${service.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.15,
                        pointerEvents: 'none',
                      }}
                    />
                    <CardContent className="flex flex-col items-center justify-center h-full text-center space-y-4 relative z-10">
                      <div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary/20 transition-colors backdrop-blur-sm">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                        {service.title}
                      </CardTitle>
                    </CardContent>
                  </Card>

                  {/* Back Face */}
                  <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 shadow-xl">
                    <CardContent className="flex flex-col justify-center h-full p-4">
                      <div className="space-y-3">
                        <p className="text-sm font-bold text-primary text-center mb-4">Tính năng chính:</p>
                        <div className="space-y-2.5">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-2 animate-in slide-in-from-left-2 duration-300" style={{ animationDelay: `${featureIndex * 100}ms` }}>
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-xs text-foreground leading-relaxed">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>

        {/* Additional Benefits */}
        <div id="additional-benefits" className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-3xl text-primary mb-2 flex items-center justify-center">
              <FlipNumbers
                height={36}
                width={22}
                color="hsl(var(--primary))"
                play={isVisible}
                duration={4}
                numbers="20"
                numberStyle={{
                  fontFamily: 'inherit',
                  fontWeight: 'bold',
                  letterSpacing: '2px'
                }}
              />
              <span className="ml-1">ngày</span>
            </h3>
            <p className="text-sm text-muted-foreground">Thời gian triển khai trung bình</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-3xl text-primary mb-2 flex items-center justify-center">
              <FlipNumbers
                height={36}
                width={22}
                color="hsl(var(--primary))"
                play={isVisible}
                duration={4}
                numbers="50"
                numberStyle={{
                  fontFamily: 'inherit',
                  fontWeight: 'bold',
                  letterSpacing: '2px'
                }}
              />
              <span className="ml-1">+</span>
            </h3>
            <p className="text-sm text-muted-foreground">Nguồn dữ liệu hỗ trợ tích hợp</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-3xl text-primary mb-2 flex items-center justify-center">
              <FlipNumbers
                height={36}
                width={22}
                color="hsl(var(--primary))"
                play={isVisible}
                duration={4}
                numbers="100"
                numberStyle={{
                  fontFamily: 'inherit',
                  fontWeight: 'bold',
                  letterSpacing: '2px'
                }}
              />
              <span className="ml-1">%</span>
            </h3>
            <p className="text-sm text-muted-foreground">Mã hóa & tuân thủ bảo mật</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-3xl text-primary mb-2 flex items-center justify-center">
              <FlipNumbers
                height={36}
                width={22}
                color="hsl(var(--primary))"
                play={isVisible}
                duration={4}
                numbers="40"
                numberStyle={{
                  fontFamily: 'inherit',
                  fontWeight: 'bold',
                  letterSpacing: '2px'
                }}
              />
              <span className="ml-1">%</span>
            </h3>
            <p className="text-sm text-muted-foreground">Tiết kiệm chi phí vận hành</p>
          </div>
        </div>
      </div>
    </section>
  )
}
