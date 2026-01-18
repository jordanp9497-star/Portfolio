"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

const navLinks = [
  { href: "#offers", label: "Offres" },
  { href: "#project", label: "Projet" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Throttle pour performance
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-4 right-4 z-50 transition-all duration-300",
        "max-w-container mx-auto"
      )}
    >
      <div
        className={cn(
          // Style pill translucide iOS
          "bg-white/70 backdrop-blur-xl rounded-full",
          "border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.06)]",
          "px-4 sm:px-6 lg:px-8",
          "transition-all duration-300",
          isScrolled && "shadow-[0_8px_32px_rgba(0,0,0,0.08)]"
        )}
      >
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand + Tagline */}
          <Link
            href="/"
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary/20 focus-visible:ring-offset-transparent rounded-lg px-2 -mx-2"
          >
            <span className="text-base sm:text-lg font-semibold text-text-primary group-hover:opacity-80 transition-opacity duration-200 ease-out">
              {site.name}
            </span>
            <span className="text-[10px] sm:text-xs text-text-secondary/70 leading-tight">
              Consultant • Apps métier • Automatisation
            </span>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm lg:text-base text-text-secondary hover:text-text-primary active:text-text-primary/80 transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary/20 focus-visible:ring-offset-transparent rounded-sm"
              >
                {link.label}
              </Link>
            ))}
            <Button 
              variant="primary" 
              size="md" 
                    href={`mailto:${site.email}?subject=Consultation%20-%20Demande%20de%20contact`}
            >
              Discuter
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <Button 
              variant="primary" 
              size="md" 
                    href={`mailto:${site.email}?subject=Consultation%20-%20Demande%20de%20contact`}
            >
              Discuter
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}