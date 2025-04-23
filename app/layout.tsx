import type React from "react"
import { headers } from "next/headers"
import { Inter } from "next/font/google"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://securedevops.site"),
  title: "SecureDevOps – OWASP & SSDLC",
  description: "Platformă informativ-educațională despre securitatea în DevOps, OWASP Top 10 și practici SSDLC",
  generator: 'stackblitz',
  icons: {
    icon: {
      url: '/images/favicon.ico',
      type: 'image/x-icon',
    },
  },
  openGraph: {
    title: "SecureDevOps – OWASP & SSDLC",
    description: "Platformă informativ-educațională despre securitatea în DevOps, OWASP Top 10 și practici SSDLC",
    url: "https://securedevops.site",
    siteName: "SecureDevOps",
    images: [
      {
        url: "/images/og-securedev.jpg",
        width: 1024,
        height: 541,
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nonce = (await headers()).get("x-nonce") || ""

  const csp = `
    default-src 'self';
    script-src 'self' https://www.googletagmanager.com 'nonce-${nonce}';
    style-src 'self' 'unsafe-inline';
  `
  return (
    <html lang="ro" suppressHydrationWarning>
      <head nonce={nonce}>
      <meta httpEquiv="Content-Security-Policy" content={csp} />
        {/* Google Tag Manager */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H78B1NW7ND" ></script>

        <script nonce={nonce} dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H78B1NW7ND');
          `
        }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
