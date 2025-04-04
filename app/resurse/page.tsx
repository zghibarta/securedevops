import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, BookOpen, FileText, Link2, Download, ExternalLink } from "lucide-react"

export default function ResursePage() {
  const guides = [
    {
      id: "secure-coding",
      title: "Ghid de codare securizată",
      description: "Cele mai bune practici pentru scrierea de cod securizat în diferite limbaje de programare.",
      category: "ghid",
      link: "#",
    },
    {
      id: "devsecops-implementation",
      title: "Implementarea DevSecOps",
      description: "Ghid pas cu pas pentru implementarea DevSecOps în organizația ta.",
      category: "ghid",
      link: "#",
    },
    {
      id: "secure-api",
      title: "Securizarea API-urilor",
      description: "Cum să proiectezi și să implementezi API-uri securizate.",
      category: "ghid",
      link: "#",
    },
    {
      id: "container-security",
      title: "Securitatea containerelor",
      description: "Cele mai bune practici pentru securizarea containerelor Docker și Kubernetes.",
      category: "ghid",
      link: "#",
    },
  ]

  const tools = [
    {
      id: "owasp-zap",
      title: "OWASP ZAP",
      description: "Instrument open-source pentru testarea automată a securității aplicațiilor web.",
      category: "testare",
      link: "https://www.zaproxy.org/",
    },
    {
      id: "sonarqube",
      title: "SonarQube",
      description: "Platformă pentru analiza continuă a calității codului și identificarea vulnerabilităților.",
      category: "analiza-cod",
      link: "https://www.sonarqube.org/",
    },
    {
      id: "dependency-check",
      title: "OWASP Dependency-Check",
      description: "Instrument pentru identificarea dependențelor vulnerabile în proiectele software.",
      category: "analiza-dependente",
      link: "https://owasp.org/www-project-dependency-check/",
    },
    {
      id: "docker-bench",
      title: "Docker Bench for Security",
      description: "Script pentru verificarea configurațiilor de securitate ale containerelor Docker.",
      category: "containere",
      link: "https://github.com/docker/docker-bench-security",
    },
    {
      id: "trivy",
      title: "Trivy",
      description: "Scanner pentru vulnerabilități în imagini de containere și fișiere de configurare.",
      category: "containere",
      link: "https://github.com/aquasecurity/trivy",
    },
  ]

  const documents = [
    {
      id: "owasp-cheatsheets",
      title: "OWASP Cheat Sheets",
      description: "Colecție de cheat sheets pentru diferite aspecte ale securității aplicațiilor.",
      format: "PDF/HTML",
      link: "https://cheatsheetseries.owasp.org/",
    },
    {
      id: "secure-coding-standards",
      title: "Standarde de codare securizată",
      description: "Standarde și bune practici pentru dezvoltarea securizată de software.",
      format: "PDF",
      link: "#",
    },
    {
      id: "threat-modeling",
      title: "Ghid de modelare a amenințărilor",
      description: "Cum să identifici și să evaluezi amenințările de securitate pentru aplicațiile tale.",
      format: "PDF",
      link: "#",
    },
    {
      id: "security-requirements",
      title: "Cerințe de securitate pentru DevOps",
      description: "Lista de cerințe de securitate esențiale pentru proiectele DevOps.",
      format: "PDF",
      link: "#",
    },
  ]

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
      <main className="flex-1">
        <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Bibliotecă de resurse</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ghiduri de implementare, instrumente și resurse suplimentare pentru securitatea în DevOps.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="ghiduri" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
                <TabsTrigger value="ghiduri">Ghiduri</TabsTrigger>
                <TabsTrigger value="instrumente">Instrumente</TabsTrigger>
                <TabsTrigger value="documente">Documente</TabsTrigger>
              </TabsList>

              <TabsContent value="ghiduri" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {guides.map((guide) => (
                    <Card key={guide.id} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          <CardTitle>{guide.title}</CardTitle>
                        </div>
                        <CardDescription>{guide.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Categorie: {guide.category}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href={guide.link} className="w-full">
                          <Button variant="outline" size="sm" className="w-full">
                            Citește ghidul
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="instrumente" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {tools.map((tool) => (
                    <Card key={tool.id} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Link2 className="h-5 w-5" />
                          <CardTitle>{tool.title}</CardTitle>
                        </div>
                        <CardDescription>{tool.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Categorie: {tool.category}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <a href={tool.link} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button variant="outline" size="sm" className="w-full">
                            Accesează instrumentul
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="documente" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {documents.map((document) => (
                    <Card key={document.id} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          <CardTitle>{document.title}</CardTitle>
                        </div>
                        <CardDescription>{document.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Format: {document.format}</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <a href={document.link} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button variant="outline" size="sm" className="w-full">
                            Descarcă documentul
                            <Download className="ml-2 h-4 w-4" />
                          </Button>
                        </a>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Resurse externe recomandate</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Linkuri către resurse externe valoroase pentru aprofundarea cunoștințelor despre securitatea în
                  DevOps.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
                <a href="https://owasp.org/" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:bg-background">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:underline">OWASP</h3>
                    <p className="text-center text-muted-foreground">
                      Open Web Application Security Project - organizație dedicată îmbunătățirii securității software.
                    </p>
                  </div>
                </a>
                <a href="https://www.sans.org/" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:bg-background">
                    <div className="rounded-full bg-primary/10 p-4">
                      <BookOpen className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:underline">SANS Institute</h3>
                    <p className="text-center text-muted-foreground">
                      Resurse și cursuri de securitate informatică de la una dintre cele mai respectate organizații din
                      domeniu.
                    </p>
                  </div>
                </a>
                <a href="https://www.devsecops.org/" target="_blank" rel="noopener noreferrer" className="group">
                  <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:bg-background">
                    <div className="rounded-full bg-primary/10 p-4">
                      <Link2 className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:underline">DevSecOps.org</h3>
                    <p className="text-center text-muted-foreground">
                      Comunitate dedicată integrării securității în DevOps, cu resurse și evenimente.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <a href="mailto:Cybersec@egov.md" className="hover:underline">
              Cybersec@egov.md
            </a>
            . Toate drepturile rezervate.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Termeni și Condiții
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline underline-offset-4">
              Politica de Confidențialitate
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

