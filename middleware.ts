import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const generateNonce = () =>
  Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString("base64")

export function middleware(request: NextRequest) {
  const nonce = generateNonce()

  const csp = `
    default-src 'self';
    script-src 'self' https://www.googletagmanager.com 'nonce-${nonce}';
    style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com;
    connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com *.googleapis.com;
    frame-src https://www.googletagmanager.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, " ").trim()

  const requestHeaders = new Headers(request.headers)
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  response.headers.set("Content-Security-Policy", csp)
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "geolocation=(), microphone=(), camera=()")
  response.headers.set("X-DNS-Prefetch-Control", "on")
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload")

  response.headers.set("x-nonce", nonce)

  return response
}
