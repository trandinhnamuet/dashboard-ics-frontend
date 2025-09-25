import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Banknote, Factory, Building, Ship, Users2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function IndustriesSection() {
  const router = useRouter()
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)
  const [pinnedApp, setPinnedApp] = useState<string | null>(null)
  const [expandedApp, setExpandedApp] = useState<string | null>(null)
  
  const industries = [
    {
      icon: Building2,
      title: "Chính phủ - Cơ quan ban ngành",
      description:
        "Theo dõi toàn diện các chỉ số kinh tế vĩ mô như tốc độ tăng trưởng GDP, lạm phát, tỷ lệ thất nghiệp, cán cân thanh toán, cùng số liệu thu – chi ngân sách, KPIs, tiến độ triển khai các dự án và các nút nghẽn.",
      benefits: ["Giám sát KPIs thời gian thực", "Theo dõi tiến độ dự án", "Phân tích ngân sách chi tiết"],
      link: "/application-areas/government",
      image: "/application-areas/government/image.jpg"
    },
    {
      icon: Banknote,
      title: "Tài chính - Ngân hàng - Bảo hiểm",
      description:
        "Giúp nhà quản lý nắm trọn bức tranh hoạt động: dòng tiền, KPI từng chi nhánh, ATM, dư nợ, hiệu suất thu hồi nợ và số lượng tài khoản mới, tất cả hiển thị trực quan và cập nhật tức thì 24/7.",
      benefits: ["Tăng trưởng 20-30%", "Giám sát dòng tiền 24/7", "Tối ưu quyết định kinh doanh"],
      link: "/application-areas/finance",
      image: "/application-areas/finance/image.jpg"
    },
    {
      icon: Factory,
      title: "Công nghiệp - Sản xuất",
      description:
        "Tăng cường hiệu quả sản xuất thông qua giám sát năng lượng và KPI thời gian thực, giảm 20-30% chi phí nhờ tối ưu vận hành, cải thiện an toàn và hướng đến công nghiệp xanh, net-zero.",
      benefits: ["Giảm 20-30% chi phí", "Giám sát năng lượng thời gian thực", "Hướng đến net-zero"],
      link: "/application-areas/manufacturing",
      image: "/application-areas/manufacturing/image.jpg"
    },
    {
      icon: Building,
      title: "Tòa nhà thông minh",
      description:
        "Quản lý tổng thể hệ thống tòa nhà từ HVAC, điện, nước, an ninh đến các tiện ích. Tối ưu năng lượng, giảm chi phí vận hành và nâng cao trải nghiệm người dùng thông qua giám sát thời gian thực 24/7.",
      benefits: ["Tiết kiệm năng lượng 30-40%", "Giảm chi phí vận hành 25%", "Tăng an toàn và bảo mật"],
      link: "/application-areas/building",
      image: "/application-areas/building/image.jpg"
    },
    {
      icon: Ship,
      title: "Cảng biển thông minh",
      description:
        "Biến cảng biển thành trung tâm chỉ huy số với bản sao số 3D, giám sát KPIs thời gian thực, tự động hóa quy trình vận hành và nâng cao năng suất bốc dỡ lên 30%. Tối ưu logistics và giảm chi phí vận chuyển.",
      benefits: ["Tăng năng suất 30%", "Giám sát KPIs thời gian thực", "Nâng cao an toàn 40%"],
      link: "/application-areas/seaport",
      image: "/application-areas/seaport/image.jpg"
    },
  ]

  const applications = [
    { 
      icon: Factory, 
      name: "Nhà máy",
      id: "factory",
      image: "/homepage/factory.webp",
      stats: "150+ nhà máy đã áp dụng",
      description: "Giám sát toàn bộ quy trình sản xuất từ nguyên liệu đến thành phẩm. Theo dõi hiệu suất máy móc, năng lượng tiêu thụ và chất lượng sản phẩm theo thời gian thực."
    },
    { 
      icon: Ship, 
      name: "Cảng biển",
      id: "port",
      image: "/homepage/seaport.jpg", 
      stats: "25+ cảng biển tin dùng",
      description: "Quản lý hoạt động bốc xếp hàng hóa, theo dõi tàu thuyền ra vào cảng, tối ưu hóa logistics và giảm thời gian chờ đợi."
    },
    { 
      icon: Banknote, 
      name: "Ngân hàng",
      id: "bank",
      image: "/homepage/bank.webp",
      stats: "80+ chi nhánh ngân hàng", 
      description: "Giám sát giao dịch, phân tích dòng tiền, quản lý rủi ro tín dụng và tối ưu hóa dịch vụ khách hàng trên toàn hệ thống."
    },
    { 
      icon: Users2, 
      name: "Hành chính công",
      id: "government",
      image: "/homepage/public-administration.jpg",
      stats: "200+ cơ quan nhà nước",
      description: "Số hóa quy trình hành chính, theo dõi tiến độ xử lý hồ sơ, tăng tính minh bạch và cải thiện dịch vụ công."
    },
    { 
      icon: Building, 
      name: "Tòa nhà",
      id: "building",
      image: "/homepage/factory.webp",
      stats: "500+ tòa nhà thông minh",
      description: "Quản lý hệ thống HVAC, điện, nước, an ninh và các tiện ích trong tòa nhà để tối ưu năng lượng và nâng cao trải nghiệm."
    },
    { 
      icon: Building2, 
      name: "Kho vận",
      id: "logistics",
      image: "/homepage/seaport.jpg",
      stats: "300+ kho hàng được kết nối",
      description: "Theo dõi tồn kho, tối ưu tuyến vận chuyển, quản lý nhiệt độ bảo quản và tự động hóa quy trình logistics."
    },
  ]

  return (
    <section id="industries" className="py-20 bg-gray-50/50 dark:bg-gray-900/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Lĩnh vực ứng dụng
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Smart Dashboard phục vụ đa dạng các ngành nghề với hiệu quả vượt trội
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => router.push(industry.link)}
            >
              <Card className="border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} lg:h-96`}>
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="w-full h-64 lg:h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="lg:w-1/2 flex items-center lg:h-full">
                    <CardContent className="p-8 lg:p-12 w-full h-full flex flex-col justify-center" style={{ backgroundColor: '#f3faff' }}>
                      <div className="mb-6 rounded-lg bg-primary/10 p-4 w-fit group-hover:bg-primary/20 transition-colors">
                        <industry.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-4 text-2xl lg:text-3xl font-bold text-foreground">{industry.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-base">{industry.description}</p>
                      <div className="space-y-3">
                        {industry.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-foreground font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center relative">
          <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-foreground">Ứng dụng rộng rãi</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <div
                key={index}
                className={`relative flex flex-col sm:flex-row items-center justify-center sm:space-x-2 lg:space-x-3 bg-background rounded-lg px-3 sm:px-4 lg:px-6 py-3 sm:py-4 shadow-sm transition-all duration-300 ease-in-out border cursor-pointer transform hover:scale-105 ${
                  expandedApp === app.id 
                    ? 'border-primary/70 bg-primary/10 shadow-lg scale-105' 
                    : 'border-border hover:border-primary/50 hover:bg-primary/5 hover:shadow-md'
                } ${
                  pinnedApp === app.id 
                    ? 'ring-2 ring-primary/30 bg-primary/15' 
                    : ''
                }`}
                onMouseEnter={() => {
                  if (!pinnedApp) {
                    setHoveredApp(app.id)
                    setExpandedApp(app.id)
                  }
                }}
                onMouseLeave={() => {
                  if (!pinnedApp) {
                    setHoveredApp(null)
                    setExpandedApp(null)
                  }
                }}
                onClick={() => {
                  if (pinnedApp === app.id) {
                    // Unpin if clicking the same card
                    setPinnedApp(null)
                    setExpandedApp(null)
                  } else {
                    // Pin the clicked card
                    setPinnedApp(app.id)
                    setExpandedApp(app.id)
                  }
                  setHoveredApp(null)
                }}
              >
                <app.icon className={`h-4 w-4 sm:h-5 sm:w-5 mb-1 sm:mb-0 flex-shrink-0 transition-all duration-300 ${
                  expandedApp === app.id ? 'text-primary scale-110' : 'text-primary'
                }`} />
                <span className={`font-medium text-foreground text-xs sm:text-sm lg:text-base text-center sm:text-left transition-all duration-300 ${
                  expandedApp === app.id ? 'font-semibold' : ''
                }`}>{app.name}</span>
                {pinnedApp === app.id && (
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center animate-bounce-in shadow-lg">
                    <div className="text-white text-xs">📌</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Expandable Detail Section */}
          <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
            expandedApp 
              ? 'max-h-96 opacity-100 mt-6 animate-slide-down' 
              : 'max-h-0 opacity-0 mt-0'
          }`}>
            {expandedApp && (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-6 animate-fade-in-slide-up">
                <div className="grid md:grid-cols-3 gap-6 items-center max-w-4xl mx-auto">
                  {/* Image */}
                  <div className="md:col-span-1 opacity-0 animate-[fadeInSlideUp_0.6s_ease-out_0.1s_forwards]">
                    <img 
                      src={applications.find(app => app.id === expandedApp)?.image} 
                      alt={applications.find(app => app.id === expandedApp)?.name}
                      className="w-full h-32 sm:h-40 object-cover rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
                    />
                  </div>
                  
                  {/* Stats */}
                  <div className="md:col-span-1 text-center opacity-0 animate-[fadeInSlideUp_0.6s_ease-out_0.3s_forwards]">
                    <div className="text-3xl font-bold text-primary mb-2 transition-all duration-300 hover:scale-110 hover:text-primary/80">
                      {applications.find(app => app.id === expandedApp)?.stats.split(' ')[0]}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {applications.find(app => app.id === expandedApp)?.stats.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                  
                  {/* Description */}
                  <div className="md:col-span-1 opacity-0 animate-[fadeInSlideUp_0.6s_ease-out_0.5s_forwards]">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg text-foreground">
                        {applications.find(app => app.id === expandedApp)?.name}
                      </h4>
                      {pinnedApp && (
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full animate-bounce-in">
                          📌 Đã ghim
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {applications.find(app => app.id === expandedApp)?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}