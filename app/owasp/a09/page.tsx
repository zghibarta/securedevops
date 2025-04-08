import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A09Page() {
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
            <Link href="/resurse" className="text-sm font-medium hover:underline underline-offset-4">
              Resurse
            </Link>
            <Link href="/evaluare" className="text-sm font-medium hover:underline underline-offset-4">
              Evaluare
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
                <Search className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold tracking-tighter">
                  A09:2021 – Eșecuri de Jurnalizare și Monitorizare a Securității
                </h1>
                <p className="text-muted-foreground">Security Logging and Monitoring Failures</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Eșecurile de jurnalizare și monitorizare a securității se referă la lipsa sau insuficiența
                  mecanismelor de jurnalizare, detectare, monitorizare și răspuns activ la incidente de securitate.
                  Această vulnerabilitate permite atacatorilor să persiste în sistem, să pivoteze către alte sisteme și
                  să manipuleze, extragă sau distrugă date fără a fi detectați.
                </p>
                <p>
                  Această vulnerabilitate a urcat de pe poziția 10 (în 2017, când era numită "Insufficient Logging &
                  Monitoring") pe poziția 9 în topul OWASP 2021, reflectând importanța crescută a jurnalizării și
                  monitorizării în detectarea și răspunsul la incidente de securitate.
                </p>
                <div className="flex justify-center my-6">
                  <Image
                    src="https://8nmeoqw9aev37hfc.public.blob.vercel-storage.com/A09.jpg"
                    alt="A09"
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
                      <h3 className="font-medium">1. Jurnalizare insuficientă</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care nu jurnalizează evenimente critice de securitate, cum ar fi autentificările
                          eșuate, modificările de permisiuni sau accesul la date sensibile. Aceasta face dificilă sau
                          imposibilă detectarea și investigarea incidentelor de securitate.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. Jurnalizare la nivel nepotrivit</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care jurnalizează prea puține informații pentru a fi utile sau prea multe
                          informații, făcând dificilă identificarea evenimentelor relevante. De exemplu, jurnalizarea
                          doar a faptului că a avut loc o eroare, fără detalii despre natura erorii sau contextul în
                          care a apărut.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. Jurnalizare nesigură</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Aplicații care jurnalizează date sensibile, cum ar fi parole, token-uri de sesiune sau date
                          personale, fără a le masca sau criptă. Aceasta poate duce la expunerea datelor sensibile în
                          cazul accesului neautorizat la jurnale.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. Lipsa monitorizării</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Organizații care nu monitorizează activ jurnalele de securitate sau care nu au implementat
                          sisteme de alertare pentru evenimente suspecte. Aceasta permite atacatorilor să opereze
                          nedetectați pentru perioade lungi de timp.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Lipsa răspunsului la incidente</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">
                          Organizații care nu au implementat procese de răspuns la incidente sau care nu răspund prompt
                          la alertele de securitate. Aceasta permite atacatorilor să persiste în sistem și să cauzeze
                          daune semnificative înainte de a fi opriți.
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
                        <h3 className="font-medium">Implementați jurnalizare cuprinzătoare</h3>
                        <p className="text-sm text-muted-foreground">
                          Jurnalizați toate evenimentele relevante pentru securitate, inclusiv autentificări reușite și
                          eșuate, modificări de permisiuni, accesul la date sensibile și alte activități critice.
                          Includeți suficiente detalii pentru a permite investigarea incidentelor.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Asigurați integritatea jurnalelor</h3>
                        <p className="text-sm text-muted-foreground">
                          Protejați jurnalele împotriva modificărilor neautorizate. Stocați jurnalele pe sisteme
                          separate, utilizați mecanisme de append-only și implementați verificări de integritate pentru
                          a detecta manipularea jurnalelor.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Protejați datele sensibile în jurnale</h3>
                        <p className="text-sm text-muted-foreground">
                          Mascați sau criptați datele sensibile în jurnale, cum ar fi parole, token-uri de sesiune, date
                          personale sau alte informații confidențiale. Implementați politici de retenție a jurnalelor
                          pentru a limita expunerea datelor sensibile.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați monitorizare activă</h3>
                        <p className="text-sm text-muted-foreground">
                          Monitorizați activ jurnalele de securitate pentru a detecta activități suspecte. Utilizați
                          sisteme SIEM (Security Information and Event Management) pentru a centraliza și corela
                          jurnalele din diferite surse.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați alertare eficientă</h3>
                        <p className="text-sm text-muted-foreground">
                          Configurați alerte pentru evenimente suspecte sau anormale. Asigurați-vă că alertele sunt
                          acționabile și că nu generează prea multe false pozitive, care ar putea duce la "alertă
                          oboseală" (alert fatigue).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Dezvoltați un plan de răspuns la incidente</h3>
                        <p className="text-sm text-muted-foreground">
                          Dezvoltați și testați un plan de răspuns la incidente de securitate. Definiți roluri și
                          responsabilități clare, stabiliți proceduri pentru investigarea și remedierea incidentelor și
                          implementați mecanisme pentru a învăța din incidente.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu jurnalizați date sensibile în text clar. Nu stocați jurnalele doar local pe serverele de
                          aplicații. Nu ignorați alertele de securitate sau nu le tratați cu prioritate scăzută.
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
                      <h3 className="font-medium">Centralizarea Jurnalelor</h3>
                      <p className="text-sm">Implementați centralizarea jurnalelor în infrastructura DevOps:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați soluții precum ELK Stack (Elasticsearch, Logstash, Kibana) sau Graylog</li>
                        <li>Configurați agenți de colectare a jurnalelor pe toate sistemele</li>
                        <li>Implementați retenția și arhivarea jurnalelor conform politicilor organizației</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Monitorizare și Alertare</h3>
                      <p className="text-sm">Implementați monitorizare și alertare automată:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Utilizați soluții precum Prometheus, Grafana sau New Relic pentru monitorizare</li>
                        <li>Configurați alerte pentru evenimente de securitate și anomalii</li>
                        <li>Implementați integrări cu sistemele de ticketing și notificare</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Automatizarea Răspunsului</h3>
                      <p className="text-sm">Implementați automatizarea răspunsului la incidente:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>
                          Utilizați SOAR (Security Orchestration, Automation and Response) pentru a automatiza răspunsul
                        </li>
                        <li>Implementați playbook-uri pentru scenarii comune de incidente</li>
                        <li>Automatizați colectarea de dovezi forensice în cazul incidentelor</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Testarea Jurnalizării</h3>
                      <p className="text-sm">Includeți testarea jurnalizării în pipeline-urile CI/CD:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Verificați că evenimentele de securitate sunt jurnalizate corespunzător</li>
                        <li>Testați că alertele sunt generate pentru activități suspecte</li>
                        <li>Simulați incidente de securitate pentru a testa răspunsul</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați "Observability as Code" în pipeline-urile DevOps, definind și gestionând
                          configurațiile de jurnalizare, monitorizare și alertare ca cod. Aceasta asigură consistența
                          între medii și facilitează auditarea și îmbunătățirea continuă a capacităților de detectare și
                          răspuns.
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

