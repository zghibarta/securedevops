"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import React, { useState } from 'react';
import { cn } from "@/lib/utils";

// Definim linkurile de navigație într-un array
const navLinks = [
  { href: "/owasp", label: "OWASP Top Ten" },
  { href: "/ssdlc", label: "SSDLC" },
  { href: "/resurse", label: "Resurse" },
  { href: "/evaluare", label: "Evaluare" }, // Linkul pe care îl vom evidenția
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    // Păstrăm header-ul simplu, fără sticky/blur, conform fișierului tău original
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo și Titlu Site */}
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6" />
          <Link href="/" className="text-lg font-bold">
            SecureDevOps
          </Link>
        </div>

        {/* Navigație - Modificată pentru centrare pe desktop */}
        <nav className={cn(
          "absolute top-16 right-0 mx-auto w-auto bg-background border-b gap-2 p-4", // Stiluri comune și mobile inițiale
          "md:relative md:top-0 md:flex md:flex-row md:p-0 md:border-b-0 md:gap-6", // Stiluri desktop inițiale
          "md:flex-grow md:justify-center", // <<< ADAUGAT: flex-grow și justify-center pentru desktop
          isMenuOpen ? 'flex flex-col' : 'hidden', // Control vizibilitate mobilă
          'md:flex' // Asigură vizibilitatea pe desktop indiferent de isMenuOpen
        )}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // Stiluri aplicate individual link-urilor
              className={cn(
                "text-sm font-medium transition-colors", // Clase comune
                // Stiluri Desktop
                "hidden md:block", // Ascunde pe mobil inițial, arată pe desktop
                link.href === "/evaluare"
                  ? "text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300" // Stil special desktop pentru Evaluare
                  : pathname === link.href
                  ? "text-primary underline underline-offset-4 decoration-2" // Stil activ desktop (nu Evaluare)
                  : "text-muted-foreground hover:text-primary", // Stil inactiv desktop (nu Evaluare)
                // Stiluri Mobile (aplicate când meniul e deschis)
                 "md:hidden px-3 py-2 rounded-md", // Clase comune mobile
                 link.href === "/evaluare"
                    ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/30" // Stil special mobil pentru Evaluare
                    : pathname === link.href
                    ? "bg-accent text-primary" // Stil activ mobil
                    : "text-muted-foreground hover:bg-accent hover:text-primary" // Stil inactiv mobil
              )}
              onClick={() => setIsMenuOpen(false)} // Închide meniul la click
            >
              {link.label}
            </Link>
          ))}
           {/* Buton Autentificare în meniul mobil (din codul tău original) */}
           <div className="border-t pt-2 mt-2 md:hidden"> {/* Ascunde pe desktop */}
             <Button variant="outline" size="sm" className="w-full" title="În dezvoltare">
               Autentificare
             </Button>
           </div>
        </nav>

        {/* Buton Autentificare pentru desktop (din codul tău original) */}
        <div className="hidden md:flex items-center gap-2" title="În dezvoltare"> {/* Eliminat px-4 redundant */}
          <Button variant="outline" size="sm">
            Autentificare
          </Button>
        </div>

        {/* Hamburger menu (din codul tău original) */}
        <button
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Deschide meniul</span>
        </button>
      </div>
    </header>
  );
}
