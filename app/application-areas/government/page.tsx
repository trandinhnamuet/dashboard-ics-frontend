"use client"

import { useState, useEffect, useRef } from "react"
import { Building2, BarChart3, Users, Clock, Shield, Target, ChevronLeft, ChevronRight, X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function GovernmentPage() {
  // Slideshow state
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Modal state for image zoom
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [imageScale, setImageScale] = useState(1)
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  // Reset scale when modalImage changes
  useEffect(() => {
    setImageScale(1)
    setImgPos({ x: 0, y: 0 })
  }, [modalImage])

  // Wheel zoom handler
  useEffect(() => {
    if (!modalImage || !imgRef.current) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault()
        setImageScale(prev => {
          let next = prev + (e.deltaY < 0 ? 0.1 : -0.1)
          next = Math.max(0.2, Math.min(next, 5))
          return next
        })
      }
    }
    const img = imgRef.current
    img.addEventListener('wheel', handleWheel, { passive: false })
    return () => img.removeEventListener('wheel', handleWheel)
  }, [modalImage])

  // Mouse drag to move image
  useEffect(() => {
    if (!modalImage || !imgRef.current) return;
    const img = imgRef.current
    let lastPos = { x: imgPos.x, y: imgPos.y }
    const handleMouseDown = (e: MouseEvent) => {
      e.preventDefault()
      setDragging(true)
      setDragStart({ x: e.clientX - lastPos.x, y: e.clientY - lastPos.y })
    }
    const handleMouseMove = (e: MouseEvent) => {
      if (dragging && dragStart) {
        setImgPos({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
      }
    }
    const handleMouseUp = () => {
      setDragging(false)
      setDragStart(null)
    }
    img.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    return () => {
      img.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [modalImage, dragging, dragStart, imgPos])
  
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

  const handleImageClick = (imageSrc: string) => {
    setModalImage(imageSrc)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideshowImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideshowImages.length) % slideshowImages.length)
  }

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
    <div className="min-h-screen">
      {/* Modal hiển thị ảnh lớn */}
      {modalImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70" onClick={() => setModalImage(null)}>
          <div className="relative" onClick={e => e.stopPropagation()}>
            <img
              ref={imgRef}
              src={modalImage}
              alt="Ảnh phóng to"
              className="max-w-[90vw] max-h-[80vh] rounded-lg shadow-2xl border-4 border-white cursor-move select-none"
              style={{ transform: `scale(${imageScale}) translate(${imgPos.x}px, ${imgPos.y}px)`, transition: dragging ? 'none' : 'transform 0.2s' }}
              draggable={false}
              onClick={e => e.stopPropagation()}
            />
            <button
              className="absolute top-2 right-2 bg-white/80 text-black rounded-full px-3 py-1 font-bold text-lg shadow-lg hover:bg-white"
              onClick={e => { e.stopPropagation(); setModalImage(null); }}
            >
              &times;
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/80 text-black rounded px-3 py-1 text-xs shadow">Giữ Ctrl và lăn chuột để phóng to/thu nhỏ. Nhấn giữ chuột trái và kéo để di chuyển ảnh.</div>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image Only */}
        <div 
          className="absolute inset-0 z-0 dark:opacity-80"
          style={{
            backgroundImage: 'url(/application-areas/government/image.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl text-left ml-0 mr-auto">
            <div className="flex justify-start mb-6">
              <div className="p-4 rounded-full backdrop-blur-sm flex items-center justify-center">
                <div className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Dashboard cho Chính phủ - Cơ quan ban ngành
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              Theo dõi toàn diện các chỉ số kinh tế vĩ mô như tốc độ tăng trưởng GDP, lạm phát, tỷ lệ thất nghiệp, 
              cán cân thanh toán, cùng số liệu thu – chi ngân sách, KPIs, tiến độ triển khai các dự án và các nút nghẽn.
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
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">Thách thức thực tế của ngành Hành chính công</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Việc vận hành theo phương thức truyền thống đang bộc lộ nhiều hạn chế, cản trở hiệu quả quản lý và điều hành của các cơ quan nhà nước.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Ảnh minh họa thách thức - Cột trái */}
                <div className="h-full flex items-center justify-center">
                  <img 
                    src="/application-areas/21.jpg" 
                    alt="Thách thức thực tế của ngành Hành chính công" 
                    className="object-contain max-h-80 md:max-h-96 w-auto rounded-lg shadow-lg"
                  />
                </div>
                
                {/* Accordion cards - Cột phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="challenge-1" className="border border-red-200 bg-red-50 rounded-lg">
                      <AccordionTrigger className="text-red-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Clock className="h-5 w-5 mr-2" />
                        Quản lý "phản ứng" và độ trễ thông tin
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Các quyết định thường được đưa ra dựa trên các báo cáo theo tháng, quý, năm. 
                        Phương thức này khiến việc quản lý mang tính chất "phản ứng" với các sự việc đã xảy ra, 
                        gây khó khăn trong việc ứng phó với các vấn đề đột xuất hoặc thay đổi nhanh chóng như thiên tai, dịch bệnh hay các vấn đề an ninh.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-2" className="border border-orange-200 bg-orange-50 rounded-lg">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Dữ liệu rời rạc và thiếu đồng bộ
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Các cơ quan nhà nước thường phải xử lý một lượng lớn dữ liệu rời rạc từ nhiều nguồn khác nhau. 
                        Việc tổng hợp thủ công không chỉ tốn thời gian mà còn dễ sai sót, dẫn đến tình trạng thiếu một cái nhìn tổng thể để ra quyết định vĩ mô. 
                        Thách thức lớn nhất là tích hợp dữ liệu từ các hệ thống thông tin cũ của các sở, ban, ngành.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-3" className="border border-purple-200 bg-purple-50 rounded-lg">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Users className="h-5 w-5 mr-2" />
                        Thiếu minh bạch và trách nhiệm giải trình
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Các quy trình báo cáo truyền thống thường thiếu tính công khai và khó tiếp cận, 
                        có thể làm suy giảm niềm tin của công chúng vào chính phủ.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-4" className="border border-yellow-200 bg-yellow-50 rounded-lg">
                      <AccordionTrigger className="text-yellow-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Shield className="h-5 w-5 mr-2" />
                        Rủi ro về bảo mật và quyền riêng tư
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Việc tập trung dữ liệu nhạy cảm của người dân và doanh nghiệp tạo ra "điểm yếu" hấp dẫn đối với tấn công mạng. 
                        Cân bằng giữa minh bạch và bảo mật là thách thức lớn.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="challenge-5" className="border border-green-200 bg-green-50 rounded-lg">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Target className="h-5 w-5 mr-2" />
                        Thách thức về quản lý thay đổi
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 px-6 pb-4">
                        Việc chuyển đổi từ thói quen làm việc thủ công, báo cáo giấy sang môi trường làm việc dựa trên dữ liệu 
                        là một thách thức văn hóa lớn, đòi hỏi sự thay đổi trong tư duy và cần có kế hoạch đào tạo bài bản cho đội ngũ cán bộ, công chức.
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
                Tại Việt Nam và trên thế giới, Smart Dashboard được triển khai như một "bộ não số" để giải quyết các thách thức trên, 
                với mô hình nổi bật là các <span className="font-semibold text-blue-700">Trung tâm Điều hành Thông minh (IOC)</span>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Cards - Cột trái */}
                <div className="space-y-4 order-2 md:order-1">
                  <Accordion type="multiple" className="space-y-4">
                    {/* ...existing card AccordionItems... */}
                    <AccordionItem value="application-1" className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🏛️ Xây dựng Trung tâm Điều hành Thông minh (IOC) toàn diện
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h5 className="font-medium text-blue-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Thay vì các phòng ban hoạt động độc lập, lãnh đạo tỉnh/thành phố có một phòng điều hành trung tâm, 
                              nơi mọi thông tin được hội tụ.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-blue-700 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              IOC được ví như "bộ não số", tích hợp dữ liệu từ các sở, ngành về một trung tâm chung, 
                              tạo ra một cái nhìn toàn cảnh trên mọi lĩnh vực từ kinh tế - xã hội, an ninh trật tự đến dịch vụ công.
                            </p>
                          </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <h5 className="font-medium text-blue-700 dark:text-blue-400 mb-3">Minh chứng tại Việt Nam:</h5>
                          <div className="space-y-3">
                            <div className="border-l-4 border-blue-300 pl-4">
                              <h6 className="font-medium text-blue-600">Đà Lạt:</h6>
                              <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Là thành phố đầu tiên đưa IOC vào hoạt động, đã tích hợp gần <Badge variant="outline" className="mx-1">300 camera</Badge> 
                                độ phân giải cao để giám sát an ninh và giao thông, cho phép lãnh đạo quản lý từ tổng thể đến chi tiết.
                              </p>
                            </div>
                            <div className="border-l-4 border-green-300 pl-4">
                              <h6 className="font-medium text-green-600">Bình Dương:</h6>
                              <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Một mô hình toàn diện đã thu thập và tích hợp hơn <Badge variant="outline" className="mx-1">1,000 chỉ số</Badge> 
                                ở <Badge variant="outline" className="mx-1">27 lĩnh vực</Badge>, tập trung vào thu chi ngân sách, giải ngân đầu tư công, và đường dây nóng 1022. 
                                Đã công bố <Badge variant="outline" className="mx-1">13 bộ dữ liệu</Badge> trên cổng dữ liệu mở.
                              </p>
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="application-2" className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        📊 Giám sát đa chiều và hỗ trợ ra quyết định tức thời
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-green-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Lãnh đạo có thể nắm bắt tình hình ngay lập tức và đưa ra chỉ đạo kịp thời mà không cần chờ báo cáo.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-green-700 dark:text-green-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Dashboard cho phép theo dõi mọi khía cạnh của một hệ thống, từ tình hình tài chính công, tiến độ giải ngân, 
                              đến số lượng hồ sơ được xử lý tại các trung tâm hành chính công.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="application-3" className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        🎯 Cải thiện chất lượng dịch vụ công
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-purple-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Các vấn đề trong quy trình phục vụ người dân được phát hiện và khắc phục nhanh hơn.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-purple-700 dark:text-purple-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Dashboard theo dõi và phân tích các chỉ số về sự hài lòng của người dân, thời gian chờ đợi, và tỷ lệ giải quyết hồ sơ đúng hạn. 
                              Dữ liệu này giúp các cơ quan công quyền xác định điểm nghẽn và cải thiện quy trình.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="application-4" className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        📢 Tăng cường tương tác và minh bạch với người dân
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-medium text-orange-700 mb-2">Thực tế:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Người dân có thể giám sát hoạt động của chính quyền và gửi phản ánh một cách dễ dàng.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-orange-700 dark:text-orange-400 mb-2">Ứng dụng:</h5>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Dashboard là công cụ mạnh mẽ để công khai dữ liệu chính phủ (Open Government Data). 
                              Nó cho phép người dân gửi ý kiến phản ánh về các vấn đề hạ tầng, an ninh, từ đó thúc đẩy công tác điều hành diễn ra minh bạch và hiệu quả hơn.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>

                {/* Slideshow - Cột phải */}
                <div className="h-full flex items-center justify-center order-1 md:order-2">
                  <div className="relative w-full max-w-[37rem]"> {/* max-w-[32rem] ~ 512px, similar to 2.png */}
                    {/* Slideshow Container */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <div 
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                      >
                        {slideshowImages.map((image, index) => (
                          <div key={index} className="w-full flex-shrink-0">
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="w-full h-auto max-h-96 object-contain cursor-pointer"
                              style={{ aspectRatio: 'auto' }}
                              onClick={() => handleImageClick(image.src)}
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
              <h3 className="text-4xl font-semibold text-blue-700 dark:text-blue-400 mb-6 text-center">Lợi ích chiến lược và định lượng</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                Việc triển khai Smart Dashboard trong hành chính công mang lại những tác động to lớn và có thể đo lường được, 
                góp phần xây dựng một nền hành chính hiện đại.
              </p>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Cột ảnh bên trái */}
                <div className="flex justify-center">
                  <img 
                    src="/application-areas/5.png" 
                    alt="Lợi ích chiến lược và định lượng" 
                    className="max-w-lg h-auto rounded-lg shadow-lg"
                  />
                </div>
                {/* Cột các card bên phải */}
                <div className="space-y-4">
                  <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="benefit-1" className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg border">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Target className="h-5 w-5 mr-2" />
                        Chuyển đổi sang mô hình quản trị chủ động
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <span className="font-medium">Lợi ích:</span> Đây là lợi ích chiến lược lớn nhất. Dashboard giúp chính quyền chuyển đổi từ quản lý "phản ứng" sang "chủ động". 
                        Khi được tích hợp AI và Học máy, hệ thống còn có thể phân tích dữ liệu lịch sử để dự báo các kịch bản trong tương lai, 
                        hỗ trợ hoạch định chính sách dựa trên bằng chứng.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="benefit-2" className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg border">
                      <AccordionTrigger className="text-green-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Clock className="h-5 w-5 mr-2" />
                        Nâng cao hiệu quả và tiết kiệm chi phí
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 text-sm px-6 pb-4">
                        <div className="space-y-3">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">Minh chứng:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Các dự án số hóa như nộp thuế trực tuyến có thể giảm thời gian trung bình lên tới <span className="font-bold text-green-600">25%</span>.
                            </p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded border-l-4 border-green-400">
                            <p className="text-sm font-medium text-green-700 dark:text-green-400">Lợi ích:</p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                              Việc tự động hóa quy trình tạo báo cáo giúp giảm thiểu công việc thủ công, tiết kiệm đáng kể thời gian và nhân lực, 
                              qua đó tăng năng suất làm việc và hạn chế sai sót.
                            </p>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="benefit-3" className="bg-gradient-to-br from-purple-100 to-violet-100 rounded-lg border">
                      <AccordionTrigger className="text-purple-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <Users className="h-5 w-5 mr-2" />
                        Tăng cường minh bạch và niềm tin công chúng
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <span className="font-medium">Lợi ích:</span> Việc công khai dữ liệu giúp tăng cường sự giám sát từ công chúng, 
                        từ đó nâng cao niềm tin và sự hài lòng của người dân. Điều này tạo ra một môi trường đối thoại khách quan, 
                        thúc đẩy công tác điều hành hiệu quả hơn.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="benefit-4" className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg border">
                      <AccordionTrigger className="text-orange-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <BarChart3 className="h-5 w-5 mr-2" />
                        Tối ưu hóa nguồn lực công
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-700 dark:text-gray-300 text-sm px-6 pb-4">
                        <span className="font-medium">Lợi ích:</span> Bằng cách cung cấp cái nhìn tổng quan về ngân sách và hiệu suất, 
                        dashboard giúp chính phủ giám sát và điều phối tài nguyên hiệu quả hơn, đặc biệt trong việc giải ngân đầu tư công.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* Features & Benefits Section - 2 columns */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-10 text-center">Tại sao chọn chúng tôi?</h3>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Tính năng chính - cột trái */}
            <div>
              <div className="mb-8 text-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Tính năng chính</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Giải pháp toàn diện cho quản trị nhà nước hiệu quả</p>
              </div>
              <div className="space-y-4">
                <Accordion type="multiple" className="space-y-4">
                  {features.map((feature, index) => (
                    <AccordionItem key={index} value={`feature-${index}`} className="border rounded-lg">
                      <AccordionTrigger className="text-blue-800 flex items-center text-lg font-semibold px-6 py-4 hover:no-underline">
                        <div className="bg-blue-100 p-3 rounded-lg w-fit mr-4">
                          <feature.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        {feature.title}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            {/* Lợi ích mang lại - cột phải */}
            <div>
              <div className="mb-8 text-center">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Lợi ích mang lại</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400">Giải pháp toàn diện cho quản trị nhà nước hiệu quả</p>
              </div>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <Target className="h-5 w-5 text-green-600" />
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
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng hiện đại hóa quản trị nhà nước?</h2>
          <p className="text-xl mb-8">Liên hệ với chúng tôi để được tư vấn giải pháp phù hợp</p>
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

      {/* Modal for image enlargement removed */}
    </div>
  )
}