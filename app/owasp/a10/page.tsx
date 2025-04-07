import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A10Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <Link href="/" className="text-lg font-bold">
              SecureDevOps
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
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
      <main className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-12">
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
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">
                  A10:2021 – Falsificarea Cererilor pe Partea Serverului
                </h1>
                <p className="text-muted-foreground">Server-Side Request Forgery (SSRF)</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Falsificarea Cererilor pe Partea Serverului (SSRF) apare atunci când o aplicație web preia o resursă
                  de la distanță fără a valida suficient URL-ul furnizat de utilizator. Aceasta permite atacatorilor să
                  forțeze aplicația să trimită cereri modificate către un domeniu neașteptat, care poate fi accesibil
                  doar intern sau extern.
                </p>
                <p>
                  Această vulnerabilitate este nouă în topul OWASP 2021, ocupând poziția 10, reflectând creșterea
                  prevalenței și impactului atacurilor SSRF, în special în contextul arhitecturilor bazate pe
                  microservicii și cloud.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="https://8nmeoqw9aev37hfc.public.blob.vercel-storage.com/A10.jpg"
                    alt="A10"
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
                      <h3 className="font-medium">1. Accesarea serviciilor interne</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Un atacator poate modifica URL-ul unei cereri pentru a accesa servicii interne care nu ar
                          trebui să fie accesibile din exterior. De exemplu, modificarea unui URL de la
                          "https://api.example.com/data" la "http://internal-service.local/admin" pentru a accesa un
                          panou de administrare intern.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Scanarea porturilor și rețelelor interne</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Atacatorii pot utiliza SSRF pentru a scana porturi și rețele interne, identificând servicii și
                          sisteme care nu sunt expuse direct pe internet. Aceasta poate fi utilizată pentru a
                          cartografia infrastructura internă și a identifica ținte potențiale pentru atacuri ulterioare.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Accesarea metadatelor cloud</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          În mediile cloud, atacatorii pot utiliza SSRF pentru a accesa endpoint-uri de metadate, cum ar
                          fi "http://169.254.169.254" în AWS, pentru a obține informații sensibile precum credențiale
                          temporare, chei de acces sau alte date de configurare.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Bypass-ul filtrelor de URL</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Atacatorii pot utiliza diverse tehnici pentru a ocoli filtrele de URL, cum ar fi utilizarea de
                          scheme URL alternative (file://, dict://, gopher://), redirectări, codificări URL sau DNS
                          rebinding pentru a accesa resurse restricționate.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Exploatarea serviciilor locale</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Atacatorii pot utiliza SSRF pentru a interacționa cu servicii locale care rulează pe server,
                          cum ar fi Redis, Memcached sau Elasticsearch, care pot fi configurate să accepte conexiuni
                          doar de pe localhost și nu au autentificare puternică.
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
                        <h3 className="font-medium">Implementați liste albe pentru URL-uri</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați liste albe pentru a permite doar domenii și scheme URL specifice și de încredere.
                          Evitați utilizarea listelor negre, care pot fi ocolite prin diverse tehnici.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Validați și sanitizați datele de intrare</h3>
                        <p className="text-sm text-muted-foreground">
                          Validați și sanitizați toate datele de intrare, în special URL-urile furnizate de utilizator.
                          Verificați schema, domeniul, portul și calea URL-ului înainte de a efectua cereri.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați rețele segmentate</h3>
                        <p className="text-sm text-muted-foreground">
                          Segmentați rețelele și utilizați firewall-uri pentru a izola componentele critice.
                          Implementați politici de acces la rețea care restricționează comunicarea între servicii la
                          minimul necesar.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Blocați traficul către adrese IP private</h3>
                        <p className="text-sm text-muted-foreground">
                          Configurați firewall-uri pentru a bloca traficul către adrese IP private și loopback din
                          serviciile publice. Aceasta include adresele din intervalele 127.0.0.0/8, 169.254.0.0/16,
                          172.16.0.0/12, 192.168.0.0/16 și altele.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați HTTP client-uri restrictive</h3>
                        <p className="text-sm text-muted-foreground">
                          Configurați client-urile HTTP pentru a respinge redirectările, a limita schemele URL permise
                          și a impune timeout-uri stricte. Utilizați biblioteci care permit configurarea detaliată a
                          comportamentului client-ului.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați autentificare pentru serviciile interne</h3>
                        <p className="text-sm text-muted-foreground">
                          Asigurați-vă că toate serviciile interne necesită autentificare, chiar dacă sunt accesibile
                          doar din rețeaua internă. Aceasta adaugă un nivel suplimentar de protecție în cazul în care un
                          atacator reușește să ocolească alte controale.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu vă bazați exclusiv pe validarea pe partea de client. Nu utilizați liste negre pentru
                          filtrarea URL-urilor. Nu permiteți cereri către adrese IP sau localhost direct. Nu expuneți
                          mesaje de eroare detaliate care ar putea ajuta atacatorii.
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
                      <h3 className="font-medium">Securizarea Infrastructurii Cloud</h3>
                      <p className="text-sm">Implementați măsuri de securitate pentru infrastructura cloud:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați servicii de metadate IMDSv2 în AWS, care sunt mai rezistente la SSRF</li>
                        <li>Implementați politici IAM restrictive pentru a limita accesul la resurse</li>
                        <li>Utilizați VPC-uri și subnet-uri pentru a izola componentele aplicației</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Testarea de Securitate</h3>
                      <p className="text-sm">Implementați testare de securitate pentru SSRF:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Includeți teste specifice pentru SSRF în testele de penetrare</li>
                        <li>Utilizați instrumente de scanare de securitate care pot detecta vulnerabilități SSRF</li>
                        <li>Implementați teste automate pentru a verifica eficacitatea controalelor SSRF</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Monitorizare și Detectare</h3>
                      <p className="text-sm">Implementați monitorizare pentru detectarea atacurilor SSRF:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Monitorizați și alertați pentru cereri neobișnuite către servicii interne</li>
                        <li>
                          Implementați sisteme de detectare a intruziunilor pentru a identifica modele de trafic
                          suspecte
                        </li>
                        <li>Jurnalizați și analizați toate cererile HTTP efectuate de aplicații</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Configurarea Proxy-urilor</h3>
                      <p className="text-sm">Utilizați proxy-uri pentru a controla cererile externe:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Implementați proxy-uri de ieșire pentru toate cererile externe</li>
                        <li>Configurați proxy-urile pentru a permite doar domenii și IP-uri aprobate</li>
                        <li>Utilizați proxy-uri care pot inspecta și filtra conținutul cererilor</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați o arhitectură de "zero trust" în care niciun serviciu nu este de încredere
                          implicit. Utilizați autentificare mutuală TLS (mTLS) între servicii pentru a asigura că doar
                          serviciile autorizate pot comunica între ele, reducând astfel riscul de atacuri SSRF.
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

