import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileWarning, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A08Page() {
  return (
    <div className="flex flex-col min-h-screen">
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
                <FileWarning className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">
                  A08:2021 – Eșecuri de Integritate a Software-ului și Datelor
                </h1>
                <p className="text-muted-foreground">Software and Data Integrity Failures</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Eșecurile de integritate a software-ului și datelor se referă la situațiile în care aplicațiile și
                  infrastructura nu verifică integritatea codului și a datelor, permițând astfel introducerea de
                  componente sau actualizări neautorizate. Aceasta include utilizarea de plugin-uri, biblioteci sau
                  module din surse nesigure, actualizări nesemnate, precum și injecții de cod pe partea clientului.
                </p>
                <p>
                  Această vulnerabilitate este o categorie nouă în topul OWASP 2021, ocupând poziția 8, reflectând
                  importanța crescută a integrității software-ului și datelor în contextul atacurilor din lanțul de
                  aprovizionare (supply chain attacks).
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="/images/A08.jpg"
                    alt="A08"
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
                      <h3 className="font-medium">1. Atacuri asupra lanțului de aprovizionare</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Atacuri în care un adversar compromite un pachet sau o bibliotecă utilizată de multe
                          aplicații. De exemplu, atacul SolarWinds din 2020, în care atacatorii au inserat cod malițios
                          într-o actualizare a software-ului, care a fost apoi distribuită clienților prin canalele
                          oficiale.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Utilizarea de dependențe netrustate</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Utilizarea de biblioteci, framework-uri sau module din surse netrustate sau nesigure, fără
                          verificarea integrității acestora. De exemplu, descărcarea și utilizarea de biblioteci de pe
                          site-uri neoficiale sau utilizarea de versiuni modificate ale bibliotecilor populare.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Actualizări nesemnate</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care nu verifică semnăturile digitale ale actualizărilor înainte de a le instala,
                          permițând astfel instalarea de actualizări falsificate sau modificate. Aceasta include și
                          lipsa verificării integrității fișierelor descărcate.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Deserializare nesigură</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care deserializează date din surse netrustate fără verificări adecvate, permițând
                          atacatorilor să manipuleze obiectele serializate pentru a executa cod arbitrar sau pentru a
                          modifica fluxul de execuție al aplicației.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Injecții de cod pe partea clientului</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Vulnerabilități care permit atacatorilor să injecteze cod malițios în aplicațiile web pe
                          partea clientului. Aceasta include atacuri de tip XSS (Cross-Site Scripting) persistente, în
                          care codul malițios este stocat pe server și livrat ulterior utilizatorilor.
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
                        <h3 className="font-medium">Utilizați semnături digitale</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați semnături digitale pentru a verifica integritatea pachetelor, actualizărilor și
                          altor resurse înainte de a le utiliza. Implementați verificări de integritate pentru toate
                          resursele externe.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Verificați integritatea dependențelor</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați instrumente pentru a verifica integritatea dependențelor și pentru a detecta pachete
                          malițioase sau modificate. Implementați verificări de integritate în pipeline-urile CI/CD.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați surse de încredere</h3>
                        <p className="text-sm text-muted-foreground">
                          Obțineți dependențele și actualizările doar din surse oficiale și de încredere. Utilizați
                          depozite private de artefacte pentru a controla și verifica dependențele utilizate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați verificări de integritate</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați verificări de integritate pentru datele critice, cum ar fi configurațiile,
                          fișierele de cod și datele utilizatorilor. Utilizați hash-uri sau semnături pentru a detecta
                          modificările neautorizate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați deserializare sigură</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați deserializare sigură pentru datele din surse externe. Utilizați formate de
                          serializare mai sigure, cum ar fi JSON sau Protocol Buffers, și implementați verificări
                          stricte pentru datele deserializate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați Subresource Integrity (SRI)</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați Subresource Integrity pentru a verifica integritatea resurselor externe încărcate în
                          aplicațiile web, cum ar fi scripturile și foile de stil. Aceasta previne modificarea
                          resurselor în tranzit.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu utilizați dependențe din surse netrustate. Nu dezactivați verificările de integritate
                          pentru a rezolva probleme temporare. Nu deserializați date din surse netrustate fără
                          verificări adecvate.
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
                      <h3 className="font-medium">Securizarea Pipeline-urilor CI/CD</h3>
                      <p className="text-sm">Implementați măsuri de securitate în pipeline-urile CI/CD:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați semnături digitale pentru artefactele generate în pipeline</li>
                        <li>Implementați principiul "least privilege" pentru accesul la pipeline-uri</li>
                        <li>Verificați integritatea codului sursă înainte de build</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Scanarea Dependențelor</h3>
                      <p className="text-sm">Implementați scanarea automată a dependențelor:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați instrumente precum Dependency-Check, Snyk sau WhiteSource</li>
                        <li>Verificați dependențele pentru vulnerabilități și modificări neașteptate</li>
                        <li>Implementați verificări de integritate pentru pachetele descărcate</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Gestionarea Artefactelor</h3>
                      <p className="text-sm">Implementați gestionarea sigură a artefactelor:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați depozite private de artefacte (Nexus, Artifactory)</li>
                        <li>Implementați politici de retenție și curățare pentru artefacte</li>
                        <li>Verificați integritatea artefactelor înainte de deployment</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Monitorizare și Detectare</h3>
                      <p className="text-sm">Implementați monitorizare pentru detectarea modificărilor neautorizate:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Monitorizați modificările în fișierele de configurare și cod</li>
                        <li>Implementați sisteme de detectare a intruziunilor pentru infrastructură</li>
                        <li>Utilizați instrumente de monitorizare a integrității fișierelor</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați un proces de "Software Bill of Materials" (SBOM) pentru a documenta toate
                          componentele utilizate în aplicațiile voastre. Utilizați instrumente precum Sigstore pentru a
                          semna și verifica artefactele în pipeline-urile CI/CD, asigurând astfel integritatea lanțului
                          de aprovizionare software.
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
