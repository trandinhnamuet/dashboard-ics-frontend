'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Shield, Zap, Globe, BarChart3, Cpu, HardDrive, Network, Lock, CloudCog } from "lucide-react"
import { useTranslation } from "react-i18next"
import FlipNumbers from "react-flip-numbers"
import { useEffect, useState } from "react"

const services = [
	{
		icon: Database,
		title: "services.dataIntegration.title",
		description: "services.dataIntegration.description",
		features: [
			"services.dataIntegration.features.0",
			"services.dataIntegration.features.1",
			"services.dataIntegration.features.2",
			"services.dataIntegration.features.3",
		],
		image: "/service-section/data-itergration.jpg",
	},
	{
		icon: Cpu,
		title: "services.visualReporting.title",
		description: "services.visualReporting.description",
		features: [
			"services.visualReporting.features.0",
			"services.visualReporting.features.1",
			"services.visualReporting.features.2",
			"services.visualReporting.features.3",
		],
		image: "/service-section/visual-and-reporting.jpg",
	},
	{
		icon: HardDrive,
		title: "services.monitoringAlerts.title",
		description: "services.monitoringAlerts.description",
		features: [
			"services.monitoringAlerts.features.0",
			"services.monitoringAlerts.features.1",
			"services.monitoringAlerts.features.2",
			"services.monitoringAlerts.features.3",
		],
		image: "/service-section/mornitoring-and-alert.jpg",
	},
	{
		icon: Network,
		title: "services.collaborationRemote.title",
		description: "services.collaborationRemote.description",
		features: [
			"services.collaborationRemote.features.0",
			"services.collaborationRemote.features.1",
			"services.collaborationRemote.features.2",
			"services.collaborationRemote.features.3",
		],
		image: "/service-section/collabration.jpg",
	},
	{
		icon: Shield,
		title: "services.securityGovernance.title",
		description: "services.securityGovernance.description",
		features: [
			"services.securityGovernance.features.0",
			"services.securityGovernance.features.1",
			"services.securityGovernance.features.2",
			"services.securityGovernance.features.3",
		],
		image: "/service-section/security.jpg",
	},
	{
		icon: BarChart3,
		title: "services.analyticsAI.title",
		description: "services.analyticsAI.description",
		features: [
			"services.analyticsAI.features.0",
			"services.analyticsAI.features.1",
			"services.analyticsAI.features.2",
			"services.analyticsAI.features.3",
		],
		image: "/service-section/ai.jpg",
	},
]


export function ServicesSection() {
	const { t } = useTranslation()
	const [isVisible, setIsVisible] = useState(false)
	const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

	// Trigger animation when component becomes visible
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

	// Handle click/touch to flip card (for iOS/mobile)
	const handleFlip = (index: number) => {
		setFlippedIndex((prev) => (prev === index ? null : index))
	}

	return (
		<section id="services" className="py-10 lg:py-16">
			<div className="container mx-auto px-4">
				<div className="text-center space-y-4 mb-16">
					<h2 className="text-3xl lg:text-5xl font-bold text-balance text-foreground">
						{t('homepage.services.subtitle')}
					</h2>
					<p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
						{t('homepage.services.intro')}
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => {
						const IconComponent = service.icon
						const isFlipped = flippedIndex === index
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
										willChange: 'transform',
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
										{/* Background Image */}
										<div
											className="absolute inset-0 z-0"
											style={{
												backgroundImage: `url(${service.image})`,
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
												{t(service.title)}
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
												<p className="text-sm font-bold text-primary text-center mb-4">{t('services.additionalBenefits.mainFeatures')}</p>
												<div className="space-y-2.5">
													{service.features.map((feature, featureIndex) => (
														<div
															key={featureIndex}
															className="flex items-start space-x-2 animate-in slide-in-from-left-2 duration-300"
															style={{ animationDelay: `${featureIndex * 100}ms` }}
														>
															<div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
															<span className="text-xs text-foreground leading-relaxed">{t(feature)}</span>
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
							<span className="ml-1">{t('services.additionalBenefits.deploymentTimeUnit')}</span>
						</h3>
						<p className="text-sm text-muted-foreground">{t('services.additionalBenefits.deploymentTime')}</p>
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
						<p className="text-sm text-muted-foreground">{t('services.additionalBenefits.dataSources')}</p>
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
						<p className="text-sm text-muted-foreground">{t('services.additionalBenefits.security')}</p>
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
						<p className="text-sm text-muted-foreground">{t('services.additionalBenefits.costSaving')}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
