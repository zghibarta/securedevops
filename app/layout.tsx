import type React from "react"
import { headers } from "next/headers"
import { Inter } from "next/font/google"
import Script from 'next/script' // Importăm componenta Script
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header" // Asigură-te că importul este corect (posibil "@/components/header")
import { Footer } from "@/components/footer" // Asigură-te că importul este corect (posibil "@/components/footer")
import { Toaster } from "@/components/ui/toaster"; 

const inter = Inter({ subsets: ["latin"] })

// Folosim variabila de mediu pentru Google Analytics Measurement ID
// Asigură-te că NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID este definit în .env.local
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-H78B1NW7ND"; // Folosim ID-ul corect

export const metadata = { // Păstrăm metadata definită în fișierul tău
  metadataBase: new URL("https://securedevops.site"),
  title: "SecureDevOps – OWASP & SSDLC",
  description: "Platformă educațională despre securitatea în DevOps",
  generator: 'stackblitz',
  icons: {
    icon: {
      url: '/images/favicon.ico',
      type: 'image/x-icon',
    },
  },
  openGraph: {
    title: "SecureDevOps – OWASP & SSDLC",
    description: "Platformă educațională despre securitatea în DevOps",
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

// RootLayout este o componentă Server, poate fi async dacă are nevoie de await pentru alte operații
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Preluăm nonce-ul setat de middleware. `headers()` este sincron, deci nu necesită await.
  const nonce = headers().get("x-nonce") || "";

  return (
    <html lang="ro" suppressHydrationWarning>
      {/* Eliminat nonce={nonce} din <head> */}
      <head>
        {/* Meta tag-ul CSP a fost eliminat */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-2 py-4"> {/* Adăugat container și padding */}
              {children}
            </main>
            <Footer />
            <Toaster /> 
          </div>
        </ThemeProvider>

        {/* Scripturi Google Analytics (gtag.js) folosind next/script și nonce */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              id="gtag-script-loader" // ID actualizat pentru claritate
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              nonce={nonce} // Aplicăm nonce-ul corect aici
            />
            {/* Scriptul inline folosește acum componenta Script și nonce */}
            <Script id="gtag-config-inline" strategy="afterInteractive" nonce={nonce}>
              {/* Folosim template literals pentru a insera Measurement ID-ul */}
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
