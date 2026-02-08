import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
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
              <div className="rounded-full bg-amber-500/10 p-3">
                <Lightbulb className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tighter">A06:2025 – Proiectare Nesecurizată</h1>
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
                  Proiectarea nesecurizată se referă la lipsa de controale de securitate sau controale insuficiente în faza de design a aplicației. Aceasta include vulnerabilități care nu pot fi remediate doar prin implementare corectă, ci necesită o reproiectare a componentelor.
                </p>
                <p>
                  Principalele probleme de design nesigur includ:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Lipsa validării la nivel de logică de business (ex: limite de rate, limite de tranzacții)</li>
                  <li>Arhitectură care nu implementează separarea responsabilităților</li>
                  <li>Fluxuri de autorizare care nu verifică toate cazurile</li>
                  <li>Lipsă de mecanisme de detecție a abuzului (rate limiting, anomaly detection)</li>
                  <li>Arhitectură care expune servicii interne fără autentificare</li>
                  <li>Lipsă de criptare la nivel de design pentru date sensibile</li>
                </ul>
                <p className="mt-2">
                  A04:2021 a fost mutat la poziția A06:2025. Aceasta reflectă o evaluare a riscurilor și importanța relativă comparativ cu alte vulnerabilități.
                </p>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-sm text-blue-900">
                    <strong>Statistici OWASP 2025:</strong> Proiectarea nesecurizată apare în peste 40% din aplicațiile moderne și necesită intervenție din primele faze de proiectare.
                  </p>
                </div>
                <div className="flex justify-center my-6">
                  <Image
                    src="/images/A06.jpg"
                    alt="Design Nesigur - Diagram showing insecure design in a booking portal"
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <p>
                Exemplu în imagine: un atacator poate rezerva 600 de bilete de film pentru o anumită perioadă, împiedicând cumpărătorii reali să le rezerve. Aceasta putea fi evitată printr-un design care să limiteze rezervările la maxim 15 bilete.
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
                      <h3 className="font-medium">1. Lipsa validării logicii de business</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Un sistem bancar care permite transferuri negative, sau o platformă de ticketing care permite comandrii unui număr nelimitat de bilete. Sistemul nu validează plafoane, limite minime/maxime la nivel de design.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Lipsă de rate limiting și detecție a abuzului</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          O aplicație care nu limitează încercărilor de login, permitând brute-force attacks. Sau un API care permite unui client să facă o mie de cereri per secundă fără restricții.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Fluxuri de autentificare deficiente</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Un sistem care resetează parolele fără verificare puternică, sau permiteautentificare cu email singur. Sau sesiunile care nu expira niciodată.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Arhitectură care expune servicii interne</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Serviciile interne sunt accesibile direct din internet fără autentificare. De exemplu, un endpoint administrativ nu necesită token de autorizare, doar o cerere POST.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Lipsă de criptare la nivel de design</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Sistemul stochează parole în plaintext în baza de date din proiectare. Sau datele sensibile sunt transmise prin HTTP deja din design-ul arhitecturii.
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
                        <h3 className="font-medium">Modelarea amenințărilor (Threat Modeling)</h3>
                        <p className="text-sm text-muted-foreground">
                          Executați threat modeling în faza de design pentru a identifica și adresa riscurile înainte de implementare. Documentați presupunerile de securitate și validați-le.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Validarea logicii de business</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați validări pentru toate regulile de business: plafoane de transfer, limite de rate, verificări de stoc. Nu presupuneți că utilizatorii vor folosi aplicația corect.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați rate limiting și detecție de abuz</h3>
                        <p className="text-sm text-muted-foreground">
                          Limitați numărul de cereri per utilizator, per IP. Detectați și blocați comportamentele anomale. Implementați CAPTCHA pentru acțiuni sensibile.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați principiul segregării serviciilor</h3>
                        <p className="text-sm text-muted-foreground">
                          Serviceile interne trebuie să necesite autentificare și autorizare. Nu expuneți endpoints administrative direct. Implementați zero-trust architecture.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Design cu criptare din start</h3>
                        <p className="text-sm text-muted-foreground">
                          Planificați criptarea datelor sensibile în faza de design. Nu adăugați criptare post-facto. Stocați parolele cu hash puternic din început.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu presupuneți că inputul utilizatorului va fi corect. Nu lăsați serviciile exponente fără protecție. Nu ignora scenariile edge case. Nu proiectați fără a lua în considerare securitatea.
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
