"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface RobotChatButtonProps {
  onOpenChat?: () => void;
  className?: string;
}

export function RobotChatButton({ onOpenChat, className }: RobotChatButtonProps) {
  const [showBubble, setShowBubble] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Masquer la bulle après 7 secondes
    const timer = setTimeout(() => {
      setShowBubble(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (onOpenChat) {
      onOpenChat();
    } else {
      // Événement personnalisé pour ouvrir le chat
      const openChatEvent = new CustomEvent("openChat");
      window.dispatchEvent(openChatEvent);
      
      // Fallback : cliquer sur le bouton du chat ou scroller vers contact
      const chatButton = document.querySelector('[data-chat-open-button]') as HTMLElement;
      if (chatButton) {
        chatButton.click();
      } else {
        const contactSection = document.querySelector("#contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative flex items-center justify-center",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-full",
        "transition-all duration-300 ease-out",
        isHovered && "transform translate-y-[-4px]",
        className
      )}
      aria-label="Ouvrir le chat"
      style={{
        filter: isHovered ? "drop-shadow(0 8px 16px rgba(168, 85, 247, 0.25))" : "none",
      }}
    >
      {/* Bulle de texte */}
      {showBubble && (
        <div className="robot-bubble absolute bottom-full right-0 mb-3 mr-[-40px] sm:mr-[-20px]">
          <div className="relative bg-white/90 backdrop-blur-sm text-black text-xs sm:text-sm px-3 py-2 rounded-lg shadow-lg max-w-[200px] sm:max-w-[240px]">
            <p className="leading-relaxed">
              Besoin d'aide ? Discutons de votre projet ! 🤖
            </p>
            {/* Flèche pointant vers le robot */}
            <div className="absolute bottom-[-6px] right-8 sm:right-12 w-3 h-3 bg-white/90 transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* Robot SVG */}
      <div className="robot-container relative">
        <svg
          width="56"
          height="64"
          viewBox="0 0 56 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="robot-svg"
        >
          {/* Corps */}
          <rect x="12" y="24" width="32" height="32" rx="6" fill="url(#robotGradient)" />
          
          {/* Tête */}
          <rect x="16" y="8" width="24" height="20" rx="5" fill="url(#robotGradient)" />
          
          {/* Yeux */}
          <circle cx="24" cy="16" r="2.5" fill="rgb(59, 130, 246)" className="robot-eye-left" />
          <circle cx="32" cy="16" r="2.5" fill="rgb(59, 130, 246)" className="robot-eye-right" />
          
          {/* Bouche */}
          <rect x="24" y="22" width="8" height="3" rx="1.5" fill="rgb(168, 85, 247)" />
          
          {/* Antenne */}
          <rect x="27" y="4" width="2" height="6" fill="url(#robotGradient)" />
          <circle cx="28" cy="4" r="2" fill="rgb(236, 72, 153)" />
          
          {/* Boutons corps */}
          <circle cx="20" cy="36" r="2" fill="rgb(168, 85, 247)" />
          <circle cx="28" cy="36" r="2" fill="rgb(168, 85, 247)" />
          <circle cx="36" cy="36" r="2" fill="rgb(168, 85, 247)" />
          
          {/* Définition gradient */}
          <defs>
            <linearGradient id="robotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" />
              <stop offset="50%" stopColor="rgb(168, 85, 247)" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </button>
  );
}
