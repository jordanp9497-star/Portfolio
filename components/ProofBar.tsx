import { Container } from "@/components/ui/Container";

const proofItems = [
  "Réponse sous 24h",
  "Cycles courts",
  "Livraison propre",
];

export function ProofBar() {
  return (
    <section className="py-3 sm:py-4 border-t border-b border-border bg-background/40">
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 lg:gap-12">
          {proofItems.map((item, index) => (
            <div
              key={item}
              className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary"
            >
              <span className="w-1 h-1 rounded-full bg-text-secondary/40" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}