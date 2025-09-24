"use client"

import { Zap, Wifi, TrendingUp, AlertTriangle, Network, Smartphone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TelecomPage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Tăng năng suất 30-50%",
      description: "Tối ưu hóa hiệu suất mạng và dịch vụ thông qua phân tích dữ liệu thông minh."
    },
    {
      icon: TrendingUp,
      title: "Tăng lợi nhuận 20-30%",
      description: "Cải thiện doanh thu và giảm chi phí vận hành nhờ quản lý tối ưu tài nguyên mạng."
    },
    {
      icon: AlertTriangle,
      title: "Dự báo sự cố chính xác",
      description: "Phát hiện và ngăn chặn sự cố mạng trước khi chúng ảnh hưởng đến khách hàng."
    }
  ]

  const metrics = [
    { label: "Uptime mạng", value: "99.9%" },
    { label: "Giảm sự cố mạng", value: "60%" },
    { label: "Cải thiện QoS", value: "45%" },
    { label: "Tăng doanh thu", value: "25%" }
  ]

  const benefits = [
    "Giám sát mạng toàn diện 24/7/365",
    "Tự động hóa 80% quy trình vận hành",
    "Tăng 40% chất lượng dịch vụ khách hàng",
    "Giảm 50% thời gian xử lý sự cố"
  ]

  const services = [
    { name: "Mạng di động 4G/5G", icon: Smartphone },
    { name: "Hạ tầng Internet", icon: Wifi },
    { name: "Truyền hình cáp", icon: Network },
    { name: "Điện thoại cố định", icon: Zap },
    { name: "Data Center", icon: Network },
    { name: "Cloud Services", icon: Wifi }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Zap className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Dashboard cho Điện - Viễn thông
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Giám sát mạng thời gian thực 24/7, phân tích dữ liệu để tối ưu vận hành và dự báo sự cố, 
              đồng thời hỗ trợ quyết định kinh doanh và mở rộng thị trường.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 mr-4">
                Đăng ký tư vấn miễn phí
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
                Xem demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hiệu quả vượt trội</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">{metric.value}</div>
                <div className="text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tính năng nổi bật</h2>
            <p className="text-lg text-gray-600">Giải pháp toàn diện cho ngành điện - viễn thông</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-purple-200">
                <CardHeader>
                  <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl text-purple-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dịch vụ được hỗ trợ</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center">
                  <service.icon className="h-6 w-6 text-purple-600 mr-3" />
                  <span className="font-medium text-gray-900">{service.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lợi ích mang lại</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-purple-100 p-2 rounded-full mr-4">
                    <Network className="h-5 w-5 text-purple-600" />
                  </div>
                  <span className="font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tối ưu hóa hạ tầng viễn thông của bạn</h2>
          <p className="text-xl mb-8">Nâng cao chất lượng dịch vụ và tăng cường trải nghiệm khách hàng</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
              <Link href="/contact-info">Liên hệ ngay</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/">Về trang chủ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}