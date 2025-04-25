"use client"; // Necesită interactivitate client pentru usePathname și useState

import Link from "next/link";
import { usePathname } from "next/navigation"; // Importăm hook-ul pentru ruta curentă
import { Button } from "@/components/ui/button";
import { Shield, Menu, X } from "lucide-react";
import React, { useState } from 'react';
import { cn } from "@/lib/utils"; // Importăm utilitarul pentru clase

// Definim linkurile de navigație într-un array
const navLinks = [
  { href: "/owasp", label: "OWASP Top Ten" },
  { href: "/ssdlc", label: "SSDLC" },
  { href: "/resurse", label: "Resurse" },
  { href: "/evaluare", label: "Evaluare" }, // Linkul pe care îl vom evidenția
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Obținem ruta curentă

  return (
    // Am păstrat header-ul sticky și cu blur din versiunea anterioară,
    // dacă preferi cel original din fișierul tău, poți înlocui className aici.
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo și Titlu Site */}
        <div className="flex items-center gap-2">
          <Link href="/" className="text-lg font-bold">
          <Shield className="h-6 w-6" />
            SecureDevOps
          </Link>
        </div>

        {/* Navigație Desktop */}
        {/* Am înlocuit navigația originală cu maparea array-ului pentru a aplica stilurile */}
        <nav className="hidden flex-1 items-center space-x-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors", // Clase comune
                link.href === "/evaluare"
                  ? "text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300" // Stil special pentru Evaluare
                  : pathname === link.href
                  ? "text-primary underline underline-offset-4 decoration-2" // Stil pentru link activ (nu Evaluare)
                  : "text-muted-foreground hover:text-primary" // Stil pentru link inactiv (nu Evaluare)
              )}
              // Închidem meniul mobil la click (nu e necesar pe desktop, dar nu strică)
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Buton Autentificare și Meniu Mobil */}
        <div className="flex flex-1 items-center justify-end space-x-4">
           {/* Buton Autentificare pentru desktop (din codul tău original) */}
           <div className="hidden md:flex items-center gap-2" title="În dezvoltare">
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
            <span className="sr-only">Deschide meniul</span> {/* Adăugat pentru accesibilitate */}
           </button>

           {/* Meniu Mobil - Folosim Sheet din versiunea anterioară pentru un aspect mai bun */}
           {/* Dacă preferi meniul original absolut, poți decomenta codul original și șterge Sheet */}
           <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} absolute top-16 right-4 w-48 bg-background border rounded-md shadow-lg p-2`}>
             <nav className="flex flex-col space-y-1">
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
               {/* Buton Autentificare în meniul mobil (din codul tău original) */}
               <div className="border-t pt-2 mt-2">
                 <Button variant="outline" size="sm" className="w-full" title="În dezvoltare">
                   Autentificare
                 </Button>
               </div>
             </nav>
           </div>
        </div>
      </div>
    </header>
  );
}
