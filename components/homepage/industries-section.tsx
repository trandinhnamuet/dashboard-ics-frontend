import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Banknote, Factory, Zap, Building, Ship, Users2 } from "lucide-react"

export function IndustriesSection() {
  const industries = [
    {
      icon: Building2,
      title: "Chính phủ - Cơ quan ban ngành",
      description:
        "Theo dõi toàn diện các chỉ số kinh tế vĩ mô như tốc độ tăng trưởng GDP, lạm phát, tỷ lệ thất nghiệp, cán cân thanh toán, cùng số liệu thu – chi ngân sách, KPIs, tiến độ triển khai các dự án và các nút nghẽn.",
      benefits: ["Giám sát KPIs thời gian thực", "Theo dõi tiến độ dự án", "Phân tích ngân sách chi tiết"],
    },
    {
      icon: Banknote,
      title: "Tài chính - Ngân hàng - Bảo hiểm",
      description:
        "Giúp nhà quản lý nắm trọn bức tranh hoạt động: dòng tiền, KPI từng chi nhánh, ATM, dư nợ, hiệu suất thu hồi nợ và số lượng tài khoản mới, tất cả hiển thị trực quan và cập nhật tức thì 24/7.",
      benefits: ["Tăng trưởng 20-30%", "Giám sát dòng tiền 24/7", "Tối ưu quyết định kinh doanh"],
    },
    {
      icon: Factory,
      title: "Công nghiệp - Sản xuất",
      description:
        "Tăng cường hiệu quả sản xuất thông qua giám sát năng lượng và KPI thời gian thực, giảm 20-30% chi phí nhờ tối ưu vận hành, cải thiện an toàn và hướng đến công nghiệp xanh, net-zero.",
      benefits: ["Giảm 20-30% chi phí", "Giám sát năng lượng thời gian thực", "Hướng đến net-zero"],
    },
    {
      icon: Zap,
      title: "Điện - Viễn thông",
      description:
        "Giám sát mạng thời gian thực 24/7, phân tích dữ liệu để tối ưu vận hành và dự báo sự cố, đồng thời hỗ trợ quyết định kinh doanh và mở rộng thị trường.",
      benefits: ["Tăng năng suất 30-50%", "Tăng lợi nhuận 20-30%", "Dự báo sự cố chính xác"],
    },
  ]

  const applications = [
    { icon: Factory, name: "Nhà máy" },
    { icon: Ship, name: "Cảng biển" },
    { icon: Banknote, name: "Ngân hàng" },
    { icon: Users2, name: "Hành chính công" },
    { icon: Building, name: "Tòa nhà" },
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
              className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30"
              style={{ backgroundColor: '#f3faff' }}
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

        <div className="text-center">
          <h3 className="mb-8 text-2xl font-bold text-foreground">Ứng dụng rộng rãi</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-background rounded-lg px-6 py-4 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <app.icon className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">{app.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}