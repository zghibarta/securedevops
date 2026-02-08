import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, ArrowLeft, Shield, CheckCircle, XCircle } from "lucide-react"

export default function A10Page() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 flex justify-center">
        <div className="container max-w-4xl px-2 py-6 md:px-3 md:py-12">
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
                <AlertTriangle className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tighter">
                  A10:2025 – Gestionarea Defectuoasă a Condițiilor Excepționale
                </h1>
                <p className="text-muted-foreground">Mishandling of Exceptional Conditions</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Gestionarea defectuoasă a condițiilor excepționale se referă la erorile de manipulare a situațiilor neașteptate și condiții logice în cod. Include manipularea inadecvată a erorilor, condiții care cad într-un mod nesigur și tratarea incorectă a cazurilor extreme.
                </p>
                <p>
                  <strong>A10:2025 este o categorie nouă în OWASP 2025</strong>, care conține 24 CWE-uri axate pe gesionarea incorectă a erorilor, erorile logice, fail-open scenarios și alte scenarii conexe care rezultă din condiții anormale pe care sistemele le pot întâmpina.
                </p>
              </CardContent>
            </Card>

            <Tabs defaultValue="exemple">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="exemple">Exemple</TabsTrigger>
                <TabsTrigger value="prevenire">Prevenire</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
              </TabsList>

              <TabsContent value="exemple" className="space-y-2 pt-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Exemple de Vulnerabilități</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <h3 className="font-medium">1. Mesaje de Eroare care Expun Informații Sensibile</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          O eroare de bază de date expune stack trace-ul și detalii despre structura bazei de date, ajutând un atacator să identifice vectorii de atac.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Eșec Deschis (Fail-Open)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Când o verificare de securitate eșuează (ex: autentificare), sistemul permite accesul în loc să refuze și să înregistreze tentativa.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Erori Logice în Fluxul de Aplicație</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Logica condiționilor nu este corect implementată, permițând bypass-ul fluxuri importante. De ex., o comandă care ar trebui executată la end rămâne incompletă.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Tratament Incorect al Stării Nule</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Codul nu verifică dacă un obiect este null înainte de a-l accesa, ceea ce duce la excepții nehandlate sau comportament nedefinit.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Resource Leaks (Memory, Database Connections)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Conexiuni la baze de date sau fișiere deschise nu sunt inchise corect în caz de excepție. Un loop care nu eliberează resurse duce la memory leak și eventual DoS.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">6. Integer Overflow / Buffer Overflow</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">int size = user_input;  // Nu se verifică dacă size &gt; MAX_INT</p>
                        <p className="mt-2 text-sm">
                          Integer overflow duce la comportament neprezis, buffer overflow și potențial RCE (în C/C++).
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
                        <h3 className="font-medium">Gestionare Corectă a Excepțiilor</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați try-catch-finally cu handlers specifici pentru diferite tipuri de excepții. Nu ascundeți erorile prin generic catches. Logați și rapurtați erorile corespunzător.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Mesaje de Eroare Generice și Logging Complet</h3>
                        <p className="text-sm text-muted-foreground">
                          Afișați mesaje de eroare generice utilizatorilor. Jurnalizați detalii complete (stack trace, context) pe server pentru debugging. Separați ce vezi utilizatorul de ce se loghează.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Defence in Depth - Defensive Programming</h3>
                        <p className="text-sm text-muted-foreground">
                          Verificați toate intrările, inclusiv cazurile extreme, valori null, limite de memorie. Utilizați contract programming cu pre/post conditions. Fail-safe defaults.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Verificare și Validare la Graniță</h3>
                        <p className="text-sm text-muted-foreground">
                          Verificați bounds pe array-uri, string-uri, integers. Utilizați librării de validare. Testați cu valori negative, zero și maxime.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Resource Management (Cleanup)</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați try-with-resources în Java, context managers în Python, RAII în C++ pentru a asigura cleanup autometic.  Eliberați conexiuni, fișiere, memorie în fin finally blocks.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizare Type Systems și Null Safety</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați TypeScript, Kotlin, Rust care au null-safety built-in. Evitați null pointers prin design. Utilizați Optional/Maybe types.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu ignora excepții cu bare catch exceptions. Nu expuneți stack traces utilizatorilor. Nu presupuneți că inputul va fi valida. Nu lăsați resurse nechise.
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
                      <h3 className="font-medium">Testing și Code Analysis</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Testare de unitate pentru gestionarea erorilor</li>
                        <li>Testare de integrare pentru fluxuri complete</li>
                        <li>SAST pentru a detecta erori logice potențiale</li>
                        <li>Fuzzing pentru a testa comportament cu intrări neașteptate</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Analiză Automată a Codului</h3>
                      <p className="text-sm">Integrați analiză automată în pipeline-ul CI/CD:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>SonarQube pentru detectarea defectelor de logică</li>
                        <li>Checkmarx, Coverity pentru analiză de securitate</li>
                        <li>Tools statice pentru identificarea null pointer risks</li>
                        <li>Linters și type-checkers pentru null-safety</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Logging și Monitoring</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Configurare centralizată a logging-ului</li>
                        <li>Alerte automate pentru rate-uri ridicate de eroare</li>
                        <li>Dashboards pentru monitorizare a stării aplicației</li>
                        <li>Tracking excepțiilor și anomaliilor în producție</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați policy-uri de handling al erorilor în aplicație. Utilizați framework-uri și librării cu built-in error handling robust. Faceți chaos engineering pentru a testa resilență în cazul erorilor neprevăzute. Implementați distributed tracing (OpenTelemetry) pentru a urmări erorile în sisteme distribuite și a identifica scenarii edge case.
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
    </div>
  )
}
