export function Vignette() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10"
      style={{
        background: "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.15) 70%, rgba(0, 0, 0, 0.35) 100%)",
      }}
    />
  );
}
