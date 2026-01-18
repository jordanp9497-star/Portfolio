import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: ReactNode;
  variant?: "default" | "outline";
  className?: string;
}

export function Chip({ children, variant = "default", className }: ChipProps) {
  return (
    <span
      className={cn(
        // Style pill glass sombre
        "inline-flex items-center justify-center",
        "px-4 py-1.5 text-sm font-medium rounded-full",
        "transition-all duration-200 ease-out",
        "border",
        {
          // Default: glass sombre avec border léger
          "bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border-[color:var(--border)] text-text-primary hover:bg-[rgba(255,255,255,0.08)] hover:border-[color:var(--border)]/60":
            variant === "default",
          // Outline: border avec fond transparent
          "bg-transparent border-[color:var(--border)] text-text-secondary hover:bg-[rgba(255,255,255,0.04)] hover:text-text-primary":
            variant === "outline",
        },
        className
      )}
      aria-label={typeof children === "string" ? children : undefined}
    >
      {children}
    </span>
  );
}