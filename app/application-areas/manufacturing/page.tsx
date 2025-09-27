"use client"

import { Factory, Zap, Leaf, TrendingDown, BarChart3, Settings, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "@/components/common/Image"

export default function ManufacturingPage() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    { src: "/application-areas/12.png", alt: "Ứng dụng Smart Dashboard - Phần 1" },
    { src: "/application-areas/13.png", alt: "Ứng dụng Smart Dashboard - Phần 2" }
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image Only */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/application-areas/manufacturing/image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl text-left ml-0 mr-auto">
            <div className="flex justify-start mb-6">
              <div className="p-4 rounded-full backdrop-blur-sm flex items-center justify-center">
                <div className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Dashboard cho Công nghiệp - Sản xuất
            </h1>
            <p className="text-xl text-orange-100 max-w-3xl leading-relaxed">
              Tăng cường hiệu quả sản xuất thông qua giám sát năng lượng và KPI thời gian thực, 
              giảm 20-30% chi phí nhờ tối ưu vận hành, cải thiện an toàn và hướng đến công nghiệp xanh, net-zero.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">KHU CÔNG NGHIỆP, NHÀ MÁY</h2>
            </div>
            
            {/* Giới thiệu chung */}
            <div className="mb-16">
              {/* Ảnh minh họa */}
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Trong bối cảnh của cuộc <span className="font-semibold text-orange-700">Cách mạng Công nghiệp lần thứ tư (Công nghiệp 4.0)</span>, 
                  ngành sản xuất và các khu công nghiệp (KCN) đang đứng ở tâm điểm của một cuộc chuyển đổi sâu sắc và toàn diện. 
                  Các nhà máy không còn đơn thuần là nơi lắp ráp, mà đã trở thành những <span className="font-semibold text-orange-700">"mỏ dữ liệu khổng lồ"</span> 
                  do sự bùng nổ của các thiết bị IoT, cảm biến thông minh và hệ thống tự động hóa.
                </p>

                <div className="mb-8 flex justify-center">
                  <Image 
                    src="/application-areas/11.png" 
                    alt="Giới thiệu về Khu Công nghiệp, Nhà máy" 
                    className="max-w-lg h-auto rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-cyan-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <p className="text-gray-700">
                    Dữ liệu giờ đây được ví như <span className="font-semibold text-orange-700">"dầu mỏ mới"</span>, 
                    trở thành tài sản chiến lược và là huyết mạch nuôi sống mọi hoạt động của một 
                    <span className="font-semibold text-orange-700"> Nhà máy thông minh (Smart Factory)</span>.
                  </p>
                </div>
                
                <p>
                  <span className="font-semibold text-orange-700">Khu Công nghiệp Thông minh (Smart Industrial Park)</span> 
                  là một bước tiến xa hơn, áp dụng các nguyên tắc của Smart Factory trên quy mô toàn khu, 
                  quản lý một cách tích hợp từ hạ tầng, sản xuất, năng lượng, môi trường cho đến an ninh và logistics.
                </p>
              </div>
            </div>

            {/* Thách thức thực tế */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-orange-700 mb-6 text-center">Thách thức thực tế của Khu Công nghiệp & Nhà máy</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Sở hữu nhiều dữ liệu nhưng không thể khai thác hiệu quả sẽ biến tiềm năng thành gánh nặng. 
                Các nhà máy và KCN đang đối mặt với những rào cản mang tính hệ thống.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Ảnh minh họa thách thức - Cột trái */}
                <div className="h-full flex items-center justify-center">
                  <Image 
                    src="/application-areas/22.jpg" 
                    alt="Thách thức thực tế của Khu Công nghiệp & Nhà máy" 
                    className="object-contain max-h-80 md:max-h-96 w-auto rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Accordion cards - Cột phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="challenge-1" className="border border-cyan-200 bg-cyan-50 rounded-lg">
                      <AccordionTrigger className="text-cyan-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Dữ liệu phân mảnh và "Ốc đảo thông tin" (Data Silos)
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 px-6 pb-4">
                        <p className="mb-3">
                          Đây là thách thức hàng đầu. Dữ liệu từ các hệ thống OT (SCADA, PLC) và IT (ERP, MES) 
                          thường do các bộ phận khác nhau quản lý và không "nói chuyện" với nhau.
                        </p>
                        <div className="bg-white p-3 rounded border-l-4 border-cyan-300">
                          <h5 className="font-medium text-cyan-700 mb-2">Ví dụ điển hình:</h5>
                          <p className="text-gray-700 text-sm">
                            Đội bảo trì xem dữ liệu về độ rung của máy trên hệ thống CMMS, đội sản xuất theo dõi sản lượng trên MES, 
                            và đội quản lý cơ sở vật chất giám sát mức tiêu thụ năng lượng của chính cái máy đó trên hệ thống BMS. 
                            Hậu quả là không ai có được cái nhìn toàn cảnh, dẫn đến quyết định chậm trễ và kém hiệu quả.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-2" className="border border-yellow-200 bg-yellow-50 rounded-lg">
                      <AccordionTrigger className="text-yellow-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Settings className="h-5 w-5 mr-2" />
                        Khó khăn tích hợp và thiếu chuẩn hóa
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 px-6 pb-4">
                        Việc kết nối một máy tiện CNC 20 năm tuổi với một cảm biến IoT hiện đại đòi hỏi các giải pháp 
                        chuyển đổi giao thức phức tạp và tốn kém do sự đa dạng về nhà cung cấp và công nghệ.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-3" className="border border-purple-200 bg-purple-50 rounded-lg">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingDown className="h-5 w-5 mr-2" />
                        Chất lượng dữ liệu kém
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 px-6 pb-4">
                        Chất lượng của quyết định phụ thuộc vào chất lượng của dữ liệu đầu vào. 
                        Các vấn đề: dữ liệu thiếu do lỗi kết nối mạng, không chính xác do cảm biến lệch chuẩn, 
                        hoặc không nhất quán do nhập liệu thủ công.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-4" className="border border-blue-200 bg-blue-50 rounded-lg">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Leaf className="h-5 w-5 mr-2" />
                        An ninh và Bảo mật
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 px-6 pb-4">
                        Khi các hệ thống OT được kết nối với mạng IT và Internet, chúng đối mặt với nguy cơ an ninh mạng. 
                        Tấn công không chỉ làm rò rỉ dữ liệu mà còn có thể phá hoại máy móc, gây ngừng trệ sản xuất.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-5" className="border border-green-200 bg-green-50 rounded-lg">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Zap className="h-5 w-5 mr-2" />
                        Khoảng trống về kỹ năng
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 px-6 pb-4">
                        Việc biến dữ liệu thành insight đòi hỏi đội ngũ có kỹ năng đa ngành: vừa hiểu sâu về máy móc, 
                        vừa có chuyên môn về khoa học dữ liệu. Sự thiếu hụt nhân sự này là rào cản lớn.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Ứng dụng Smart Dashboard */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-orange-700 mb-6 text-center">Ứng dụng chi tiết của Smart Dashboard trong thực tế</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Smart Dashboard đóng vai trò là "trung tâm chỉ huy" hoặc "bộ não số" của nhà máy và KCN, 
                giải quyết triệt để các thách thức trên.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Accordion cards - Cột trái */}
                <div className="space-y-4 order-2 md:order-1">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="application-1" className="bg-gradient-to-r from-orange-50 to-cyan-50 rounded-lg border border-orange-200">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🏭 Xây dựng "Phòng điều hành ảo" với Bản sao số (Digital Twin)
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-orange-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 text-sm">
                              Thay vì quản lý qua các màn hình SCADA riêng lẻ hoặc bảng tính, 
                              người quản lý tương tác với một mô hình 3D trực quan của toàn bộ nhà máy hoặc KCN.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-700 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 text-sm">
                              Mô hình 3D này là một "bản sao kỹ thuật số" sống động, nơi mỗi máy móc được liên kết với luồng dữ liệu thời gian thực. 
                              Khi cảm biến báo động, máy móc tương ứng trên mô hình 3D sẽ thay đổi màu sắc, nhấp nháy hoặc hiển thị cảnh báo.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-2" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        📊 Giám sát hiệu suất toàn diện qua KPIs then chốt
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-blue-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 text-sm">
                              Các chỉ số hiệu suất quan trọng nhất được theo dõi liên tục, 
                              giúp ban lãnh đạo nắm bắt "sức khỏe" của hoạt động sản xuất ngay lập tức.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-700 mb-2">Ứng dụng:</h5>
                            <div className="text-gray-700 text-sm space-y-1">
                              <p>• <span className="font-medium">OEE</span> (Overall Equipment Effectiveness)</p>
                              <p>• <span className="font-medium">MTBF</span> (Mean Time Between Failures)</p>
                              <p>• <span className="font-medium">MTTR</span> (Mean Time To Repair)</p>
                              <p>• Tỷ lệ phế phẩm và Tiêu thụ năng lượng</p>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-3" className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🤖 Bảo trì dự đoán nhờ tích hợp AI/ML
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 text-sm">
                              Chuyển đổi từ mô hình bảo trì "chữa cháy" (khi hỏng mới sửa) sang bảo trì chủ động.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 text-sm">
                              Hệ thống tích hợp thuật toán học máy để phân tích dữ liệu lịch sử về độ rung, nhiệt độ, áp suất. 
                              Dashboard có thể dự báo khả năng xảy ra hỏng hóc, cho phép lên kế hoạch bảo trì trước khi sự cố xảy ra.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-4" className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🚨 Hệ thống cảnh báo thông minh, giảm thiểu "nhiễu loạn"
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-purple-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 text-sm">
                              Người vận hành không còn bị quá tải bởi hàng trăm cảnh báo không quan trọng, 
                              tình trạng gọi là "nhiễu loạn cảnh báo" (Alert Fatigue).
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-700 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 text-sm">
                              Hệ thống sử dụng logic phức tạp để tương quan nhiều sự kiện. Ví dụ: cảnh báo chỉ kích hoạt khi có đồng thời 
                              (1) nhiệt độ tăng, (2) độ rung tăng, VÀ (3) sản lượng giảm - cho thấy vấn đề nghiêm trọng thay vì biến động tạm thời.
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
              <h3 className="text-2xl font-semibold text-orange-700 mb-6 text-center">Lợi ích chiến lược và định lượng</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Việc triển khai Smart Dashboard không chỉ là một nâng cấp công nghệ, mà là một quyết định chiến lược 
                mang lại những kết quả kinh doanh vượt trội và có thể đo lường được.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Cột ảnh bên trái */}
                <div className="flex justify-center">
                  <Image 
                    src="/application-areas/14.png" 
                    alt="Lợi ích chiến lược và định lượng" 
                    className="max-w-lg h-auto rounded-lg shadow-lg"
                  />
                </div>
                {/* Cột các card bên phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="benefit-1" className="bg-gradient-to-br from-orange-100 to-cyan-100 rounded-lg border">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingDown className="h-5 w-5 mr-2" />
                        Tối ưu hóa vận hành và nâng cao hiệu suất
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                            <p className="text-sm font-medium text-orange-700">Minh chứng:</p>
                            <p className="text-gray-700 text-sm">
                              Tăng hiệu quả thiết bị tổng thể (OEE) lên đến <span className="font-bold text-orange-600">30%</span>
                            </p>
                          </div>
                          <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                            <p className="text-sm font-medium text-orange-700">Lợi ích:</p>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• Giảm thời gian ngừng hoạt động: <span className="font-bold text-orange-600">73%</span></li>
                              <li>• Giảm thời gian xử lý sự cố: <span className="font-bold text-orange-600">90%</span></li>
                              <li>• Báo cáo từ 1-2 ngày → tức thì</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-2" className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg border">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Tiết kiệm chi phí đáng kể
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border-l-4 border-green-400">
                            <p className="text-sm font-medium text-green-700">Minh chứng:</p>
                            <p className="text-gray-700 text-sm">
                              Giảm chi phí vận hành KCN lên đến <span className="font-bold text-green-600">60%</span>
                            </p>
                          </div>
                          <div className="bg-white p-3 rounded border-l-4 border-green-400">
                            <p className="text-sm font-medium text-green-700">Lợi ích:</p>
                            <ul className="text-gray-700 text-sm space-y-1">
                              <li>• Tiết kiệm chi phí nhân lực: <span className="font-bold text-green-600">20%</span></li>
                              <li>• Giảm chi phí năng lượng đáng kể</li>
                              <li>• Tự động hóa báo cáo và thu thập dữ liệu</li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-3" className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg border">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Settings className="h-5 w-5 mr-2" />
                        Chuyển đổi văn hóa quản lý
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-sm px-6 pb-4">
                        Smart Dashboard thay đổi văn hóa quản lý từ phản ứng, dựa trên kinh nghiệm ("chữa cháy") 
                        sang chủ động, dựa trên dữ liệu ("quản trị thông minh"). Tạo ra "ngôn ngữ chung" về hiệu suất, 
                        thúc đẩy minh bạch và cộng tác.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-4" className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg border">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Leaf className="h-5 w-5 mr-2" />
                        Tăng cường năng lực cạnh tranh
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-sm px-6 pb-4">
                        KCN được quản lý hiệu quả, an toàn và bền vững sẽ hấp dẫn hơn đối với các nhà đầu tư quốc tế, 
                        đặc biệt những doanh nghiệp yêu cầu cao về tiêu chuẩn ESG. 
                        Đây là chìa khóa xây dựng lợi thế cạnh tranh bền vững trong thời đại số.
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hiệu quả đã chứng minh</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-cyan-50 rounded-lg">
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
      <section className="py-16 text-white" style={{backgroundColor: '#14b8a6'}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Chuyển đổi số cho nhà máy của bạn</h2>
          <p className="text-xl mb-8">Bắt đầu hành trình hướng đến công nghiệp 4.0 và Net-Zero</p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/contact-info">Liên hệ ngay</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white text-teal-600">
              <Link href="/">Về trang chủ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}