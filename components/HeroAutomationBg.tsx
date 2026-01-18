export default function HeroAutomationBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
      viewBox="0 0 1200 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "blur(0.5px)" }}
    >
      <defs>
        {/* Gradient IA bleu-violet-rose discret */}
        <linearGradient id="heroGearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
          <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
          <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
        </linearGradient>
        {/* Pattern pour la ligne de workflow */}
        <pattern id="dotPattern" x="0" y="0" width="20" height="4" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="url(#heroGearGradient)" opacity="0.4" />
        </pattern>
      </defs>

      {/* Grand engrenage - gauche (sens horaire) */}
      <g className="rotateSlowCW" transform="translate(200, 250)">
        <circle cx="0" cy="0" r="90" fill="none" stroke="url(#heroGearGradient)" strokeWidth="1.5" />
        {/* Dents de l'engrenage */}
        {Array.from({ length: 14 }).map((_, i) => {
          const angle = (i * 360) / 14;
          const rad = (angle * Math.PI) / 180;
          const x1 = Math.cos(rad) * 82;
          const y1 = Math.sin(rad) * 82;
          const x2 = Math.cos(rad) * 90;
          const y2 = Math.sin(rad) * 90;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#heroGearGradient)"
              strokeWidth="1.5"
            />
          );
        })}
        {/* Cercle central */}
        <circle cx="0" cy="0" r="35" fill="none" stroke="url(#heroGearGradient)" strokeWidth="1.5" />
      </g>

      {/* Moyen engrenage - droite (sens anti-horaire) */}
      <g className="rotateSlowCCW" transform="translate(850, 280)">
        <circle cx="0" cy="0" r="65" fill="none" stroke="url(#heroGearGradient)" strokeWidth="1.5" />
        {/* Dents de l'engrenage */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 360) / 12;
          const rad = (angle * Math.PI) / 180;
          const x1 = Math.cos(rad) * 58;
          const y1 = Math.sin(rad) * 58;
          const x2 = Math.cos(rad) * 65;
          const y2 = Math.sin(rad) * 65;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#heroGearGradient)"
              strokeWidth="1.5"
            />
          );
        })}
        {/* Cercle central */}
        <circle cx="0" cy="0" r="25" fill="none" stroke="url(#heroGearGradient)" strokeWidth="1.5" />
      </g>

      {/* Petit engrenage - bas centre (sens horaire) */}
      <g className="rotateSlowCW" transform="translate(500, 580)">
        <circle cx="0" cy="0" r="50" fill="none" stroke="url(#heroGearGradient)" strokeWidth="1.5" />
        {/* Dents de l'engrenage */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i * 360) / 10;
          const rad = (angle * Math.PI) / 180;
          const x1 = Math.cos(rad) * 45;
          const y1 = Math.sin(rad) * 45;
          const x2 = Math.cos(rad) * 50;
          const y2 = Math.sin(rad) * 50;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#heroGearGradient)"
              strokeWidth="1.5"
            />
          );
        })}
        {/* Cercle central */}
        <circle cx="0" cy="0" r="20" fill="none" stroke="url(#heroGearGradient)" strokeWidth="1.5" />
      </g>

      {/* Ligne de workflow avec points animés - horizontale */}
      <line
        x1="350"
        y1="350"
        x2="750"
        y2="350"
        stroke="url(#heroGearGradient)"
        strokeWidth="2"
        strokeDasharray="8 12"
        className="dashFlow"
        opacity="0.5"
      />

      {/* Ligne de workflow - diagonale */}
      <line
        x1="650"
        y1="250"
        x2="900"
        y2="450"
        stroke="url(#heroGearGradient)"
        strokeWidth="2"
        strokeDasharray="8 12"
        className="dashFlow"
        opacity="0.4"
      />
    </svg>
  );
}
