import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, ArrowLeft, Shield, CheckCircle, XCircle, AlertTriangle } from "lucide-react"
import Image from "next/image"

export default function A05Page() {
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
              <div className="rounded-full bg-red-500/10 p-3">
                <Code className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tighter">A05:2025 – Injectare</h1>
                <p className="text-muted-foreground">Injection</p>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Descriere</CardTitle>
                <CardDescription>Ce reprezintă această vulnerabilitate?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>
                  Injectarea apare atunci când datele furnizate de utilizator nu sunt validate, filtrate sau sanitizate corespunzător. Atacatorii pot trimite date ostile ca parte a unei comenzi sau interogări, permițând executarea de cod neautorizat.
                </p>
                <p>
                  Principalele tipuri de injectare includ:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>SQL Injection - inserare de comenzi SQL în câmpuri de intrare</li>
                  <li>OS Command Injection - executare de comenzi de sistem</li>
                  <li>LDAP Injection - manipularea interogărilor LDAP</li>
                  <li>XML/XPath Injection - injectare în documente XML</li>
                  <li>NoSQL Injection - atacuri asupra bazelor NoSQL</li>
                  <li>Template Injection - injectare în motoare de template</li>
                </ul>
                <p className="mt-2">
                  A descinde din poziția A03:2021 la A05:2025, dar rămâne o vulnerabilitate critică prezentă în aproximativ 94% din aplicațiile testate cu o rată medie de incidență de 3.24%.
                </p>
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                  <p className="text-sm text-blue-900">
                    <strong>Statistici OWASP 2025:</strong> Injectarea afectează practic toate aplicațiile web și rămâne una din cele mai frequente și periculoase vulnerabilități.
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
                      <h3 className="font-medium">1. SQL Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">SELECT * FROM users WHERE id = {'{id}'}</p>
                        <p className="mt-2 text-sm">Dacă id este &quot;1 OR 1=1&quot; fără validare, va returna toți utilizatorii. SQL Injection permite recuperarea, modificarea sau ștergerea datelor.</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">2. OS Command Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">exec(&quot;ping -c &quot; + userInput)</p>
                        <p className="mt-2 text-sm">Dacă userInput este &quot;8.8.8.8; rm -rf /&quot;, va executa comanda malware. Permite execuția de comenzi arbitrare pe server.</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">3. NoSQL Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">{'{username: username, password: password}'}</p>
                        <p className="mt-2 text-sm">Inputuri cum ar fi {'{&quot;$ne&quot;: &quot;&quot;}'} permit bypass-ul autentificării în bazele NoSQL.</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">4. LDAP Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm">Inputuri malware în căutări LDAP permit eludarea autentificării și extragerea de informații din directoare.</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">5. Template Engine Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">{'{{'}{'{7*7}'}{'}}'}</p>
                        <p className="mt-2 text-sm">Serverul evaluează expresia și returnează 49. Template injection poate permite execuția de cod pe server din template-uri nevalidate.</p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">6. XPath Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">xpath_query = &quot;//user[username='&quot; + user_input + &quot;']&quot;</p>
                        <p className="mt-2 text-sm">
                          Inputuri cum ar fi &quot;' or '1'='1&quot; permit bypaszarea autentificării în documente XML. Permite efiltrarea de date sensibile din DOM.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">7. Expression Language (EL) Injection</h3>
                      <div className="rounded-md bg-muted p-4">
                        <p className="text-sm font-mono">${'{'}{'{message}'}{'}'}  // JSF / Spring message</p>
                        <p className="mt-2 text-sm">
                          Dacă message vine din user input fără validare, un atacator poate injecta expresii care accesează variabile sensibile sau execută cod.
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
                        <h3 className="font-medium">Utilizați Prepared Statements</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați interogări parametrizate pentru baze de date. Codul și datele sunt separate, prevenind SQL Injection. Aproape toți driverii de baze de date suportă prepared statements.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Validarea și Sanitizarea Inputului</h3>
                        <p className="text-sm text-muted-foreground">
                          Validați dacă inputul respectă formatul așteptat. Sanitizați pentru a elimina caractere periculoase. Implementați whitelist-uri de caractere permise.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Evitați Constructia Dinamică a Comenzilor</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu construiți comenzi SQL, LDAP, sistem, etc. prin concatenare de string-uri. Utilizați API-uri sigure și parametrizate.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Preveniți Template Engine Injection</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu evaluați template-uri cu user input. Utilizați template-uri cu sandbox (Jinja2 sandbox, Handlebars). Validați și escapați user-supplied values.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Securizați XPath și XML Queries</h3>
                        <p className="text-sm text-muted-foreground">
                          Utilizați XPath parameterized queries sau XQuery cu prepared statements. Evitați concatenarea user input în XPath expressions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Dezactivați Expression Language Evaluation</h3>
                        <p className="text-sm text-muted-foreground">
                          Dacă posibil, dezactivați EL-ul în JSP. Utilizați JNDI o alternativă care validează strict. Utilizați &lt;%@ page isELIgnored=&quot;true&quot; %&gt; pentru a dezactiva EL.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu concatenați user input în query-uri SQL, LDAP, XPath sau expresii template. Nu evaluați cod dinamic pe baza inputului utilizatorului. Nu crezdeți că whitelist-ul pe client este suficient.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Implementați Principiul Privilegiului Minim</h3>
                        <p className="text-sm text-muted-foreground">
                          Bazele de date trebuie să aibă conturi cu privilegii minime. Dacă aplicația are nevoie doar de SELECT, nu dați UPDATE sau DELETE.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu construiți comenzi prin concatenare. Nu omiteți validarea inputului. Nu executați cod dinamic (eval, exec). Nu ignora mesajele eroare ale bazei de date.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Gestionați mesajele de eroare</h3>
                        <p className="text-sm text-muted-foreground">
                          Configurați aplicațiile pentru a afișa mesaje de eroare generice care nu dezvăluie informații
                          sensibile despre sistem. Implementați jurnalizarea detaliată a erorilor pentru depanare, dar
                          asigurați-vă că aceste jurnale nu sunt accesibile publicului.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Utilizați configurații consistente</h3>
                        <p className="text-sm text-muted-foreground">
                          Asigurați-vă că toate mediile (dezvoltare, testare, producție) utilizează configurații de
                          securitate consistente. Utilizați instrumente de gestionare a configurației pentru a menține
                          această consistență.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <XCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Practici de evitat</h3>
                        <p className="text-sm text-muted-foreground">
                          Nu utilizați configurări implicite. Nu lăsați servicii, porturi sau funcționalități inutile
                          activate. Nu expuneți informații sensibile în mesajele de eroare. Nu amânați aplicarea
                          patch-urilor de securitate.
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
                      <h3 className="font-medium">Infrastructure as Code (IaC)</h3>
                      <p className="text-sm">Utilizați Infrastructure as Code pentru a gestiona configurațiile:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Definiți configurațiile de securitate ca cod (Terraform, CloudFormation, Ansible)</li>
                        <li>Versiunile configurațiilor pentru a permite auditarea și rollback</li>
                        <li>Automatizați implementarea configurațiilor în toate mediile</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Scanare Automată</h3>
                      <p className="text-sm">Implementați scanări automate pentru configurări greșite:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Integrați scanere de configurare în pipeline-urile CI/CD</li>
                        <li>Utilizați instrumente precum AWS Config, Azure Policy sau instrumente open-source</li>
                        <li>
                          Configurați gate-uri de calitate care blochează deployment-urile cu configurări nesigure
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Gestionarea patch-urilor</h3>
                      <p className="text-sm">Automatizați Gestionarea patch-urilor de securitate:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Implementați scanări automate pentru vulnerabilități cunoscute</li>
                        <li>Utilizați instrumente de gestionare a dependențelor pentru a actualiza bibliotecile</li>
                        <li>Automatizați procesul de testare și deployment pentru patch-uri de securitate</li>
                      </ul>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-medium">Imagini de bază securizate</h3>
                      <p className="text-sm">Utilizați imagini de bază securizate pentru deployment:</p>
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>Creați imagini de bază hardened pentru servere, containere și mașini virtuale</li>
                        <li>Scanați imaginile pentru vulnerabilități și configurări greșite</li>
                        <li>Actualizați regulat imaginile de bază cu patch-uri de securitate</li>
                      </ul>
                    </div>

                    <div className="rounded-md bg-amber-50 border border-amber-200 p-4 flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-amber-800">Recomandare pentru DevOps</h3>
                        <p className="text-sm text-amber-700">
                          Implementați "Configuration as Code" și "Policy as Code" pentru a defini și aplica politici de
                          securitate în mod automat. Utilizați instrumente precum OPA (Open Policy Agent) pentru a
                          valida configurațiile înainte de deployment și pentru a asigura conformitatea continuă în
                          mediile de producție.
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
