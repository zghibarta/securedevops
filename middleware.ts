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

  // Definește politica Content Security Policy (CSP)
  // Adăugăm 'unsafe-eval' la script-src DOAR în dezvoltare pentru React Refresh / HMR
  const csp = `
    default-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://apis.google.com https://identitytoolkit.googleapis.com https://fonts.googleapis.com https://fonts.gstatic.com;
    script-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://apis.google.com https://identitytoolkit.googleapis.com 'nonce-${nonce}' ${isDevelopment ? "'unsafe-eval'" : ''};
    style-src 'self' https://fonts.googleapis.com; /* 'unsafe-inline'; // Comentat pentru testare - poate fi necesar pentru shadcn/ui */
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://fonts.gstatic.com; /* data: // Comentat pentru testare */
    connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://apis.google.com https://identitytoolkit.googleapis.com;
    frame-src https://www.googletagmanager.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    upgrade-insecure-requests;
  `
    .replace(/\s{2,}/g, " ")
    .trim(); // Elimină spațiile multiple

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
