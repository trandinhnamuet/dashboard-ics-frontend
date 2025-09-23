


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Crown } from "lucide-react"
import CustomRegistrationForm from "./customRegistrationForm"

const pricingPlans = [
  {
    name: "Business",
    description: "Giải pháp cơ bản cho doanh nghiệp vừa và nhỏ",
    price: "Liên hệ",
    period: "",
    icon: Zap,
    popular: false,
    features: [
      "Dashboard cơ bản với các chỉ số quan trọng",
      "Giám sát thời gian thực 24/7",
      "Báo cáo tự động hàng tuần",
      "Hỗ trợ email trong giờ hành chính",
      "Tích hợp tối đa 5 hệ thống",
      "Lưu trữ dữ liệu 6 tháng",
      "Truy cập trên web và mobile",
      "Cảnh báo qua email và SMS",
    ],
    buttonText: "Bắt đầu ngay",
    buttonVariant: "outline" as const,
  },
  {
    name: "Dashboard 2D",
    description: "Trực quan hóa dữ liệu với giao diện 2D chuyên nghiệp",
    price: "Liên hệ",
    period: "",
    icon: Star,
    popular: false,
    features: [
      "Tất cả tính năng của gói Business",
      "Dashboard 2D tương tác với sơ đồ tòa nhà",
      "Trực quan hóa dữ liệu nâng cao",
      "Báo cáo chi tiết theo từng khu vực",
      "Hỗ trợ 24/7 qua điện thoại",
      "Tích hợp không giới hạn hệ thống",
      "Lưu trữ dữ liệu 2 năm",
      "API tùy chỉnh cho tích hợp",
      "Đào tạo sử dụng miễn phí",
      "Cảnh báo thông minh với AI",
    ],
    buttonText: "Chọn gói phổ biến",
    buttonVariant: "default" as const,
  },
  {
    name: "Dashboard 3D",
    description: "Trải nghiệm tối ưu với mô hình 3D sinh động",
    price: "Liên hệ",
    period: "",
    icon: Crown,
    popular: true,
    features: [
      "Tất cả tính năng của gói Dashboard 2D",
      "Mô hình 3D tòa nhà tương tác",
      "Thực tế ảo (VR) và thực tế tăng cường (AR)",
      "Mô phỏng tình huống khẩn cấp",
      "Phân tích dự đoán với AI/ML",
      "Tích hợp IoT không giới hạn",
      "Lưu trữ dữ liệu vĩnh viễn",
      "Dedicated support manager",
      "Tùy chỉnh giao diện theo yêu cầu",
      "Đào tạo chuyên sâu cho team",
      "SLA 99.9% uptime guarantee",
    ],
    buttonText: "Liên hệ tư vấn",
    buttonVariant: "outline" as const,
  },
]


export function PricingSection() {
  const [formOpen, setFormOpen] = useState(false)

  return (
    <section id="pricing" className="py-20 bg-gray-50/30 dark:bg-gray-900/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl text-balance">
            Chọn gói dịch vụ phù hợp với <span className="text-primary">nhu cầu của bạn</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Từ giải pháp cơ bản đến mô hình 3D tương tác, chúng tôi có gói dịch vụ phù hợp cho mọi quy mô tòa nhà
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular
                  ? "border-2 border-primary shadow-lg scale-105"
                  : "border-border/50 hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  Tối ưu nhất
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-2">{plan.description}</CardDescription>
                <div className="mt-6">
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  {plan.period && <div className="text-sm text-muted-foreground">{plan.period}</div>}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Button className="w-full" variant={plan.buttonVariant} size="lg" onClick={() => setFormOpen(true)}>
                  {plan.buttonText}
                </Button>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Tính năng bao gồm:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Cần tư vấn để chọn gói phù hợp? Liên hệ với chúng tôi để được hỗ trợ miễn phí
          </p>
            <div className="pt-4">
              <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-lg tracking-wide">
                Hotline hỗ trợ: <a href="tel:0987654321" className="underline hover:text-primary/80">0987 654 321</a>
              </span>
            </div>
        </div>
        <CustomRegistrationForm open={formOpen} onOpenChange={setFormOpen} />
      </div>
    </section>
  )
}
