"use client"

import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/homepage/hero-section"
import { ServicesSection } from "@/components/homepage/services-section"
import { IndustriesSection } from "@/components/homepage/industries-section"
import { PricingSection } from "@/components/homepage/pricing-section"
import { Footer } from "@/components/layout/footer"
import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function HomePage() {
  // Tích hợp GIM Chatbot
  useEffect(() => {
    // Khởi tạo GIM chatbot
    (window as any).__gim = (window as any).__gim || {};
    (window as any).__gim.licenseId = "586508500633432247";
    
    const initGIMBot = () => {
      const queue: any[] = [];
      const gimBot = {
        _handler: null,
        _version: "1.0",
        _queue: queue,
        on: function() {
          queue.push(["on", arguments]);
          return gimBot;
        },
        call: function() {
          queue.push(["call", arguments]);
          return gimBot;
        },
        loadScript: function() {
          const script = document.createElement("script");
          script.async = true;
          script.type = "text/javascript";
          script.src = "https://botsdk.stg.gim.beango.com/index.umd.js";
          document.head.appendChild(script);
        }
      };
      
      gimBot.loadScript();
      (window as any).GIMBotTool = gimBot;
    };
    
    // Chỉ load chatbot nếu chưa được load
    if (!(window as any).GIMBotTool) {
      initGIMBot();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <main>
        <AnimatedSection delay={0.1}>
          <HeroSection />
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <IndustriesSection />
        </AnimatedSection>
        <AnimatedSection delay={0.4}>
          <PricingSection />
        </AnimatedSection>
      </main>
    </div>
  )
}
