import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserX, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A07Page() {
  return (
    <div className="flex flex-col">
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
                <UserX className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">
                  A07:2021 – Eșecuri de Identificare și Autentificare
                </h1>
                <p className="text-muted-foreground">Identification and Authentication Failures</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Eșecurile de identificare și autentificare se referă la defecte în implementarea mecanismelor de
                  autentificare și gestionare a sesiunilor, care permit atacatorilor să compromită parole, chei sau
                  token-uri de sesiune, sau să exploateze alte defecte de implementare pentru a asuma temporar sau
                  permanent identitățile altor utilizatori.
                </p>
                <p>
                  Această vulnerabilitate a coborât de pe poziția 2 (în 2017, când era numită "Broken Authentication")
                  pe poziția 7 în topul OWASP 2021, reflectând îmbunătățirile în implementarea mecanismelor de
                  autentificare, dar rămânând totuși o problemă semnificativă.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="/images/A07.jpg"
                    alt="A07"
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
                      <h3 className="font-medium">1. Permiterea atacurilor de forță brută</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care nu implementează mecanisme de protecție împotriva atacurilor de forță brută,
                          cum ar fi blocarea contului după un număr de încercări eșuate sau implementarea de întârzieri
                          progresive între încercări.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Permiterea parolelor slabe</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care permit utilizarea de parole slabe, comune sau cunoscute ca fiind compromise. De
                          exemplu, permiterea parolelor precum "123456", "password" sau a parolelor care apar în liste
                          de parole compromise.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Gestionarea nesigură a sesiunilor</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Implementări nesigure ale gestionării sesiunilor, cum ar fi ID-uri de sesiune expuse în URL,
                          ID-uri de sesiune care nu se schimbă după autentificare, sau sesiuni care nu expiră sau nu
                          sunt invalidate corespunzător la delogare.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Recuperare nesigură a parolelor</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Mecanisme de recuperare a parolelor care pot fi exploatate pentru a reseta parolele altor
                          utilizatori. De exemplu, întrebări de securitate cu răspunsuri ușor de ghicit sau procese de
                          recuperare care dezvăluie informații despre existența conturilor.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Stocarea nesigură a credențialelor</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Stocarea parolelor în text clar sau utilizarea de algoritmi de hashing slabi (MD5, SHA1) fără
                          salt. Aceasta permite atacatorilor să recupereze parolele originale în cazul unei breșe de
                          date.
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
                        <h3 className="font-medium">Implementați autentificare multi-factor</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați autentificarea multi-factor (MFA) ori de câte ori este posibil pentru a preveni
                          atacurile automatizate, atacurile de phishing și reutilizarea credențialelor compromise.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați politici de parole puternice</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați politici de parole care încurajează utilizarea de parole lungi și complexe.
                          Verificați parolele noi împotriva listelor de parole cunoscute ca fiind compromise.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați protecții împotriva atacurilor de forță brută</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați mecanisme de limitare a ratei de încercări, blocarea temporară a conturilor după
                          încercări eșuate și alertarea administratorilor în cazul unor activități suspecte.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați algoritmi puternici pentru stocarea parolelor</h3>
                        <p className="text-sm text-muted-foreground">
                          Stocați parolele utilizând algoritmi adaptivi de hashing precum Argon2, PBKDF2, Bcrypt sau
                          Scrypt, cu un factor de cost adecvat și un salt unic pentru fiecare utilizator.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați gestionarea sigură a sesiunilor</h3>
                        <p className="text-sm text-muted-foreground">
                          Generați ID-uri de sesiune aleatorii și unice, stocați-le în mod sigur, invalidați-le la
                          delogare și implementați timeout-uri de sesiune. Nu expuneți ID-urile de sesiune în URL.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați procese sigure de recuperare a parolelor</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați procese sigure pentru recuperarea parolelor, cum ar fi token-uri de unică folosință
                          cu termen de expirare limitat, trimise prin canale secundare verificate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu utilizați întrebări de securitate cu răspunsuri ușor de ghicit. Nu stocați parole în text
                          clar sau utilizând algoritmi de hashing slabi. Nu expuneți ID-uri de sesiune în URL sau în
                          jurnale.
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
                      <h3 className="font-medium">Automatizarea Testelor de Securitate</h3>
                      <p className="text-sm">Integrați teste automate pentru mecanismele de autentificare:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Implementați teste automate pentru verificarea politicilor de parole</li>
                        <li>Testați mecanismele de protecție împotriva atacurilor de forță brută</li>
                        <li>Verificați gestionarea corectă a sesiunilor și a token-urilor</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Utilizarea Bibliotecilor Securizate</h3>
                      <p className="text-sm">Utilizați biblioteci și framework-uri securizate pentru autentificare:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Adoptați biblioteci mature și bine testate pentru autentificare</li>
                        <li>Evitați implementarea propriilor mecanisme de autentificare</li>
                        <li>Mențineți bibliotecile de autentificare actualizate</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Monitorizare și detectare</h3>
                      <p className="text-sm">Implementați monitorizare pentru activități suspecte:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Monitorizați și alertați pentru încercări multiple de autentificare eșuate</li>
                        <li>
                          Detectați modele anormale de autentificare (locații geografice neobișnuite, ore neobișnuite)
                        </li>
                        <li>Implementați jurnalizare detaliată pentru toate evenimentele de autentificare</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Gestionarea secretelor</h3>
                      <p className="text-sm">Implementați gestionarea sigură a secretelor:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați servicii de gestionare a secretelor (HashiCorp Vault, AWS Secrets Manager)</li>
                        <li>Evitați stocarea credențialelor în cod sau în fișiere de configurare</li>
                        <li>Implementați rotația automată a secretelor</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați o strategie de "Zero Trust" în infrastructura DevOps, care presupune verificarea
                          continuă a identității și autorizării pentru toate accesele la resurse, indiferent de locația
                          sau rețeaua din care provine cererea. Aceasta include utilizarea de certificate pentru
                          autentificarea serviciilor și implementarea de politici de acces bazate pe identitate.
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
