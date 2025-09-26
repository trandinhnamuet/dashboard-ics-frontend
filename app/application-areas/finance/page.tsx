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
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
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
          <div className="max-w-4xl text-left ml-0 mr-auto">
            <div className="flex justify-start mb-6">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Banknote className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Dashboard cho Tài chính - Ngân hàng - Bảo hiểm
            </h1>
            <p className="text-xl text-green-100 max-w-3xl leading-relaxed">
              Giúp nhà quản lý nắm trọn bức tranh hoạt động: dòng tiền, KPI từng chi nhánh, ATM, dư nợ, 
              hiệu suất thu hồi nợ và số lượng tài khoản mới, tất cả hiển thị trực quan và cập nhật tức thì 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">NGÀNH TÀI CHÍNH - NGÂN HÀNG</h2>
            </div>
            
            {/* Giới thiệu chung */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-green-700 mb-6">Giới thiệu chung về ngành Tài chính - Ngân hàng</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Trong kỷ nguyên số hiện nay, ngành tài chính ngân hàng được định hình bởi vai trò trung tâm của dữ liệu, 
                  vốn được xem là một "tài sản chiến lược quý giá". Đây là một lĩnh vực đang trải qua một cuộc chuyển đổi mạnh mẽ, 
                  dịch chuyển từ việc ra quyết định dựa trên kinh nghiệm và trực giác sang một mô hình quản trị dựa trên bằng chứng và dữ liệu thực tế.
                </p>
                
                <div className="bg-green-50 p-6 rounded-lg mt-6">
                  <h4 className="font-semibold text-green-800 mb-4">Ngành này có những đặc thù rất riêng biệt:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium">Cường độ dữ liệu cao:</span> Các tổ chức tài chính phải xử lý một khối lượng dữ liệu khổng lồ và đa dạng mỗi ngày, từ thông tin giao dịch, dữ liệu khách hàng, đến các chỉ số thị trường.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium">Môi trường rủi ro và tuân thủ nghiêm ngặt:</span> Đây là ngành có mức độ rủi ro cao, bao gồm rủi ro tín dụng, rủi ro thị trường, gian lận và các mối đe dọa an ninh mạng tinh vi. Do đó, ngành phải hoạt động dưới một khung pháp lý và quy định chặt chẽ để đảm bảo an toàn và bảo mật thông tin.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <span className="font-medium">Tốc độ và tính thời gian thực:</span> Thị trường tài chính biến động không ngừng, đòi hỏi các tổ chức phải có khả năng nắm bắt thông tin và ra quyết định gần như tức thời để phản ứng với thay đổi và duy trì lợi thế cạnh tranh.
                      </div>
                    </li>
                  </ul>
                </div>
                
                <p className="mt-6">
                  Những đặc thù này tạo ra một áp lực lớn, buộc ngành tài chính ngân hàng phải tiên phong trong việc ứng dụng các công nghệ tiên tiến như Smart Dashboard để tối ưu hóa vận hành, quản lý rủi ro và đưa ra các quyết sách chiến lược một cách thông minh và hiệu quả.
                </p>
              </div>
            </div>

            {/* Thách thức thực tế */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-green-700 mb-6">1. Thách thức thực tế của ngành Tài chính - Ngân hàng</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Ngành tài chính ngân hàng vận hành trong một môi trường có độ phức tạp, rủi ro và yêu cầu tuân thủ cực kỳ cao. Các thách thức cốt lõi bao gồm:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-800 flex items-center">
                      <Clock className="h-5 w-5 mr-2" />
                      Độ trễ trong ra quyết định
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    Theo phương pháp quản lý truyền thống, các quyết định thường được đưa ra dựa trên các báo cáo thủ công, định kỳ theo tháng hoặc quý. Điều này tạo ra một độ trễ lớn, khiến ban lãnh đạo phải "phản ứng" với các dữ liệu đã lỗi thời.
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800 flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Dữ liệu phân mảnh
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    Dữ liệu thường nằm rải rác ở nhiều hệ thống độc lập (Data Silos) như hệ thống lõi ngân hàng, CRM, dữ liệu giao dịch. Việc thiếu nền tảng hợp nhất khiến việc có cái nhìn 360 độ trở nên khó khăn.
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-800 flex items-center">
                      <Shield className="h-5 w-5 mr-2" />
                      Áp lực tuân thủ và bảo mật
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    Phải tuân thủ nhiều quy định khắt khe về bảo mật dữ liệu và tài chính như GDPR, HIPAA, ISO 27001. Đồng thời đối mặt với nguy cơ tấn công mạng và rò rỉ dữ liệu.
                  </CardContent>
                </Card>

                <Card className="border-yellow-200 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="text-yellow-800 flex items-center">
                      <TrendingUp className="h-5 w-5 mr-2" />
                      Quản lý rủi ro phức tạp
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-700">
                    Đối mặt với nhiều loại rủi ro như rủi ro tín dụng, rủi ro thị trường, gian lận tài chính. Việc phát hiện sớm dấu hiệu bất thường trong hàng triệu giao dịch hàng ngày là thách thức khổng lồ.
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Ứng dụng Smart Dashboard */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-green-700 mb-6">2. Ứng dụng chi tiết của Smart Dashboard trong thực tế</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Để giải quyết các thách thức trên, Smart Dashboard được ứng dụng như một "trung tâm chỉ huy" hay "bộ não số", biến dữ liệu thành công cụ quản trị chủ động.
              </p>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-800 mb-4">🎯 Xây dựng "Phòng điều hành ảo" cho Ban lãnh đạo</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700">Thay vì chờ báo cáo giấy, CEO và ban giám đốc có thể truy cập một Dashboard Quản lý hiển thị các KPI tài chính cốt lõi theo thời gian thực.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700">Dashboard trực quan hóa các chỉ số như Tỷ lệ nợ xấu, Tỷ suất lợi nhuận trên tài sản (ROA) và Chỉ số hài lòng khách hàng (NPS), cho phép so sánh với mục tiêu và cùng kỳ năm trước.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-semibold text-green-800 mb-4">🤖 Tích hợp AI để quản lý rủi ro chủ động</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-green-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700">Tập đoàn tài chính sử dụng Dashboard tích hợp AI để không chỉ theo dõi mà còn dự báo các rủi ro.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700">Hệ thống AI phân tích xu hướng thị trường để dự báo biến động lãi suất, phát hiện sớm gian lận và dự báo rủi ro tín dụng khách hàng.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-semibold text-purple-800 mb-4">🛡️ Trung tâm An ninh Mạng (SOC) thông minh</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700">Các nhóm an ninh mạng phải đối mặt với hàng triệu cảnh báo mỗi ngày, dẫn đến tình trạng "mệt mỏi vì cảnh báo".</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-purple-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700">Smart Dashboard tổng hợp dữ liệu từ SIEM và SOAR, sử dụng AI để tự động phân loại và chỉ làm nổi bật các mối đe dọa thực sự nghiêm trọng.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-semibold text-orange-800 mb-4">📋 Tối ưu hóa hoạt động và tuân thủ</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Thực tế:</h5>
                      <p className="text-gray-700">Các quy trình kiểm toán và báo cáo tuân thủ thường rất tốn công sức.</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-700 mb-2">Ứng dụng:</h5>
                      <p className="text-gray-700">Dashboard tự động hóa việc tạo báo cáo tuân thủ, giám sát liên tục và cung cấp nhật ký kiểm toán, giúp tổ chức "luôn sẵn sàng cho kiểm toán".</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lợi ích chiến lược */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-green-700 mb-6">3. Lợi ích chiến lược và định lượng</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Việc ứng dụng Smart Dashboard một cách hiệu quả mang lại những giá trị to lớn, có thể đo lường được:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Tăng tốc độ và chất lượng ra quyết định
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Đây là lợi ích hữu hình nhất. Các ngân hàng sử dụng dashboard đã ghi nhận:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">30%</span>
                      Giảm thời gian xử lý dữ liệu
                    </li>
                    <li className="flex items-center">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">40%</span>
                      Cải thiện tốc độ ra quyết định tài chính
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-4 flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2" />
                    Tiết kiệm chi phí và nâng cao hiệu suất
                  </h4>
                  <p className="text-gray-700">
                    Việc tự động hóa quá trình thu thập, tổng hợp dữ liệu và tạo báo cáo giúp giải phóng nhân lực khỏi các công việc thủ công. Điều này không chỉ tiết kiệm chi phí nhân sự mà còn cho phép họ tập trung vào các nhiệm vụ có giá trị cao hơn như phân tích chiến lược.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-100 to-violet-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-4 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Tăng cường an ninh và khả năng phục hồi
                  </h4>
                  <p className="text-gray-700">
                    Cung cấp một cái nhìn toàn diện và theo thời gian thực về các mối đe dọa, giúp các tổ chức tài chính giảm thiểu thời gian phát hiện và phản ứng sự cố, từ đó bảo vệ tài sản và dữ liệu khách hàng tốt hơn.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-100 to-amber-100 p-6 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-4 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2" />
                    Minh bạch hóa và định lượng rủi ro
                  </h4>
                  <p className="text-gray-700">
                    Một Smart Dashboard cao cấp có khả năng "dịch rủi ro mạng thành đô la và xu". Nó giúp CISO chứng minh được Lợi tức đầu tư an ninh (ROSI), biện minh cho ngân sách và truyền đạt giá trị của an ninh bằng ngôn ngữ kinh doanh tới hội đồng quản trị.
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