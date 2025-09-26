"use client"

import { Anchor, TrendingUp, Shield, Clock, BarChart3, Ship } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { useRef, useEffect } from "react"
import { useCallback } from "react"

export default function SeaportPage() {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
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
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Anchor className="h-12 w-12 text-white" />
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">NGÀNH CẢNG BIỂN</h2>
            </div>
            
            {/* Giới thiệu chung */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Giới thiệu chung về ngành Cảng biển</h3>
              
              
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Ngành cảng biển đóng vai trò là <span className="font-semibold text-blue-700">"huyết mạch"</span> của thương mại toàn cầu 
                  và là mắt xích không thể thiếu trong chuỗi cung ứng quốc tế. Trong bối cảnh khối lượng hàng hóa lưu thông ngày càng tăng 
                  và áp lực về tốc độ, sự chính xác ngày càng lớn, các cảng biển không còn là những bến đỗ tĩnh mà đã trở thành 
                  những <span className="font-semibold text-blue-700">hệ sinh thái vận hành phức tạp</span>, 
                  quyết định nhịp độ của cả một nền kinh tế.
                </p>

                {/* Ảnh minh họa */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="/application-areas/6.png" 
                  alt="Giới thiệu về ngành Cảng biển" 
                  className="max-w-lg h-auto rounded-lg shadow-lg cursor-pointer"
                  onClick={() => setModalImage('/application-areas/6.png')}
                />
              </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700">
                    Tại Việt Nam, với <span className="font-semibold text-blue-700">vị thế địa lý chiến lược</span>, 
                    hệ thống cảng biển được xem là động lực quan trọng cho tăng trưởng kinh tế. 
                    Tuy nhiên, ngành cũng đối mặt với thách thức lớn về hạ tầng kết nối sau cảng và chi phí logistics còn cao, 
                    đòi hỏi một cuộc cách mạng về quản trị vận hành để nâng cao năng lực cạnh tranh.
                  </p>
                </div>
              </div>
            </div>

            {/* Thách thức thực tế */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">1. Thách thức thực tế của ngành Cảng biển</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Các cảng biển vận hành theo mô hình truyền thống đang phải đối mặt với những "nút thắt" cố hữu, 
                cản trở sự phát triển trong kỷ nguyên số:
              </p>
              
              {/* Ảnh minh họa thách thức */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="/application-areas/7.png" 
                  alt="Thách thức thực tế của ngành Cảng biển" 
                  className="max-w-lg h-auto rounded-lg shadow-lg cursor-pointer"
                  onClick={() => setModalImage('/application-areas/7.png')}
                />
              </div>
              
              <div className="space-y-6">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Dữ liệu phân mảnh và "Ốc đảo thông tin"
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    <p className="mb-3">
                      Đây là thách thức lớn nhất. Thông tin về một lô hàng có thể nằm ở email của bộ phận kinh doanh, 
                      lịch trình tàu lại ở một phần mềm khác, trong khi thông tin xe ra vào cổng được ghi chép thủ công.
                    </p>
                    <div className="bg-white p-3 rounded border-l-4 border-red-300">
                      <p className="text-sm text-gray-600">
                        Sự thiếu kết nối này tạo ra một môi trường vận hành mà không ai có được bức tranh toàn cảnh, 
                        dẫn đến quyết định chậm trễ và kém hiệu quả.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-800 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Thiếu tầm nhìn toàn cảnh theo thời gian thực
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    Hệ quả trực tiếp là ban quản lý không thể trả lời nhanh các câu hỏi vận hành quan trọng như: 
                    "Bến nào đang trống?", "Xe tải đang ùn tắc ở đâu?", hay "Năng suất xếp dỡ hiện tại là bao nhiêu?". 
                    Việc ra quyết định thường dựa trên kinh nghiệm hoặc các báo cáo có độ trễ lớn.
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="text-yellow-800 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Hiệu suất vận hành kém và ùn tắc kéo dài
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    Khi thiếu dữ liệu đồng bộ, hiệu suất sụt giảm là điều không thể tránh khỏi. 
                    Tàu phải chờ đợi lâu để cập bến, xe container xếp hàng dài ngoài cổng vì thủ tục giấy tờ thủ công, 
                    và việc điều phối thiết bị thiếu tối ưu. Tình trạng này không chỉ gây lãng phí mà còn làm tăng chi phí vận hành, 
                    giảm năng lực cạnh tranh nghiêm trọng.
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-800 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Rủi ro về an toàn, an ninh và sai sót con người
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    Môi trường vận hành thủ công tiềm ẩn rủi ro cao về an toàn lao động và an ninh. 
                    Việc kiểm soát ra vào lỏng lẻo và phản ứng chậm với các sự cố như hỏa hoạn là những vấn đề nhức nhối. 
                    Sự phụ thuộc vào giấy tờ cũng làm tăng nguy cơ sai sót do con người, gây tổn thất về tài chính và hàng hóa.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Ứng dụng Smart Dashboard */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">2. Ứng dụng chi tiết của Smart Dashboard trong thực tế</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Smart Dashboard trong lĩnh vực cảng biển không chỉ là một công cụ hiển thị, mà là một 
                <span className="font-semibold text-blue-700">"trung tâm chỉ huy số"</span> (Digital Command Center), 
                đóng vai trò là bộ não của toàn bộ hệ sinh thái <span className="font-semibold text-blue-700">Cảng Thông Minh</span> (Smart Port).
              </p>
              
              {/* Ảnh minh họa ứng dụng Smart Dashboard */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <img 
                    src="/application-areas/8.png" 
                    alt="Ứng dụng Smart Dashboard - Phần 1" 
                    className="max-w-full h-auto rounded-lg shadow-lg cursor-pointer"
                    onClick={() => setModalImage('/application-areas/8.png')}
                  />
                  <span className="mt-2 text-sm text-gray-500 text-center">Bản sao số 3D cảng biển</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/application-areas/9.png" 
                    alt="Ứng dụng Smart Dashboard - Phần 2" 
                    className="max-w-full h-auto rounded-lg shadow-lg cursor-pointer"
                    onClick={() => setModalImage('/application-areas/9.png')}
                  />
                  <span className="mt-2 text-sm text-gray-500 text-center">Giám sát KPIs thời gian thực</span>
                </div>
                <div className="flex flex-col items-center">
                  <img 
                    src="/application-areas/10.png" 
                    alt="Ứng dụng Smart Dashboard - Phần 3" 
                    className="max-w-full h-auto rounded-lg shadow-lg cursor-pointer"
                    onClick={() => setModalImage('/application-areas/10.png')}
                  />
                  <span className="mt-2 text-sm text-gray-500 text-center">Tự động hóa quy trình vận hành</span>
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-4">🏗️ Xây dựng Bản sao số (Digital Twin) của cảng biển</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700">
                        Thay vì nhìn vào các bản đồ giấy hoặc bảng tính, người quản lý tương tác với một mô hình 3D sống động của toàn bộ cảng.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700">
                        Mô hình 3D này là một bản sao số chính xác, được xây dựng từ bản đồ và khảo sát thực địa. 
                        Nó cho phép giám sát vị trí và trạng thái của mọi đối tượng (tàu, xe, cần cẩu) theo thời gian thực. 
                        Người dùng có thể dễ dàng phóng to, xoay, và di chuyển góc nhìn để quan sát chi tiết từng khu vực, 
                        mang lại cảm giác chân thực như đang có mặt tại hiện trường.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-4">📊 Hệ thống giám sát KPIs toàn diện</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-green-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700">
                        Các chỉ số hiệu suất được tổng hợp và hiển thị một cách khoa học, dễ hiểu.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700">
                        Xung quanh mô hình 3D là một hệ thống các KPIs được làm mới liên tục, bao gồm: 
                        Hiệu quả hoạt động của cảng (Port Efficiency), Thông lượng hàng hóa (Total Throughput), 
                        Thời gian quay vòng tàu (Vessel Turnaround Time), Lịch trình tàu (Vessel Schedule), 
                        và Tình trạng bến (Berth Status).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-800 mb-4">🚨 Xử lý sự cố thông minh và tự động</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700">
                        Quy trình xử lý các sự cố khẩn cấp như hỏa hoạn được tự động hóa để giảm thiểu thời gian phản ứng.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Ứng dụng:</h5>
                      <div className="text-gray-700">
                        <p className="mb-2">Khi cảm biến phát hiện có cháy, hệ thống sẽ:</p>
                        <ul className="space-y-1 text-sm">
                          <li>• <strong>Cảnh báo tự động:</strong> Hiển thị một cảnh báo lớn ngay lập tức trên màn hình</li>
                          <li>• <strong>Điều hướng đến hiện trường:</strong> Mô hình 3D tự động di chuyển đến vị trí xảy ra vụ cháy</li>
                          <li>• <strong>Tích hợp CCTV:</strong> Phát hình ảnh trực tiếp từ camera an ninh gần nhất</li>
                          <li>• <strong>Hỗ trợ ra quyết định:</strong> Cửa sổ pop-up cho phép gửi thông báo khẩn cấp và theo dõi vị trí công nhân để sơ tán</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-800 mb-4">⚙️ Tự động hóa quy trình vận hành</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700">
                        Các thủ tục giấy tờ thủ công được loại bỏ hoàn toàn.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700">
                        Hệ thống Cổng tự động (Auto-Gate) sử dụng Camera AI và RFID để tự động hóa quy trình quản lý xe ra/vào. 
                        Tài xế và kiểm viên tại hiện trường sử dụng ứng dụng di động (App Mobile) để nhận lệnh và tạo phiếu kiểm đếm, 
                        giúp dữ liệu được đồng bộ về hệ thống ngay lập tức.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lợi ích chiến lược */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">3. Lợi ích chiến lược và định lượng</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Việc triển khai Smart Dashboard trong mô hình Cảng Thông Minh mang lại những kết quả đột phá, 
                đã được chứng minh qua các trường hợp thực tiễn như <span className="font-semibold text-blue-700">Cảng Busan</span>.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Bùng nổ về năng suất và hiệu quả
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                      <p className="text-sm font-medium text-blue-700">Minh chứng:</p>
                      <p className="text-gray-700 text-sm">
                        Tại Cảng Busan, việc áp dụng hệ thống điều hành thông minh đã giúp tăng năng suất bốc dỡ hàng hóa lên <span className="font-bold text-blue-600">30%</span> so với các nhà ga truyền thống.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                      <p className="text-sm font-medium text-blue-700">Lợi ích:</p>
                      <p className="text-gray-700 text-sm">
                        Thời gian một con tàu phải lưu lại cảng (turnaround time) giảm được <span className="font-bold text-blue-600">20%</span>, 
                        giúp các hãng tàu tiết kiệm chi phí nhiên liệu và tăng hiệu quả khai thác.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Nâng cao an toàn và an ninh vượt trội
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm font-medium text-green-700">Minh chứng:</p>
                      <p className="text-gray-700 text-sm">
                        Việc tự động hóa và giám sát tập trung đã giúp giảm tới <span className="font-bold text-green-600">40%</span> số vụ tai nạn cảng biển nghiêm trọng tại Cảng Busan.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm font-medium text-green-700">Lợi ích:</p>
                      <p className="text-gray-700 text-sm">
                        Môi trường làm việc trở nên an toàn hơn, giảm thiểu sai sót do con người, đồng thời hệ thống giám sát và cảnh báo thông minh giúp phản ứng nhanh với các sự cố.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-4 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Tăng trưởng bền vững và nâng cao năng lực cạnh tranh
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                      <p className="text-sm font-medium text-purple-700">Minh chứng:</p>
                      <p className="text-gray-700 text-sm">
                        Ngay cả trong một năm đầy thách thức, Cảng Busan vẫn đạt được sản lượng container cao nhất lịch sử, 
                        một thành tích có sự đóng góp to lớn của các nhà ga tự động.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                      <p className="text-sm font-medium text-purple-700">Lợi ích:</p>
                      <p className="text-gray-700 text-sm">
                        Ban lãnh đạo có thể đưa ra các quyết định chiến lược dựa trên dữ liệu thực tế thay vì kinh nghiệm, 
                        từ đó phân tích hiệu suất, tìm ra điểm nghẽn và lập kế hoạch đầu tư dài hạn một cách chính xác.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-4 flex items-center">
                    <Ship className="h-5 w-5 mr-2" />
                    Nâng cao trải nghiệm và sự hài lòng của khách hàng
                  </h4>
                  <p className="text-gray-700">
                    Khách hàng có thể dễ dàng đăng ký dịch vụ, theo dõi trạng thái yêu cầu và thực hiện thanh toán trực tuyến. 
                    Sự minh bạch và tiện lợi này giúp nâng cao đáng kể trải nghiệm dịch vụ, 
                    tạo ra lợi thế cạnh tranh bền vững.
                  </p>
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
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{metric.value}</div>
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
            <p className="text-lg text-gray-600">Giải pháp toàn diện cho cảng biển thông minh</p>
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
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <Anchor className="h-5 w-5 text-blue-600" />
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
