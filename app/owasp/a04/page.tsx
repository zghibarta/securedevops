import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A04Page() {
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
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">A04:2021 – Design Nesigur</h1>
                <p className="text-muted-foreground">Insecure Design</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Design-ul nesigur se referă la defecte de securitate la nivel de arhitectură și design, care nu pot fi
                  remediate doar prin implementare corectă. Această categorie se concentrează pe lipsa sau insuficiența
                  controalelor de securitate necesare, precum și pe deciziile de design care introduc vulnerabilități
                  inerente în aplicație.
                </p>
                <p>
                  Această vulnerabilitate este o categorie nouă în topul OWASP 2021, ocupând poziția 4, reflectând
                  importanța crescută acordată securității încă din faza de design a aplicațiilor.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A04.jpg-VaxvY5DULFvW7oZ8msj8y7PAqDO1hd.jpeg"
                    alt="Design Nesigur - Diagram showing insecure design in a booking portal"
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
                      <h3 className="font-medium">1. Lipsa validării la nivel de business</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Un sistem bancar care permite transferuri negative sau un sistem de e-commerce care nu
                          verifică stocul înainte de a accepta comenzi. Aceste probleme apar din cauza lipsei de
                          validare a regulilor de business în design-ul aplicației.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Arhitectură cu privilegii excesive</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care rulează cu drepturi administrative sau care oferă acces la funcționalități
                          sensibile fără o separare clară a privilegiilor. De exemplu, o aplicație care permite tuturor
                          utilizatorilor să acceseze funcții administrative prin simpla modificare a URL-urilor.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Lipsa limitărilor de resurse</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care nu limitează resursele consumate de utilizatori, permițând atacuri de tip
                          denial of service. De exemplu, un sistem care permite încărcarea de fișiere de dimensiuni
                          nelimitate sau care nu restricționează numărul de cereri pe care un utilizator le poate face.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Lipsa compartimentării</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Sisteme care nu separă componentele cu diferite niveluri de sensibilitate sau risc. De
                          exemplu, o aplicație care stochează date sensibile și nesensibile în aceeași bază de date,
                          fără separare adecvată, permițând compromiterea tuturor datelor în cazul unei breșe.
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
                        <h3 className="font-medium">Implementați un ciclu de dezvoltare securizat</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați un SSDLC (Secure Software Development Lifecycle) care include securitatea în toate
                          fazele de dezvoltare, începând cu planificarea și design-ul.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați modelarea amenințărilor</h3>
                        <p className="text-sm text-muted-foreground">
                          Efectuați modelarea amenințărilor în faza de design pentru a identifica și aborda potențialele
                          riscuri de securitate înainte de implementare.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați biblioteci și șabloane securizate</h3>
                        <p className="text-sm text-muted-foreground">
                          Folosiți biblioteci, framework-uri și șabloane de design care au fost testate și validate din
                          punct de vedere al securității.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați principiul privilegiului minim</h3>
                        <p className="text-sm text-muted-foreground">
                          Proiectați sistemele astfel încât componentele și utilizatorii să aibă doar privilegiile
                          minime necesare pentru a-și îndeplini funcțiile.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați compartimentarea</h3>
                        <p className="text-sm text-muted-foreground">
                          Separați componentele sistemului în funcție de sensibilitate și funcționalitate, limitând
                          impactul potențial al unei breșe de securitate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați limitări de resurse</h3>
                        <p className="text-sm text-muted-foreground">
                          Proiectați sisteme cu limitări adecvate pentru resurse (memorie, CPU, spațiu de stocare,
                          lățime de bandă) pentru a preveni atacurile de tip denial of service.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu considerați securitatea ca o caracteristică adăugată ulterior. Nu vă bazați exclusiv pe
                          testele de securitate pentru a identifica probleme de design. Nu ignorați feedback-ul
                          utilizatorilor și rapoartele de securitate.
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
                      <h3 className="font-medium">Securitate în Faza de Planificare</h3>
                      <p className="text-sm">Integrați securitatea în faza de planificare a ciclului DevOps:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Includeți experți în securitate în echipele de planificare și design</li>
                        <li>Efectuați modelarea amenințărilor ca parte a procesului de planificare</li>
                        <li>Definiți cerințe de securitate clare pentru fiecare caracteristică nouă</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Revizuiri de Arhitectură</h3>
                      <p className="text-sm">Implementați revizuiri de arhitectură de securitate:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Efectuați revizuiri de arhitectură de securitate înainte de implementare</li>
                        <li>Utilizați liste de verificare de securitate pentru evaluarea design-ului</li>
                        <li>Documentați deciziile de design legate de securitate</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Automatizare și Testare</h3>
                      <p className="text-sm">Implementați automatizare și testare pentru validarea design-ului:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Creați teste automate pentru a valida implementarea controalelor de securitate</li>
                        <li>Utilizați instrumente de analiză statică pentru a identifica probleme de design</li>
                        <li>Implementați teste de fuzzing pentru a identifica probleme de robustețe</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Feedback și Îmbunătățire Continuă</h3>
                      <p className="text-sm">Implementați mecanisme de feedback și îmbunătățire continuă:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Colectați feedback de la utilizatori și echipe de securitate</li>
                        <li>Analizați incidentele de securitate pentru a identifica probleme de design</li>
                        <li>Actualizați șabloanele și bibliotecile de design în funcție de lecțiile învățate</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați "Security Champions" în echipele DevOps - membri ai echipei cu instruire
                          suplimentară în securitate care pot identifica probleme de design nesigur în fazele incipiente
                          ale dezvoltării și pot servi ca punct de legătură cu echipele de securitate.
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

