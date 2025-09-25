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
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/application-areas/government/image.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-blue-600/80 to-blue-800/80" />
        
        <div className="container mx-auto px-4 relative z-20">
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
          </div>
        </div>
      </section>

      {/* Industry Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">QUẢN LÝ NHÀ NƯỚC VÀ HÀNH CHÍNH CÔNG</h2>
            </div>
            
            {/* Giới thiệu chung */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">Giới thiệu chung về Quản lý Nhà nước và Hành chính công</h3>
              
              {/* Ảnh minh họa */}
              {/* <div className="mb-8 flex justify-center">
                <img 
                  src="/application-areas/1.png" 
                  alt="Giới thiệu về Quản lý Nhà nước và Hành chính công" 
                  className="max-w-md h-auto rounded-lg shadow-lg"
                />
              </div> */}
              
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Trong kỷ nguyên số, lĩnh vực quản lý nhà nước và hành chính công đang đứng trước một cuộc chuyển đổi mang tính cách mạng. 
                  Mục tiêu cốt lõi của chính phủ không phải là lợi nhuận, mà là tạo ra <span className="font-semibold text-blue-700">"giá trị công"</span>, 
                  phục vụ người dân và doanh nghiệp một cách tốt nhất.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="text-gray-700">
                    Nền tảng của sự chuyển đổi này là việc dịch chuyển từ mô hình quản lý truyền thống sang 
                    <span className="font-semibold text-blue-700"> quản trị thông minh</span>, trong đó 
                    <span className="font-semibold text-blue-700"> minh bạch và trách nhiệm giải trình</span> 
                    là những yếu tố then chốt để xây dựng và củng cố niềm tin của công chúng.
                  </p>
                </div>
              </div>
            </div>

            {/* Thách thức thực tế */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">1. Thách thức thực tế của ngành Hành chính công</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Việc vận hành theo phương thức truyền thống đang bộc lộ nhiều hạn chế, cản trở hiệu quả quản lý và điều hành của các cơ quan nhà nước.
              </p>
              
              {/* Ảnh minh họa thách thức */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="/application-areas/2.png" 
                  alt="Thách thức thực tế của ngành Hành chính công" 
                  className="max-w-lg h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Quản lý "phản ứng" và độ trễ thông tin
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    Các quyết định thường được đưa ra dựa trên các báo cáo theo tháng, quý, năm. 
                    Phương thức này khiến việc quản lý mang tính chất "phản ứng" với các sự việc đã xảy ra, 
                    gây khó khăn trong việc ứng phó với các vấn đề đột xuất hoặc thay đổi nhanh chóng như thiên tai, dịch bệnh hay các vấn đề an ninh.
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-800 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Dữ liệu rời rạc và thiếu đồng bộ
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    Các cơ quan nhà nước thường phải xử lý một lượng lớn dữ liệu rời rạc từ nhiều nguồn khác nhau. 
                    Việc tổng hợp thủ công không chỉ tốn thời gian mà còn dễ sai sót, dẫn đến tình trạng thiếu một cái nhìn tổng thể để ra quyết định vĩ mô. 
                    Thách thức lớn nhất là tích hợp dữ liệu từ các hệ thống thông tin cũ của các sở, ban, ngành.
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader>
                      <CardTitle className="text-purple-800 flex items-center">
                        <Users className="h-5 w-5 mr-2" />
                        Thiếu minh bạch và trách nhiệm giải trình
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-700">
                      Các quy trình báo cáo truyền thống thường thiếu tính công khai và khó tiếp cận, 
                      có thể làm suy giảm niềm tin của công chúng vào chính phủ.
                    </CardContent>
                  </Card>

                  <Card className="border-yellow-200 bg-yellow-50">
                    <CardHeader>
                      <CardTitle className="text-yellow-800 flex items-center">
                        <Shield className="h-5 w-5 mr-2" />
                        Rủi ro về bảo mật và quyền riêng tư
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-gray-700">
                      Việc tập trung dữ liệu nhạy cảm của người dân và doanh nghiệp tạo ra "điểm yếu" hấp dẫn đối với tấn công mạng. 
                      Cân bằng giữa minh bạch và bảo mật là thách thức lớn.
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 flex items-center">
                      <Target className="h-5 w-5 mr-2" />
                      Thách thức về quản lý thay đổi
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    Việc chuyển đổi từ thói quen làm việc thủ công, báo cáo giấy sang môi trường làm việc dựa trên dữ liệu 
                    là một thách thức văn hóa lớn, đòi hỏi sự thay đổi trong tư duy và cần có kế hoạch đào tạo bài bản cho đội ngũ cán bộ, công chức.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Ứng dụng Smart Dashboard */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-blue-700 mb-6">2. Ứng dụng chi tiết của Smart Dashboard trong thực tế</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Tại Việt Nam và trên thế giới, Smart Dashboard được triển khai như một "bộ não số" để giải quyết các thách thức trên, 
                với mô hình nổi bật là các <span className="font-semibold text-blue-700">Trung tâm Điều hành Thông minh (IOC)</span>.
              </p>
              
              {/* Ảnh minh họa ứng dụng Smart Dashboard */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex justify-center">
                  <img 
                    src="/application-areas/3.png" 
                    alt="Ứng dụng Smart Dashboard - Phần 1" 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/application-areas/4.png" 
                    alt="Ứng dụng Smart Dashboard - Phần 2" 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-4">🏛️ Xây dựng Trung tâm Điều hành Thông minh (IOC) toàn diện</h4>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700 text-sm">
                        Thay vì các phòng ban hoạt động độc lập, lãnh đạo tỉnh/thành phố có một phòng điều hành trung tâm, 
                        nơi mọi thông tin được hội tụ.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700 text-sm">
                        IOC được ví như "bộ não số", tích hợp dữ liệu từ các sở, ngành về một trung tâm chung, 
                        tạo ra một cái nhìn toàn cảnh trên mọi lĩnh vực từ kinh tế - xã hội, an ninh trật tự đến dịch vụ công.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg">
                    <h5 className="font-medium text-blue-700 mb-3">Minh chứng tại Việt Nam:</h5>
                    <div className="space-y-3">
                      <div className="border-l-4 border-blue-300 pl-4">
                        <h6 className="font-medium text-blue-600">Đà Lạt:</h6>
                        <p className="text-gray-700 text-sm">
                          Là thành phố đầu tiên đưa IOC vào hoạt động, đã tích hợp gần <Badge variant="outline" className="mx-1">300 camera</Badge> 
                          độ phân giải cao để giám sát an ninh và giao thông, cho phép lãnh đạo quản lý từ tổng thể đến chi tiết.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-300 pl-4">
                        <h6 className="font-medium text-green-600">Bình Dương:</h6>
                        <p className="text-gray-700 text-sm">
                          Một mô hình toàn diện đã thu thập và tích hợp hơn <Badge variant="outline" className="mx-1">1,000 chỉ số</Badge> 
                          ở <Badge variant="outline" className="mx-1">27 lĩnh vực</Badge>, tập trung vào thu chi ngân sách, giải ngân đầu tư công, và đường dây nóng 1022. 
                          Đã công bố <Badge variant="outline" className="mx-1">13 bộ dữ liệu</Badge> trên cổng dữ liệu mở.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-4">📊 Giám sát đa chiều và hỗ trợ ra quyết định tức thời</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-green-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700 text-sm">
                        Lãnh đạo có thể nắm bắt tình hình ngay lập tức và đưa ra chỉ đạo kịp thời mà không cần chờ báo cáo.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700 text-sm">
                        Dashboard cho phép theo dõi mọi khía cạnh của một hệ thống, từ tình hình tài chính công, tiến độ giải ngân, 
                        đến số lượng hồ sơ được xử lý tại các trung tâm hành chính công.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-800 mb-4">🎯 Cải thiện chất lượng dịch vụ công</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700 text-sm">
                        Các vấn đề trong quy trình phục vụ người dân được phát hiện và khắc phục nhanh hơn.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700 text-sm">
                        Dashboard theo dõi và phân tích các chỉ số về sự hài lòng của người dân, thời gian chờ đợi, và tỷ lệ giải quyết hồ sơ đúng hạn. 
                        Dữ liệu này giúp các cơ quan công quyền xác định điểm nghẽn và cải thiện quy trình.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-800 mb-4">📢 Tăng cường tương tác và minh bạch với người dân</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700 text-sm">
                        Người dân có thể giám sát hoạt động của chính quyền và gửi phản ánh một cách dễ dàng.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700 text-sm">
                        Dashboard là công cụ mạnh mẽ để công khai dữ liệu chính phủ (Open Government Data). 
                        Nó cho phép người dân gửi ý kiến phản ánh về các vấn đề hạ tầng, an ninh, từ đó thúc đẩy công tác điều hành diễn ra minh bạch và hiệu quả hơn.
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
                Việc triển khai Smart Dashboard trong hành chính công mang lại những tác động to lớn và có thể đo lường được, 
                góp phần xây dựng một nền hành chính hiện đại.
              </p>
              
              {/* Ảnh minh họa lợi ích chiến lược */}
              <div className="mb-8 flex justify-center">
                <img 
                  src="/application-areas/5.png" 
                  alt="Lợi ích chiến lược và định lượng" 
                  className="max-w-lg h-auto rounded-lg shadow-lg"
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2" />
                    Chuyển đổi sang mô hình quản trị chủ động
                  </h4>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Lợi ích:</span> Đây là lợi ích chiến lược lớn nhất. Dashboard giúp chính quyền chuyển đổi từ quản lý "phản ứng" sang "chủ động". 
                    Khi được tích hợp AI và Học máy, hệ thống còn có thể phân tích dữ liệu lịch sử để dự báo các kịch bản trong tương lai, 
                    hỗ trợ hoạch định chính sách dựa trên bằng chứng.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Nâng cao hiệu quả và tiết kiệm chi phí
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm font-medium text-green-700">Minh chứng:</p>
                      <p className="text-gray-700 text-sm">
                        Các dự án số hóa như nộp thuế trực tuyến có thể giảm thời gian trung bình lên tới <span className="font-bold text-green-600">25%</span>.
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-green-400">
                      <p className="text-sm font-medium text-green-700">Lợi ích:</p>
                      <p className="text-gray-700 text-sm">
                        Việc tự động hóa quy trình tạo báo cáo giúp giảm thiểu công việc thủ công, tiết kiệm đáng kể thời gian và nhân lực, 
                        qua đó tăng năng suất làm việc và hạn chế sai sót.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    Tăng cường tính minh bạch và niềm tin công chúng
                  </h4>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Lợi ích:</span> Việc công khai dữ liệu giúp tăng cường sự giám sát từ công chúng, 
                    từ đó nâng cao niềm tin và sự hài lòng của người dân. Điều này tạo ra một môi trường đối thoại khách quan, 
                    thúc đẩy công tác điều hành hiệu quả hơn.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-4 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Tối ưu hóa nguồn lực công
                  </h4>
                  <p className="text-gray-700 text-sm">
                    <span className="font-medium">Lợi ích:</span> Bằng cách cung cấp cái nhìn tổng quan về ngân sách và hiệu suất, 
                    dashboard giúp chính phủ giám sát và điều phối tài nguyên hiệu quả hơn, đặc biệt trong việc giải ngân đầu tư công.
                  </p>
                </div>
              </div>
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