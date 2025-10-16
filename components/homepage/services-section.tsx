'use client'

import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Database, Shield, Zap, Globe, BarChart3, Cpu, HardDrive, Network, Lock } from "lucide-react"
import { useTranslation } from "react-i18next"
import FlipNumbers from "react-flip-numbers"
import { useEffect, useState } from "react"

const serviceKeys = [
	{
		icon: Database,
		key: "dataIntegration",
		image: "/service-section/data-itergration.jpg",
	},
	{
		icon: Cpu,
		key: "visualReporting", 
		image: "/service-section/visual-and-reporting.jpg",
	},
	{
		icon: HardDrive,
		key: "monitoring",
		image: "/service-section/mornitoring-and-alert.jpg",
	},
	{
		icon: Network,
		key: "collaboration",
		image: "/service-section/collabration.jpg",
	},
	{
		icon: Shield,
		key: "security",
		image: "/service-section/security.jpg",
	},
	{
		icon: BarChart3,
		key: "analytics",
		image: "/service-section/ai.jpg",
	},
]

export function ServicesSection() {
	const { t } = useTranslation()
	const [isVisible, setIsVisible] = useState(false)
	const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true)
				}
			},
			{ threshold: 0.1 }
		)

		const element = document.getElementById('additional-benefits')
		if (element) {
			observer.observe(element)
		}

		return () => observer.disconnect()
	}, [])

	const handleFlip = (index: number) => {
		setFlippedIndex((prev) => (prev === index ? null : index))
	}

	return (
		<section id="services" className="py-10 lg:py-16">
			<div className="container mx-auto px-4">
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-3xl lg:text-5xl font-bold text-balance text-foreground">
						{t('homepage.services.title')}
					</h2>
					<p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
						{t('homepage.services.subtitle')}
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{serviceKeys.map((serviceItem, index) => {
						const IconComponent = serviceItem.icon
						const isFlipped = flippedIndex === index
						const serviceTitle = t(`services.${serviceItem.key}.title`)
						const serviceFeatures = t(`services.${serviceItem.key}.features`, { returnObjects: true }) as string[]
						
						return (
							<div
								key={index}
								className="group h-64 perspective-1000"
								style={{ perspective: '1000px' }}
								onClick={() => handleFlip(index)}
							>
								<div
									className={
										`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ` +
										(isFlipped ? 'rotate-y-180' : '') +
										' group-hover:rotate-y-180'
									}
									style={{
										transformStyle: 'preserve-3d',
										WebkitTransformStyle: 'preserve-3d',
									}}
								>
									{/* Front Face */}
									<Card
										className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-card to-background border border-border shadow-md hover:shadow-xl transition-shadow duration-300 relative overflow-hidden"
										style={{
											backfaceVisibility: 'hidden',
											WebkitBackfaceVisibility: 'hidden',
											willChange: 'transform',
										}}
									>
										<div
											className="absolute inset-0 z-0"
											style={{
												backgroundImage: `url(${serviceItem.image})`,
												backgroundSize: 'cover',
												backgroundPosition: 'center',
												opacity: 0.15,
												pointerEvents: 'none',
											}}
										/>
										<CardContent className="flex flex-col items-center justify-center h-full text-center space-y-4 relative z-10">
											<div className="bg-primary/10 p-4 rounded-2xl group-hover:bg-primary/20 transition-colors backdrop-blur-sm">
												<IconComponent className="h-8 w-8 text-primary" />
											</div>
											<CardTitle className="text-xl font-bold text-foreground bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg">
												{serviceTitle}
											</CardTitle>
										</CardContent>
									</Card>

									{/* Back Face */}
									<Card
										className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 shadow-xl"
										style={{
											backfaceVisibility: 'hidden',
											WebkitBackfaceVisibility: 'hidden',
											transform: 'rotateY(180deg)',
											WebkitTransform: 'rotateY(180deg)',
											willChange: 'transform',
										}}
									>
										<CardContent className="flex flex-col justify-center h-full p-4">
											<div className="space-y-3">
												<p className="text-sm font-bold text-primary text-center mb-4">Tính năng chính:</p>
												<div className="space-y-2.5">
													{Array.isArray(serviceFeatures) && serviceFeatures.map((feature, featureIndex) => (
														<div
															key={featureIndex}
															className="flex items-start space-x-2 animate-in slide-in-from-left-2 duration-300"
															style={{ animationDelay: `${featureIndex * 100}ms` }}
														>
															<div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
															<span className="text-xs text-foreground leading-relaxed">{feature}</span>
														</div>
													))}
												</div>
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						)
					})}
				</div>

				{/* Additional Benefits */}
				<div id="additional-benefits" className="mt-16 grid md:grid-cols-4 gap-6">
					<div className="text-center p-6 rounded-xl bg-card border border-border">
						<div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
							<Zap className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-bold text-3xl text-primary mb-2 flex items-center justify-center">
							<FlipNumbers
								height={36}
								width={22}
								color="hsl(var(--primary))"
								play={isVisible}
								duration={4}
								numbers="20"
								numberStyle={{
									fontFamily: 'inherit',
									fontWeight: 'bold',
									letterSpacing: '2px',
								}}
							/>
							<span className="ml-1">+</span>
						</h3>
						<p className="text-sm text-muted-foreground">{t('homepage.services.stats.deploymentTime')}</p>
					</div>
					<div className="text-center p-6 rounded-xl bg-card border border-border">
						<div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
							<Globe className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-bold text-3xl text-primary mb-2 flex items-center justify-center">
							<FlipNumbers
								height={36}
								width={22}
								color="hsl(var(--primary))"
								play={isVisible}
								duration={4}
								numbers="50"
								numberStyle={{
									fontFamily: 'inherit',
									fontWeight: 'bold',
									letterSpacing: '2px',
								}}
							/>
							<span className="ml-1">+</span>
						</h3>
						<p className="text-sm text-muted-foreground">{t('homepage.services.stats.dataSources')}</p>
					</div>
					<div className="text-center p-6 rounded-xl bg-card border border-border">
						<div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
							<Lock className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-bold text-3xl text-primary mb-2 flex items-center justify-center">
							<FlipNumbers
								height={36}
								width={22}
								color="hsl(var(--primary))"
								play={isVisible}
								duration={4}
								numbers="100"
								numberStyle={{
									fontFamily: 'inherit',
									fontWeight: 'bold',
									letterSpacing: '2px',
								}}
							/>
							<span className="ml-1">%</span>
						</h3>
						<p className="text-sm text-muted-foreground">{t('homepage.services.stats.security')}</p>
					</div>
					<div className="text-center p-6 rounded-xl bg-card border border-border">
						<div className="bg-primary/10 p-3 rounded-xl w-fit mx-auto mb-4">
							<BarChart3 className="h-6 w-6 text-primary" />
						</div>
						<h3 className="font-bold text-3xl text-primary mb-2 flex items-center justify-center">
							<FlipNumbers
								height={36}
								width={22}
								color="hsl(var(--primary))"
								play={isVisible}
								duration={4}
								numbers="40"
								numberStyle={{
									fontFamily: 'inherit',
									fontWeight: 'bold',
									letterSpacing: '2px',
								}}
							/>
							<span className="ml-1">%</span>
						</h3>
						<p className="text-sm text-muted-foreground">{t('homepage.services.stats.costSaving')}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
