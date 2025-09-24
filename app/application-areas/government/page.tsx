"use client"

import { Building2, BarChart3, Users, Clock, Shield, Target } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function GovernmentPage() {
  const features = [
    {
      icon: BarChart3,
      title: "Giám sát KPIs thời gian thực",
      description: "Theo dõi các chỉ số hiệu suất chính của từng phòng ban, dự án một cách trực quan và tức thì."
    },
    {
      icon: Clock,
      title: "Theo dõi tiến độ dự án",
      description: "Quản lý và giám sát tiến độ thực hiện các dự án đầu tư công, chương trình phát triển."
    },
    {
      icon: Users,
      title: "Phân tích ngân sách chi tiết",
      description: "Phân tích thu - chi ngân sách theo từng khoản mục, phòng ban với độ chính xác cao."
    }
  ]

  const benefits = [
    "Tăng 40% hiệu quả quản lý nhà nước",
    "Giảm 30% thời gian báo cáo định kỳ", 
    "Tăng 50% độ minh bạch thông tin",
    "Cải thiện 60% quy trình ra quyết định"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Building2 className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Dashboard cho Chính phủ - Cơ quan ban ngành
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Theo dõi toàn diện các chỉ số kinh tế vĩ mô như tốc độ tăng trưởng GDP, lạm phát, tỷ lệ thất nghiệp, 
              cán cân thanh toán, cùng số liệu thu – chi ngân sách, KPIs, tiến độ triển khai các dự án và các nút nghẽn.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 mr-4">
                Đăng ký tư vấn miễn phí
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Xem demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tính năng chính</h2>
            <p className="text-lg text-gray-600">Giải pháp toàn diện cho quản trị nhà nước hiệu quả</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Lợi ích mang lại</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng hiện đại hóa quản trị nhà nước?</h2>
          <p className="text-xl mb-8">Liên hệ với chúng tôi để được tư vấn giải pháp phù hợp</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact-info">Liên hệ ngay</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/">Về trang chủ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}