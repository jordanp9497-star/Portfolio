"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { FadeInView } from "@/components/ui/FadeInView";
import { medicalia, site } from "@/lib/content";

export default function MedicaliaPage() {
  const content = medicalia;
  return (
    <main className="min-h-screen pt-24 sm:pt-28">
      {/* Header Projet + CTA */}
      <section className="py-12 sm:py-16 lg:py-24 border-b border-border">
        <Container>
          <FadeInView>
            <div className="max-w-4xl mx-auto text-center mb-8">
              <Link
                href={content.header.backLinkHref}
                className="inline-flex items-center text-sm text-text-secondary hover:text-text-primary transition-colors mb-6"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {content.header.backLinkLabel}
              </Link>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                {content.pitch.title}
              </h1>
              <div className="space-y-4 mb-8 max-w-3xl mx-auto">
                {content.pitch.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg sm:text-xl lg:text-2xl text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Button variant="primary" size="lg" href={`mailto:${site.email}?subject=Projet%20similaire%20à%20Medicalia`}>
                {content.header.ctaText}
              </Button>
            </div>
          </FadeInView>
        </Container>
      </section>

      {/* Pourquoi Medicalia */}
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <SectionTitle
                title={content.problemSolution.title}
                subtitle={content.problemSolution.subtitle}
              />
            </FadeInView>

            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mt-8 sm:mt-12">
              <FadeInView delay={0.1}>
                <Card>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                    {content.problemSolution.problem.title}
                  </h2>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {content.problemSolution.problem.text}
                  </p>
                </Card>
              </FadeInView>

              <FadeInView delay={0.2}>
                <Card>
                  <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4">
                    {content.problemSolution.solution.title}
                  </h2>
                  {content.problemSolution.solution.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className={`text-base text-text-secondary leading-relaxed ${index < content.problemSolution.solution.paragraphs.length - 1 ? "mb-4" : ""}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </Card>
              </FadeInView>
            </div>
          </div>
        </Container>
      </section>

      {/* Fonctionnalités */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background">
        <Container>
          <FadeInView>
            <SectionTitle
              title={content.features.title}
              subtitle={content.features.subtitle}
            />
          </FadeInView>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {content.features.items.map((feature, index) => (
                <FadeInView key={feature.title} delay={0.1 + index * 0.1}>
                  <Card className="h-full">
                    <h3 className="text-xl font-bold text-text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </FadeInView>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stack technique */}
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <FadeInView>
            <SectionTitle
              title={content.stack.title}
              subtitle={content.stack.subtitle}
            />
          </FadeInView>

          <div className="max-w-4xl mx-auto">
            <FadeInView delay={0.1}>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {content.stack.technologies.map((tech) => (
                  <Chip key={tech}>{tech}</Chip>
                ))}
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      {/* Galerie screenshots - Layout premium */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background">
        <Container>
          <FadeInView>
            <SectionTitle
              title={content.gallery.title}
              subtitle={content.gallery.subtitle}
            />
          </FadeInView>

          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-8 sm:gap-12 items-start">
              {/* Premier screenshot avec device frame iPhone */}
              {content.gallery.screenshots && content.gallery.screenshots[0] && (
                <FadeInView delay={0.1}>
                  <div className="space-y-4">
                    <div className="flex justify-center sm:justify-start">
                      <div className="relative w-64 sm:w-72 lg:w-80">
                        {/* iPhone Frame */}
                        <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                          {/* Notch */}
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
                          {/* Screen */}
                          <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                            <Image
                              src={content.gallery.screenshots[0].src}
                              alt={content.gallery.screenshots[0].alt}
                              fill
                              className="object-cover"
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY3Ii8+PC9zdmc+"
                              sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                              quality={90}
                            />
                          </div>
                          {/* Home Indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
                        </div>
                      </div>
                    </div>
                    {content.galleryCaptions && content.galleryCaptions[0] && (
                      <p className="text-sm text-text-secondary text-center sm:text-left italic">
                        {content.galleryCaptions[0]}
                      </p>
                    )}
                  </div>
                </FadeInView>
              )}

              {/* Deuxième screenshot - Image simple */}
              {content.gallery.screenshots && content.gallery.screenshots[1] && (
                <FadeInView delay={0.2}>
                  <div className="space-y-4">
                    <div className="relative aspect-[9/16] rounded-card overflow-hidden border border-border shadow-card bg-gray-100">
                      <Image
                        src={content.gallery.screenshots[1].src}
                        alt={content.gallery.screenshots[1].alt}
                        fill
                        className="object-cover"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY3Ii8+PC9zdmc+"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                        quality={90}
                      />
                    </div>
                    {content.galleryCaptions && content.galleryCaptions[1] && (
                      <p className="text-sm text-text-secondary text-center sm:text-left italic">
                        {content.galleryCaptions[1]}
                      </p>
                    )}
                  </div>
                </FadeInView>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Ce que ça démontre */}
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <Card>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-6">
                  {content.proof.title}
                </h2>
                <div className="space-y-4">
                  {content.proof.items.map((item, index) => (
                    <p key={index} className="text-base text-text-secondary leading-relaxed">
                      <strong className="text-text-primary">{item.label}</strong> {item.text}
                    </p>
                  ))}
                </div>
              </Card>
            </FadeInView>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeInView>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                {content.cta.title}
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                {content.cta.description}
              </p>
              <Button variant="primary" size="lg" href={`mailto:${site.email}?subject=Projet%20similaire%20à%20Medicalia`}>
                {content.cta.buttonText}
              </Button>
            </FadeInView>
          </div>
        </Container>
      </section>
    </main>
  );
}