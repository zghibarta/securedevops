import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A05Page() {
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
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">A05:2021 – Configurare inadecvată a securității</h1>
                <p className="text-muted-foreground">Security Misconfiguration</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Configurarea inadecvată de securitate apare atunci când sistemele, framework-urile, aplicațiile sau
                  infrastructura nu sunt configurate corespunzător din punct de vedere al securității. Aceasta include
                  utilizarea configurărilor implicite nesigure, configurări incomplete, stocarea în cloud deschisă,
                  mesaje de eroare care conțin informații sensibile și lipsa patch-urilor de securitate.
                </p>
                <p>
                  Această vulnerabilitate a urcat de pe poziția 6 (în 2017) pe poziția 5 în topul OWASP 2021, fiind
                  prezentă în aproximativ 90% din aplicațiile testate, cu o rată de incidență de peste 4%.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A05.jpg-5uo7BNMal8N2nxSAvHAnnWRF6evr2a.jpeg"
                    alt="Configurare Greșită de Securitate - Diagram showing security misconfiguration with default credentials"
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
                      <h3 className="font-medium">1. Configurări implicite nesigure</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Utilizarea configurărilor implicite pentru aplicații, framework-uri sau servere, care adesea
                          sunt nesigure. De exemplu, un server de aplicații care vine cu conturi implicite și parole
                          cunoscute, sau un server de baze de date configurat să accepte conexiuni de la orice adresă
                          IP.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Servicii sau API-uri inutile activate</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Servere sau aplicații care au activate servicii, porturi, pagini, conturi sau privilegii
                          inutile. De exemplu, un server web care are activate module sau servicii care nu sunt necesare
                          pentru funcționalitatea aplicației, dar care pot fi exploatate de atacatori.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Mesaje de eroare detaliate</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care afișează mesaje de eroare detaliate care pot dezvălui informații sensibile
                          despre configurația sistemului, versiunile software utilizate sau detalii despre baza de date.
                          Aceste informații pot fi folosite de atacatori pentru a planifica atacuri mai precise.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Lipsa patch-urilor de securitate</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Sisteme care nu au aplicate cele mai recente patch-uri de securitate pentru sistemul de
                          operare, framework-uri, biblioteci sau aplicații. Aceasta lasă sistemele vulnerabile la
                          atacuri cunoscute pentru care există deja soluții.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Configurări de securitate inconsistente</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Configurări de securitate diferite între mediile de dezvoltare, testare și producție. Aceasta
                          poate duce la vulnerabilități în producție care nu au fost detectate în mediile de testare din
                          cauza configurațiilor diferite.
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
                        <h3 className="font-medium">Implementați un proces de hardening</h3>
                        <p className="text-sm text-muted-foreground">
                          Dezvoltați și mențineți un proces de hardening pentru toate componentele sistemului, inclusiv
                          servere, aplicații, framework-uri și containere. Acest proces ar trebui să includă eliminarea
                          sau dezactivarea funcționalităților inutile.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Automatizați verificarea configurațiilor</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați procese automatizate pentru a verifica și valida configurațiile de securitate în
                          toate mediile. Utilizați instrumente de scanare pentru a identifica configurări greșite și
                          vulnerabilități.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați principiul privilegiului minim</h3>
                        <p className="text-sm text-muted-foreground">
                          Configurați sistemele astfel încât să ofere doar funcționalitățile și privilegiile minime
                          necesare pentru a-și îndeplini scopul. Dezactivați sau eliminați funcționalitățile,
                          serviciile, paginile, conturile și privilegiile inutile.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați un proces de gestionare a patch-urilor</h3>
                        <p className="text-sm text-muted-foreground">
                          Dezvoltați și mențineți un proces eficient de gestionare a patch-urilor pentru toate
                          componentele sistemului. Acest proces ar trebui să includă monitorizarea alertelor de
                          securitate și aplicarea promptă a patch-urilor.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Gestionați mesajele de eroare</h3>
                        <p className="text-sm text-muted-foreground">
                          Configurați aplicațiile pentru a afișa mesaje de eroare generice care nu dezvăluie informații
                          sensibile despre sistem. Implementați jurnalizarea detaliată a erorilor pentru depanare, dar
                          asigurați-vă că aceste jurnale nu sunt accesibile publicului.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați configurații consistente</h3>
                        <p className="text-sm text-muted-foreground">
                          Asigurați-vă că toate mediile (dezvoltare, testare, producție) utilizează configurații de
                          securitate consistente. Utilizați instrumente de gestionare a configurației pentru a menține
                          această consistență.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu utilizați configurări implicite. Nu lăsați servicii, porturi sau funcționalități inutile
                          activate. Nu expuneți informații sensibile în mesajele de eroare. Nu amânați aplicarea
                          patch-urilor de securitate.
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
                      <h3 className="font-medium">Infrastructure as Code (IaC)</h3>
                      <p className="text-sm">Utilizați Infrastructure as Code pentru a gestiona configurațiile:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Definiți configurațiile de securitate ca cod (Terraform, CloudFormation, Ansible)</li>
                        <li>Versiunile configurațiilor pentru a permite auditarea și rollback</li>
                        <li>Automatizați implementarea configurațiilor în toate mediile</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Scanare Automată</h3>
                      <p className="text-sm">Implementați scanări automate pentru configurări greșite:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Integrați scanere de configurare în pipeline-urile CI/CD</li>
                        <li>Utilizați instrumente precum AWS Config, Azure Policy sau instrumente open-source</li>
                        <li>
                          Configurați gate-uri de calitate care blochează deployment-urile cu configurări nesigure
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Gestionarea Patch-urilor</h3>
                      <p className="text-sm">Automatizați gestionarea patch-urilor de securitate:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Implementați scanări automate pentru vulnerabilități cunoscute</li>
                        <li>Utilizați instrumente de gestionare a dependențelor pentru a actualiza bibliotecile</li>
                        <li>Automatizați procesul de testare și deployment pentru patch-uri de securitate</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Imagini de Bază Securizate</h3>
                      <p className="text-sm">Utilizați imagini de bază securizate pentru deployment:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Creați imagini de bază hardened pentru servere, containere și mașini virtuale</li>
                        <li>Scanați imaginile pentru vulnerabilități și configurări greșite</li>
                        <li>Actualizați regulat imaginile de bază cu patch-uri de securitate</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați "Configuration as Code" și "Policy as Code" pentru a defini și aplica politici de
                          securitate în mod automat. Utilizați instrumente precum OPA (Open Policy Agent) pentru a
                          valida configurațiile înainte de deployment și pentru a asigura conformitatea continuă în
                          mediile de producție.
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

