'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu } from "lucide-react"
import React, { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6" />
          <Link href="/" className="text-lg font-bold">
            SecureDevOps
          </Link>
        </div>

        <nav className={`flex flex-col absolute top-16 right-0 mx-auto w-auto bg-background border-b gap-2 p-4 md:relative md:top-0 md:flex-row md:p-0 md:border-b-0 md:gap-6 ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
          <Link href="/owasp" className="text-sm font-medium hover:underline underline-offset-4">
            OWASP Top Ten 2021
          </Link>
          <Link href="/ssdlc" className="text-sm font-medium hover:underline underline-offset-4">
            SSDLC
          </Link>
          <Link href="/resurse" className="text-sm font-medium hover:underline underline-offset-4">
            Resurse
          </Link>
          <Link href="/evaluare" className="text-sm font-medium hover:underline underline-offset-4">
            Evaluare
          </Link>

          {/* Buton Autentificare mutat în meniu */}
          <Button variant="outline" size="sm" className="md:hidden">
            Autentificare
          </Button>
        </nav>

        {/* Buton Autentificare pentru desktop */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="outline" size="sm">
            Autentificare
          </Button>
        </div>

        {/* Hamburger menu */}
        <button 
          className="md:hidden flex items-center justify-center w-8 h-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
