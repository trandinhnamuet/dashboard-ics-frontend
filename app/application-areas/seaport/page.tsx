"use client"

import { Anchor, TrendingUp, Shield, Clock, BarChart3, Ship, ChevronLeft, ChevronRight, Settings, Leaf, Zap, Factory } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "@/components/common/Image"
import Link from "next/link"
import { useState, useRef, useEffect, useCallback } from "react"

export default function SeaportPage() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slideshowImages = [
    { src: "/application-areas/8.png", alt: "Bản sao số 3D cảng biển" },
    { src: "/application-areas/9.png", alt: "Giám sát KPIs thời gian thực" },
    { src: "/application-areas/10.png", alt: "Tự động hóa quy trình vận hành" }
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
      title: "Tăng năng suất 30%",
      description: "Tối ưu hóa hiệu suất bốc dỡ hàng hóa và giảm thời gian quay vòng tàu thông qua quản lý thông minh."
    },
    {
      icon: BarChart3,
      title: "Giám sát KPIs thời gian thực",
      description: "Theo dõi hiệu quả cảng, thông lượng hàng hóa và tình trạng bến cảng 24/7."
    },
    {
      icon: Shield,
      title: "Nâng cao an toàn và an ninh",
      description: "Giảm 40% tai nạn nghiêm trọng và tăng cường kiểm soát an ninh toàn diện."
    }
  ]

  const metrics = [
    { label: "Tăng năng suất bốc dỡ", value: "30%" },
    { label: "Giảm thời gian quay vòng tàu", value: "20%" },
    { label: "Giảm tai nạn nghiêm trọng", value: "40%" },
    { label: "Tăng hiệu quả vận hành", value: "35%" }
  ]

  const benefits = [
    "Tự động hóa 85% quy trình vận hành",
    "Giảm 30% chi phí logistics tổng thể", 
    "Tăng 40% độ chính xác trong kiểm đếm",
    "Cải thiện 50% trải nghiệm khách hàng"
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/application-areas/seaport/image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
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
              Smart Dashboard cho Cảng biển thông minh
            </h1>
            <p className="text-xl text-blue-100 max-w-xl leading-relaxed">
              Biến cảng biển thành trung tâm chỉ huy số với bản sao số 3D, giám sát KPIs thời gian thực, 
              tự động hóa quy trình vận hành và nâng cao năng suất bốc dỡ lên 30%.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Introduction Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Giới thiệu chung */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">Giới thiệu chung về ngành Cảng biển</h3>
              
              
              
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Ngành cảng biển đóng vai trò là <span className="font-semibold text-blue-700 dark:text-blue-400">"huyết mạch"</span> của thương mại toàn cầu 
                  và là mắt xích không thể thiếu trong chuỗi cung ứng quốc tế. Trong bối cảnh khối lượng hàng hóa lưu thông ngày càng tăng 
                  và áp lực về tốc độ, sự chính xác ngày càng lớn, các cảng biển không còn là những bến đỗ tĩnh mà đã trở thành 
                  những <span className="font-semibold text-blue-700 dark:text-blue-400">hệ sinh thái vận hành phức tạp</span>, 
                  quyết định nhịp độ của cả một nền kinh tế.
                </p>

                <div className="mb-8 flex justify-center">
                  <Image 
                    src="/application-areas/6.png" 
                    alt="Giới thiệu về ngành Cảng biển" 
                    className="max-w-lg h-auto rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-6 rounded-lg border-l-4 border-blue-500 dark:border-blue-400">
                  <p className="text-gray-700 dark:text-gray-300">
                    Tại Việt Nam, với <span className="font-semibold text-blue-700 dark:text-blue-400">vị thế địa lý chiến lược</span>, 
                    hệ thống cảng biển được xem là động lực quan trọng cho tăng trưởng kinh tế. 
                    Tuy nhiên, ngành cũng đối mặt với thách thức lớn về hạ tầng kết nối sau cảng và chi phí logistics còn cao, 
                    đòi hỏi một cuộc cách mạng về quản trị vận hành để nâng cao năng lực cạnh tranh.
                  </p>
                </div>
              </div>
            </div>

            {/* Thách thức thực tế */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">Thách thức thực tế của ngành Cảng biển</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Các cảng biển vận hành theo mô hình truyền thống đang phải đối mặt với những "nút thắt" cố hữu, 
                cản trở sự phát triển trong kỷ nguyên số:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Ảnh minh họa thách thức - Cột trái */}
                <div className="h-full flex items-center justify-center">
                  <Image 
                    src="/application-areas/7.png" 
                    alt="Thách thức thực tế của ngành Cảng biển" 
                    className="object-contain max-h-80 md:max-h-96 w-auto rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Accordion cards - Cột phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="challenge-1" className="border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/30 rounded-lg">
                      <AccordionTrigger className="text-red-800 dark:text-red-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Dữ liệu phân mảnh và "Ốc đảo thông tin"
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        <p className="mb-3">
                          Đây là thách thức lớn nhất. Thông tin về một lô hàng có thể nằm ở email của bộ phận kinh doanh, 
                          lịch trình tàu lại ở một phần mềm khác, trong khi thông tin xe ra vào cổng được ghi chép thủ công.
                        </p>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-red-300 dark:border-red-500">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Sự thiếu kết nối này tạo ra một môi trường vận hành mà không ai có được bức tranh toàn cảnh, 
                            dẫn đến quyết định chậm trễ và kém hiệu quả.
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-2" className="border border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/30 rounded-lg">
                      <AccordionTrigger className="text-orange-800 dark:text-orange-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Clock className="h-5 w-5 mr-2" />
                        Thiếu tầm nhìn toàn cảnh theo thời gian thực
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Hệ quả trực tiếp là ban quản lý không thể trả lời nhanh các câu hỏi vận hành quan trọng như: 
                        "Bến nào đang trống?", "Xe tải đang ùn tắc ở đâu?", hay "Năng suất xếp dỡ hiện tại là bao nhiêu?". 
                        Việc ra quyết định thường dựa trên kinh nghiệm hoặc các báo cáo có độ trễ lớn.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-3" className="border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                      <AccordionTrigger className="text-yellow-800 dark:text-yellow-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Hiệu suất vận hành kém và ùn tắc kéo dài
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Khi thiếu dữ liệu đồng bộ, hiệu suất sụt giảm là điều không thể tránh khỏi. 
                        Tàu phải chờ đợi lâu để cập bến, xe container xếp hàng dài ngoài cổng vì thủ tục giấy tờ thủ công, 
                        và việc điều phối thiết bị thiếu tối ưu. Tình trạng này không chỉ gây lãng phí mà còn làm tăng chi phí vận hành, 
                        giảm năng lực cạnh tranh nghiêm trọng.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-4" className="border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                      <AccordionTrigger className="text-purple-800 dark:text-purple-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Shield className="h-5 w-5 mr-2" />
                        Rủi ro về an toàn, an ninh và sai sót con người
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Môi trường vận hành thủ công tiềm ẩn rủi ro cao về an toàn lao động và an ninh. 
                        Việc kiểm soát ra vào lỏng lẻo và phản ứng chậm với các sự cố như hỏa hoạn là những vấn đề nhức nhối. 
                        Sự phụ thuộc vào giấy tờ cũng làm tăng nguy cơ sai sót do con người, gây tổn thất về tài chính và hàng hóa.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            {/* Ứng dụng Smart Dashboard */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">Ứng dụng chi tiết của Smart Dashboard trong thực tế</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Smart Dashboard trong lĩnh vực cảng biển không chỉ là một công cụ hiển thị, mà là một 
                <span className="font-semibold text-blue-700 dark:text-blue-400">"trung tâm chỉ huy số"</span> (Digital Command Center), 
                đóng vai trò là bộ não của toàn bộ hệ sinh thái <span className="font-semibold text-blue-700 dark:text-blue-400">Cảng Thông Minh</span> (Smart Port).
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Accordion cards - Cột trái */}
                <div className="space-y-4 order-2 md:order-1">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="application-1" className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                      <AccordionTrigger className="text-blue-800 dark:text-blue-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🏗️ Xây dựng Bản sao số (Digital Twin) của cảng biển
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Thay vì nhìn vào các bản đồ giấy hoặc bảng tính, người quản lý tương tác với một mô hình 3D sống động của toàn bộ cảng.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Mô hình 3D này là một bản sao số chính xác, được xây dựng từ bản đồ và khảo sát thực địa. 
                              Nó cho phép giám sát vị trí và trạng thái của mọi đối tượng (tàu, xe, cần cẩu) theo thời gian thực.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-2" className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border border-green-200 dark:border-green-700">
                      <AccordionTrigger className="text-green-800 dark:text-green-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        📊 Hệ thống giám sát KPIs toàn diện
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Các chỉ số hiệu suất được tổng hợp và hiển thị một cách khoa học, dễ hiểu.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Xung quanh mô hình 3D là một hệ thống các KPIs được làm mới liên tục: 
                              Hiệu quả hoạt động của cảng, Thông lượng hàng hóa, Thời gian quay vòng tàu, và Tình trạng bến.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-3" className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                      <AccordionTrigger className="text-purple-800 dark:text-purple-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🚨 Xử lý sự cố thông minh và tự động
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Quy trình xử lý các sự cố khẩn cấp như hỏa hoạn được tự động hóa để giảm thiểu thời gian phản ứng.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Hệ thống tự động cảnh báo, điều hướng đến hiện trường, tích hợp CCTV và hỗ trợ ra quyết định khẩn cấp.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="application-4" className="bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 rounded-lg border border-orange-200 dark:border-orange-700">
                      <AccordionTrigger className="text-orange-800 dark:text-orange-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        ⚙️ Tự động hóa quy trình vận hành
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-orange-700 dark:text-orange-400 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Các thủ tục giấy tờ thủ công được loại bỏ hoàn toàn.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-700 dark:text-orange-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Hệ thống Cổng tự động sử dụng Camera AI và RFID, kết hợp ứng dụng di động để đồng bộ dữ liệu ngay lập tức.
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
                    {/* Image caption */}
                    <div className="mt-4 text-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {slideshowImages[currentSlide].alt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lợi ích chiến lược */}
            <div className="mb-16">
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">Lợi ích chiến lược và định lượng</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Việc triển khai Smart Dashboard trong mô hình Cảng Thông Minh mang lại những kết quả đột phá, 
                đã được chứng minh qua các trường hợp thực tiễn như <span className="font-semibold text-blue-700 dark:text-blue-400">Cảng Busan</span>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Cột ảnh bên trái */}
                <div className="flex justify-center">
                  <Image 
                    src="/application-areas/23.jpg" 
                    alt="Lợi ích chiến lược và định lượng" 
                    className="max-w-2xl max-h-[32rem] w-full h-auto rounded-lg shadow-2xl"
                  />
                </div>
                {/* Cột các card bên phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="benefit-1" className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border dark:border-blue-700">
                      <AccordionTrigger className="text-blue-800 dark:text-blue-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <TrendingUp className="h-5 w-5 mr-2" />
                        Bùng nổ về năng suất và hiệu quả
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-400 dark:border-blue-500">
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Minh chứng:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Tại Cảng Busan, việc áp dụng hệ thống điều hành thông minh đã giúp tăng năng suất bốc dỡ hàng hóa lên <span className="font-bold text-blue-600 dark:text-blue-400">30%</span> so với các nhà ga truyền thống.
                            </p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-blue-400 dark:border-blue-500">
                            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">Lợi ích:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Thời gian một con tàu phải lưu lại cảng (turnaround time) giảm được <span className="font-bold text-blue-600 dark:text-blue-400">20%</span>, 
                              giúp các hãng tàu tiết kiệm chi phí nhiên liệu và tăng hiệu quả khai thác.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-2" className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border dark:border-green-700">
                      <AccordionTrigger className="text-green-800 dark:text-green-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Shield className="h-5 w-5 mr-2" />
                        Nâng cao an toàn và an ninh vượt trội
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400 dark:border-green-500">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">Minh chứng:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Việc tự động hóa và giám sát tập trung đã giúp giảm tới <span className="font-bold text-green-600 dark:text-green-400">40%</span> số vụ tai nạn cảng biển nghiêm trọng tại Cảng Busan.
                            </p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400 dark:border-green-500">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">Lợi ích:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Môi trường làm việc trở nên an toàn hơn, giảm thiểu sai sót do con người, đồng thời hệ thống giám sát và cảnh báo thông minh giúp phản ứng nhanh với các sự cố.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-3" className="bg-gradient-to-br from-purple-100 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-lg border dark:border-purple-700">
                      <AccordionTrigger className="text-purple-800 dark:text-purple-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Tăng trưởng bền vững và nâng cao năng lực cạnh tranh
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400 dark:border-purple-500">
                            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Minh chứng:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Ngay cả trong một năm đầy thách thức, Cảng Busan vẫn đạt được sản lượng container cao nhất lịch sử, 
                              một thành tích có sự đóng góp to lớn của các nhà ga tự động.
                            </p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-purple-400 dark:border-purple-500">
                            <p className="text-sm font-medium text-purple-700 dark:text-purple-400">Lợi ích:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Ban lãnh đạo có thể đưa ra các quyết định chiến lược dựa trên dữ liệu thực tế thay vì kinh nghiệm, 
                              từ đó phân tích hiệu suất, tìm ra điểm nghẽn và lập kế hoạch đầu tư dài hạn một cách chính xác.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="benefit-4" className="bg-gradient-to-br from-orange-100 to-amber-100 dark:from-orange-900/30 dark:to-amber-900/30 rounded-lg border dark:border-orange-700">
                      <AccordionTrigger className="text-orange-800 dark:text-orange-300 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Ship className="h-5 w-5 mr-2" />
                        Nâng cao trải nghiệm và sự hài lòng của khách hàng
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        Khách hàng có thể dễ dàng đăng ký dịch vụ, theo dõi trạng thái yêu cầu và thực hiện thanh toán trực tuyến. 
                        Sự minh bạch và tiện lợi này giúp nâng cao đáng kể trải nghiệm dịch vụ, 
                        tạo ra lợi thế cạnh tranh bền vững.
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
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Hiệu quả đã chứng minh</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{metric.value}</div>
                <div className="text-gray-600 dark:text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Tính năng nổi bật</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Giải pháp toàn diện cho cảng biển thông minh</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900">
                <CardHeader>
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl text-blue-800 dark:text-blue-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Lợi ích mang lại</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full mr-4">
                    <Anchor className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium text-gray-900 dark:text-gray-100">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Chuyển đổi cảng biển thành cảng thông minh</h2>
          <p className="text-xl mb-8">Tối ưu hóa vận hành và nâng cao năng lực cạnh tranh với Smart Dashboard</p>
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
