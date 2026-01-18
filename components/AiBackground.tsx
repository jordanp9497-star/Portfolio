export function AiBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Spotlight radial au centre */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Blob 1: rose->violet en haut gauche */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(168, 85, 247, 0.22) 70%, transparent 100%)",
          opacity: 0.28,
          transform: "translate(-30%, -30%)",
        }}
      />

      {/* Blob 2: violet->bleu au centre droit */}
      <div
        className="absolute top-1/2 right-0 w-[700px] h-[700px] rounded-full blur-[140px]"
        style={{
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.25) 70%, transparent 100%)",
          opacity: 0.3,
          transform: "translate(40%, -50%)",
        }}
      />

      {/* Blob 3: bleu électrique en bas */}
      <div
        className="absolute bottom-0 left-1/2 w-[650px] h-[650px] rounded-full blur-[130px]"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(37, 99, 235, 0.22) 70%, transparent 100%)",
          opacity: 0.26,
          transform: "translate(-50%, 30%)",
        }}
      />
    </div>
  );
}
