import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { KeyRound, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A02Page() {
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
                <KeyRound className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">A02:2021 – Eșecuri Criptografice</h1>
                <p className="text-muted-foreground">Cryptographic Failures</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Eșecurile criptografice se referă la implementarea incorectă sau insuficientă a mecanismelor de
                  criptare pentru protejarea datelor sensibile. Această categorie se concentrează pe verificarea
                  protecției datelor în tranzit și în repaus, inclusiv parole, informații de card de credit, date
                  medicale, informații personale și secrete de afaceri.
                </p>
                <p>
                  Această vulnerabilitate a coborât de pe poziția 3 (în 2017) pe poziția 2 în topul OWASP 2021, fiind
                  prezentă în aproximativ 29% din aplicațiile testate, cu o rată de incidență de peste 4,5%.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A02.jpg-GK8kIDqGmwnxhZ4O6q5cFkawv1EDg9.jpeg"
                    alt="Eșecuri Criptografice - Diagram showing how a hacker can monitor network, steal cookies and hijack sessions"
                    width={800}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
                <p>
                Exemplu în imagine: un site care nu aplică TLS poate permite unui atacator să fure cookie-ul de sesiune al utilizatorului, să îl modifice și să deturneze sesiunea autentificată, obținând acces la datele private ale utilizatorului.
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
                      <h3 className="font-medium">1. Transmiterea datelor în text clar</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Utilizarea protocolului HTTP în loc de HTTPS pentru transmiterea datelor sensibile, permițând
                          atacatorilor să intercepteze și să citească informațiile transmise.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Utilizarea algoritmilor criptografici slabi sau depreciați</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Folosirea algoritmilor precum MD5 sau SHA-1 pentru stocarea parolelor, care sunt vulnerabili
                          la atacuri de forță brută sau de tip rainbow table.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Stocarea necorespunzătoare a cheilor criptografice</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Includerea cheilor de criptare direct în codul sursă sau în fișiere de configurare
                          neprotejate, permițând accesul neautorizat la acestea.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Generarea aleatoare slabă</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Utilizarea generatorilor de numere pseudo-aleatoare predictibile pentru crearea token-urilor
                          de sesiune sau a valorilor criptografice.
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
                        <h3 className="font-medium">Clasificați datele procesate, stocate sau transmise</h3>
                        <p className="text-sm text-muted-foreground">
                          Identificați ce date sunt sensibile conform legilor privind confidențialitatea, cerințelor de
                          reglementare sau nevoilor de afaceri.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați HTTPS pentru toate conexiunile</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați HTTPS cu certificate valide pentru toate conexiunile, inclusiv pentru resurse
                          externe. Utilizați HSTS pentru a forța conexiunile HTTPS.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Stocați parolele folosind algoritmi puternici</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați algoritmi adaptivi de hashing precum Argon2, PBKDF2, Bcrypt sau Scrypt, cu un factor
                          de cost (work factor) adecvat și un salt aleatoriu.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați algoritmi și protocoale criptografice puternice</h3>
                        <p className="text-sm text-muted-foreground">
                          Folosiți algoritmi, chei și protocoale criptografice puternice, bazate pe standarde. Utilizați
                          generatoare de numere aleatoare criptografic sigure.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Gestionați corespunzător cheile criptografice</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați o gestionare sigură a cheilor, inclusiv rotația și revocarea acestora. Utilizați
                          module de securitate hardware (HSM) pentru stocarea cheilor critice.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu utilizați algoritmi criptografici depreciați (MD5, SHA1, DES, etc.). Nu implementați
                          propriile soluții criptografice. Nu stocați secrete în codul sursă.
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
                      <h3 className="font-medium">Scanare Automată de Cod</h3>
                      <p className="text-sm">
                        Integrați scanere de securitate în pipeline-ul CI/CD pentru a detecta probleme criptografice:
                      </p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați instrumente SAST pentru a identifica utilizarea algoritmilor slabi</li>
                        <li>Implementați scanere de secrete pentru a detecta chei hardcodate în cod</li>
                        <li>Verificați dependențele pentru vulnerabilități criptografice cunoscute</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Gestionarea Secretelor</h3>
                      <p className="text-sm">Implementați soluții de gestionare a secretelor în pipeline-ul DevOps:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați servicii precum HashiCorp Vault, AWS Secrets Manager sau Azure Key Vault</li>
                        <li>Automatizați rotația cheilor și certificatelor</li>
                        <li>Implementați politici de acces bazate pe principiul privilegiului minim</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Testare de Securitate</h3>
                      <p className="text-sm">
                        Includeți teste specifice pentru verificarea implementărilor criptografice:
                      </p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Testați configurația TLS/SSL cu instrumente precum SSL Labs sau testssl.sh</li>
                        <li>Verificați implementarea corectă a algoritmilor de hashing pentru parole</li>
                        <li>Testați gestionarea cheilor și certificatelor în medii de pre-producție</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați un proces de revizuire a configurațiilor criptografice înainte de fiecare
                          deployment major. Utilizați liste de verificare (checklists) pentru a vă asigura că toate
                          aspectele criptografice sunt corect implementate și configurate.
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
