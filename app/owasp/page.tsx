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
      title: "A01:2021 – Broken Access Control",
      titleRo: "A01 – Controlul defectuos al accesului",
      icon: <Lock className="h-6 w-6" />,
      description:
        "Restricțiile privind acțiunile utilizatorilor autentificați nu sunt aplicate corespunzător. Atacatorii pot exploata aceste defecte pentru a accesa neautorizat funcționalități și/sau date.",
      link: "/owasp/a01#top",
    },
    {
      id: "a02",
      title: "A02:2021 – Cryptographic Failures",
      titleRo: "A02 – Eșecuri criptografice",
      icon: <KeyRound className="h-6 w-6" />,
      description:
        "Eșecuri legate de criptografie care duc la expunerea datelor sensibile. Aceste vulnerabilități apar când datele sensibile nu sunt protejate adecvat.",
      link: "/owasp/a02#top",
    },
    {
      id: "a03",
      title: "A03:2021 – Injection",
      titleRo: "A03 – Injectare",
      icon: <Code className="h-6 w-6" />,
      description:
        "Datele ostile sunt trimise către un interpretor ca parte a unei comenzi sau interogări. Atacatorul poate executa comenzi neintenționate sau accesa date fără autorizație.",
      link: "/owasp/a03#top",
    },
    {
      id: "a04",
      title: "A04:2021 – Insecure Design",
      titleRo: "A04 – Proiectare nesecurizată",
      icon: <Lightbulb className="h-6 w-6" />,
      description:
        "O nouă categorie care se concentrează pe riscurile legate de defecte de design/proiectare. Securitatea adecvată la nivel de proiectare poate reduce semnificativ severitatea multor vulnerabilități.",
      link: "/owasp/a04#top",
    },
    {
      id: "a05",
      title: "A05:2021 – Security Misconfiguration",
      titleRo: "A05 – Configurare inadecvată a securității",
      icon: <Settings className="h-6 w-6" />,
      description:
        "Configurări implicite nesigure, configurări incomplete, stocarea în cloud deschisă, mesaje de eroare care conțin informații sensibile și lipsa patch-urilor de securitate.",
      link: "/owasp/a05#top",
    },
    {
      id: "a06",
      title: "A06:2021 – Vulnerable and Outdated Components",
      titleRo: "A06 – Componente vulnerabile și învechite",
      icon: <AlertTriangle className="h-6 w-6" />,
      description:
        "Utilizarea de componente care nu sunt menținute sau sunt depășite. Acest lucru include sistemul de operare, serverul web/aplicație, baza de date, bibliotecile și framework-urile.",
      link: "/owasp/a06#top",
    },
    {
      id: "a07",
      title: "A07:2021 – Identification and Authentication Failures",
      titleRo: "A07 – Eșecuri de identificare și autentificare",
      icon: <UserX className="h-6 w-6" />,
      description:
        "Confirmarea incorectă a identității utilizatorului, permițând atacatorilor să compromită parole, chei sau token-uri de sesiune, sau să exploateze alte defecte de implementare.",
      link: "/owasp/a07#top",
    },
    {
      id: "a08",
      title: "A08:2021 – Software and Data Integrity Failures",
      titleRo: "A08 – Eșecuri de integritate a software-ului și datelor",
      icon: <FileWarning className="h-6 w-6" />,
      description:
        "Aplicațiile și infrastructura care nu protejează împotriva încălcărilor integrității. Aceasta include actualizări nesemnate și injecții de cod pe partea clientului.",
      link: "/owasp/a08#top",
    },
    {
      id: "a09",
      title: "A09:2021 – Security Logging and Monitoring Failures",
      titleRo: "A09 – Eșecuri de jurnalizare și monitorizare a securității",
      icon: <Search className="h-6 w-6" />,
      description:
        "Jurnalizarea și monitorizarea insuficiente, împreună cu integrarea lipsă sau ineficientă cu răspunsul la incidente, permit atacatorilor să atace sistemele.",
      link: "/owasp/a09#top",
    },
    {
      id: "a10",
      title: "A10:2021 – Server-Side Request Forgery",
      titleRo: "A10 – Falsificarea cererilor pe partea serverului",
      icon: <Zap className="h-6 w-6" />,
      description:
        "Apare când o aplicație web preia o resursă de la distanță fără a valida URL-ul furnizat de utilizator. Permite atacatorilor să forțeze aplicația să trimită cereri la un domeniu neașteptat.",
      link: "/owasp/a10#top",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mx-auto">
        <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">OWASP Top Ten 2021</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Open Web Application Security Project (OWASP)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-3 md:py-6 lg:py-8">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
