import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string | ReactNode;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function SectionTitle({
  title,
  subtitle,
  className,
  titleClassName,
  subtitleClassName,
  as: TitleTag = "h2",
}: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-8 sm:mb-12", className)}>
      <TitleTag
        className={cn(
          // Hiérarchie typographique premium
          "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-text-primary mb-4 sm:mb-5",
          "tracking-tight leading-[1.1]",
          titleClassName
        )}
      >
        {title}
      </TitleTag>
      {subtitle && (
        <p
          className={cn(
            // Subtitle premium
            "text-base sm:text-lg lg:text-xl text-text-secondary/80 max-w-2xl mx-auto",
            "leading-relaxed font-normal",
            subtitleClassName
          )}
          role="doc-subtitle"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}