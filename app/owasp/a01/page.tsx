import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Lock, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A01Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-center px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <Link href="/" className="text-lg font-bold">
              SecureDevOps
            </Link>
          </div>
          <nav className="hidden md:flex gap-6 mx-auto">
            <Link href="/owasp" className="text-sm font-medium hover:underline underline-offset-4">
              OWASP Top Ten 2021
            </Link>
            <Link href="/ssdlc" className="text-sm font-medium hover:underline underline-offset-4">
              SSDLC
            </Link>
            <Link href="/evaluare" className="text-sm font-medium hover:underline underline-offset-4">
              Evaluare
            </Link>
            <Link href="/resurse" className="text-sm font-medium hover:underline underline-offset-4">
              Resurse
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
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">A01:2021 – Control de Acces Defectuos</h1>
                <p className="text-muted-foreground">Broken Access Control</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Controlul de acces defectuos se referă la situațiile în care restricțiile privind acțiunile
                  utilizatorilor autentificați nu sunt aplicate corespunzător. Atacatorii pot exploata aceste defecte
                  pentru a accesa neautorizat funcționalități și/sau date, conturi de utilizatori, fișiere sensibile,
                  pentru a modifica drepturile de acces ale utilizatorilor, etc.
                </p>
                <p>
                  Această vulnerabilitate a urcat pe prima poziție în topul OWASP 2021, fiind prezentă în aproximativ
                  94% din aplicațiile testate, cu o rată de incidență de peste 3,8%.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A01.jpg-zaP6gZkQCQl8SlDBmrNsFf6gol7BLH.jpeg"
                    alt="Control de Acces Defectuos - Diagram showing how an attacker can intercept and change user IDs"
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
                <TabsTrigger value="devops">Integrare în DevOps</TabsTrigger>
              </TabsList>

              <TabsContent value="exemple" className="space-y-2 pt-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Exemple de Vulnerabilități</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <h3 className="font-medium">
                        1. Manipularea URL-urilor (IDOR - Insecure Direct Object References)
                      </h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">https://example.com/cont/vizualizare?id=123</p>
                        <p className="mt-2 text-sm">
                          Un atacator poate modifica parametrul "id" pentru a accesa conturile altor utilizatori.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Escaladarea privilegiilor</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Un utilizator obișnuit poate accesa funcționalități administrative prin modificarea
                          parametrilor din cereri sau prin navigarea directă la URL-uri administrative.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Bypass-ul verificărilor de acces</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">
                          POST /api/articol/sterge HTTP/1.1
                          <br />
                          Host: example.com
                          <br />
                          Cookie: session=abc123
                          <br />
                          Content-Type: application/json
                          <br />
                          <br />
                          {"{"}"id": 567{"}"}
                        </p>
                        <p className="mt-2 text-sm">
                          Aplicația nu verifică dacă utilizatorul autentificat are dreptul de a șterge articolul cu
                          ID-ul specificat.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Metode HTTP nepermise</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicația permite utilizarea metodelor PUT sau DELETE pentru endpoint-uri care ar trebui să
                          permită doar GET sau POST.
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
                        <h3 className="font-medium">Implementați un model de control al accesului puternic</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați un model de control al accesului care aplică restricții pentru toate datele și
                          funcționalitățile. Modelul ar trebui să refuze accesul în mod implicit.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Verificări pe server</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați verificări de control al accesului pe server, unde atacatorul nu poate modifica
                          verificarea sau metadatele.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați RBAC (Role-Based Access Control)</h3>
                        <p className="text-sm text-muted-foreground">
                          Implementați un sistem de control al accesului bazat pe roluri, cu drepturi granulare pentru
                          fiecare rol.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Dezactivați listarea directoarelor</h3>
                        <p className="text-sm text-muted-foreground">
                          Asigurați-vă că listarea directoarelor este dezactivată pe server. Fișierele și directoarele
                          nu ar trebui să fie accesibile direct prin URL.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Invalidați token-urile JWT la delogare</h3>
                        <p className="text-sm text-muted-foreground">
                          Asigurați-vă că token-urile JWT sunt invalidate la delogare și că au un timp de expirare
                          scurt.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu vă bazați pe: ascunderea funcționalităților, verificări doar pe partea de client, parametri
                          modificabili de utilizator pentru decizii de acces.
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
                      <h3 className="font-medium">Testare Automată</h3>
                      <p className="text-sm">
                        Integrați teste automate de securitate care verifică controlul accesului în pipeline-ul CI/CD:
                      </p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Teste unitare pentru verificarea logicii de control al accesului</li>
                        <li>Teste de integrare care simulează diferite roluri și permisiuni</li>
                        <li>
                          Scanări SAST (Static Application Security Testing) pentru identificarea problemelor de control
                          al accesului în cod
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Monitorizare și Alertare</h3>
                      <p className="text-sm">Implementați monitorizare și alertare pentru activități suspecte:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Monitorizați încercările de acces neautorizat</li>
                        <li>Configurați alerte pentru modele de acces anormale</li>
                        <li>
                          Utilizați soluții SIEM (Security Information and Event Management) pentru corelarea
                          evenimentelor
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Infrastructure as Code (IaC)</h3>
                      <p className="text-sm">
                        Utilizați IaC pentru a defini și aplica politici de securitate consistente:
                      </p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Definiți politici de control al accesului în cod (Terraform, CloudFormation)</li>
                        <li>
                          Utilizați instrumente precum OPA (Open Policy Agent) pentru a aplica politici de securitate
                        </li>
                        <li>Automatizați configurarea firewall-urilor și a grupurilor de securitate</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați "shift-left security" - integrați verificările de securitate cât mai devreme în
                          ciclul de dezvoltare. Utilizați instrumente precum OWASP ZAP sau Burp Suite în pipeline-ul
                          CI/CD pentru a identifica probleme de control al accesului înainte de a ajunge în producție.
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
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
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

