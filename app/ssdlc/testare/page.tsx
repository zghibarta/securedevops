import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestTube, ArrowLeft, Shield, CheckCircle, AlertTriangle, Lock } from "lucide-react"

export default function TestarePage() {
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
               <Lock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">Testare de Securitate</h1>
                {/* <p className="text-muted-foreground">Security Testing</p> */}
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă testarea de securitate în SSDLC?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Testarea de securitate este un proces esențial în cadrul Secure Software Development Lifecycle (SSDLC)
                  care implică evaluarea sistematică a aplicațiilor pentru a identifica vulnerabilități, slăbiciuni și
                  riscuri de securitate. Scopul principal este de a descoperi și remedia problemele de securitate
                  înainte ca acestea să ajungă în producție.
                </p>
                <p>
                  Testarea de securitate eficientă combină multiple abordări și tehnici, fiind integrată în toate etapele
                  ciclului de dezvoltare, nu doar la final. Aceasta ajută la reducerea costurilor de remediere și la
                  îmbunătățirea securității generale a aplicației.
                </p>
              </CardContent>
            </Card>

            <Tabs defaultValue="tipuri">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tipuri">Tipuri de testare</TabsTrigger>
                <TabsTrigger value="integrare">Integrare în SSDLC</TabsTrigger>
                <TabsTrigger value="instrumente">Instrumente</TabsTrigger>
              </TabsList>

              <TabsContent value="tipuri" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Tipuri de testare de securitate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">1. Static Application Security Testing (SAST)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Analizează codul sursă fără a executa aplicația, pentru a identifica vulnerabilități precum
                          injecții SQL, XSS, probleme de gestionare a memoriei și alte defecte de securitate. SAST poate
                          fi integrat direct în IDE-uri și în pipeline-urile CI/CD.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">2. Dynamic Application Security Testing (DAST)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Testează aplicația în timp ce aceasta rulează, simulând atacuri reale pentru a identifica
                          vulnerabilități precum injecții, probleme de autentificare, configurări greșite și alte
                          probleme care pot fi exploatate în timpul execuției.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">3. Interactive Application Security Testing (IAST)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Combină SAST și DAST, analizând codul în timp ce aplicația rulează. Instrumentele IAST sunt
                          integrate în aplicație și monitorizează comportamentul acesteia în timpul testelor, oferind
                          informații detaliate despre vulnerabilități.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">4. Penetration testing (Pen Testing)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Simulează atacuri reale efectuate de experți în securitate pentru a identifica și exploata
                          vulnerabilități. Testele de penetrare pot fi black-box (fără cunoașterea sistemului),
                          white-box (cu acces complet la informații) sau gray-box (cu acces parțial).
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">5. Software Composition Analysis (SCA)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Analizează dependențele și componentele terțe utilizate în aplicație pentru a identifica
                          vulnerabilități cunoscute, probleme de licențiere și componente învechite care pot prezenta
                          riscuri de securitate.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="integrare" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Integrarea testării de securitate în SSDLC</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Etapa de planificare și cerințe</h3>
                        <p className="text-sm text-muted-foreground">
                          Definiți cerințele de securitate și criteriile de acceptare. Efectuați modelarea amenințărilor
                          pentru a identifica potențiale riscuri și pentru a prioritiza eforturile de testare.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Etapa de design</h3>
                        <p className="text-sm text-muted-foreground">
                          Efectuați revizuiri de securitate a arhitecturii și design-ului. Identificați și planificați
                          controalele de securitate necesare. Creați planuri de testare de securitate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Etapa de dezvoltare</h3>
                        <p className="text-sm text-muted-foreground">
                          Integrați SAST și SCA în mediile de dezvoltare și în pipeline-urile CI/CD. Efectuați revizuiri
                          de cod cu focus pe securitate. Implementați teste unitare de securitate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Etapa de testare</h3>
                        <p className="text-sm text-muted-foreground">
                          Efectuați teste DAST și IAST pe medii de testare. Implementați teste de securitate
                          funcționale. Efectuați teste de penetrare pe versiuni pre-release ale aplicației.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Etapa de deployment</h3>
                        <p className="text-sm text-muted-foreground">
                          Efectuați scanări de securitate finale înainte de deployment. Verificați configurațiile de
                          securitate în mediul de producție. Implementați monitorizare de securitate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Etapa de mentenanță</h3>
                        <p className="text-sm text-muted-foreground">
                          Efectuați teste de securitate periodice. Monitorizați continuu pentru vulnerabilități noi.
                          Implementați procese de gestionare a incidentelor de securitate.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instrumente" className="space-y-4 pt-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Instrumente de testare de securitate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">Instrumente SAST (Static Application Security Testing)</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>SonarQube - analiză de cod pentru multiple limbaje de programare</li>
                        <li>Checkmarx - identifică vulnerabilități în codul sursă</li>
                        <li>Fortify - analiză statică de cod cu suport pentru multiple limbaje</li>
                        <p>Observații: Soluțiile moderne SAST trebuie să fie actualizate constant pentru a detecta noile tipologii de vulnerabilități</p> 
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Instrumente DAST (Dynamic Application Security Testing)</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Nessus - scanează vulnerabilitățile în infrastructură și aplicații</li>
                        <li>OpenVAS - alternativă open-source la Nessus, utilizată pentru scanări de vulnerabilități</li>
                        <li>Burp Suite Professional - pentru testarea aplicațiilor web, oferind un set vast de funcționalități</li>
                        <li>OWASP ZAP - popular și open-source, cu comunitate activă și suport constant</li>
                        <p>Observații: Actualizarea regulată a bazelor de date de vulnerabilități este esențială. Versiunile mai vechi sau neactualizate pot să nu detecteze cele mai recente tehnici de atac</p> 
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-medium">Instrumente IAST (Interactive Application Security Testing)</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Contrast Security - unul dintre liderii pieței în IAST, oferind o integrare puternică în mediile de execuție (monitoriza în timp real)</li>
                        <li>Seeker by Synopsys - o soluție modernă ce combină avantajele SAST și DAST cu monitorizarea interactivă a aplicației</li>
                        <p>Observații: IAST este încă într-o fază de maturizare, iar implementările sunt adesea destinate organizațiilor cu infrastructuri complexe. Pentru echipele mai mici, integrarea poate fi considerată prea specializată sau costisitoare dacă nu este corelată cu fluxuri automatizate de CI/CD</p> 
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Instrumente Penetration Testing (Pen Testing)</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Metasploit Framework - este un standard pentru testele de penetrare, cu o vastă bibliotecă de exploit-uri și module de test</li>
                        <li>Kali Linux - include un set cuprinzător de instrumente (Nmap, Wireshark, etc.) folosite de experți în pen testing</li>
                        <li>Burp Suite (modulul manual de pen testing) - pe lângă DAST, este folosit și pentru evaluări manuale (flexibilitate în simularea atacurilor)</li>
                        <li>Nmap - esențial pentru identificarea serviciilor expuse și a configurărilor incorecte la nivel de rețea</li>
                        <p>Observații: Deoarece pen testing-ul este adesea realizat manual de experți, instrumentele trebuie să fie alese în funcție de specificul mediului și de expertiza echipei</p> 
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Instrumente SCA (Software Composition Analysis)</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>OWASP Dependency-Check - identifică dependențe vulnerabile</li>
                        <li>Snyk - monitorizează și remediază vulnerabilități în dependențe</li>
                        <li>WhiteSource - gestionează securitatea și conformitatea componentelor open-source</li>
                        <li>Black Duck - identifică și gestionează riscurile de securitate în componente</li>
                        <p>Observații: Datorită creșterii rapide a utilizării componentelor open-source, SCA a devenit destul de popular</p> 
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Instrumente online de testare a securității</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>ImmuniWeb Community Edition - furnizează o gamă largă de teste gratuite</li>
                        <li>HostedScan Security - furnizează un scaner online de vulnerabilități pentru aplicații web</li>
                        <li>InternetSecure.org - serviciu gratuit care combină teste pentru anteturi de securitate SSL/TLS, DNSSEC și detectarea WAF</li>
                        <p>Observații: Utilizarea instrumentelor online de testare a securității implică anumite riscuri asociate, precum divulgarea codului sursă, expunerea vulnerabilităților către terți, ș.a.
                        Ori de câte ori este posibil, efectuați testele de securitate folosind instrumente instalate și rulate în mediul intern al organizației. Anonimizați datele sensibile: Înainte de a încărca codul sau datele într-un serviciu online.</p> 
                      </ul>
                    </div>
                    
                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru testare</h3>
                        <p className="text-sm text-amber-700">
                          Nu vă bazați pe un singur tip de testare sau instrument. Combinați multiple abordări și
                          instrumente pentru a obține o acoperire mai bună a potențialelor vulnerabilități. Automatizați
                          cât mai multe teste de securitate posibil și integrați-le în pipeline-urile CI/CD pentru
                          feedback rapid.
                        </p>
                        <p className="text-sm text-amber-700">
                        Instrumentele trebuie alese și adaptate în funcție de mărimea echipei, complexitatea aplicațiilor și bugetul disponibil.
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
