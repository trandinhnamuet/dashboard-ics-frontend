"use client"

import { useState, useEffect } from "react"
import { Banknote, TrendingUp, Shield, Clock, BarChart3, CreditCard, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "@/components/common/Image"

export default function FinancePage() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    { src: "/application-areas/3.png", alt: "Ứng dụng Smart Dashboard - Phần 1" },
    { src: "/application-areas/4.png", alt: "Ứng dụng Smart Dashboard - Phần 2" }
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 dark:opacity-80"
          style={{
            backgroundImage: 'url(/application-areas/finance/image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Overlay (bỏ gradient) */}
        <div className="absolute inset-0 z-10" />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-left ml-0 mr-auto pr-5">
            <div className="flex justify-start mb-6">
              <div className="p-4 rounded-full backdrop-blur-sm flex items-center justify-center">
                <div className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Dashboard - Ngành Tài chính / Ngân hàng / Bảo hiểm
            </h1>
            <p className="text-xl text-green-100 max-w-3xl leading-relaxed">
              Giúp nhà quản lý nắm trọn bức tranh hoạt động: dòng tiền, KPI từng chi nhánh, ATM, dư nợ, 
              hiệu suất thu hồi nợ và số lượng tài khoản mới, tất cả hiển thị trực quan và cập nhật tức thì 24/7.
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
              <h3 className="text-4xl font-semibold text-green-700 dark:text-green-400 mb-6 text-center">Thách thức thực tế của ngành Tài chính - Ngân hàng</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Ngành tài chính ngân hàng vận hành trong một môi trường có độ phức tạp, rủi ro và yêu cầu tuân thủ cực kỳ cao. Các thách thức cốt lõi bao gồm:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Ảnh minh họa thách thức - Cột trái */}
                <div className="h-full flex items-center justify-center">
                  <Image 
                    src="/application-areas/2.png" 
                    alt="Thách thức thực tế của ngành Tài chính - Ngân hàng" 
                    className="object-contain max-h-80 md:max-h-96 w-auto rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Accordion cards - Cột phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="challenge-1" className="border border-orange-200 bg-orange-50 rounded-lg">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Clock className="h-5 w-5 mr-2" />
                        Độ trễ trong ra quyết định
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Theo phương pháp quản lý truyền thống, các quyết định thường được đưa ra dựa trên các báo cáo thủ công, định kỳ theo tháng hoặc quý. Điều này tạo ra một độ trễ lớn, khiến ban lãnh đạo phải "phản ứng" với các dữ liệu đã lỗi thời.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-2" className="border border-red-200 bg-red-50 rounded-lg">
                      <AccordionTrigger className="text-red-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Dữ liệu phân mảnh
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Dữ liệu thường nằm rải rác ở nhiều hệ thống độc lập (Data Silos) như hệ thống lõi ngân hàng, CRM, dữ liệu giao dịch. Việc thiếu nền tảng hợp nhất khiến việc có cái nhìn 360 độ trở nên khó khăn.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-3" className="border border-purple-200 bg-purple-50 rounded-lg">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Shield className="h-5 w-5 mr-2" />
                        Áp lực tuân thủ và bảo mật
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Phải tuân thủ nhiều quy định khắt khe về bảo mật dữ liệu và tài chính như GDPR, HIPAA, ISO 27001. Đồng thời đối mặt với nguy cơ tấn công mạng và rò rỉ dữ liệu.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-4" className="border border-yellow-200 bg-yellow-50 rounded-lg">
                      <AccordionTrigger className="text-yellow-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Quản lý rủi ro phức tạp
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Đối mặt với nhiều loại rủi ro như rủi ro tín dụng, rủi ro thị trường, gian lận tài chính. Việc phát hiện sớm dấu hiệu bất thường trong hàng triệu giao dịch hàng ngày là thách thức khổng lồ.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Ứng dụng Smart Dashboard */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-green-700 dark:text-green-400 mb-6  text-center">Ứng dụng chi tiết của Smart Dashboard trong thực tế</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Để giải quyết các thách thức trên, Smart Dashboard được ứng dụng như một "trung tâm chỉ huy" hay "bộ não số", biến dữ liệu thành công cụ quản trị chủ động.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Accordion cards - Cột trái */}
                <div className="space-y-4 order-2 md:order-1">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="application-1" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🎯 Xây dựng "Phòng điều hành ảo" cho Ban lãnh đạo
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-blue-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Thay vì chờ báo cáo giấy, CEO và ban giám đốc có thể truy cập một Dashboard Quản lý hiển thị các KPI tài chính cốt lõi theo thời gian thực.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Dashboard trực quan hóa các chỉ số như Tỷ lệ nợ xấu, Tỷ suất lợi nhuận trên tài sản (ROA) và Chỉ số hài lòng khách hàng (NPS), cho phép so sánh với mục tiêu và cùng kỳ năm trước.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-2" className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🤖 Tích hợp AI để quản lý rủi ro chủ động
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Tập đoàn tài chính sử dụng Dashboard tích hợp AI để không chỉ theo dõi mà còn dự báo các rủi ro.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Hệ thống AI phân tích xu hướng thị trường để dự báo biến động lãi suất, phát hiện sớm gian lận và dự báo rủi ro tín dụng khách hàng.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-3" className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🛡️ Trung tâm An ninh Mạng (SOC) thông minh
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-purple-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Các nhóm an ninh mạng phải đối mặt với hàng triệu cảnh báo mỗi ngày, dẫn đến tình trạng "mệt mỏi vì cảnh báo".
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Smart Dashboard tổng hợp dữ liệu từ SIEM và SOAR, sử dụng AI để tự động phân loại và chỉ làm nổi bật các mối đe dọa thực sự nghiêm trọng.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-4" className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        📋 Tối ưu hóa hoạt động và tuân thủ
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-orange-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Các quy trình kiểm toán và báo cáo tuân thủ thường rất tốn công sức.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-700 dark:text-orange-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Dashboard tự động hóa việc tạo báo cáo tuân thủ, giám sát liên tục và cung cấp nhật ký kiểm toán, giúp tổ chức "luôn sẵn sàng cho kiểm toán".
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
              <h3 className="text-4xl font-semibold text-green-700 dark:text-green-400 mb-6  text-center">Lợi ích chiến lược và định lượng</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Việc ứng dụng Smart Dashboard một cách hiệu quả mang lại những giá trị to lớn, có thể đo lường được:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Cột ảnh bên trái */}
                <div className="flex justify-center">
                  <Image 
                    src="/application-areas/5.png" 
                    alt="Lợi ích chiến lược và định lượng" 
                    className="max-w-lg h-auto rounded-lg shadow-lg"
                  />
                </div>
                {/* Cột các card bên phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="benefit-1" className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg border">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Tăng tốc độ và chất lượng ra quyết định
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <p className="mb-3">
                          Đây là lợi ích hữu hình nhất. Các ngân hàng sử dụng dashboard đã ghi nhận:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">30%</span>
                            Giảm thời gian xử lý dữ liệu
                          </li>
                          <li className="flex items-center">
                            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">40%</span>
                            Cải thiện tốc độ ra quyết định tài chính
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-2" className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg border">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Tiết kiệm chi phí và nâng cao hiệu suất
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        Việc tự động hóa quá trình thu thập, tổng hợp dữ liệu và tạo báo cáo giúp giải phóng nhân lực khỏi các công việc thủ công. Điều này không chỉ tiết kiệm chi phí nhân sự mà còn cho phép họ tập trung vào các nhiệm vụ có giá trị cao hơn như phân tích chiến lược.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-3" className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg border">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Shield className="h-5 w-5 mr-2" />
                        Tăng cường an ninh và khả năng phục hồi
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        Cung cấp một cái nhìn toàn diện và theo thời gian thực về các mối đe dọa, giúp các tổ chức tài chính giảm thiểu thời gian phát hiện và phản ứng sự cố, từ đó bảo vệ tài sản và dữ liệu khách hàng tốt hơn.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-4" className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg border">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <CreditCard className="h-5 w-5 mr-2" />
                        Minh bạch hóa và định lượng rủi ro
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        Một Smart Dashboard cao cấp có khả năng "dịch rủi ro mạng thành đô la và xu". Nó giúp CISO chứng minh được Lợi tức đầu tư an ninh (ROSI), biện minh cho ngân sách và truyền đạt giá trị của an ninh bằng ngôn ngữ kinh doanh tới hội đồng quản trị.
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
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">Số liệu ấn tượng</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{metric.value}</div>
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
            <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">Tính năng nổi bật</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Giải pháp toàn diện cho ngành tài chính ngân hàng</p>
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
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-red-600 dark:text-red-400 mb-4">Lợi ích mang lại</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <CreditCard className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 dark:bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Tối ưu hóa hiệu quả tài chính ngay hôm nay</h2>
          <p className="text-xl mb-8">Liên hệ để được tư vấn giải pháp Smart Dashboard phù hợp</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link href="/contact-info">Liên hệ ngay</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-green-600 hover:bg-white hover:text-green-600" asChild>
              <Link href="/">Về trang chủ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}