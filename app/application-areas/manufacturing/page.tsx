"use client"

import { Factory, Zap, Leaf, TrendingDown, BarChart3, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ManufacturingPage() {
  const features = [
    {
      icon: TrendingDown,
      title: "Giảm 20-30% chi phí",
      description: "Tối ưu hóa quy trình sản xuất và quản lý nguồn lực hiệu quả, giảm thiểu lãng phí."
    },
    {
      icon: Zap,
      title: "Giám sát năng lượng thời gian thực",
      description: "Theo dõi và điều chỉnh mức tiêu thụ năng lượng của từng máy móc, dây chuyền sản xuất."
    },
    {
      icon: Leaf,
      title: "Hướng đến Net-Zero",
      description: "Đạt mục tiêu phát thải carbon bằng 0 thông qua giám sát môi trường và tối ưu năng lượng."
    }
  ]

  const metrics = [
    { label: "Giảm chi phí vận hành", value: "30%" },
    { label: "Tăng hiệu suất sản xuất", value: "25%" },
    { label: "Giảm phát thải CO2", value: "40%" },
    { label: "Tối ưu năng lượng", value: "35%" }
  ]

  const benefits = [
    "Tăng 25% hiệu quả sản xuất tổng thể",
    "Giảm 30% thời gian simple maintenance",
    "Cải thiện 40% an toàn lao động",
    "Tối ưu 50% quản lý kho vật tư"
  ]

  const applications = [
    "Dây chuyền sản xuất ô tô",
    "Nhà máy chế biến thực phẩm", 
    "Khu công nghiệp dệt may",
    "Nhà máy hóa chất",
    "Cơ sở sản xuất điện tử",
    "Xưởng cơ khí chế tạo"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Factory className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Dashboard cho Công nghiệp - Sản xuất
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Tăng cường hiệu quả sản xuất thông qua giám sát năng lượng và KPI thời gian thực, 
              giảm 20-30% chi phí nhờ tối ưu vận hành, cải thiện an toàn và hướng đến công nghiệp xanh, net-zero.
            </p>
            <div className="mt-8">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 mr-4">
                Đăng ký tư vấn miễn phí
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hiệu quả đã chứng minh</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">{metric.value}</div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tính năng chính</h2>
            <p className="text-lg text-gray-600">Giải pháp toàn diện cho ngành công nghiệp sản xuất</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-orange-200">
                <CardHeader>
                  <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl text-orange-800">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ứng dụng thực tế</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-orange-500">
                <div className="flex items-center">
                  <Factory className="h-5 w-5 text-orange-600 mr-3" />
                  <span className="font-medium text-gray-900">{app}</span>
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
                  <div className="bg-orange-100 p-2 rounded-full mr-4">
                    <Settings className="h-5 w-5 text-orange-600" />
                  </div>
                  <span className="font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Chuyển đổi số cho nhà máy của bạn</h2>
          <p className="text-xl mb-8">Bắt đầu hành trình hướng đến công nghiệp 4.0 và Net-Zero</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              <Link href="/contact-info">Liên hệ ngay</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-orange-600">
              <Link href="/">Về trang chủ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}