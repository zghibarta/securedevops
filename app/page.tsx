import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, BookOpen, CheckCircle, Library, Menu } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 mx-auto">
        <section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">Securitate în DevOps</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Integrarea securității în DevOps și prevenirea vulnerabilităților OWASP Top Ten
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/*<section className="w-full py-6 md:py-12 lg:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Securitate în DevOps</h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Învățați cum să integrați securitatea în fluxul de lucru DevOps și să preveniți vulnerabilitățile
                  comune folosind OWASP Top Ten 2021 și SSDLC.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/owasp">
                    <Button>
                      Începeți Acum
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/despre">
                    <Button variant="outline">Aflați mai multe</Button>
                  </Link>*
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-[500px] aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center">
                  <Shield className="h-10 w-24 text-slate-400" />
                  <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
                    Securitate integrată în DevOps
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>*/}

        <section className="w-full py-3 md:py-6 lg:py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                {/* <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Secțiuni principale</h2> */}
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explorați conținutul educațional structurat pentru a înțelege mai bine securitatea în DevOps
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-center gap-2 py-4 lg:grid-cols-4 lg:gap-3">
              <Link href="/owasp" className="group">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-2 transition-all hover:bg-muted">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:underline">OWASP Top 10: 2021</h3>
                  <p className="text-center text-muted-foreground">
                    Vulnerabilități de securitate web conform OWASP, cu exemple practice și metode de prevenire
                  </p>
                </div>
              </Link>
              <Link href="/ssdlc" className="group">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-2 transition-all hover:bg-muted">
                  <div className="rounded-full bg-primary/10 p-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:underline">SSDLC în DevOps</h3>
                  <p className="text-center text-muted-foreground">
                    Integrarea Ciclului de Viață pentru Dezvoltarea Securizată a Software-ului în fluxul DevOps
                  </p>
                </div>
              </Link>
              <Link href="/resurse" className="group">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-2 transition-all hover:bg-muted">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Library className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:underline">Bibliotecă de resurse</h3>
                  <p className="text-center text-muted-foreground">
                    Ghiduri de implementare, bune practici și resurse suplimentare pentru securitatea în DevOps
                  </p>
                </div>
              </Link>
              <Link href="/evaluare" className="group">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-2 transition-all hover:bg-muted">
                  <div className="rounded-full bg-primary/10 p-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:underline">Evaluare cunoștințe</h3>
                  <p className="text-center text-muted-foreground">
                    Scenarii practice și exerciții pentru a vă testa cunoștințele despre OWASP și securitatea în DevOps
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
