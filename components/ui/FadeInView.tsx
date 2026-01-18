"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function FadeInView({
  children,
  delay = 0,
  direction = "up",
  className,
}: FadeInViewProps) {
  const ref = useRef(null);
  // Optimisé : margin plus petit pour activer plus tôt, once pour ne s'exécuter qu'une fois
  const isInView = useInView(ref, { once: true, margin: "-50px", amount: 0.2 });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
      x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.5, // Réduit de 0.6 à 0.5 pour plus de fluidité
        delay,
        ease: [0.22, 1, 0.36, 1], // Easing iOS-style
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
      style={{ willChange: isInView ? "auto" : "transform, opacity" }} // Optimisation performance
    >
      {children}
    </motion.div>
  );
}