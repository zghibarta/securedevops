import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termeni și Condiții | SecureDevOps',
  description: 'Termeni și Condiții pentru utilizarea Platformei SecureDevOps',
};

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, BookOpen, CheckCircle, Library } from "lucide-react"

export default function TermeniPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <Link href="/" className="text-lg font-bold">
              SecureDevOps
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/owasp" className="text-sm font-medium hover:underline underline-offset-4">
              OWASP Top Ten 2021
            </Link>
            <Link href="/ssdlc" className="text-sm font-medium hover:underline underline-offset-4">
              SSDLC
            </Link>
            <Link href="/evaluare" className="text-sm font-medium hover:underline underline-offset-4">
              Evaluare
            </Link>
            <Link href="/resurse" className="text-sm font-medium hover:underline underline-offset-4">
              Resurse
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Autentificare
          </Button>
        </div>
      </header>
      <main className="flex-1 mx-auto">
        <section className="w-full py-3 md:py-6 lg:py-8 bg-muted">

            <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <h1 className="text-3xl font-bold mb-4">Termeni și Condiții</h1>
            <ol className="list-decimal list-inside">
                <li className="mb-4">
                <strong>Acceptarea Termenilor</strong>
                <p>Prin accesarea și utilizarea Platformei SecureDevOps, utilizatorul declară că a citit, a înțeles și este de acord cu acești Termeni și Condiții. Utilizarea Platformei implică acceptarea automată a tuturor condițiilor stipulate.</p>
                </li>
                <li className="mb-4">
                <strong>Scopul Platformei</strong>
                <p>Platforma SecureDevOps a fost creată în scopuri informative și educaționale. Informațiile și instrumentele furnizate sunt destinate îmbunătățirii cunoștințelor în domeniul securității în DevOps. Utilizatorul își asumă întreaga responsabilitate pentru modul în care utilizează informațiile și instrumentele prezentate.</p>
                </li>
                <li className="mb-4">
                <strong>Utilizarea și Responsabilitățile Utilizatorului</strong>
                <p>Platforma poate fi accesată și utilizată în mod liber, însă utilizatorul este responsabil de interpretarea și aplicarea informațiilor în contextul propriu.</p>
                <p>Utilizatorul se obligă să verifice cu atenție sursele și să consulte specialiști înainte de implementarea oricăror soluții tehnice bazate pe informațiile primite.</p>
                </li>
                <li className="mb-4">
                <strong>Limitarea Răspunderii</strong>
                <p>Platforma oferă informații și instrumente „așa cum sunt”, fără garanții explicite sau implicite privind acuratețea, actualitatea sau completețea acestora.</p>
                <p>În niciun caz, autorul Platformei (formatorul cursului respectiv) nu va fi răspunzător pentru eventualele daune sau pierderi cauzate de utilizarea informațiilor furnizate.</p>
                </li>
                <li className="mb-4">
                <strong>Politica de Confidențialitate</strong>
                <p>Protejarea datelor personale ale utilizatorilor este o prioritate. Pentru detalii suplimentare privind colectarea, stocarea și utilizarea datelor, vă rugăm să consultați politica noastră de confidențialitate, disponibilă pe Platformă.</p>
                </li>
                <li className="mb-4">
                <strong>Contacte</strong>
                <p>Pentru orice clarificări sau suport în utilizarea Platformei, vă rugăm să contactați formatorul – Aurel Zghibarta, la adresa de email: <a href="mailto:zghibarta@gmail.com">zghibarta@gmail.com</a>.</p>
                </li>
            </ol>
            </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            Securedevops - platformă informativ-educațională despre securitatea în DevOps
          </p>
          {/*<p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            SecureDevOps - Platformă informativ-educațională dedicată integrării securității în fluxul DevOps 
          </p>*/}
          <div className="flex gap-4">
            <Link href="/termeni" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Termeni și Condiții
            </Link>
            {/*  */}
          </div>
        </div>
      </footer>
    </div>
  )
}
