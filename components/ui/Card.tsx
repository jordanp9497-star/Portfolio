import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({ children, className, as: Component = "div" }: CardProps) {
  return (
    <Component
      className={cn(
        // Style iOS premium
        "bg-white rounded-card border border-border shadow-card",
        "p-6 sm:p-8",
        // Hover lift effect
        "transition-all duration-300 ease-out transform-gpu",
        "hover:shadow-card-hover hover:-translate-y-0.5",
        // Accessibilité
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary/20 focus-visible:ring-offset-background",
        className
      )}
    >
      {children}
    </Component>
  );
}