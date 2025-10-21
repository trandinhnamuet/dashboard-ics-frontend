import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Zap, Crown, Clock, DollarSign } from "lucide-react"
import CustomRegistrationForm from "./customRegistrationForm"
import { useTranslation } from 'react-i18next';

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
    name: "plan12",
    description: "Phù hợp cho dự án ngắn hạn với linh hoạt thanh toán",
    price: "Giá liên hệ",
    period: "",
    originalPrice: "",
    discount: "",
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
    name: "plan24",
    description: "Giải pháp tối ưu cho doanh nghiệp trung hạn",
    price: "Giá liên hệ",
    period: "/24 tháng",
    originalPrice: "480,000,000 VNĐ",
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
    name: "plan36",
    description: "Cam kết dài hạn với mức giá ưu đãi tốt nhất",
    price: "Giá liên hệ",
    period: "/36 tháng",
    originalPrice: "720,000,000 VNĐ",
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
  const { t } = useTranslation();
  const [formOpen, setFormOpen] = useState(false)
  const [pricingMode, setPricingMode] = useState<'saving' | 'payAsYouGo'>('saving')
  const [expandedCards, setExpandedCards] = useState<{[key: number]: boolean}>({})
  const [hoveredMode, setHoveredMode] = useState<'saving' | 'payAsYouGo' | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; description: string; price?: string } | null>(null)

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
            {t('pricing.title')}
          </h2>
          <p className="text-lg text-muted-foreground text-pretty mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Pricing Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 relative">
            {/* Button 1 */}
            <div className="relative">
              <button
                onClick={() => setPricingMode('saving')}
                onMouseEnter={() => setHoveredMode('saving')}
                onMouseLeave={() => setHoveredMode(null)}
                className={`group relative flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 min-w-[200px] ${pricingMode === 'saving'
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/25 scale-105'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary/30 hover:text-primary shadow-md hover:shadow-lg'
                  }`}
              >
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-bold">{t('pricing.savingPlan.title')}</div>
                    <div className="text-xs opacity-80">{t('pricing.savingPlan.subtitle')}</div>
                  </div>
                </div>
                {pricingMode === 'saving' && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {t('pricing.savingPlan.selected')}
                  </div>
                )}
              </button>
              {/* Dropdown for Saving Plan */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[320px] z-20 transition-all duration-300 ease-out
                  ${hoveredMode === 'saving' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
                `}
                onMouseEnter={() => setHoveredMode('saving')}
                onMouseLeave={() => setHoveredMode(null)}
              >
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-xl animate-dropdown-fade-in">
                  <p className="text-blue-800 font-medium text-base mb-2">
                    {t('pricing.savingPlan.dropdownTitle')}
                  </p>
                  <p className="text-blue-600 text-sm">
                    {t('pricing.savingPlan.dropdownDescription')}
                  </p>
                </div>
              </div>
            </div>
            {/* Button 2 */}
            <div className="relative">
              <button
                onClick={() => setPricingMode('payAsYouGo')}
                onMouseEnter={() => setHoveredMode('payAsYouGo')}
                onMouseLeave={() => setHoveredMode(null)}
                className={`group relative flex items-center justify-center px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 min-w-[200px] ${pricingMode === 'payAsYouGo'
                    ? 'bg-gradient-to-r from-primary to-primary/90 text-white shadow-lg shadow-primary/25 scale-105'
                    : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-primary/30 hover:text-primary shadow-md hover:shadow-lg'
                  }`}
              >
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-3" />
                  <div className="text-left">
                    <div className="font-bold">{t('pricing.payAsYouGo.title')}</div>
                    <div className="text-xs opacity-80">{t('pricing.payAsYouGo.subtitle')}</div>
                  </div>
                </div>
                {pricingMode === 'payAsYouGo' && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                    {t('pricing.payAsYouGo.selected')}
                  </div>
                )}
              </button>
              {/* Dropdown for Pay As You Go */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 mt-2 w-[320px] z-20 transition-all duration-300 ease-out
                  ${hoveredMode === 'payAsYouGo' ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}
                `}
                onMouseEnter={() => setHoveredMode('payAsYouGo')}
                onMouseLeave={() => setHoveredMode(null)}
              >
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 shadow-xl animate-dropdown-fade-in">
                  <p className="text-green-800 font-medium text-base mb-2">
                    {t('pricing.payAsYouGo.dropdownTitle')}
                  </p>
                  <p className="text-green-600 text-sm">
                    {t('pricing.payAsYouGo.dropdownDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Mode Description (dropdown handled above) */}

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-500 ease-in-out">
          {currentPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${plan.popular
                  ? "border-2 border-primary shadow-lg scale-105"
                  : "border-border/50 hover:border-primary/50"
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                  {t('pricing.popular')}
                </div>
              )}

              <CardHeader className={`text-center ${plan.popular ? "pt-12" : "pt-6"}`}>
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <plan.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{t(`pricing.plans.${plan.name}.title`)}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground mt-2">{t(`pricing.plans.${plan.name}.description`)}</CardDescription>
                {pricingMode === 'saving' ? (
                  <div className="mt-6">
                    <div className="text-3xl font-bold text-primary">{t(`pricing.plans.${plan.name}.price`)}</div>
                    {plan.period && <div className="text-sm text-muted-foreground">{t(`pricing.plans.${plan.name}.period`)}</div>}
                  </div>
                ) : (
                  <div className="mt-6">
                    <div className="text-3xl font-bold text-primary">{(plan as PayAsYouGoPlan).price}</div>
                    {/* <div className="text-sm text-muted-foreground">{(plan as PayAsYouGoPlan).period}</div> */}
                    <div className="flex items-center justify-center mt-2">
                      {/* <span className="text-sm text-muted-foreground line-through mr-2">{(plan as PayAsYouGoPlan).originalPrice}</span> */}
                      {/* <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">-{(plan as PayAsYouGoPlan).discount}</span> */}
                    </div>
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <Button
                  className="w-full"
                  variant={plan.buttonVariant}
                  size="lg"
                  onClick={() => {
                    setSelectedPlan({ name: plan.name, description: plan.description, price: (plan as any).price })
                    setFormOpen(true)
                  }}
                >
                  {t(`pricing.plans.${plan.name}.buttonText`)}
                </Button>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">{t('pricing.featuresTitle')}</h4>
                  <ul className="space-y-2">
                    {plan.features
                      .slice(0, expandedCards[index] ? plan.features.length : 4)
                      .map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{t(`pricing.plans.${plan.name}.features.${featureIndex}`)}</span>
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
                          <span>{t('pricing.collapse')}</span>
                          <svg className="w-4 h-4 ml-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </>
                      ) : (
                        <>
                          <span>{t('pricing.expand', { count: plan.features.length - 4 })}</span>
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
            {t('pricing.contactSupport')}
          </p>
          <div className="pt-4">
            <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-lg tracking-wide">
              {t('pricing.hotline')}: <a href="tel:0707806860" className="underline hover:text-primary/80">0707 806 860</a>
            </span>
          </div>
        </div>
        <CustomRegistrationForm open={formOpen} onOpenChange={setFormOpen} selectedPlan={selectedPlan} />
      </div>
    </section>
  );
}
