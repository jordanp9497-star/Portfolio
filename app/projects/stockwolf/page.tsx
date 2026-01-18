"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { FadeInView } from "@/components/ui/FadeInView";
import { stockwolf, site } from "@/lib/content";

export default function StockWolfPage() {
  const content = stockwolf;
  const [screenshot1Error, setScreenshot1Error] = useState(false);
  const [screenshot2Error, setScreenshot2Error] = useState(false);
  const [gallery1Error, setGallery1Error] = useState(false);
  const [gallery2Error, setGallery2Error] = useState(false);
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
              <p className="text-lg sm:text-xl lg:text-2xl text-text-secondary mb-4">
                {content.pitch.subtitle}
              </p>
              <div className="space-y-4 mb-8 max-w-3xl mx-auto">
                {content.pitch.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg sm:text-xl text-text-secondary leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Button variant="primary" size="lg" href={`mailto:${site.email}?subject=Demande%20d'information%20-%20StockWolf`}>
                {content.header.ctaText}
              </Button>
            </div>
          </FadeInView>
        </Container>
      </section>

      {/* Pourquoi StockWolf */}
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

      {/* Comment ça marche */}
      <section className="py-16 sm:py-20 lg:py-28 bg-background">
        <Container>
          <FadeInView>
            <SectionTitle
              title={content.howItWorks.title}
              subtitle={content.howItWorks.subtitle}
            />
          </FadeInView>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              {content.howItWorks.steps.map((step, index) => (
                <FadeInView key={step.title} delay={0.1 + index * 0.1}>
                  <Card className="h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-text-primary/10 flex items-center justify-center mr-3">
                        <span className="text-xl font-bold text-text-primary">{step.number}</span>
                      </div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {step.description}
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
              {/* Premier screenshot - Dashboard Frame */}
              {content.gallery.screenshots && content.gallery.screenshots[0] && (
                <FadeInView delay={0.1}>
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] rounded-card overflow-hidden border border-border shadow-card bg-[rgba(255,255,255,0.03)]">
                      {gallery1Error ? (
                        <Card className="absolute inset-0 flex items-center justify-center m-4">
                          <p className="text-sm text-text-secondary text-center px-4">Screenshot indisponible</p>
                        </Card>
                      ) : (
                        <Image
                          src={content.gallery.screenshots[0].src}
                          alt={content.gallery.screenshots[0].alt}
                          fill
                          className="object-cover"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY3Ii8+PC9zdmc+"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                          quality={90}
                          onError={() => setGallery1Error(true)}
                        />
                      )}
                    </div>
                    {content.galleryCaptions && content.galleryCaptions[0] && (
                      <p className="text-sm text-text-secondary text-center sm:text-left italic">
                        {content.galleryCaptions[0]}
                      </p>
                    )}
                  </div>
                </FadeInView>
              )}

              {/* Deuxième screenshot - Dashboard Frame */}
              {content.gallery.screenshots && content.gallery.screenshots[1] && (
                <FadeInView delay={0.2}>
                  <div className="space-y-4">
                    <div className="relative aspect-[16/10] rounded-card overflow-hidden border border-border shadow-card bg-[rgba(255,255,255,0.03)]">
                      {gallery2Error ? (
                        <Card className="absolute inset-0 flex items-center justify-center m-4">
                          <p className="text-sm text-text-secondary text-center px-4">Screenshot indisponible</p>
                        </Card>
                      ) : (
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
                          onError={() => setGallery2Error(true)}
                        />
                      )}
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

      {/* CTA final */}
      <section className="py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <FadeInView>
              <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                {content.cta.title}
              </h2>
              <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                {content.cta.description}
              </p>
              <Button variant="primary" size="lg" href={`mailto:${site.email}?subject=Demande%20d'information%20-%20StockWolf`}>
                {content.cta.buttonText}
              </Button>
            </FadeInView>
          </div>
        </Container>
      </section>
    </main>
  );
}
