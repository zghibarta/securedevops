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
  { href: "/evaluare", label: "Evaluare" }, // Linkul cu stil special
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Obținem ruta curentă (ex: /owasp/a01)

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo și Titlu Site */}
        <div className="mr-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold whitespace-nowrap">
            <Shield className="h-6 w-6" />
            SecureDevOps
          </Link>
        </div>

        {/* Navigație Desktop */}
        <nav className="hidden md:flex flex-grow justify-center items-center gap-6">
          {navLinks.map((link) => {
            // Verificăm dacă secțiunea linkului este activă
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/')) || (link.href === '/owasp' && pathname.startsWith('/owasp/')) || (link.href === '/ssdlc' && pathname.startsWith('/ssdlc/'));
            const isEvaluare = link.href === "/evaluare";

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors", // Clase comune
                  isEvaluare
                    ? isActive
                      ? "text-amber-800 dark:text-amber-500 font-semibold" // Stil activ pentru Evaluare (maro mai intens/bold)
                      : "text-amber-700 dark:text-amber-600 hover:text-amber-800 dark:hover:text-amber-500" // Stil inactiv pentru Evaluare (maro)
                    : isActive
                    ? "text-primary font-medium" // Stil activ (fără subliniere)
                    : "text-muted-foreground hover:text-primary" // Stil inactiv
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Buton Autentificare Desktop și Buton Hamburger */}
        <div className="flex items-center gap-2 ml-4">
          <div className="hidden md:flex" title="În dezvoltare">
            <Button variant="outline" size="sm">
              Autentificare
            </Button>
          </div>
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            <span className="sr-only">Deschide meniul</span>
          </button>
        </div>
      </div>

      {/* Meniu Mobil */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 z-40 bg-background border-b shadow-md">
          <nav className="container mx-auto flex flex-col gap-1 p-4">
            {navLinks.map((link) => {
               const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href + '/')) || (link.href === '/owasp' && pathname.startsWith('/owasp/')) || (link.href === '/ssdlc' && pathname.startsWith('/ssdlc/'));
               const isEvaluare = link.href === "/evaluare";

               return (
                 <Link
                   key={link.href}
                   href={link.href}
                   className={cn(
                     "px-3 py-2 rounded-md text-sm font-medium", // Clase comune mobile
                      isEvaluare
                        ? isActive
                          ? "text-amber-800 dark:text-amber-500 font-semibold bg-amber-100 dark:bg-amber-900/30" // Stil activ mobil pentru Evaluare
                          : "text-amber-700 dark:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20" // Stil inactiv mobil pentru Evaluare
                        : isActive
                        ? "bg-accent text-primary font-semibold" // Stil activ mobil
                        : "text-muted-foreground hover:bg-accent hover:text-primary" // Stil inactiv mobil
                   )}
                   onClick={() => setIsMenuOpen(false)} // Închide meniul la click
                 >
                   {link.label}
                 </Link>
               );
            })}
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
