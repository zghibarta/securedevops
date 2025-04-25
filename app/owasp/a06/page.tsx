import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Package, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A06Page() {
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
                <h1 className="text-2xl font-bold tracking-tighter">A06:2021 – Componente vulnerabile și învechite</h1>
                <p className="text-muted-foreground">Vulnerable and Outdated Components</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Componente vulnerabile și învechite se referă la utilizarea de biblioteci, framework-uri și alte
                  componente software care conțin vulnerabilități cunoscute sau care nu mai sunt menținute. Aceasta
                  include componente client-side și server-side, precum și orice software utilizat în infrastructura
                  aplicației.
                </p>
                <p>
                  Această vulnerabilitate a urcat de pe poziția 9 (în 2017) pe poziția 6 în topul OWASP 2021, reflectând
                  creșterea dependenței aplicațiilor moderne de componente terțe și riscurile asociate cu acestea.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="/images/A06.jpg"
                    alt="A06"
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
                <TabsTrigger value="devops">DevOps</TabsTrigger>
              </TabsList>

              <TabsContent value="exemple" className="space-y-2 pt-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Exemple de Vulnerabilități</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <h3 className="font-medium">1. Utilizarea de biblioteci cu vulnerabilități cunoscute</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care utilizează biblioteci sau framework-uri cu vulnerabilități cunoscute și
                          documentate public. De exemplu, utilizarea unei versiuni vechi de Spring Framework care
                          conține vulnerabilități de tip RCE (Remote Code Execution) sau utilizarea unei versiuni
                          vulnerabile de jQuery care permite atacuri XSS.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Componente care nu mai sunt menținute</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Utilizarea de biblioteci sau framework-uri care nu mai sunt menținute sau actualizate. Aceste
                          componente nu primesc patch-uri de securitate pentru vulnerabilitățile nou descoperite, lăsând
                          aplicația expusă la riscuri.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Sisteme de operare și servere neactualizate</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Utilizarea de sisteme de operare, servere web sau servere de aplicații care nu au aplicate
                          cele mai recente patch-uri de securitate. Aceasta include și utilizarea de versiuni care nu
                          mai sunt suportate de producători.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Lipsa scanării și monitorizării dependențelor</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Organizații care nu scanează sau monitorizează regulat dependențele pentru vulnerabilități și
                          nu au un proces pentru actualizarea promptă a componentelor vulnerabile.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Incompatibilitate între componente</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Actualizarea unei componente fără a verifica compatibilitatea cu alte componente ale
                          aplicației, ceea ce poate duce la probleme de funcționalitate sau la introducerea de noi
                          vulnerabilități.
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
                        <h3 className="font-medium">Eliminați dependențele neutilizate</h3>
                        <p className="text-sm text-muted-foreground">
                          Eliminați dependențele, funcționalitățile, componentele, fișierele și documentația neutilizată
                          pentru a reduce suprafața de atac a aplicației.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Inventariați componentele</h3>
                        <p className="text-sm text-muted-foreground">
                          Mențineți un inventar continuu al versiunilor tuturor componentelor utilizate, atât pe partea
                          de client, cât și pe partea de server. Aceasta include framework-uri, biblioteci, module și
                          alte dependențe.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Monitorizați sursele de vulnerabilități</h3>
                        <p className="text-sm text-muted-foreground">
                          Monitorizați continuu sursele de informații despre vulnerabilități, cum ar fi CVE și NVD,
                          pentru a fi la curent cu vulnerabilitățile nou descoperite în componentele utilizate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați instrumente de analiză a dependențelor</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați instrumente automate pentru a scana și analiza dependențele pentru vulnerabilități
                          cunoscute. Integrați aceste instrumente în procesul de dezvoltare și în pipeline-urile CI/CD.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Obțineți componente din surse sigure</h3>
                        <p className="text-sm text-muted-foreground">
                          Obțineți componente doar din surse oficiale și prin canale sigure. Verificați integritatea
                          pachetelor descărcate prin verificarea semnăturilor digitale sau a hash-urilor.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Planificați actualizările</h3>
                        <p className="text-sm text-muted-foreground">
                          Planificați și testați actualizările componentelor în mod regulat. Implementați un proces
                          pentru actualizarea promptă a componentelor vulnerabile, în special pentru vulnerabilitățile
                          critice.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu utilizați componente din surse neoficiale sau nesigure. Nu amânați actualizările de
                          securitate. Nu utilizați componente care nu mai sunt menținute sau suportate. Nu ignorați
                          alertele de securitate pentru componentele utilizate.
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
                      <h3 className="font-medium">Automatizarea scanării dependențelor</h3>
                      <p className="text-sm">Integrați scanarea automată a dependențelor în pipeline-urile CI/CD:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați instrumente precum OWASP Dependency-Check, Snyk sau WhiteSource</li>
                        <li>Configurați gate-uri de calitate care blochează build-urile cu vulnerabilități critice</li>
                        <li>Generați rapoarte de vulnerabilități pentru fiecare build</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Gestionarea dependențelor</h3>
                      <p className="text-sm">Implementați practici de gestionare a dependențelor:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați manageri de dependențe pentru a controla versiunile componentelor</li>
                        <li>Implementați blocarea versiunilor pentru a preveni actualizări neintenționate</li>
                        <li>Utilizați depozite private de artefacte pentru a controla componentele utilizate</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Automatizarea actualizărilor</h3>
                      <p className="text-sm">Automatizați procesul de actualizare a dependențelor:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați instrumente precum Dependabot sau Renovate pentru a automatiza actualizările</li>
                        <li>Configurați teste automate pentru a verifica compatibilitatea actualizărilor</li>
                        <li>Implementați un proces de revizuire pentru actualizările majore</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Monitorizare continuă</h3>
                      <p className="text-sm">Implementați monitorizare continuă pentru vulnerabilități:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Monitorizați bazele de date de vulnerabilități pentru alerte noi</li>
                        <li>Configurați notificări automate pentru vulnerabilitățile descoperite</li>
                        <li>Implementați scanări periodice ale aplicațiilor în producție</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați un proces de "Software Bill of Materials" (SBOM) pentru a documenta toate
                          componentele utilizate în aplicațiile voastre. Un SBOM oferă transparență și facilitează
                          identificarea rapidă a componentelor afectate atunci când sunt descoperite noi
                          vulnerabilități.
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
