import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, ArrowRight, FileText, Code } from "lucide-react"

export default function EvaluarePage() {
  const quizzes = [
    {
      id: "owasp-quiz",
      title: "Test OWASP Top Ten 2021",
      description: "Testează-ți cunoștințele despre cele mai critice vulnerabilități web conform OWASP.",
      questions: 10,
      time: 15,
      link: "#",
    },
    {
      id: "ssdlc-quiz",
      title: "Test SSDLC",
      description: "Verifică-ți înțelegerea Ciclului de Viață pentru Dezvoltarea Securizată a Software-ului.",
      questions: 10,
      time: 15,
      link: "#",
    },
    {
      id: "devsecops-quiz",
      title: "Test DevSecOps",
      description: "Evaluează-ți cunoștințele despre integrarea securității în DevOps.",
      questions: 10,
      time: 15,
      link: "#",
    },
  ]

  const scenarios = [
    {
      id: "broken-auth",
      title: "Autentificare defectuoasă",
      description: "Identifică și remediază vulnerabilitățile de autentificare într-o aplicație web.",
      difficulty: "Mediu",
      time: 30,
      link: "#",
    },
    {
      id: "sql-injection",
      title: "Injecție SQL",
      description: "Descoperă și corectează vulnerabilitățile de injecție SQL într-o aplicație.",
      difficulty: "Dificil",
      time: 45,
      link: "#",
    },
    {
      id: "xss",
      title: "Cross-Site Scripting (XSS)",
      description: "Identifică și remediază vulnerabilitățile XSS într-o aplicație web.",
      difficulty: "Mediu",
      time: 30,
      link: "#",
    },
    {
      id: "secure-api",
      title: "Securizarea unui API",
      description: "Implementează măsuri de securitate pentru un API RESTful.",
      difficulty: "Dificil",
      time: 60,
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
      <main className="flex-1 mx-auto">
        <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Evaluare cunoștințe</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Testează-ți cunoștințele despre securitatea în DevOps prin teste și scenarii practice.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-6 md:py-12 lg:py-16">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="teste" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
                <TabsTrigger value="teste">Teste</TabsTrigger>
                <TabsTrigger value="scenarii">Scenarii Practice</TabsTrigger>
              </TabsList>

              <TabsContent value="teste" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {quizzes.map((quiz) => (
                    <Card key={quiz.id} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          <CardTitle>{quiz.title}</CardTitle>
                        </div>
                        <CardDescription>{quiz.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Întrebări: {quiz.questions}</span>
                          <span>•</span>
                          <span>Timp estimat: {quiz.time} minute</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href={quiz.link} className="w-full">
                          <Button variant="default" size="sm" className="w-full">
                            Începe Testul
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="scenarii" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {scenarios.map((scenario) => (
                    <Card key={scenario.id} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Code className="h-5 w-5" />
                          <CardTitle>{scenario.title}</CardTitle>
                        </div>
                        <CardDescription>{scenario.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>Dificultate: {scenario.difficulty}</span>
                          <span>•</span>
                          <span>Timp estimat: {scenario.time} minute</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Link href={scenario.link} className="w-full">
                          <Button variant="outline" size="sm" className="w-full">
                            Începe Scenariul
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/*
        <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Certificare în securitate DevOps</h2>
                <p className="text-muted-foreground">
                  Obține o certificare care să ateste cunoștințele tale în domeniul securității în DevOps. Certificarea
                  include teste teoretice și scenarii practice care evaluează capacitatea ta de a identifica și remedia
                  vulnerabilități de securitate.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>
                      <span className="font-medium">Recunoaștere în industrie:</span> Certificare recunoscută de
                      companiile din domeniul IT
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>
                      <span className="font-medium">Evaluare completă:</span> Teste teoretice și scenarii practice
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <p>
                      <span className="font-medium">Actualizare continuă:</span> Conținut actualizat conform celor mai
                      recente standarde de securitate
                    </p>
                  </div>
                </div>
                <div className="pt-4">
                  <Link href="#">
                    <Button>
                      Află mai multe despre certificare
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                  <PenTool className="h-24 w-24 text-slate-400" />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
                    Certificare Profesională
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
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
