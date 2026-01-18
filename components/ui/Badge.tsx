import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  variant?: "in-progress" | "default";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  if (variant === "in-progress") {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium",
          "bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[color:var(--border)]",
          "text-text-secondary",
          className
        )}
      >
        {/* Mini point gradient IA */}
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{
            background: "linear-gradient(135deg, rgba(236, 72, 153, 0.8) 0%, rgba(168, 85, 247, 0.8) 50%, rgba(59, 130, 246, 0.8) 100%)",
            boxShadow: "0 0 6px rgba(168, 85, 247, 0.4)",
          }}
        />
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        "bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[color:var(--border)]",
        "text-text-secondary",
        className
      )}
    >
      {children}
    </span>
  );
}
