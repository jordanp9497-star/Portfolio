"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { site } from "@/lib/content";

const navLinks = [
  { href: "#offers", label: "Offres" },
  { href: "#projects", label: "Projets" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "py-3"
      )}
    >
      <Container>
        <div
          className={cn(
            "p-[1px] rounded-full transition-all duration-300",
            "bg-gradient-to-r from-[rgba(236,72,153,0.35)] via-[rgba(168,85,247,0.25)] to-[rgba(59,130,246,0.35)]"
          )}
        >
          <div
            className={cn(
              "backdrop-blur-xl rounded-full",
              "px-4 sm:px-6 lg:px-8",
              "transition-all duration-300",
              isScrolled ? "border-white/15 shadow-[0_4px_20px_rgba(0,0,0,0.25)]" : "border-white/10"
            )}
            style={{
              background: `
                linear-gradient(to bottom, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02)),
                ${isScrolled ? "rgba(8, 8, 14, 0.78)" : "rgba(8, 8, 14, 0.45)"}
              `,
            }}
          >
            <div className="flex items-center justify-between h-14 sm:h-16">
              {/* Brand + Tagline */}
              <Link
                href="/"
                className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary/20 focus-visible:ring-offset-transparent rounded-lg px-2 -mx-2"
              >
                <span className="text-[15px] font-semibold tracking-tight text-text-primary group-hover:opacity-80 transition-opacity duration-200 ease-out">
                  {site.name}
                </span>
                <span className="text-[10px] sm:text-xs text-text-secondary/70 leading-tight">
                  Consultant • Apps métier • Automatisation
                </span>
              </Link>

              {/* Navigation Desktop */}
              <div className="hidden md:flex items-center gap-7">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[13px] font-medium text-white/70 hover:text-white hover:underline hover:decoration-white/20 hover:underline-offset-8 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary/20 focus-visible:ring-offset-transparent rounded-sm"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href={`mailto:${site.email}?subject=Consultation%20-%20Demande%20de%20contact`}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/14 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20 focus-visible:ring-offset-transparent"
                  style={{
                    boxShadow: "0 2px 12px rgba(168, 85, 247, 0.15), 0 0 20px rgba(59, 130, 246, 0.1)",
                  }}
                >
                  Discuter
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="md:hidden">
                <Link
                  href={`mailto:${site.email}?subject=Consultation%20-%20Demande%20de%20contact`}
                  className="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white/14 transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white/20 focus-visible:ring-offset-transparent"
                  style={{
                    boxShadow: "0 2px 12px rgba(168, 85, 247, 0.15), 0 0 20px rgba(59, 130, 246, 0.1)",
                  }}
                >
                  Discuter
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
