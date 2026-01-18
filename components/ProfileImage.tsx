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

export function ProfileImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
}: ProfileImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (hasError) {
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
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("object-cover w-full h-full", isLoading && "opacity-0")}
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY3Ii8+PC9zdmc+"
      sizes={sizes}
      quality={90}
      onError={() => setHasError(true)}
      onLoad={() => setIsLoading(false)}
    />
  );
}
