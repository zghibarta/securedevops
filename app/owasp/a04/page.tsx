import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lightbulb, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A04Page() {
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
              <div className="rounded-full bg-yellow-500/10 p-3">
                <Lightbulb className="h-8 w-8 text-yellow-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tighter">A04:2025 – Eșecuri Criptografice</h1>
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
                  Eșecurile criptografice se referă la implementarea incorectă a mecanismelor de criptare pentru protejarea datelor sensibile. Includeți algoritmi slabi, chei compromise, gestionare inadecvată a parolelor și implementări deficiente ale criptografiei.
                </p>
                <p>
                  Această categorie cuprinde vulnerabilități legate de:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Transmisie de date sensibile în text clar (HTTP în loc de HTTPS)</li>
                  <li>Utilizare de algoritmi criptgrafici slabi sau învechiti (MD5, RC4)</li>
                  <li>Utilizare de chei de criptare codemate în aplicație</li>
                  <li>Gestionare incorectă a login-urilor și sesiunilor</li>
                  <li>Hashing inadecvat al parolelor (plaintext sau algoritmi rapizi)</li>
                  <li>Lipsă de salturi în hashuri sau refolosire de salturi</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-sm text-blue-900">
                    <strong>Statistici OWASP 2025:</strong> A04 coboară din poziția A02:2021 la A04:2025. Cu toate acestea, rămâne o vulnerabilitate critică cu impact înalt.
                  </p>
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
                      <h3 className="font-medium">1. Transmisia datelor sensibile în HTTP (text clar)</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">GET /login?user=admin&pass=secret123 HTTP/1.1</p>
                        <p className="mt-2 text-sm">Parolele și tokenele transmise prin HTTP pot fi interceptate ușor. Se cere HTTPS pentru orice transmisie de date sensibile.</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Algoritmi de criptare slabi sau învechiti</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">Utilizarea algoritmilor de criptare slabi cum ar fi DES, RC4 sau MD5 pentru hashing. Acești algoritmi sunt ușor de spargit cu tehnologia modernă. Se recomandă AES-256, SHA-256 sau bcrypt.</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Chei criptografice hardcoded</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">const SECRET_KEY = &quot;my_secret_key_1234&quot;;  // RĂU!</p>
                        <p className="mt-2 text-sm">Cheile și parolele în cod sursă sunt ușor de descoperit în versiuni publicate sau în repositoriile Git.</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Hashing inadecvat al parolelor</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">Stocarea parolelor în plaintext, folosind MD5 fără salt, sau folosind algoritmi rapizi fără iterații. Se cere bcrypt, scrypt sau Argon2 cu salt aleatoriu.</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Lipsa validării certificatelor SSL/TLS</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">Aplicații care acceptă certificatele SSL/TLS expirate, autosemnate sau cu domenii incorecte, permițând man-in-the-middle attacks.</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">6. Criptare slabă pentru data at rest</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Baza de date stochează date sensibile cu criptare slabă (ROT13, Base64) sau fără criptare. Datele compromisingse ușor prin atacuri de dicționar sau brute-force.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">7. IV / Salt Non-Unique</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">AES_Encrypt(password, static_salt=&quot;salt123&quot;)</p>
                        <p className="mt-2 text-sm">
                          Utilizarea unui IV sau salt static în loc de generarea aleatoriu pentru fiecare criptare reduce drastic securitatea și permite atac dictionary.
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
                        <h3 className="font-medium">Utilizați HTTPS pentru toate transmisiile</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați TLS 1.2 sau superior pentru a cripta orice transmisii de date sensibile. Utilizați certificatele valide și actualizate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Stocați parolele cu hashing puternic</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați bcrypt, scrypt sau Argon2 cu salt aleatoriu. Evitați MD5, SHA1 și algoritmii rapizi. Utilizați foi de lucru (work factors) adecuate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați algoritmi criptografici moderni</h3>
                        <p className="text-sm text-muted-foreground">
                          Alegeți AES-256 pentru criptare, SHA-256 sau mai puternic pentru hashing. Evitați DES, RC4, MD5 și alți algoritmi vulnerabili.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Gestionați cheile criptografice în siguranță</h3>
                        <p className="text-sm text-muted-foreground">
                          Stocați cheile în sisteme de gestiune a secretelor (AWS Secrets Manager, HashiCorp Vault). Nu le hardcodificați în cod. Rotaționalizeți cheile regulat.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Validați certificatele SSL/TLS</h3>
                        <p className="text-sm text-muted-foreground">
                          Verificați semnăturile, domeniile și termenul de valabilitate. Nu acceptați certificatele autosemnate în producție.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați biblioteci de criptare testate</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați libsodium, OpenSSL, cryptography library. Evitați implementări casă ale algoritmilor de criptare.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați Data at Rest Encryption</h3>
                        <p className="text-sm text-muted-foreground">
                          Criptați datele sensibile în baza de date și în storage cu AES-256. Utilizați funcții de criptare ale cloud-ului (AWS KMS, Azure Key Vault, Google Cloud KMS).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Generări IV și Salt Unic</h3>
                        <p className="text-sm text-muted-foreground">
                          Pentru fiecare criptare, generați IV/salt unic și aleatoriu. Stocați IV-ul alături de text criptat pentru decriptare. Utilizați CSPRNG pentru generare.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu transmiteți date sensibile prin HTTP. Nu hardcodificați chei. Nu folosiți MD5, SHA1 sau DES. Nu adăugați criptare post-facto - planificați din design.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                          lățime de bandă) pentru a preveni atacurile de tip denial of service.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu considerați securitatea ca o caracteristică adăugată ulterior. Nu vă bazați exclusiv pe
                          testele de securitate pentru a identifica probleme de design. Nu ignorați feedback-ul
                          utilizatorilor și rapoartele de securitate.
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
                      <h3 className="font-medium">Gestiunea Secretelor</h3>
                      <p className="text-sm">Implementați gestiunea sigură a secretelor în pipeline-uri:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați Azure Key Vault, AWS Secrets Manager, sau HashiCorp Vault</li>
                        <li>Rotația automată a cheilor și secretelor</li>
                        <li>Auditarea accesului cu logging complet</li>
                        <li>Injecția secretelor doar în runtime, nu în imagini Docker</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Testare Criptografică</h3>
                      <p className="text-sm">Integrați testarea criptografică în CI/CD:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Verificări statice pentru algoritmi slabi sau hardcoded keys</li>
                        <li>Teste de penetrare pentru criptare în transmisie (HTTPS/TLS)</li>
                        <li>Audit periodic al implementării criptografice</li>
                        <li>Validarea certificate-urilor SSL/TLS în producție</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Monitorizare și Compliance</h3>
                      <p className="text-sm">Implementați monitorizare pentru conformitate criptografică:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Verificare continuă de conformitate cu standardele de criptare (NIST, PCI-DSS)</li>
                        <li>Rotația periodică a cheilor cu notification automate</li>
                        <li>Audit logging pentru orice acces la chei și secrets</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați "Crypto as Code" - definir politici de criptare în IaC. Utilizați instrumente precum Terraform modules pre-configured cu criptare sigură. Faceți rotație de chei automat cu zero-downtime folosind versioning de chei.
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
