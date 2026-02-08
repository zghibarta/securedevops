import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, ArrowLeft, Shield, CheckCircle, XCircle } from "lucide-react"
import Image from "next/image"

export default function A03Page() {
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
                <h1 className="text-2xl font-bold tracking-tighter">A03:2025 – Eșecuri în lanțul de aprovizionare cu software</h1>
                <p className="text-muted-foreground">Software Supply Chain Failures</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Eșecurile în lanțul de aprovizionare cu software se referă la compromitere care apare în sau în întregul ecosistem al dependențelor de software, sistemelor de build, și infrastructurii de distribuție. Aceasta este o expansiune a conceptului de componente vulnerabile în OWASP 2021.
                </p>
                <p>
                  <strong>A03:2025 este o categorie nouă în OWASP 2025</strong>, creată din necesitatea de a acoperi riscurile emergente legate de compromiterea lanțului de aprovizionare. A fost votată în mod copleșitor ca o preocupare principală în sondajul comunității. Această categorie are cea mai mare medie a scorurilor de exploit și impact din CVE-uri.
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
                      <h3 className="font-medium">1. Pachet npm Compromis</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Un pachet popular pe npm este preluat și versiunea nouă conține cod malware care fură credențiale.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Bibliotecă JavaScript cu Vulnerabilitate CVE</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          O bibliotecă largă utilizată nu a mai fost actualizată și conține o vulnerabilitate RCE (Remote Code Execution) critică.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Pipeline CI/CD Compromis</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Acun atacator obține acces la pipeline-ul CI/CD și injectează cod malware direct în artefactele compilate.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Dependență Typosquatting</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Un atacator crează un pachet cu un nume similar unei biblioteci populare (ex: "lodsh" în loc de "lodash") și o publică pe npm.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Compromisiune a Tokenelor Accesului Pipeline CI/CD</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Un token de acces GitHub/GitLab lăsat în log-urile de build public permite unui atacator să injecteze cod malewise direct în repo și să compromită software-ul pe zeci de mii de mașini.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">6. Container Image Poisoning</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          O imagine Docker publică a unui tool popular este compromisă și reuploaded pe Docker Hub. Oricine trage această imagine primește malware.
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
                        <h3 className="font-medium">Monitorizați și actualizați dependențele</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați instrumente SCA pentru a identifica dependențele vulnerabile. Actualizați regulat bibliotecile.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Verificați semnăturile și integritatea</h3>
                        <p className="text-sm text-muted-foreground">
                          Verificați semnăturile criptografice ale pachetelor și utilizați checksums pentru a asigura integritatea. Implementați verificări în CI/CD cu cosign sau similar.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Securizați pipeline-ul CI/CD</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați autentificarea multi-factor pe GitHub/GitLab, semnarea artefactelor și auditarea modificărilor în CI/CD. Rotați token-urile de acces regulat.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați lockfiles și versionare precisă</h3>
                        <p className="text-sm text-muted-foreground">
                          Păstrați lockfiles în Git și nu permiteți versiuni floating. Utilizați versiuni minor.patch fixe, nu wildcard-uri. Auditați regulat dependențele cu Snyk, OWASP Dependency-Check.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați Repository Privat pentru Artefacte</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați Artifactory, Nexus, ECR Private pentru a controla și verifica dependențele înainte de utilizare. Nu depindeți de repository-uri publice neverificate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu lăsați token-uri în log-urile de build. Nu utilizați dependențe necunoscute sau neveificate. Nu actualizați automat la cea mai nouă versiune fără testare.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Securizați pipeline-ul CI/CD</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați autentificarea multi-factor, semnarea artefactelor și auditarea modificărilor în CI/CD.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați lockfiles</h3>
                        <p className="text-sm text-muted-foreground">
                          Păstrați lockfiles (package-lock.json) în Git pentru reproducibilitate și preveniți actualizări neașteptate.
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
                      <h3 className="font-medium">Software Composition Analysis (SCA)</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>OWASP Dependency-Check, Snyk, Black Duck</li>
                        <li>Notificări automate pentru CVE-uri noi</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Verifikarea Integrității</h3>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Verificare de semnături de pachet</li>
                        <li>Validare de checksums</li>
                        <li>Container image signing cu Notary/Cosign</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Contracte și Acorduri de Securitate</h3>
                      <p className="text-sm">Implementați mecanisme de contracte cu furnizori:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Cerințe de securitate în acordurile de procurement</li>
                        <li>Notificarea vulnerabilităților și răspunsul în SLA</li>
                        <li>Auditarea siguranței lanțului de aprovizionare</li>
                        <li>Evaluarea regulată a furnizorilor de componente critice</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800\">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700\">
                          Creați și mențineți Software Bill of Materials (SBOM) pentru fiecare build. Utilizați Sigstore pentru semnarea și verificarea artefactelor. Implementați Dependabot sau Snyk cu triage automat de vulnerabilități și PR automate cu updaturi de securitate.
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
