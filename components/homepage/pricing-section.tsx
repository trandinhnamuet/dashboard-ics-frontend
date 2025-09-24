


import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Crown, Clock, DollarSign } from "lucide-react"
import CustomRegistrationForm from "./customRegistrationForm"

interface BasePlan {
  name: string
  description: string
  price: string
  period: string
  icon: any
  popular: boolean
  features: string[]
  buttonText: string
  buttonVariant: "outline" | "default"
}

interface PayAsYouGoPlan extends BasePlan {
  originalPrice: string
  discount: string
}

const savingPlans: BasePlan[] = [
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

const payAsYouGoPlans: PayAsYouGoPlan[] = [
  {
    name: "Gói 12 tháng",
    description: "Phù hợp cho dự án ngắn hạn với linh hoạt thanh toán",
    price: "99,000,000 VNĐ",
    period: "/12 tháng",
    originalPrice: "120,000,000 VNĐ",
    discount: "17%",
    icon: Clock,
    popular: false,
    features: [
      "Tất cả tính năng Dashboard 2D",
      "Hỗ trợ kỹ thuật 24/7",
      "Đào tạo và triển khai miễn phí",
      "Cập nhật phần mềm định kỳ",
      "Backup dữ liệu tự động",
      "Báo cáo phân tích chi tiết",
      "Tích hợp API không giới hạn",
      "Hỗ trợ mobile app",
    ],
    buttonText: "Chọn gói 12 tháng",
    buttonVariant: "outline" as const,
  },
  {
    name: "Gói 24 tháng",
    description: "Giải pháp tối ưu cho doanh nghiệp trung hạn",
    price: "179,000,000 VNĐ",
    period: "/24 tháng",
    originalPrice: "240,000,000 VNĐ",
    discount: "25%",
    icon: Star,
    popular: true,
    features: [
      "Tất cả tính năng Dashboard 3D",
      "Mô hình 3D tương tác nâng cao",
      "AI/ML phân tích dự đoán",
      "Dedicated support manager",
      "Tùy chỉnh giao diện theo yêu cầu",
      "Đào tạo chuyên sâu cho team",
      "SLA 99.9% uptime",
      "Ưu tiên hỗ trợ kỹ thuật",
      "Báo cáo executive dashboard",
      "Tích hợp hệ thống ERP/CRM",
    ],
    buttonText: "Chọn gói 24 tháng",
    buttonVariant: "default" as const,
  },
  {
    name: "Gói 36 tháng",
    description: "Cam kết dài hạn với mức giá ưu đãi tốt nhất",
    price: "249,000,000 VNĐ",
    period: "/36 tháng",
    originalPrice: "360,000,000 VNĐ",
    discount: "31%",
    icon: Crown,
    popular: false,
    features: [
      "Tất cả tính năng gói 24 tháng",
      "Thực tế ảo (VR/AR) đầy đủ",
      "White-label solution",
      "Multi-tenant architecture",
      "Advanced analytics & BI",
      "Custom module development",
      "24/7 dedicated support team",
      "Quarterly business review",
      "Free system upgrades",
      "Unlimited user licenses",
      "Enterprise security features",
    ],
    buttonText: "Chọn gói 36 tháng",
    buttonVariant: "outline" as const,
  },
]


export function PricingSection() {
  const [formOpen, setFormOpen] = useState(false)
  const [pricingMode, setPricingMode] = useState<'saving' | 'payAsYouGo'>('saving')
  const [expandedCards, setExpandedCards] = useState<{[key: number]: boolean}>({})

  const currentPlans: (BasePlan | PayAsYouGoPlan)[] = pricingMode === 'saving' ? savingPlans : payAsYouGoPlans

  const toggleFeatures = (cardIndex: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardIndex]: !prev[cardIndex]
    }))
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50/30 dark:bg-gray-900/10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl text-balance">
            Bảng giá dịch vụ
          </h2>
          <p className="text-lg text-muted-foreground text-pretty mb-8">
            Từ giải pháp cơ bản đến mô hình 3D tương tác, chúng tôi có gói dịch vụ phù hợp cho mọi quy mô tòa nhà
          </p>

          {/* Pricing Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setPricingMode('saving')}
              className={`group relative flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 min-w-[200px] ${
                pricingMode === 'saving'
                  ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/25 scale-105'
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary/30 hover:text-primary shadow-md hover:shadow-lg'
              }`}
            >
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-bold">Mua trọn gói</div>
                  <div className="text-xs opacity-80">Saving plan</div>
                </div>
              </div>
              {pricingMode === 'saving' && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Được chọn
                </div>
              )}
            </button>
            
            <button
              onClick={() => setPricingMode('payAsYouGo')}
              className={`group relative flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 min-w-[200px] ${
                pricingMode === 'payAsYouGo'
                  ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/25 scale-105'
                  : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary/30 hover:text-primary shadow-md hover:shadow-lg'
              }`}
            >
              <div className="flex items-center">
                <DollarSign className="w-5 h-5 mr-3" />
                <div className="text-left">
                  <div className="font-bold">Thuê theo năm</div>
                  <div className="text-xs opacity-80">Pay by year</div>
                </div>
              </div>
              {pricingMode === 'payAsYouGo' && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Được chọn
                </div>
              )}
            </button>
          </div>

          {/* Pricing Mode Description */}
          <div className="text-center mb-8 max-w-4xl mx-auto">
            {pricingMode === 'saving' ? (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium text-base mb-2">
                  💡 Mua trọn gói (Saving Plan)
                </p>
                <p className="text-blue-600 text-sm">
                  Được thiết kế phù hợp với nhu cầu sử dụng máy chủ liên tục 24/7 - thanh toán trọn gói theo tháng sử dụng
                </p>
              </div>
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium text-base mb-2">
                  ⚡ Thuê theo năm (Pay by year)
                </p>
                <p className="text-green-600 text-sm">
                  Phù hợp nhu cầu linh hoạt và duy trì hỗ trợ kĩ thuật - thanh toán theo từng năm các gói 12, 24, 36 tháng
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-500 ease-in-out">
          {currentPlans.map((plan, index) => (
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
                  {pricingMode === 'payAsYouGo' && (plan as PayAsYouGoPlan).originalPrice && (
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-sm line-through text-muted-foreground">
                        {(plan as PayAsYouGoPlan).originalPrice}
                      </span>
                      {(plan as PayAsYouGoPlan).discount && (
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-medium">
                          -{(plan as PayAsYouGoPlan).discount} OFF
                        </span>
                      )}
                    </div>
                  )}
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
                    {plan.features
                      .slice(0, expandedCards[index] ? plan.features.length : 4)
                      .map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.features.length > 4 && (
                    <button
                      onClick={() => toggleFeatures(index)}
                      className="flex items-center justify-center w-full mt-3 px-3 py-2 text-sm font-medium text-primary hover:text-primary/80 bg-primary/5 hover:bg-primary/10 rounded-lg transition-all duration-200 border border-primary/20 hover:border-primary/30"
                    >
                      {expandedCards[index] ? (
                        <>
                          <span>Thu gọn</span>
                          <svg className="w-4 h-4 ml-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>Xem thêm {plan.features.length - 4} tính năng</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
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
                Hotline hỗ trợ: <a href="tel:0931487231" className="underline hover:text-primary/80">0931 487 231</a>
              </span>
            </div>
        </div>
        <CustomRegistrationForm open={formOpen} onOpenChange={setFormOpen} />
      </div>
    </section>
  )
}
