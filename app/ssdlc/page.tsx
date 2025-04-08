import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, RefreshCcw, AlertTriangle, Shield, Code, FileSearch, Bug, Zap, Lock, Server } from "lucide-react"

export default function SSDLCPage() {
  const phases = [
    {
      id: "ssdlc",
      title: "Securitate în ciclul de dezvoltare",
      icon: <RefreshCcw className="h-6 w-6" />,
      description: "Descrierea SSDLC, practici recomandate și modele cadru.",
      link: "/ssdlc/ciclul",
    },
    {
      id: "testing",
      title: "Testare de securitate",
      icon: <Lock className="h-6 w-6" />,
      description:
        "Tipuri de testare a securității, modalități de integrare și instrumente aferente.",
      link: "/ssdlc/testare",
    },
    {
      id: "vulnerabilities",
      title: "Managementul vulnerabilităților",
      icon: <AlertTriangle className="h-6 w-6" />,
      description:
        "Procesul de management al vulnerabilităților și practici de integrare în DevOps.",
      link: "/ssdlc/vulnerabilitati"
    }
  ]
  // Commented out phases:
  // {
  //   id: "testing",
  //   title: "Testare de securitate",
  //   icon: <Bug className="h-6 w-6" />,
  //   description:
  //     "Testarea aplicației pentru vulnerabilități folosind metode precum SAST, DAST, testare de penetrare și revizuirea codului.",
  //   link: "#",
  // },
  // {
  //   id: "deployment",
  //   title: "Implementare securizată",
  //   icon: <Server className="h-6 w-6" />,
  //   description:
  //     "Configurarea securizată a infrastructurii și implementarea controalelor de securitate în mediul de producție.",
  //   link: "#",
  // },
  // {
  //   id: "maintenance",
  //   title: "Mentenanță și răspuns",
  //   icon: <Zap className="h-6 w-6" />,
  //   description: "Monitorizarea continuă, gestionarea vulnerabilităților și răspunsul la incidente de securitate.",
  //   link: "#",
  // }
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
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
            <Link href="/resurse" className="text-sm font-medium hover:underline underline-offset-4">
              Resurse
            </Link>
            <Link href="/evaluare" className="text-sm font-medium hover:underline underline-offset-4">
              Evaluare
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Autentificare
          </Button>
        </div>
      </header>
      <main className="flex-1 mx-auto">
      <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Secure Software Development Life Cycle (SSDLC)</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Integrarea securității în fiecare etapă a ciclului de dezvoltare software în contextul DevOps
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-3 md:py-6 lg:py-8">
          <div className="container px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">Ce este SSDLC?</h2>
              <p className="text-muted-foreground mb-6">
              Securitatea în ciclul de dezvoltare software (SSDLC - Secure Software Development Lifecycle) reprezintă integrarea sistematică a activităților de securitate în fiecare etapă a procesului de dezvoltare software. Scopul este de a identifica și remedia vulnerabilitățile de securitate cât mai devreme în ciclul de dezvoltare, când costurile de remediere sunt mai mici.
              </p>
              <p className="text-muted-foreground">
                În contextul DevOps, SSDLC devine și mai important, deoarece viteza de livrare a software-ului crește,
                iar securitatea trebuie să țină pasul cu această viteză fără a deveni un blocaj. Acest lucru a dus la
                apariția conceptului de "DevSecOps", care încorporează securitatea ca parte integrantă a culturii
                DevOps.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {phases.map((phase: any) => (
                <Card key={phase.id} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {phase.icon}
                      <CardTitle>{phase.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm">{phase.description}</p>
                  </CardContent>
                  <CardFooter>
                    {phase.link && (
                      <Link href={phase.link}>
                        <Button variant="outline" size="sm" className="w-full">
                          Citește mai mult
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            Securedevops - platformă informativ-educațională despre securitatea în DevOps
          </p>
          <div className="flex gap-4">
            <Link href="/termeni" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Termeni și Condiții
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
