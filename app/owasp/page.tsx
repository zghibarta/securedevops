import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Lightbulb,
  Shield,
  AlertTriangle,
  KeyRound,
  Lock,
  Code,
  Settings,
  UserX,
  Server,
  FileCode,
  Bug,
  Search,
  FileWarning,
  Zap,
} from "lucide-react"

export default function OwaspPage() {
  const vulnerabilities = [
    {
      id: "a01",
      title: "A01:2025 – Broken Access Control",
      titleRo: "A01 – Control defectuos al accesului",
      icon: <Lock className="h-6 w-6" />,
      description:
        "Restricțiile privind acțiunile utilizatorilor nu sunt aplicate corespunzător. Atacatorii pot exploata aceste defecte pentru a accesa neautorizat funcționalități, date, conturi sau pentru a modifica drepturile de acces.",
      link: "/owasp/a01#top",
    },
    {
      id: "a02",
      title: "A02:2025 – Security Misconfiguration",
      titleRo: "A02 – Configurare inadecvată a securității",
      icon: <Settings className="h-6 w-6" />,
      description:
        "Configurări implicite nesigure, configurări incomplete, stocarea în cloud deschisă, mesaje de eroare că expun informații și lipsa patch-urilor de securitate. 100% din aplicațiile testate aveau o formă de misconfigurare.",
      link: "/owasp/a02#top",
    },
    {
      id: "a03",
      title: "A03:2025 – Software Supply Chain Failures",
      titleRo: "A03 – Eșecuri în lanțul de aprovizionare cu software",
      icon: <AlertTriangle className="h-6 w-6" />,
      description:
        "Compromiterea componentelor, a proceselor de build, a surselor de distribuție și a infrastructurii dependențelor. Include vulnerabilități în biblioteci și componente neactualizate.",
      link: "/owasp/a03#top",
    },
    {
      id: "a04",
      title: "A04:2025 – Cryptographic Failures",
      titleRo: "A04 – Eșecuri criptografice",
      icon: <KeyRound className="h-6 w-6" />,
      description:
        "Eșecuri legate de criptografie care duc la expunerea datelor sensibile. Include algoritmi slabi, chei compromise și implementări deficiente ale criptografiei.",
      link: "/owasp/a04#top",
    },
    {
      id: "a05",
      title: "A05:2025 – Injection",
      titleRo: "A05 – Injectare",
      icon: <Code className="h-6 w-6" />,
      description:
        "Datele ostile sunt trimise către un interpretor ca parte a unei comenzi sau interogări. Include SQL Injection, Command Injection, XSS și alte vulnerabilități de injectare.",
      link: "/owasp/a05#top",
    },
    {
      id: "a06",
      title: "A06:2025 – Insecure Design",
      titleRo: "A06 – Proiectare nesecurizată",
      icon: <Lightbulb className="h-6 w-6" />,
      description:
        "Defecte de design la nivel strategic. Se concentrează pe riscurile legate de lipsa modelării amenințelor, a modelării securității și a implementării controalelor de securitate.",
      link: "/owasp/a06#top",
    },
    {
      id: "a07",
      title: "A07:2025 – Authentication Failures",
      titleRo: "A07 – Eșecuri de autentificare",
      icon: <UserX className="h-6 w-6" />,
      description:
        "Confirmarea incorectă a identității utilizatorului. Permite atacatorilor să compromită parole, chei, token-uri de sesiune sau să exploateze alte defecte de autentificare.",
      link: "/owasp/a07#top",
    },
    {
      id: "a08",
      title: "A08:2025 – Software or Data Integrity Failures",
      titleRo: "A08 – Eșecuri de integritate a software-ului sau datelor",
      icon: <FileWarning className="h-6 w-6" />,
      description:
        "Aplicațiile nu protejează integritatea software-ului și a datelor. Include actualizări nesemnate, injecții de cod și manipularea metadatelor de acces.",
      link: "/owasp/a08#top",
    },
    {
      id: "a09",
      title: "A09:2025 – Security Logging & Alerting Failures",
      titleRo: "A09 – Eșecuri de jurnalizare și alertare a securității",
      icon: <Search className="h-6 w-6" />,
      description:
        "Jurnalizarea și monitorizarea insuficiente, fără alertare efectivă. Permite atacatorilor să rămână nedetectați. Acum se pune accent și pe alertare, nu doar pe înregistrare.",
      link: "/owasp/a09#top",
    },
    {
      id: "a10",
      title: "A10:2025 – Mishandling of Exceptional Conditions",
      titleRo: "A10 – Gestionarea defectuoasă a condițiilor excepționale",
      icon: <Zap className="h-6 w-6" />,
      description:
        "Gesionarea inadecvată a erorilor, condiții logice neașteptate și fallback-uri nesecurizate. Include fail-open scenarios și manipularea inadecvată a cazurilor extreme.",
      link: "/owasp/a10#top",
    },
  ]

  return (
    <div className="flex flex-col">
      <main className="flex-1 mx-auto">
        <section className="w-full py-6 md:py-8 lg:py-10 bg-muted">
          <div className="container max-w-4xl px-2 md:px-3">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">OWASP Top 10: 2025</h1>
                <p className="max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Zece riscuri de securitate critice pentru aplicațiile web (Ediția a 8-a)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-3 md:py-6 lg:py-8">
          <div className="container max-w-4xl px-2 md:px-3">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
              {vulnerabilities.map((vulnerability) => (
                <Card key={vulnerability.id} className="flex flex-col h-full">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      {vulnerability.icon}
                      <CardTitle>{vulnerability.titleRo}</CardTitle>
                    </div>
                    <CardDescription className="text-xs text-muted-foreground">{vulnerability.title}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm">{vulnerability.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Link href={vulnerability.link}>
                      <Button variant="outline" size="sm" className="w-full">
                        Citește mai mult
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
