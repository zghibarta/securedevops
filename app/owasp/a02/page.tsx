import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Settings, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A02Page() {
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
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tighter">A02:2025 – Configurare inadecvată a securității</h1>
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
                  Configurare inadecvată a securității apare atunci când un sistem, o aplicație sau un serviciu cloud sunt configurate incorect din perspectiva securității, creând vulnerabilități. Se concentrează pe erorile de configurare din întreaga stivă a aplicației.
                </p>
                <p>
                  <strong>A02:2025 a urcat de la poziția #5 în 2021 la #2 în 2025.</strong> 100% din aplicațiile testate aveau o formă de misconfigurare, cu o rată medie de incidență de 3,00%. Misconfigurațiile sunt mai frecvente în datele actuale, pe măsură ce ingineria software crește cantitatea de comportament al aplicației bazat pe configurații.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="/images/A02.jpg"
                    alt="Configurare inadecvată - Server misconfigurat cu erori în pagina de status care expun informații sensibile"
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
                      <h3 className="font-medium">1. Aplicații sample neomoloase</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Serverul de aplicații vine cu aplicații sample care nu sunt îndepărtate din producție. De exemplu, o consolă de administrare cu conturi implicite care nu au fost schimbate.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Listarea directoarelor activată</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Serverul web permite listarea directoarele, permițând unui atacator să descopere și să descărce fișiere sensibile, să decompileze cod Java sau să reverse-engineer-eze aplicația.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Configurări de cloud nesigure</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Bucket-uri S3, containere Azure sau alte servicii cloud configurate accidental cu permisiuni publice de citire/scriere, expunând date sensibile.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Mesaje de eroare care expun informații</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Mesajele de eroare conțin stack traces, informații despre versiuni software, căi de fișiere sau alte detalii care pot ajuta un atacator.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Permisiuni incorecte la resursele critice</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Fișiere cu metadate sensibile (ex: .git, .env, copii de backup) sunt accesibile direct prin web root.
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
                        <h3 className="font-medium">Implementați un proces de hardening repetat</h3>
                        <p className="text-sm text-muted-foreground">
                          Stabilițiun proces automatizat și repetat de hardening care permite implementarea rapidă a unui mediu securizat. Dezvoltare, QA și producție ar trebui configurate identic, cu credențiale diferite în fiecare mediu.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Plăți minimaliste</h3>
                        <p className="text-sm text-muted-foreground">
                          Instalați doar componentele necesare. Dezactivați caracteristicile nefolosite, framework-urile, documentația și exemplele. Eliminați sau nu instalați canalele nefolosite și caracteristicile.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Dezactivați listarea directoarelor</h3>
                        <p className="text-sm text-muted-foreground">
                          Asigurați-vă că listarea directoarelor nu este activată pe server. Acesta ar trebui să aplice permisiuni restrictive și să returneze erori pentru accesuri neautorizate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Trimiteți directivele de securitate către clienți</h3>
                        <p className="text-sm text-muted-foreground">
                          Trimiteți antetele de securitate către clienți, cum ar fi Security-Headers (CSP, HSTS, X-Frame-Options, etc.).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați o arhitectură de aplicație segmentată</h3>
                        <p className="text-sm text-muted-foreground">
                          Segmentați efectiv aplicațiile și componentele, utilizând containerizare sau grupuri de securitate cloud.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Verificare automată a configurațiilor</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați procese automate pentru a verifica eficacitatea configurațiilor și setărilor în toate mediile.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu lăsați aplicații sample în producție. Nu activați listarea directoarelor. Nu vă bazați pe compatibilitate inversă pentru securitate. Nu stocați secrete în fișiere de configurare.
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
                      <h3 className="font-medium">Scanare de configurație</h3>
                      <p className="text-sm">
                        Integrați scanere de configurație în pipeline-ul CI/CD:
                      </p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați instrumente precum Aqua Security, Trivy pentru a scana imagini Docker</li>
                        <li>Implementați CloudFormation sau Terraform validators pentru a verifica IaC</li>
                        <li>Scanați permisiuni de cloud storage și ACL-uri cu instrumente dedicate</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Testing de configurație</h3>
                      <p className="text-sm">Testați configurații în pipeline-ul CI/CD:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Verificați că antetele de securitate sunt prezente și corecte</li>
                        <li>Testați că serviciile nefolosite sunt dezactivate</li>
                        <li>Validați permisiuni de fișiere și proprietăți în sistemul de fișiere</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Gestionare automată a configurației</h3>
                      <p className="text-sm">
                        Utilizați Infrastructure as Code și gestionare de configurație:
                      </p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Terraform, CloudFormation pentru definirea resurselor cloud</li>
                        <li>Ansible, Chef, Puppet pentru gestionarea configurației serverelor</li>
                        <li>Versiunea configurații în Git cu control de acces</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați "configuration management as code" și automatizați verificările de hardening în fiecare deployment. Utilizați benchmarks-uri CIS (Center for Internet Security) pentru a valida mașinile și containerele.
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
