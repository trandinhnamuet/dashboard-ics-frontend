import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Banknote, Factory, Zap, Building, Ship, Users2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function IndustriesSection() {
  const router = useRouter()
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)
  
  const industries = [
    {
      icon: Building2,
      title: "Chính phủ - Cơ quan ban ngành",
      description:
        "Theo dõi toàn diện các chỉ số kinh tế vĩ mô như tốc độ tăng trưởng GDP, lạm phát, tỷ lệ thất nghiệp, cán cân thanh toán, cùng số liệu thu – chi ngân sách, KPIs, tiến độ triển khai các dự án và các nút nghẽn.",
      benefits: ["Giám sát KPIs thời gian thực", "Theo dõi tiến độ dự án", "Phân tích ngân sách chi tiết"],
      link: "/application-areas/government"
    },
    {
      icon: Banknote,
      title: "Tài chính - Ngân hàng - Bảo hiểm",
      description:
        "Giúp nhà quản lý nắm trọn bức tranh hoạt động: dòng tiền, KPI từng chi nhánh, ATM, dư nợ, hiệu suất thu hồi nợ và số lượng tài khoản mới, tất cả hiển thị trực quan và cập nhật tức thì 24/7.",
      benefits: ["Tăng trưởng 20-30%", "Giám sát dòng tiền 24/7", "Tối ưu quyết định kinh doanh"],
      link: "/application-areas/finance"
    },
    {
      icon: Factory,
      title: "Công nghiệp - Sản xuất",
      description:
        "Tăng cường hiệu quả sản xuất thông qua giám sát năng lượng và KPI thời gian thực, giảm 20-30% chi phí nhờ tối ưu vận hành, cải thiện an toàn và hướng đến công nghiệp xanh, net-zero.",
      benefits: ["Giảm 20-30% chi phí", "Giám sát năng lượng thời gian thực", "Hướng đến net-zero"],
      link: "/application-areas/manufacturing"
    },
    {
      icon: Zap,
      title: "Điện - Viễn thông",
      description:
        "Giám sát mạng thời gian thực 24/7, phân tích dữ liệu để tối ưu vận hành và dự báo sự cố, đồng thời hỗ trợ quyết định kinh doanh và mở rộng thị trường.",
      benefits: ["Tăng năng suất 30-50%", "Tăng lợi nhuận 20-30%", "Dự báo sự cố chính xác"],
      link: "/application-areas/telecom"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 cursor-pointer"
              style={{ backgroundColor: '#f3faff' }}
              onClick={() => router.push(industry.link)}
            >
              <CardContent className="p-6">
                <div className="mb-4 rounded-lg bg-primary/10 p-3 w-fit group-hover:bg-primary/20 transition-colors">
                  <industry.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{industry.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{industry.description}</p>
                <div className="space-y-1">
                  {industry.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      <span className="text-foreground font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center relative">
          <h3 className="mb-6 sm:mb-8 text-xl sm:text-2xl font-bold text-foreground">Ứng dụng rộng rãi</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
            {applications.map((app, index) => (
              <div
                key={index}
                className="relative flex flex-col sm:flex-row items-center justify-center sm:space-x-2 lg:space-x-3 bg-background rounded-lg px-3 sm:px-4 lg:px-6 py-3 sm:py-4 shadow-sm hover:shadow-md transition-all duration-200 border border-border cursor-pointer hover:border-primary/50 hover:bg-primary/5"
                onMouseEnter={() => setHoveredApp(app.id)}
                onMouseLeave={() => setHoveredApp(null)}
              >
                <app.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary mb-1 sm:mb-0 flex-shrink-0" />
                <span className="font-medium text-foreground text-xs sm:text-sm lg:text-base text-center sm:text-left">{app.name}</span>
              </div>
            ))}
          </div>

          {/* Hover Dropdown */}
          {hoveredApp && (
            <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-lg shadow-2xl border border-gray-200 p-6 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
              <div className="grid md:grid-cols-3 gap-6 items-center max-w-4xl mx-auto">
                {/* Image */}
                <div className="md:col-span-1">
                  <img 
                    src={applications.find(app => app.id === hoveredApp)?.image} 
                    alt={applications.find(app => app.id === hoveredApp)?.name}
                    className="w-full h-32 sm:h-40 object-cover rounded-lg"
                  />
                </div>
                
                {/* Stats */}
                <div className="md:col-span-1 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {applications.find(app => app.id === hoveredApp)?.stats.split(' ')[0]}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {applications.find(app => app.id === hoveredApp)?.stats.split(' ').slice(1).join(' ')}
                  </div>
                </div>
                
                {/* Description */}
                <div className="md:col-span-1">
                  <h4 className="font-semibold text-lg mb-3 text-foreground">
                    {applications.find(app => app.id === hoveredApp)?.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {applications.find(app => app.id === hoveredApp)?.description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}