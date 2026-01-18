interface GearsBackgroundProps {
  intensity?: "soft" | "medium";
}

export default function GearsBackground({ intensity = "soft" }: GearsBackgroundProps) {
  const opacity = intensity === "medium" ? 0.14 : 0.08;

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden mix-blend-screen"
      style={{ opacity }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradient IA bleu-violet-rose */}
          <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.12" />
            <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.12" />
            <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.12" />
          </linearGradient>
        </defs>

        {/* Grand engrenage - centre-droit */}
        <g
          className="gear-rotate-large"
          transform="translate(780, 360)"
          style={{
            filter: "drop-shadow(0 0 8px rgba(168, 85, 247, 0.15))",
          }}
        >
          <circle
            cx="0"
            cy="0"
            r="120"
            fill="none"
            stroke="url(#gearGradient)"
            strokeWidth="2"
          />
          {/* Dents de l'engrenage */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            const rad = (angle * Math.PI) / 180;
            const x1 = Math.cos(rad) * 110;
            const y1 = Math.sin(rad) * 110;
            const x2 = Math.cos(rad) * 120;
            const y2 = Math.sin(rad) * 120;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#gearGradient)"
                strokeWidth="2"
              />
            );
          })}
          {/* Cercle central */}
          <circle cx="0" cy="0" r="40" fill="none" stroke="url(#gearGradient)" strokeWidth="2" />
        </g>

        {/* Moyen engrenage - centre-gauche */}
        <g
          className="gear-rotate-medium"
          transform="translate(420, 400)"
          style={{
            filter: "drop-shadow(0 0 6px rgba(59, 130, 246, 0.15))",
          }}
        >
          <circle
            cx="0"
            cy="0"
            r="85"
            fill="none"
            stroke="url(#gearGradient)"
            strokeWidth="2"
          />
          {/* Dents de l'engrenage */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            const rad = (angle * Math.PI) / 180;
            const x1 = Math.cos(rad) * 78;
            const y1 = Math.sin(rad) * 78;
            const x2 = Math.cos(rad) * 85;
            const y2 = Math.sin(rad) * 85;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#gearGradient)"
                strokeWidth="2"
              />
            );
          })}
          {/* Cercle central */}
          <circle cx="0" cy="0" r="28" fill="none" stroke="url(#gearGradient)" strokeWidth="2" />
        </g>

        {/* Petit engrenage - bas-gauche */}
        <g
          className="gear-rotate-small"
          transform="translate(300, 600)"
          style={{
            filter: "drop-shadow(0 0 4px rgba(236, 72, 153, 0.15))",
          }}
        >
          <circle
            cx="0"
            cy="0"
            r="55"
            fill="none"
            stroke="url(#gearGradient)"
            strokeWidth="2"
          />
          {/* Dents de l'engrenage */}
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i * 360) / 10;
            const rad = (angle * Math.PI) / 180;
            const x1 = Math.cos(rad) * 50;
            const y1 = Math.sin(rad) * 50;
            const x2 = Math.cos(rad) * 55;
            const y2 = Math.sin(rad) * 55;
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#gearGradient)"
                strokeWidth="2"
              />
            );
          })}
          {/* Cercle central */}
          <circle cx="0" cy="0" r="20" fill="none" stroke="url(#gearGradient)" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
