"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProfileImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const profileSrcCandidates = ["/me.jpg", "/me.jpeg", "/me.png", "/me.webp"];

export function ProfileImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
}: ProfileImageProps) {
  const [srcIndex, setSrcIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Si src fourni est déjà dans les candidates, utilise son index, sinon utilise 0
  const initialIndex = profileSrcCandidates.indexOf(src);
  const [currentSrcIndex, setCurrentSrcIndex] = useState(initialIndex >= 0 ? initialIndex : 0);
  const currentSrc = profileSrcCandidates[currentSrcIndex];
  const hasExhaustedAllCandidates = currentSrcIndex >= profileSrcCandidates.length;

  const handleError = () => {
    if (currentSrcIndex < profileSrcCandidates.length - 1) {
      // Essayer la prochaine extension
      setCurrentSrcIndex(currentSrcIndex + 1);
    } else {
      // Toutes les extensions ont échoué, on garde le fallback JP
      setCurrentSrcIndex(profileSrcCandidates.length); // Index hors limites pour déclencher le fallback
    }
    setIsLoading(false);
  };

  if (hasExhaustedAllCandidates || currentSrcIndex >= profileSrcCandidates.length) {
    // Placeholder avec initiales JP
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-text-primary/10 to-text-primary/5",
          "text-text-primary font-bold",
          className
        )}
        style={{ width: "100%", height: "100%" }}
      >
        <span className="text-2xl sm:text-3xl lg:text-4xl">JP</span>
      </div>
    );
  }

  return (
    <Image
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover w-full h-full", isLoading && "opacity-0")}
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY3Ii8+PC9zdmc+"
      sizes={sizes}
      quality={90}
      onError={handleError}
      onLoad={() => setIsLoading(false)}
    />
  );
}
