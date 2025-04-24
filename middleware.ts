import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Funcție pentru generarea unui nonce (număr utilizat o singură dată)
const generateNonce = () =>
  Buffer.from(crypto.getRandomValues(new Uint8Array(16))).toString("base64");

export function middleware(request: NextRequest) {
  // Generează un nonce unic pentru fiecare cerere
  const nonce = generateNonce();

  // Determină dacă suntem în modul de dezvoltare
  const isDevelopment = process.env.NODE_ENV === 'development';
  console.log(`Middleware running in ${process.env.NODE_ENV} mode. isDevelopment: ${isDevelopment}`);

  // Definește politica Content Security Policy (CSP)
  // Adăugăm 'unsafe-eval' la script-src DOAR în dezvoltare
  // Adăugăm hash-ul specific pentru scriptul inline blocat anterior
  // Adăugăm sursa Cloudflare la connect-src
  const csp = `
    default-src 'self' https://*.google-analytics.com https://www.google-analytics.com https://*.googletagmanager.com https://www.googletagmanager.com https://apis.google.com https://identitytoolkit.googleapis.com https://fonts.googleapis.com https://fonts.gstatic.com;
    script-src 'self' https://*.google-analytics.com https://www.google-analytics.com https://*.googletagmanager.com https://www.googletagmanager.com https://apis.google.com https://identitytoolkit.googleapis.com 'nonce-${nonce}' ${isDevelopment ? "'unsafe-eval'" : ''} 'sha256-QaDv8TLjywIM3mKcA73bK0btmqNpUfcuwzqZ4U9KTsk='; 
    style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' https://*.google-analytics.com https://www.google-analytics.com https://*.googletagmanager.com https://www.googletagmanager.com https://fonts.gstatic.com; 
    connect-src 'self' https://*.google-analytics.com https://www.google-analytics.com https://*.googletagmanager.com https://www.googletagmanager.com https://apis.google.com https://identitytoolkit.googleapis.com https://cloudflareinsights.com; 
    frame-src 'self' https://*.google-analytics.com https://www.google-analytics.com https://*.googletagmanager.com https://www.googletagmanager.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim();

  // Creează headere noi pe baza celor existente
  const requestHeaders = new Headers(request.headers);
  // Creează răspunsul, transmițând headerele
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Setează headerele de securitate în răspuns
  response.headers.set("Content-Security-Policy", csp);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  // response.headers.set("X-XSS-Protection", "1; mode=block"); // Eliminat - Header depreciat
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "geolocation=(), microphone=(), camera=()"
  );
  response.headers.set("X-DNS-Prefetch-Control", "on");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains" // Eliminat 'preload'
  );

  // Setează nonce-ul generat într-un header (util pentru Next.js)
  response.headers.set("x-nonce", nonce);

  return response;
}
