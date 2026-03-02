import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import AuthProvider from '@/components/providers/auth-provider'
import { I18nProvider } from '@/components/providers/i18n-provider'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Toaster } from '@/components/ui/toaster'
import './globals.css'
import { PageTrackerGlobal } from '@/components/common/page-tracker-global'

export const metadata: Metadata = {
  title: 'Smart Dashboard Vietnam',
  description: 'Giải pháp Smart Dashboard hàng đầu tại Việt Nam',
  generator: 'Next.js',
  icons: {
    icon: '/smartdashboard-nobackground.png',
  },
  openGraph: {
    title: 'Smart Dashboard Vietnam',
    description: 'Giải pháp Smart Dashboard hàng đầu tại Việt Nam',
    url: 'https://smartdashboard.vn/', // Thay bằng domain thật nếu có
    siteName: 'Smart Dashboard Vietnam',
    images: [
      {
        url: 'https://smartdashboard.vn/application-areas/24.jpg',
        width: 1200,
        height: 630,
        alt: 'Smart Dashboard Vietnam',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart Dashboard Vietnam',
    description: 'Giải pháp Smart Dashboard hàng đầu tại Việt Nam',
    images: ['https://smartdashboard.vn/application-areas/24.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            <AuthProvider>
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <PageTrackerGlobal />
                  {children}
                </main>
                <Footer />
                <Toaster />
              </div>
            </AuthProvider>
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
