"use client"

import { Banknote, TrendingUp, Shield, Clock, BarChart3, CreditCard } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FinancePage() {
  const features = [
    {
      icon: TrendingUp,
      title: "Tăng trưởng 20-30%",
      description: "Tối ưu hóa doanh thu và lợi nhuận thông qua phân tích dữ liệu chính xác và kịp thời."
    },
    {
      icon: BarChart3,
      title: "Giám sát dòng tiền 24/7",
      description: "Theo dõi dòng tiền thời gian thực từ tất cả các chi nhánh, ATM và kênh giao dịch."
    },
    {
      icon: Shield,
      title: "Tối ưu quyết định kinh doanh",
      description: "Ra quyết định nhanh chóng dựa trên dữ liệu phân tích thông minh và dự báo chính xác."
    }
  ]

  const metrics = [
    { label: "Dư nợ theo thời gian thực", value: "100%" },
    { label: "Hiệu suất thu hồi nợ", value: "95%" },
    { label: "Tài khoản mới mỗi ngày", value: "500+" },
    { label: "Giao dịch được xử lý", value: "1M+" }
  ]

  const benefits = [
    "Tăng 25% hiệu quả quản lý rủi ro tín dụng",
    "Giảm 40% thời gian xử lý báo cáo",
    "Tăng 30% độ chính xác dự báo dòng tiền",
    "Cải thiện 50% trải nghiệm khách hàng"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Banknote className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Dashboard cho Tài chính - Ngân hàng - Bảo hiểm
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Giúp nhà quản lý nắm trọn bức tranh hoạt động: dòng tiền, KPI từng chi nhánh, ATM, dư nợ, 
              hiệu suất thu hồi nợ và số lượng tài khoản mới, tất cả hiển thị trực quan và cập nhật tức thì 24/7.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 mr-4">
                Đăng ký tư vấn miễn phí
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Số liệu ấn tượng</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">{metric.value}</div>
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
            <p className="text-lg text-gray-600">Giải pháp toàn diện cho ngành tài chính ngân hàng</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-green-200">
                <CardHeader>
                  <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl text-green-800">{feature.title}</CardTitle>
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
                    <CreditCard className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tối ưu hóa hiệu quả tài chính ngay hôm nay</h2>
          <p className="text-xl mb-8">Liên hệ để được tư vấn giải pháp Smart Dashboard phù hợp</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Link href="/contact-info">Liên hệ ngay</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-600">
              <Link href="/">Về trang chủ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}