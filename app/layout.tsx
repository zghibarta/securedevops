import type { Metadata } from "next"
import { headers } from "next/headers"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://securedevops.site"),
  title: "SecureDevOps – OWASP & SSDLC",
  description:
    "Platformă informativ-educațională despre securitatea în DevOps, OWASP Top 10 și practici SSDLC",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const nonce = headers().get("x-nonce") || ""

  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H78B1NW7ND"
        ></script>
        <script
          nonce={nonce}
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H78B1NW7ND');
            `,
          }}
        />
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
