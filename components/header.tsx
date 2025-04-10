'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Menu, X } from "lucide-react"
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
          <Link href="/owasp" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium hover:underline underline-offset-4">
            OWASP Top Ten
          </Link>
          <Link href="/ssdlc" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium hover:underline underline-offset-4">
            SSDLC
          </Link>
          <Link href="/resurse" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium hover:underline underline-offset-4">
            Resurse
          </Link>
          <Link href="/evaluare" onClick={() => setIsMenuOpen(false)} className="text-sm font-medium hover:underline underline-offset-4">
            Evaluare
          </Link>

          {/* Buton Autentificare mutat în meniu */}
          <Button variant="outline" size="sm" className="md:hidden" title="În dezvoltare">
            Autentificare
          </Button>
        </nav>

        {/* Buton Autentificare pentru desktop */}
        <div className="hidden md:flex items-center gap-2 px-4" title="În dezvoltare">
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
          {/* <Menu className="h-4 w-4" /> */}
        </button>
      </div>
    </header>
  );
}
