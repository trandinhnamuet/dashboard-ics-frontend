'use client'

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import CustomRegistrationForm from "./customRegistrationForm"

export function PricingSection() {
  const { t } = useTranslation()
  const [formOpen, setFormOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; description: string; price?: string } | null>(null)

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
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <span className="inline-block px-4 py-2 rounded-lg bg-primary/10 text-primary font-semibold text-lg tracking-wide">
              {t('pricing.hotline')} <a href="tel:0707806860" className="underline hover:text-primary/80">0707 806 860</a>
            </span>
          </div>
        </div>
        
        <CustomRegistrationForm open={formOpen} onOpenChange={setFormOpen} selectedPlan={selectedPlan} />
      </div>
    </section>
  )
}
