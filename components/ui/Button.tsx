import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary";
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
  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium rounded-button",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary focus-visible:ring-offset-background",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    "transform-gpu",
    {
      // Primary variant - micro-interactions
      "bg-text-primary text-white shadow-button hover:scale-[1.02] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] active:scale-[0.98] active:shadow-[0_2px_6px_rgba(0,0,0,0.12)]":
        variant === "primary",
      // Secondary variant - micro-interactions
      "bg-white/80 backdrop-blur-sm border border-border text-text-primary hover:scale-[1.02] hover:bg-white hover:shadow-[0_2px_8px_rgba(0,0,0,0.08)] active:scale-[0.98] active:bg-gray-50":
        variant === "secondary",
      // Sizes
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    },
    className
  );

  const ariaLabelValue = ariaLabel || (typeof children === "string" ? children : undefined);

  if (href || asChild) {
    return (
      <Link 
        href={href || "#"} 
        className={baseClasses}
        aria-label={ariaLabelValue}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={baseClasses}
      aria-label={ariaLabelValue}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}