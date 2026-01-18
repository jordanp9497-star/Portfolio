import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-container py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <p className="text-sm text-text-secondary">
            © {new Date().getFullYear()} Jordan. Tous droits réservés.
          </p>
          
          <nav className="flex items-center gap-4 sm:gap-6">
            <Link
              href="#offers"
              className="text-sm text-text-secondary hover:text-text-primary active:text-text-primary/80 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary focus-visible:ring-offset-background rounded-sm"
            >
              Offres
            </Link>
            <Link
              href="#project"
              className="text-sm text-text-secondary hover:text-text-primary active:text-text-primary/80 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary focus-visible:ring-offset-background rounded-sm"
            >
              Projet
            </Link>
            <Link
              href="#process"
              className="text-sm text-text-secondary hover:text-text-primary active:text-text-primary/80 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary focus-visible:ring-offset-background rounded-sm"
            >
              Process
            </Link>
            <Link
              href="#contact"
              className="text-sm text-text-secondary hover:text-text-primary active:text-text-primary/80 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary focus-visible:ring-offset-background rounded-sm"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}