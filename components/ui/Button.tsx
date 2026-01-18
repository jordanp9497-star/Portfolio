import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "cta";
  size?: "md" | "lg";
  children: ReactNode;
  asChild?: boolean;
};

type ButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonLinkProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  asChild,
  "aria-label": ariaLabel,
  ...props
}: ButtonProps | ButtonLinkProps) {
  // Styles de base pour tous les boutons
  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium",
    "text-white",
    "rounded-full",
    "border border-white/10",
    "bg-white/5",
    "hover:bg-white/10",
    "backdrop-blur-xl",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ai-blue)]/30",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    "transform-gpu",
    "active:scale-[0.98]",
    {
      // Secondary variant et fallback - glass sombre (bg-white/6 + border)
      "bg-white/6 border-white/10":
        variant !== "primary" && variant !== "cta",
      // CTA variant - gradient IA (rose->violet->bleu) + texte blanc + glow léger
      "bg-gradient-to-r from-[color:var(--ai-pink)] via-[color:var(--ai-violet)] to-[color:var(--ai-blue)] border-transparent":
        variant === "cta",
      // Primary variant - utilise les styles de base (bg-white/5 déjà défini)
      // Sizes
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    className
  );

  // Style inline pour le glow du variant CTA
  const buttonStyle = variant === "cta" ? {
    boxShadow: "0 4px 20px rgba(168, 85, 247, 0.3), 0 0 40px rgba(59, 130, 246, 0.2)",
  } : undefined;

  const buttonClassName = cn(
    baseClasses,
    variant === "cta" && "hover:[box-shadow:0_6px_30px_rgba(168,85,247,0.4),0_0_50px_rgba(59,130,246,0.3)]"
  );

  const ariaLabelValue = ariaLabel || (typeof children === "string" ? children : undefined);

  if (href || asChild) {
    return (
      <Link 
        href={href || "#"} 
        className={buttonClassName}
        style={buttonStyle}
        aria-label={ariaLabelValue}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClassName}
      style={buttonStyle}
      aria-label={ariaLabelValue}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}