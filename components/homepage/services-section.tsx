'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Shield, Zap, Globe, BarChart3, Cpu, HardDrive, Network, Lock, CloudCog } from "lucide-react"
import { useTranslation } from "react-i18next"

const services = [
  {
    icon: Database,
    title: "Data Intergration",
    description: "Kết nối và thu thập dữ liệu từ nhiều hệ thống khác nhau của doanh nghiệp",
    features: ["Kết nối dữ liệu thời gian thực từ nhiều nguồn", "Hỗ trợ cả dữ liệu truyền thống (SQL, Excel) và dữ liệu IOT/SCADA", "Làm sạch, chuẩn hóa và đồng bộ dữ liệu", "API mở, dễ dàng tích hợp mở rộng"],
  },
  {
    icon: Cpu,
    title: "Visual & Reporting",
    description: "Cung cấp bảng điều khiển trực quan với các biểu đồ, báo cáo động giúp người dùng nắm bắt nhanh tình hình hoạt động",
    features: ["Biểu đồ KPI, heatmap, gauge chart, bảng phân tích đa chiều", "Dashboard tùy biến theo nhu cầu", "Xuất báo cáo tự động", "Chi tiết đến từng bộ phận"],
  },
  {
    icon: HardDrive,
    title: "Mornitoring & Alerts",
    description: "Theo dõi dữ liệu theo thời gian thực, đưa ra cảnh báo tức thì khi phát hiện bất thường hoặc vượt ngưỡng",
    features: ["Giám sát tiến độ", "Hệ thống cảnh báo qua Email, SMS,...", "Thiết lập ngưỡng linh hoạt", "Nhật ký theo dõi để truy vết sự cố"],
  },
  {
    icon: Network,
    title: "Collaboration & Remote Access",
    description: "Cho phép các phòng ban phối hợp trên cùng một nền tảng và truy cập dữ liệu mọi lúc, mọi nơi",
    features: ["Truy cập từ xa", "Chia sẻ dashboard theo vai trò, phòng ban", "Dữ liệu real time", "FastConnect"],
  },
  {
    icon: Shield,
    title: "Security & Governance",
    description: "Đảm bảo an toàn, phân quyền và tuân thủ quy định trong toàn bộ quá trình quản trị dữ liệu",
    features: ["Phân quyền theo vai trò", "Mã hóa dữ liệu và truyền thông an toàn", "Quản lý truy cập, lưu vết hoạt động", "Tuân thủ các chuẩn bảo mật"],
  },
  {
    icon: BarChart3,
    title: "Analytics & AI",
    description: "Ứng dụng phân tích dữ liệu thông minh và AI để dự báo xu hướng, gợi ý quyết định chiến lược",
    features: ["Phân tích xu hướng kinh doanh, sản xuất", "Machine Learning phát hiện bất thường", "Dự báo nhu cầu (nhân sự, nguyên liệu, năng lượng) ", "Đưa ra khuyến nghị hành động dựa trên dữ liệu"],
  },
]

export function ServicesSection() {
  const { t } = useTranslation()

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
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 bg-gradient-to-br from-card to-background"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors text-foreground">
                        {service.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Tính năng chính:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional Benefits */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Triển khai nhanh</h3>
            <p className="text-sm text-muted-foreground">Phù hợp mọi đối tượng</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
              <Globe className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Tích hợp đa dữ liệu</h3>
            <p className="text-sm text-muted-foreground">Hỗ trợ mọi định dạng dữ liệu</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Bảo mật an toàn</h3>
            <p className="text-sm text-muted-foreground">Tuân thủ quốc tế</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border">
            <div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2 text-foreground">Tối ưu chi phí</h3>
            <p className="text-sm text-muted-foreground">Tiết kiệm đến 40%</p>
          </div>
        </div>
      </div>
    </section>
  )
}
