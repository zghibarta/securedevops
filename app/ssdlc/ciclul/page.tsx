import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RefreshCcw, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export default function CiclulPage() {
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
      
      <main className="flex-1 flex justify-center">
        <div className="container max-w-4xl px-4 py-6 md:px-6 md:py-12">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/ssdlc">
              <Button variant="outline" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Înapoi la SSDLC
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-primary/10 p-3">
                <RefreshCcw className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">Securitate în ciclul de dezvoltare</h1>
                <p className="text-muted-foreground">Security in Development Lifecycle</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă securitatea în ciclul de dezvoltare?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Ciclul de Viață pentru dezvoltarea securizată a software-ului (SSDLC) este o metodologie care integrează
                  securitatea în fiecare etapă a procesului de dezvoltare software.
                </p>
                <p>
                  Un SSDLC eficient ajută organizațiile să producă software mai sigur, să reducă costurile asociate cu
                  remedierea vulnerabilităților și să îmbunătățească conformitatea cu reglementările și standardele de
                  securitate.
                </p>
              </CardContent>
            </Card>

            <Tabs defaultValue="faze">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="faze">Etapele SSDLC</TabsTrigger>
                <TabsTrigger value="practici">Practici Recomandate</TabsTrigger>
                <TabsTrigger value="modele">Modele SSDLC</TabsTrigger>
              </TabsList>

              <TabsContent value="faze" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Etapele Secure Software Development Lifecycle</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">1. Planificare și cerințe</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          În această etapă, se definesc cerințele de securitate și se efectuează o analiză inițială a
                          riscurilor. Activitățile includ:
                        </p>
                        <ul className="list-disc pl-6 text-sm mt-2">
                          <li>Definirea cerințelor de securitate</li>
                          <li>Modelarea amenințărilor</li>
                          <li>Stabilirea criteriilor de acceptare a securității</li>
                          <li>Analiza riscurilor de securitate</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">2. Design securizat</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          În etapa de design, se creează o arhitectură care implementează controalele de securitate
                          necesare. Activitățile includ:
                        </p>
                        <ul className="list-disc pl-6 text-sm mt-2">
                          <li>Revizuirea arhitecturii de securitate</li>
                          <li>Definirea controalelor de securitate</li>
                          <li>Crearea modelelor de design securizat</li>
                          <li>Revizuirea design-ului de securitate</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">3. Implementare securizată</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          În etapa de implementare, se scrie cod securizat și se efectuează verificări de securitate pe
                          măsură ce codul este dezvoltat. Activitățile includ:
                        </p>
                        <ul className="list-disc pl-6 text-sm mt-2">
                          <li>Utilizarea practicilor de codare securizată</li>
                          <li>Revizuirea codului din perspectiva securității</li>
                          <li>Analize statice de cod (SAST)</li>
                          <li>Verificarea dependențelor pentru vulnerabilități</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">4. Verificare și testare</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          În etapa de verificare, se efectuează teste de securitate pentru a identifica
                          vulnerabilitățile. Activitățile includ:
                        </p>
                        <ul className="list-disc pl-6 text-sm mt-2">
                          <li>Teste de securitate dinamice (DAST)</li>
                          <li>Teste de penetrare</li>
                          <li>Fuzzing și teste de robustețe</li>
                          <li>Verificarea implementării controalelor de securitate</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">5. Deployment securizat</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          În etapa de deployment, se asigură că aplicația este implementată într-un mediu securizat.
                          Activitățile includ:
                        </p>
                        <ul className="list-disc pl-6 text-sm mt-2">
                          <li>Hardening-ul infrastructurii</li>
                          <li>Configurarea securizată a aplicației</li>
                          <li>Gestionarea secretelor și a credențialelor</li>
                          <li>Verificări finale de securitate înainte de lansare</li>
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">6. Operare și mentenanță</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          În etapa de operare, se monitorizează și se menține securitatea aplicației în producție.
                          Activitățile includ:
                        </p>
                        <ul className="list-disc pl-6 text-sm mt-2">
                          <li>Monitorizarea de securitate</li>
                          <li>Gestionarea incidentelor de securitate</li>
                          <li>Aplicarea patch-urilor și actualizărilor de securitate</li>
                          <li>Teste periodice de securitate</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="practici" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Practici recomandate pentru SSDLC</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Shift-Left Security</h3>
                        <p className="text-sm text-muted-foreground">
                          Integrați activitățile de securitate cât mai devreme în ciclul de dezvoltare. Cu cât
                          vulnerabilitățile sunt identificate mai devreme, cu atât costul de remediere este mai mic.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Automatizare</h3>
                        <p className="text-sm text-muted-foreground">
                          Automatizați cât mai multe activități de securitate posibil, inclusiv scanări de cod, teste de
                          securitate și verificări de configurație. Acest lucru asigură consistența și reduce efortul
                          manual.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Educație și conștientizare</h3>
                        <p className="text-sm text-muted-foreground">
                          Instruiți dezvoltatorii și alte părți interesate cu privire la principiile și practicile de
                          securitate. Creați o cultură a securității în cadrul organizației.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Modelarea amenințărilor</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați modelarea amenințărilor pentru a identifica potențiale riscuri de securitate și
                          pentru a prioritiza controalele de securitate. Aceasta ajută la concentrarea eforturilor pe
                          cele mai importante riscuri.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Defense in depth</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați multiple straturi de controale de securitate pentru a proteja aplicația. Acest
                          lucru asigură că, dacă un control eșuează, altele sunt în loc pentru a preveni compromiterea.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Măsurare și îmbunătățire continuă</h3>
                        <p className="text-sm text-muted-foreground">
                          Definiți metrici de securitate și monitorizați-le pentru a măsura eficacitatea SSDLC.
                          Utilizați aceste informații pentru a îmbunătăți continuu procesul.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu tratați securitatea ca o activitate separată sau de final. Nu vă bazați exclusiv pe testele
                          de penetrare pentru a identifica vulnerabilitățile. Nu ignorați securitatea în favoarea
                          vitezei de dezvoltare.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="modele" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Modele de SSDLC</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Microsoft SDL (Security Development Lifecycle)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Dezvoltat de Microsoft, SDL este unul dintre primele și cele mai influente modele SSDLC.
                          Acesta include practici de securitate pentru fiecare etapă a ciclului de dezvoltare, de la
                          instruire până la răspunsul la incidente.
                        </p>
                        <p className="text-sm mt-2">
                          Caracteristici cheie: Instruire, cerințe de securitate, modelarea amenințărilor, revizuirea
                          design-ului, practici de codare securizată, testare, verificare finală, răspuns la incidente.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">OWASP SAMM (Software Assurance Maturity Model)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          SAMM este un cadru deschis pentru a ajuta organizațiile să formuleze și să implementeze o
                          strategie de securitate software adaptată riscurilor specifice cu care se confruntă.
                        </p>
                        <p className="text-sm mt-2">
                          Caracteristici cheie: Evaluarea maturității, îmbunătățire iterativă, practici de guvernanță,
                          construcție, verificare și operare, nivele de maturitate pentru fiecare practică.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">NIST SSDF (Secure Software Development Framework)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Dezvoltat de National Institute of Standards and Technology, SSDF oferă un set de practici
                          fundamentale de securitate software care pot fi integrate în orice model de dezvoltare
                          software.
                        </p>
                        <p className="text-sm mt-2">
                          Caracteristici cheie: Pregătire organizațională, protejarea software-ului, producerea de
                          software securizat, răspuns la vulnerabilități.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">DevSecOps</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          DevSecOps integrează securitatea în practicile DevOps, asigurând că securitatea este o
                          responsabilitate partajată și este integrată în întregul ciclu de dezvoltare și operare.
                        </p>
                        <p className="text-sm mt-2">
                          Caracteristici cheie: Automatizare, colaborare între echipe, feedback rapid, securitate ca
                          cod, monitorizare continuă, îmbunătățire continuă.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru alegerea modelului</h3>
                        <p className="text-sm text-amber-700">
                          Nu există un model "one-size-fits-all" pentru SSDLC. Alegeți un model care se potrivește cel
                          mai bine cu cultura organizației, procesele existente și obiectivele de securitate. Adesea, o
                          abordare hibridă care combină elemente din mai multe modele poate fi cea mai eficientă.
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
