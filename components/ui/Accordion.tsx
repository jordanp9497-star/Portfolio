"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string | ReactNode;
  defaultOpen?: boolean;
}

export function AccordionItem({
  question,
  answer,
  defaultOpen = false,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen(!isOpen);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        className={cn(
          "w-full flex items-center justify-between py-4 sm:py-6 text-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-text-primary focus-visible:ring-offset-background rounded-sm",
          "transition-colors duration-200 ease-out",
          "hover:bg-gray-50/50 active:bg-gray-100/50 -mx-2 px-2 rounded-sm"
        )}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${question.slice(0, 10)}`}
      >
        <span className="text-base sm:text-lg font-semibold text-text-primary pr-4">
          {question}
        </span>
        <svg
          className={cn(
            "w-5 h-5 text-text-secondary flex-shrink-0 transition-transform duration-300",
            isOpen && "transform rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        id={`accordion-content-${question.slice(0, 10)}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="pb-4 sm:pb-6 text-base text-text-secondary leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  children: ReactNode;
  className?: string;
}

export function Accordion({ children, className }: AccordionProps) {
  return (
    <div className={cn("w-full", className)} role="region" aria-label="FAQ">
      {children}
    </div>
  );
}