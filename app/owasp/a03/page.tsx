import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A03Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-center px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <Link href="/" className="text-lg font-bold">
              SecureDevOps
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 mx-auto">
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
      <main className="flex-1 flex justify-center">
        <div className="container max-w-4xl px-4 py-6 md:px-6 md:py-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/owasp">
              <Button variant="outline" size="sm" id="top">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Înapoi la OWASP Top Ten
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">A03:2021 – Injecție</h1>
                <p className="text-muted-foreground">Injection</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Vulnerabilitățile de injecție apar atunci când datele furnizate de utilizator nu sunt validate,
                  filtrate sau sanitizate corespunzător. Atacatorii pot trimite date ostile care fac parte din comenzi
                  sau interogări, înșelând interpretorul să execute comenzi neintenționate sau să acceseze date fără
                  autorizație.
                </p>
                <p>
                  Această vulnerabilitate a coborât de pe prima poziție (în 2017) pe poziția 3 în topul OWASP 2021,
                  fiind prezentă în aproximativ 19% din aplicațiile testate, cu o rată de incidență de peste 3%.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A03.jpg-HeJlHFGSBpmq1oGZz4U4CkiG7g8gRr.jpeg"
                    alt="Injecție - Diagram showing SQL injection attack flow"
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="exemple">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="exemple">Exemple</TabsTrigger>
                <TabsTrigger value="prevenire">Prevenire</TabsTrigger>
                <TabsTrigger value="devops">Integrare în DevOps</TabsTrigger>
              </TabsList>

              <TabsContent value="exemple" className="space-y-2 pt-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Exemple de Vulnerabilități</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <h3 className="font-medium">1. SQL Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Injectarea de cod SQL malițios în interogări pentru a manipula baza de date. De exemplu,
                          introducerea <code>{"' OR 1=1 --"}</code> într-un câmp de autentificare poate permite accesul
                          neautorizat.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. NoSQL Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Similar cu SQL Injection, dar vizează baze de date NoSQL. De exemplu, utilizarea unui obiect
                          JSON malițios pentru a manipula interogări MongoDB.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Command Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Injectarea de comenzi de sistem operativ în aplicații care execută comenzi shell. De exemplu,
                          adăugarea <code>{"; rm -rf /"}</code> la un parametru care este pasat direct către o comandă
                          de sistem.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. LDAP Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Manipularea interogărilor LDAP pentru a obține acces neautorizat la directoare. De exemplu,
                          utilizarea caracterelor speciale pentru a modifica filtrele LDAP.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="prevenire" className="space-y-2 pt-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Metode de Prevenire</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați interogări parametrizate</h3>
                        <p className="text-sm text-muted-foreground">
                          Folosiți interogări parametrizate (prepared statements) cu parametri legați pentru SQL și
                          NoSQL, evitând concatenarea directă a datelor în interogări.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Validați datele de intrare</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați validarea strictă a datelor de intrare pe server, folosind liste albe (permiterea
                          doar a valorilor cunoscute ca fiind sigure) în loc de liste negre.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați ORM-uri și biblioteci sigure</h3>
                        <p className="text-sm text-muted-foreground">
                          Folosiți ORM-uri (Object-Relational Mapping) și biblioteci care oferă protecție împotriva
                          injecțiilor prin design.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Escape-uiți datele de ieșire</h3>
                        <p className="text-sm text-muted-foreground">
                          Escape-uiți datele înainte de a le include în comenzi, interogări sau în HTML, în funcție de
                          contextul în care sunt utilizate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Limitați privilegiile</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați conturi cu privilegii minime necesare pentru conexiunile la baze de date și alte
                          sisteme externe.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu construiți interogări dinamice prin concatenare de șiruri. Nu vă bazați doar pe validarea
                          pe partea de client. Nu folosiți funcții de execuție de comenzi de sistem cu date furnizate de
                          utilizator.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="devops" className="space-y-2 pt-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Integrare în DevOps</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <h3 className="font-medium">Testare Automată de Securitate</h3>
                      <p className="text-sm">Integrați teste de securitate în pipeline-ul CI/CD:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați scanere SAST pentru a identifica vulnerabilități de injecție în cod</li>
                        <li>Implementați teste DAST pentru a simula atacuri de injecție pe aplicația în execuție</li>
                        <li>Includeți teste de fuzzing pentru a identifica vulnerabilități de injecție neașteptate</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Revizuire de Cod</h3>
                      <p className="text-sm">Implementați procese de revizuire de cod cu focus pe securitate:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați liste de verificare specifice pentru vulnerabilități de injecție</li>
                        <li>Instruiți dezvoltatorii să identifice și să prevină vulnerabilitățile de injecție</li>
                        <li>Implementați revizuiri de securitate automatizate în procesul de pull request</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Monitorizare și Detectare</h3>
                      <p className="text-sm">Implementați monitorizare pentru a detecta încercări de injecție:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Configurați Web Application Firewalls (WAF) pentru a bloca atacuri comune</li>
                        <li>Monitorizați jurnalele de aplicație pentru modele suspecte de interogări</li>
                        <li>Implementați sisteme de detectare a intruziunilor (IDS) pentru a identifica atacuri</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați un proces de "shift-left security" pentru vulnerabilitățile de injecție. Creați
                          biblioteci și componente reutilizabile, pre-verificate din punct de vedere al securității,
                          pentru interacțiunea cu bazele de date și sistemele externe.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
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

