import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bug, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export default function VulnerabilitatiPage() {
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
                <Bug className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">Managementul ulnerabilităților</h1>
                {/* <p className="text-muted-foreground">Vulnerability Management</p> */}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă managementul vulnerabilităților?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Managementul vulnerabilităților este un proces sistematic de identificare, evaluare, prioritizare,
                  remediere și monitorizare a vulnerabilităților de securitate în sisteme și software. Acest proces este
                  esențial pentru menținerea unui nivel adecvat de securitate și pentru reducerea riscurilor asociate cu
                  vulnerabilitățile.
                </p>
                <p>
                  Un program eficient de management al vulnerabilităților ajută organizațiile să identifice și să
                  remedieze proactiv vulnerabilitățile înainte ca acestea să fie exploatate de atacatori, reducând
                  astfel suprafața de atac și îmbunătățind postura generală de securitate.
                </p>
              </CardContent>
            </Card>

            <Tabs defaultValue="proces">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="proces">Procesul</TabsTrigger>
                <TabsTrigger value="prioritizare">Prioritizare</TabsTrigger>
                <TabsTrigger value="devops">Integrare în DevOps</TabsTrigger>
              </TabsList>

              <TabsContent value="proces" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Procesul de management al vulnerabilităților</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">1. Descoperire și inventariere</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Identificarea și inventarierea tuturor activelor, inclusiv hardware, software, aplicații,
                          servicii și dependențe. Acest pas este crucial pentru a înțelege suprafața de atac și pentru a
                          asigura acoperirea completă a procesului de management al vulnerabilităților.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">2. Scanare și identificare</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Utilizarea instrumentelor de scanare pentru a identifica vulnerabilitățile în sisteme,
                          aplicații și rețele. Aceasta include scanări de vulnerabilități, analize de cod, teste de
                          penetrare și monitorizarea surselor de informații despre vulnerabilități.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">3. Evaluare și prioritizare</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Evaluarea vulnerabilităților identificate în funcție de severitate, exploatabilitate, impact
                          potențial și relevanță pentru mediul specific. Prioritizarea vulnerabilităților pentru
                          remediere în funcție de riscul asociat.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">4. Remediere</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Implementarea măsurilor de remediere pentru vulnerabilitățile identificate, cum ar fi
                          aplicarea de patch-uri, actualizări, reconfigurări sau implementarea de controale
                          compensatorii. Acest pas include și testarea soluțiilor pentru a asigura eficacitatea.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">5. Verificare</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Verificarea eficacității măsurilor de remediere prin re-scanare sau re-testare pentru a
                          confirma că vulnerabilitățile au fost eliminate sau atenuate corespunzător.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">6. Raportare și monitorizare</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Generarea de rapoarte privind starea vulnerabilităților, progresul remedierii și tendințele.
                          Monitorizarea continuă pentru noi vulnerabilități și actualizarea procesului în consecință.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="prioritizare" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Prioritizarea vulnerabilităților</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați scoruri standardizate</h3>
                        <p className="text-sm text-muted-foreground">
                          Folosiți sisteme standardizate de evaluare precum CVSS (Common Vulnerability Scoring System)
                          pentru a evalua severitatea vulnerabilităților. CVSS oferă un cadru pentru comunicarea
                          caracteristicilor și impactului vulnerabilităților.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Considerați contextul de afaceri</h3>
                        <p className="text-sm text-muted-foreground">
                          Evaluați vulnerabilitățile în contextul specific al organizației, luând în considerare
                          importanța activelor afectate, potențialul impact asupra operațiunilor de afaceri și
                          sensibilitatea datelor implicate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Evaluați exploatabilitatea</h3>
                        <p className="text-sm text-muted-foreground">
                          Acordați prioritate vulnerabilităților care sunt activ exploatate în sălbăticie sau pentru
                          care există exploituri publice disponibile. Acestea reprezintă un risc imediat și ar trebui
                          remediate rapid.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Considerați expunerea externă</h3>
                        <p className="text-sm text-muted-foreground">
                          Vulnerabilitățile în sistemele expuse extern (accesibile din internet) ar trebui să primească
                          o prioritate mai mare decât cele în sistemele interne, deoarece sunt mai ușor de exploatat de
                          atacatori.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați informații despre amenințări</h3>
                        <p className="text-sm text-muted-foreground">
                          Integrați informații despre amenințări (threat intelligence) pentru a înțelege care
                          vulnerabilități sunt vizate de atacatori și care sunt metodele de atac curente.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu vă bazați exclusiv pe scorurile CVSS fără a considera contextul specific. Nu ignorați
                          vulnerabilitățile cu severitate medie sau scăzută, deoarece acestea pot fi combinate pentru a
                          crea atacuri complexe.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="devops" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Integrare în DevOps</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Automatizare</h3>
                      <p className="text-sm">Integrați managementul vulnerabilităților în pipeline-urile CI/CD:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Automatizați scanările de vulnerabilități în fiecare etapă a pipeline-ului</li>
                        <li>Configurați gate-uri de calitate care blochează build-urile cu vulnerabilități critice</li>
                        <li>Implementați scanări automate pentru dependențe și componente terțe</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Feedback rapid</h3>
                      <p className="text-sm">Implementați mecanisme de feedback rapid pentru dezvoltatori:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Integrați rezultatele scanărilor direct în IDE-urile dezvoltatorilor</li>
                        <li>Creați automat issue-uri în sistemele de tracking pentru vulnerabilitățile identificate</li>
                        <li>Furnizați ghiduri de remediere clare și exemple de cod sigur</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Monitorizare continuă</h3>
                      <p className="text-sm">Implementați monitorizare continuă pentru vulnerabilități:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Monitorizați bazele de date de vulnerabilități (CVE, NVD) pentru noi amenințări</li>
                        <li>Implementați scanări automate periodice în mediile de producție</li>
                        <li>Utilizați instrumente de monitorizare a runtime-ului pentru detectarea anomaliilor</li>
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Colaborare între echipe</h3>
                      <p className="text-sm">
                        Promovați colaborarea între echipele de dezvoltare, operațiuni și securitate:
                      </p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Organizați sesiuni de analiză a vulnerabilităților cu toate părțile interesate</li>
                        <li>Definiți procese clare pentru escaladarea și remedierea vulnerabilităților</li>
                        <li>Implementați metrici comune pentru a măsura eficiența managementului vulnerabilităților</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați o abordare "shift-left" pentru managementul vulnerabilităților, integrând
                          scanările și verificările de securitate cât mai devreme în ciclul de dezvoltare. Acest lucru
                          reduce costurile de remediere și minimizează impactul asupra planificării proiectelor.
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
