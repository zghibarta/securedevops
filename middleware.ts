import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Generare nonce unic per request
function generateNonce(): string {
  return Buffer.from(crypto.randomUUID()).toString('base64')
}

export function middleware(request: NextRequest) {
  const nonce = generateNonce()
  const response = NextResponse.next()

  // 1. Setează nonce în header pentru a fi accesibil în layout.tsx
  response.headers.set('x-nonce', nonce)

  // 2. Content Security Policy cu nonce
  const csp = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https:;
    font-src 'self' https:;
    connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com;
    frame-src https://www.googletagmanager.com;
    object-src 'none';
    base-uri 'none';
    frame-ancestors 'none';
  `.replace(/\s{2,}/g, ' ').trim()

  // 3. Adaugă Security Headers recomandate
  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')

  return response
}

export const config = {
  matcher: '/:path*',
}
