// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'geolocation=(), camera=(), microphone=(), payment=()')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-Frame-Options', 'DENY')

  // CSP adaptat pentru securedevops.site + Google Analytics & GTM
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self' https://securedevops.site; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://securedevops.site https://www.googletagmanager.com https://www.google-analytics.com; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com; " +
    "frame-src https://www.googletagmanager.com; " +
    "object-src 'none'; base-uri 'none'; frame-ancestors 'none';"
  )

  return response
}

export const config = {
  matcher: '/:path*',
}
