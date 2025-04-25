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
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo și Titlu Site - Iconița este acum parte din link */}
        <div className="mr-4"> {/* Păstrăm div-ul pentru structură și margine */}
          <Link href="/" className="flex items-center gap-2 text-lg font-bold whitespace-nowrap"> {/* Adăugat flex, items-center, gap-2 aici */}
            <Shield className="h-6 w-6" /> {/* Iconița mutată în interiorul Link */}
            SecureDevOps
          </Link>
        </div>

        {/* Navigație Desktop - Afișată doar pe md+ */}
        <nav className="hidden md:flex flex-grow justify-center items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors", // Clase comune
                link.href === "/evaluare"
                  ? "text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300" // Stil special desktop pentru Evaluare
                  : pathname === link.href
                  ? "text-primary underline underline-offset-4 decoration-2" // Stil activ desktop (nu Evaluare)
                  : "text-muted-foreground hover:text-primary" // Stil inactiv desktop (nu Evaluare)
              )}
              onClick={() => setIsMenuOpen(false)} // Închide meniul mobil (nu afectează desktop)
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buton Autentificare Desktop și Buton Hamburger */}
        <div className="flex items-center gap-2 ml-4"> {/* Adăugat ml-4 */}
          {/* Buton Autentificare pentru desktop */}
          <div className="hidden md:flex" title="În dezvoltare">
            <Button variant="outline" size="sm">
              Autentificare
            </Button>
          </div>

          {/* Hamburger menu */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">Deschide meniul</span>
          </button>
        </div>
      </div>

      {/* Meniu Mobil - Afișat condiționat sub header */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-40 bg-background border-b shadow-md">
          <nav className="container mx-auto flex flex-col gap-1 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium", // Clase comune mobile
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
            {/* Buton Autentificare în meniul mobil */}
            <div className="border-t pt-3 mt-2">
              <Button variant="outline" size="sm" className="w-full" title="În dezvoltare">
                Autentificare
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
