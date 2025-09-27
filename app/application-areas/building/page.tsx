"use client"

import { useState, useEffect } from "react"
import { Building, Thermometer, TrendingDown, Shield, Zap, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import Image from "@/components/common/Image"

export default function BuildingPage() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    { src: "/application-areas/16.png", alt: "Ứng dụng Smart Dashboard - Phần 1" },
    { src: "/application-areas/17.png", alt: "Ứng dụng Smart Dashboard - Phần 2" }
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
      title: "Tiết kiệm năng lượng 30-40%",
      description: "Tối ưu hóa hệ thống HVAC, chiếu sáng và điều hòa thông qua AI và IoT thông minh."
    },
    {
      icon: Shield,
      title: "Tăng an toàn và bảo mật",
      description: "Giám sát an ninh 24/7, kiểm soát ra vào tự động và phát hiện sớm các rủi ro tiềm ẩn."
    },
    {
      icon: Settings,
      title: "Quản lý tự động hóa",
      description: "Điều khiển thông minh các hệ thống tòa nhà, giảm thiểu can thiệp thủ công và tối ưu vận hành."
    }
  ]

  const metrics = [
    { label: "Tiết kiệm năng lượng", value: "35%" },
    { label: "Giảm chi phí vận hành", value: "25%" },
    { label: "Tăng hiệu quả làm việc", value: "40%" },
    { label: "Cải thiện an toàn", value: "50%" }
  ]

  const benefits = [
    "Giám sát hệ thống tòa nhà 24/7/365",
    "Tự động hóa 85% quy trình quản lý",
    "Tăng 45% sự hài lòng của người dùng",
    "Giảm 60% thời gian bảo trì và sửa chữa"
  ]

  const services = [
    { name: "Hệ thống HVAC", icon: Thermometer },
    { name: "Chiếu sáng thông minh", icon: Zap },
    { name: "An ninh - Camera", icon: Shield },
    { name: "Kiểm soát ra vào", icon: Shield },
    { name: "Quản lý năng lượng", icon: TrendingDown },
    { name: "Hệ thống báo cháy", icon: Settings }
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
              Smart Dashboard cho Tòa nhà thông minh
            </h1>
            <p className="text-xl text-gray-100 max-w-xl leading-relaxed">
              Quản lý tổng thể hệ thống tòa nhà từ HVAC, điện, nước, an ninh đến các tiện ích. 
              Tối ưu năng lượng, giảm chi phí vận hành và nâng cao trải nghiệm người dùng thông qua giám sát thời gian thực 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">TÒA NHÀ THÔNG MINH</h2>
            </div>
            
            {/* Giới thiệu chung */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-6">Giới thiệu chung về Quản lý Tòa nhà & Trung tâm dữ liệu</h3>
              
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Trong bối cảnh đô thị hóa và số hóa, các tòa nhà hiện đại, đặc biệt là những hạ tầng trọng yếu như 
                  <span className="font-semibold text-blue-700"> trung tâm dữ liệu (Data Center)</span>, đã phát triển thành những 
                  <span className="font-semibold text-blue-700">hệ sinh thái công nghệ phức tạp</span>. 
                  Chúng không còn là những cấu trúc tĩnh mà là các <span className="font-semibold text-blue-700">tổ chức sống</span>, 
                  vận hành bởi sự kết hợp của nhiều hệ thống khác nhau.
                </p>

                {/* Ảnh minh họa */}
              <div className="mb-8 flex justify-center">
                <Image 
                  src="/application-areas/15.png" 
                  alt="Giới thiệu về Quản lý Tòa nhà & Trung tâm dữ liệu" 
                  className="max-w-lg h-auto rounded-lg shadow-lg"
                />
              </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-gray-50 dark:from-blue-900/30 dark:to-gray-800/30 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700 dark:text-gray-300">
                    Các hệ thống này bao gồm <span className="font-semibold text-blue-700">Quản lý Tòa nhà (BMS)</span>, 
                    điện (Electrical), <span className="font-semibold text-blue-700">thông gió và điều hòa không khí (HVAC)</span>, 
                    cùng các hệ thống an ninh như <span className="font-semibold text-blue-700">camera giám sát (CCTV)</span> 
                    và kiểm soát ra vào.
                  </p>
                </div>
              </div>
            </div>

            {/* Thách thức thực tế */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">Thách thức thực tế của Quản lý Tòa nhà & Data Center</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Việc quản lý các cơ sở hạ tầng này theo phương pháp truyền thống đang đối mặt với nhiều thách thức nghiêm trọng, 
                bắt nguồn từ sự phức tạp và thiếu kết nối của các hệ thống.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Ảnh minh họa thách thức - Cột trái */}
                <div className="h-full flex items-center justify-center">
                  <Image 
                    src="/application-areas/16.png" 
                    alt="Thách thức thực tế của Quản lý Tòa nhà & Data Center" 
                    className="object-contain max-h-80 md:max-h-96 w-auto rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Accordion cards - Cột phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="challenge-1" className="border border-red-200 bg-red-50 rounded-lg">
                      <AccordionTrigger className="text-red-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Building className="h-5 w-5 mr-2" />
                        Dữ liệu phân mảnh, thiếu tầm nhìn hợp nhất
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        <p className="mb-3">
                          Đây là vấn đề cố hữu. Dữ liệu từ hệ thống quản lý năng lượng (EMS), hệ thống quản lý tòa nhà (BMS), 
                          và hệ thống an ninh thường hoạt động trong các "ốc đảo thông tin" (Data Silos) riêng biệt.
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-red-300">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            Người quản lý không thể có một cái nhìn toàn cảnh để thấy mối liên hệ giữa việc nhiệt độ tăng 
                            trong phòng máy chủ (dữ liệu BMS) và mức tiêu thụ điện đột biến (dữ liệu EMS).
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-2" className="border border-orange-200 bg-orange-50 rounded-lg">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingDown className="h-5 w-5 mr-2" />
                        Quản lý vận hành theo kiểu "phản ứng"
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Do thiếu dữ liệu tập trung và khả năng phân tích, đội ngũ vận hành thường chỉ hành động khi sự cố đã xảy ra. 
                        Họ quản lý theo kiểu "chữa cháy", thay vì hành động chủ động.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-3" className="border border-yellow-200 bg-yellow-50 rounded-lg">
                      <AccordionTrigger className="text-yellow-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Zap className="h-5 w-5 mr-2" />
                        Lãng phí năng lượng và chi phí cao
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Việc không thể giám sát và phân tích tổng thể khiến việc xác định các khu vực lãng phí năng lượng trở nên khó khăn. 
                        Các hệ thống HVAC có thể hoạt động dưới công suất tối ưu.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-4" className="border border-purple-200 bg-purple-50 rounded-lg">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Settings className="h-5 w-5 mr-2" />
                        Thời gian phản ứng sự cố chậm
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Khi một sự cố xảy ra (mất điện, rò rỉ nước, hoặc có xâm nhập trái phép), việc xác định nguyên nhân gốc rễ 
                        và vị trí chính xác của vấn đề bị chậm lại do phải kiểm tra thông tin từ nhiều hệ thống rời rạc. 
                        Điều này làm tăng rủi ro và thiệt hại.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Ứng dụng Smart Dashboard */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">Ứng dụng chi tiết của Smart Dashboard trong thực tế</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Smart Dashboard đóng vai trò là một <span className="font-semibold text-blue-700">"trung tâm thần kinh"</span>, 
                hợp nhất mọi hệ thống của tòa nhà và trung tâm dữ liệu vào một giao diện duy nhất, 
                cho phép quản lý thông minh và chủ động.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Accordion cards - Cột trái */}
                <div className="space-y-4 order-2 md:order-1">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="application-1" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🏢 Tạo ra "Phòng điều hành ảo" với Bản sao số (Digital Twin)
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-blue-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Người quản lý không còn phải nhìn vào các bản vẽ kỹ thuật hay nhiều màn hình riêng lẻ. 
                              Thay vào đó, họ tương tác với một mô hình 3D chi tiết của toàn bộ tòa nhà hoặc trung tâm dữ liệu.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Mô hình 3D này là một "bản sao kỹ thuật số" được liên kết với dữ liệu thời gian thực từ các cảm biến và hệ thống. 
                              Người dùng có thể "đi sâu" vào mô hình, nhấp vào một phòng máy chủ, một dãy tủ rack, 
                              hoặc một thiết bị làm mát cụ thể để xem các thông số vận hành.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-2" className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🌡️ Giám sát môi trường và năng lượng thông minh
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Các chỉ số quan trọng về môi trường và năng lượng được theo dõi liên tục và trực quan hóa một cách dễ hiểu.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Dashboard tích hợp dữ liệu từ các cảm biến IoT để theo dõi nhiệt độ, chất lượng không khí. 
                              Nó sử dụng các công cụ như bản đồ nhiệt (heatmap) để hiển thị các khu vực có nhiệt độ cao bất thường 
                              trong trung tâm dữ liệu và giám sát các chỉ số tiêu thụ năng lượng.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-3" className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🛡️ Quản lý an ninh và an toàn tích hợp
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-purple-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Các sự kiện an ninh được xác minh và xử lý nhanh chóng hơn nhờ việc kết hợp nhiều nguồn thông tin.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Hệ thống tích hợp hình ảnh trực tiếp từ camera an ninh (CCTV) ngay trên mô hình 3D. 
                              Khi có một cảnh báo (ví dụ: cửa phòng máy chủ bị mở trái phép), dashboard có thể tự động hiển thị 
                              hình ảnh từ camera gần nhất tại vị trí đó.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-4" className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🔧 Hỗ trợ vận hành và bảo trì chủ động
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-orange-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Giảm thiểu rủi ro ngừng hoạt động đột xuất, một yếu tố sống còn đối với các trung tâm dữ liệu.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-700 dark:text-orange-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Dashboard tích hợp AI để thực hiện bảo trì dự đoán cho các thiết bị trọng yếu như hệ thống làm mát 
                              hay bộ lưu điện (UPS). AI có thể cảnh báo sớm nguy cơ hỏng hóc, cho phép lên kế hoạch bảo trì 
                              trước khi sự cố xảy ra.
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
              <h3 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">Lợi ích chiến lược và định lượng</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Việc triển khai Smart Dashboard cho tòa nhà và trung tâm dữ liệu mang lại những lợi ích cụ thể, 
                giúp chuyển đổi hoàn toàn phương thức quản lý và vận hành.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Cột ảnh bên trái */}
                <div className="flex justify-center">
                  <Image 
                    src="/application-areas/17.png" 
                    alt="Lợi ích chiến lược và định lượng" 
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Hiệu quả đã chứng minh</h2>
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
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Tính năng nổi bật</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">Giải pháp toàn diện cho tòa nhà thông minh</p>
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Hệ thống được quản lý</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                    <service.icon className="h-6 w-6 text-blue-600 dark:text-blue-400 mb-2" />
                    <span className="font-medium text-gray-900 dark:text-gray-100">{service.name}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Cột 2: Lợi ích mang lại */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Lợi ích mang lại</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mb-2">
                      <Building className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="font-medium text-gray-900 dark:text-gray-100">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Chuyển đổi tòa nhà của bạn thành tòa nhà thông minh</h2>
          <p className="text-xl mb-8">Tối ưu năng lượng, nâng cao an toàn và cải thiện trải nghiệm người dùng</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact-info">Liên hệ ngay</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white text-blue-600">
              <Link href="/">Về trang chủ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}