'use client';
import Link from 'next/link';
//import { Button } from '@/components/ui/button';
import {
  Shield,
  BookOpen,
  CheckCircle,
  Library,
} from 'lucide-react';
import Image from 'next/image';
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { app } from '@/lib/firebaseConfig';
import { useEffect } from 'react';

export default function HomePage() {
  // useEffect(() => {
  //   const auth = getAuth(app);
  //   getRedirectResult(auth)
  //     .then((result) => {
  //       if (result && result.user) {
  //         const user = result.user;
  //         const userDetails = {
  //           email: user.email,
  //           name: user.displayName,
  //           uid: user.uid,
  //         };
  //         localStorage.setItem('user', JSON.stringify(userDetails));
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error during redirect result:', error);
  //     });
  // }, []);

  // const handleSignIn = async () => {
  //   const auth = getAuth(app);
  //   const provider = new GoogleAuthProvider();
  //   signInWithRedirect(auth, provider);
  // };


  return (
    <div className="flex flex-col">
      <main className="flex-1 mx-auto">
        <section className="w-full py-6 md:py-8 lg:py-10 bg-muted">
          <div className="container max-w-4xl px-2 md:px-3">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-2xl">
                  Securitate în DevOps
                </h1>
                <p className="max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Integrarea securității în DevOps și prevenirea
                  vulnerabilităților OWASP Top Ten
                </p>
              </div>
              {/* <button
                onClick={handleSignIn}
                className="flex w-1/2 items-center justify-center gap-4 rounded-md border border-slate-300 bg-white px-2 py-2 text-sm font-medium text-slate-700 shadow transition-all hover:bg-gray-100"
              >
                <Image
                  src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
                  alt="Google Logo"
                  width={24}
                  height={24}
                />
                <span className="text-center">
                  Conectează-te cu Google
                </span>
              </button> */}
            </div>
          </div>
          
        </section>
        
        <section className="w-full py-3 md:py-6 lg:py-8">
          <div className="container max-w-4xl px-2 md:px-3">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                {/* <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl">Secțiuni principale</h2> */}
                <p className="max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explorați conținutul educațional structurat pe secțiuni
                  </p>
              </div>
            </div>
            <div className="mx-auto grid items-center gap-4 py-4 lg:grid-cols-2 lg:gap-4">
              <Link href="/owasp" className="group">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-2 transition-all hover:bg-muted">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:underline">
                    OWASP Top 10: 2021
                  </h3>
                  <p className="text-center text-muted-foreground" >
                    Vulnerabilități de securitate web conform OWASP, cu exemple practice și metode de prevenire
                  </p>
                </div>
              </Link>
              <Link href="/ssdlc" className="group">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-2 transition-all hover:bg-muted">
                  <div className="rounded-full bg-primary/10 p-4">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:underline">
                    SSDLC în DevOps
                  </h3>
                  <p className="text-center text-muted-foreground" >
                    Integrarea Ciclului de Viață pentru Dezvoltarea Securizată a Software-ului în fluxul DevOps
                  </p>
                </div>
              </Link>
              <Link href="/resurse" className="group">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-2 transition-all hover:bg-muted">
                  <div className="rounded-full bg-primary/10 p-4">
                    <Library className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:underline">
                    Bibliotecă de resurse
                  </h3>
                  <p className="text-center text-muted-foreground" >
                    Ghiduri de implementare, bune practici și resurse suplimentare pentru securitatea în DevOps
                  </p>
                </div>
              </Link>
              <Link href="/evaluare" className="group">
                <div className="flex flex-col items-center space-y-4 rounded-lg border p-2 transition-all hover:bg-muted">
                  <div className="rounded-full bg-primary/10 p-4">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:underline">
                    Evaluare cunoștințe
                  </h3>
                  <p className="text-center text-muted-foreground" >
                    Scenarii practice și exerciții pentru a vă testa cunoștințele despre OWASP și SecureDevOps
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>  )
}
