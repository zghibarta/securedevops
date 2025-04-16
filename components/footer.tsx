import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-6">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &amp;copy; {new Date().getFullYear()}{" "}
          Securedevops - platformă informativ-educațională despre securitatea în DevOps
        </p>
        <div className="flex gap-4">
          <Link href="/termeni" className="text-sm text-muted-foreground hover:underline underline-offset-4">
            Termeni și Condiții
          </Link>
        </div>
      </div>
    </footer>
  );
}