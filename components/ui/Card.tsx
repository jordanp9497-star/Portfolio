import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function Card({ children, className, as: Component = "div" }: CardProps) {
  return (
    <div
      className={cn(
        // Wrapper gradient
        "p-[1px] rounded-[24px]",
        "transition-all duration-300 ease-out transform-gpu",
        "hover:translate-y-[-2px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      )}
      style={{
        background: "conic-gradient(from 0deg at 50% 50%, rgba(236, 72, 153, 0.15) 0deg, rgba(168, 85, 247, 0.12) 90deg, rgba(59, 130, 246, 0.15) 180deg, rgba(168, 85, 247, 0.12) 270deg, rgba(236, 72, 153, 0.15) 360deg)",
      }}
    >
      <Component
        className={cn(
          // Inner card
          "rounded-[23px] bg-[color:var(--card)] backdrop-blur-xl",
          "border border-[color:var(--border)]",
          "shadow-[var(--shadow)]",
          "p-6 sm:p-8",
          // Accessibilité
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary/20 focus-visible:ring-offset-background",
          className
        )}
      >
        {children}
      </Component>
    </div>
  );
}