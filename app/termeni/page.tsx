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
    <div className="flex flex-col">
      <main className="flex-1 mx-auto">
        <section className="w-full py-3 md:py-3 lg:py-4 bg-muted">

            <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <h1 className="text-3xl font-bold mb-4">Termeni și Condiții</h1>
            <ol className="list-decimal list-inside">
                <li className="mb-4">
                <strong>Acceptarea Termenilor</strong>
                <p>Prin accesarea și utilizarea Platformei SecureDevOps, utilizatorul declară că a citit, a înțeles și este de acord cu acești Termeni și Condiții.</p> 
                <p>Utilizarea Platformei implică acceptarea automată a tuturor condițiilor stipulate.</p>
                </li>
                <li className="mb-4">
                <strong>Scopul Platformei</strong>
                <p>Platforma SecureDevOps a fost creată în scopuri informative și educaționale.</p> 
                <p>Informațiile și instrumentele furnizate sunt destinate îmbunătățirii cunoștințelor în domeniul securității în DevOps.</p> 
                </li>
                <li className="mb-4">
                <strong>Utilizarea și Responsabilitățile Utilizatorului</strong>
                <p>Platforma poate fi accesată și utilizată în mod liber, însă utilizatorul este responsabil de interpretarea și aplicarea informațiilor în contextul propriu.</p>
                <p>Utilizatorul se obligă să verifice cu atenție sursele și să consulte specialiști înainte de implementarea oricăror soluții tehnice bazate pe informațiile primite.</p>
                <p>Utilizatorul își asumă întreaga responsabilitate pentru modul în care utilizează informațiile și instrumentele prezentate.</p>
                </li>
                <li className="mb-4">
                <strong>Limitarea Răspunderii</strong>
                <p>Platforma oferă informații și instrumente „așa cum sunt”, fără garanții explicite sau implicite privind acuratețea, actualitatea sau completețea acestora.</p>
                <p>În niciun caz, autorul Platformei (formatorul cursului) nu va fi răspunzător pentru eventualele daune sau pierderi cauzate de utilizarea informațiilor furnizate.</p>
                </li>
                <li className="mb-4">
                <strong>Politica de Confidențialitate</strong>
                <p>Protejarea datelor personale ale utilizatorilor este o prioritate. Pentru detalii suplimentare privind colectarea, stocarea și utilizarea datelor, vă rugăm să consultați politica noastră de confidențialitate, disponibilă pe Platformă.</p>
                </li>
                <li className="mb-4">
                <strong>Contacte</strong>
                <p>Pentru orice clarificări sau suport în utilizarea Platformei, vă rugăm să contactați formatorul cursului – Aurel Zghibarta, email: <a href="mailto:zghibarta@gmail.com">zghibarta@gmail.com</a>.</p>
                </li>
            </ol>
            </div>
        </section>
      </main>
    </div>
  )
}
