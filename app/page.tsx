"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Chip } from "@/components/ui/Chip";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card } from "@/components/ui/Card";
import { FadeInView } from "@/components/ui/FadeInView";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { ProofBar } from "@/components/ProofBar";
import { ProfileImage } from "@/components/ProfileImage";
import { home, site } from "@/lib/content";

export default function Home() {
  const content = home;
  const [selectedShot, setSelectedShot] = useState<number>(0);
  const [deviceFrameError, setDeviceFrameError] = useState(false);
  const [thumbnailErrors, setThumbnailErrors] = useState<boolean[]>([false, false]);
  const medicaliaShots = ["/medicalia/1.jpg", "/medicalia/2.jpg"];

  const handleThumbnailError = (index: number) => {
    setThumbnailErrors((prev) => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };
  return (
    <main className="min-h-screen pt-24 sm:pt-28">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-24">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/* Photo ronde */}
            <FadeInView delay={0}>
              <div className="mb-8 sm:mb-10 lg:mb-12 flex justify-center">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] bg-gray-100">
                  <ProfileImage
                    src="/me.jpg"
                    alt={`${content.hero.headline}`}
                    width={160}
                    height={160}
                    priority
                    sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 160px"
                  />
                </div>
              </div>
            </FadeInView>

            {/* H1 - Accroche */}
            <FadeInView delay={0.1}>
              <div className="relative inline-block mx-auto">
                {/* Label discret au-dessus du H1 */}
                <div className="flex justify-center mb-4">
                  <span className="inline-flex rounded-full px-3 py-1 text-xs text-white/70 border border-white/10 bg-white/5">
                    Automatisation • Apps métier • IA
                  </span>
                </div>
                {/* Spotlight derrière le H1 */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at center, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.12) 40%, transparent 70%)",
                    filter: "blur(60px)",
                  }}
                />
                <h1 className="relative text-[clamp(2.1rem,3.6vw,3.2rem)] font-semibold text-text-primary mb-6 sm:mb-8 tracking-tight leading-[1.05] max-w-[28ch] mx-auto">
                  {content.hero.headline}
                </h1>
              </div>
            </FadeInView>

            {/* Sous-titre */}
            <FadeInView delay={0.2}>
              <p className="text-[clamp(1rem,1.05vw,1.08rem)] text-text-secondary mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
                {content.hero.subtitle}
              </p>
            </FadeInView>

            {/* Chips */}
            <FadeInView delay={0.3}>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
                {content.hero.chips.map((chip) => (
                  <Chip key={chip}>{chip}</Chip>
                ))}
              </div>
            </FadeInView>

            {/* Boutons CTA */}
            <FadeInView delay={0.4}>
              <div className="space-y-4 mb-8 sm:mb-10">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <Button variant="primary" size="lg" href={content.hero.ctaPrimary.href}>
                    {content.hero.ctaPrimary.text}
                  </Button>
                  <Button variant="secondary" size="lg" href={content.hero.ctaSecondary.href}>
                    {content.hero.ctaSecondary.text}
                  </Button>
                </div>
                {content.hero.ctaSubtext && (
                  <p className="text-sm sm:text-base text-text-secondary/70 text-center italic max-w-2xl mx-auto">
                    {content.hero.ctaSubtext}
                  </p>
                )}
                <p className="text-sm text-white/60 leading-relaxed max-w-[60ch] mx-auto pt-2">
                  Fort de plus de dix ans d'expérience (comptabilité, vente, restauration), j'identifie vite les frictions terrain et je transforme vos processus en workflows simples, mesurables et fiables.
                </p>
              </div>
            </FadeInView>

            {/* Mini-card Résultats typiques */}
            <FadeInView delay={0.5}>
              <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm">
                <div className="mb-3">
                  <h3 className="text-sm sm:text-base font-semibold text-text-primary mb-4">
                    {content.hero.results.title}
                  </h3>
                  <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
                    {content.hero.results.items.map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-text-primary mb-1">
                          {result.label}
                        </div>
                        <div className="text-xs sm:text-sm text-text-secondary">
                          {result.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-text-secondary/60 italic mt-3 pt-3 border-t border-border">
                  * {content.hero.results.disclaimer}
                </p>
              </Card>
            </FadeInView>
          </div>
        </Container>
      </section>

      {/* Proof Bar */}
      <ProofBar />

      {/* Section Qui je suis */}
      <section id="about" className="py-16 sm:py-20 lg:py-28">
        <Container>
          <FadeInView>
            <SectionTitle
              title={content.aboutPitch.title}
              subtitle={content.aboutPitch.subtitle}
            />
          </FadeInView>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              <FadeInView delay={0.1}>
                <div className="space-y-4 sm:space-y-6">
                  {content.aboutPitch.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </FadeInView>

              <FadeInView delay={0.2}>
                <Card className="h-full">
                  <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
                    {content.aboutPitch.vision.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {content.aboutPitch.vision.text}
                  </p>
                </Card>
              </FadeInView>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Ce que je propose concrètement */}
      <section id="offers" className="py-16 sm:py-20 lg:py-28 bg-background">
        <Container>
          <FadeInView>
            <SectionTitle
              title={content.offers.title}
              subtitle={content.offers.subtitle}
            />
          </FadeInView>

          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
              {content.offers.items.map((item, index) => (
                <FadeInView key={item.title} delay={0.1 + index * 0.1}>
                  <Card className="h-full flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-4">
                      {item.title}
                    </h3>
                    <ul className="space-y-2 mb-4 flex-grow">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="text-base text-text-secondary flex items-start">
                          <span className="mr-2">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-border space-y-2">
                      <p className="text-base font-medium text-text-primary">
                        {content.offers.resultLabel}{item.result}
                      </p>
                      {item.tech && (
                        <p className="text-xs text-text-secondary/60 italic">
                          {item.tech}
                        </p>
                      )}
                    </div>
                  </Card>
                </FadeInView>
              ))}
            </div>

            {/* Mini-ligne exemple + CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <p className="text-sm sm:text-base text-text-secondary">
                {content.offers.example}
              </p>
              <Button variant="secondary" size="md" href="#project">
                {content.offers.ctaText}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="py-16 sm:py-20 lg:py-28">
        <Container>
          <FadeInView>
            <SectionTitle
              title={content.skills.title}
              subtitle={content.skills.subtitle}
            />
          </FadeInView>

          <div className="max-w-4xl mx-auto">
            <FadeInView delay={0.1}>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {content.skills.items.map((skill) => (
                  <Chip key={skill}>{skill}</Chip>
                ))}
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>

      {/* Section Projet phare : Medicalia */}
      <section id="project" className="py-16 sm:py-20 lg:py-28 bg-background">
        <Container>
          <FadeInView>
            <SectionTitle
              title={content.projects.featured.title}
              subtitle={content.projects.featured.subtitle}
            />
          </FadeInView>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              {/* Contenu texte */}
              <FadeInView delay={0.1}>
                <div className="space-y-6 sm:space-y-8">
                  {/* Teaser */}
                  <div className="space-y-4">
                    {content.projects.featured.teaser.map((paragraph, index) => (
                      <p key={index} className="text-base sm:text-lg text-text-secondary leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Bouton CTA - App Store style */}
                  <div>
                    <Button variant="primary" size="lg" href={content.projects.featured.ctaHref}>
                      {content.projects.featured.ctaText}
                    </Button>
                  </div>
                </div>
              </FadeInView>

              {/* Visuel Device Frame iPhone + Highlights */}
              <FadeInView delay={0.2} direction="right">
                <div className="space-y-8">
                  {/* Device Frame iPhone avec screenshot */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative w-64 sm:w-72 lg:w-80">
                      {/* iPhone Frame */}
                      <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10" />
                        {/* Screen */}
                        <div className="relative bg-white rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                          {deviceFrameError ? (
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                              <div className="text-center px-4">
                                <p className="text-sm text-text-secondary">Screenshot indisponible</p>
                              </div>
                            </div>
                          ) : (
                            <Image
                              src={medicaliaShots[selectedShot]}
                              alt={content.projects.featured.screenshotAlt || "Screenshot Medicalia"}
                              fill
                              className="object-cover"
                              loading="lazy"
                              placeholder="blur"
                              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY3Ii8+PC9zdmc+"
                              sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
                              quality={90}
                              onError={() => setDeviceFrameError(true)}
                            />
                          )}
                        </div>
                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Thumbnails galerie */}
                  <div className="flex justify-center gap-3 lg:justify-end">
                    {medicaliaShots.map((shot, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setSelectedShot(index);
                          setDeviceFrameError(false);
                        }}
                        className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border transition-all cursor-pointer hover:opacity-90 ${
                          selectedShot === index
                            ? "border-white/30 ring-2 ring-[color:var(--ai-blue)]/30"
                            : "border-white/10"
                        }`}
                      >
                        {thumbnailErrors[index] ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                            <p className="text-[8px] text-text-secondary text-center px-1">N/A</p>
                          </div>
                        ) : (
                          <Image
                            src={shot}
                            alt={`Medicalia screenshot ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="96px"
                            quality={75}
                            onError={() => handleThumbnailError(index)}
                          />
                        )}
                      </button>
                    ))}
                  </div>

                  {/* Highlights App Store style */}
                  {content.projects.featured.highlights && (
                    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                      {content.projects.featured.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="text-center space-y-2"
                        >
                          <div className="text-3xl mb-1">{highlight.icon}</div>
                          <div className="text-sm font-semibold text-text-primary">
                            {highlight.label}
                          </div>
                          <div className="text-xs text-text-secondary leading-tight">
                            {highlight.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </FadeInView>
            </div>
          </div>
        </Container>
      </section>

      {/* Section Projets en cours */}
      {content.projects.inProgress && content.projects.inProgress.length > 0 && (
        <section className="py-16 sm:py-20 lg:py-28 bg-background">
          <Container>
            <FadeInView>
              <SectionTitle
                title={content.projects.inProgressSection.title}
                subtitle={content.projects.inProgressSection.subtitle}
              />
            </FadeInView>

            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                {content.projects.inProgress.map((project, index) => (
                  <FadeInView key={project.title} delay={0.1 + index * 0.1}>
                    <Card className="h-full flex flex-col">
                      {/* Badge En cours */}
                      <div className="mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                          {content.projects.inProgressSection.statusLabel}
                        </span>
                      </div>

                      {/* Titre */}
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-3">
                        {project.title}
                      </h3>

                      {/* Pitch court */}
                      <p className="text-base text-text-secondary mb-4 leading-relaxed flex-grow">
                        {project.description}
                      </p>

                      {/* Bullets "Ce que ça fait" */}
                      <div className="mb-6 space-y-2">
                        <p className="text-sm font-semibold text-text-primary mb-2">{content.projects.inProgressSection.featuresLabel}</p>
                        <ul className="space-y-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-sm text-text-secondary flex items-start">
                              <span className="mr-2 text-text-primary">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Bouton Me contacter */}
                      <div className="mt-auto pt-4 border-t border-border">
                        <Button
                          variant="secondary"
                          size="md"
                          href={`mailto:${site.email}?subject=Demande%20d'information%20-%20${encodeURIComponent(project.title)}`}
                          className="w-full sm:w-auto"
                        >
                          {content.projects.inProgressSection.ctaText}
                        </Button>
                      </div>
                    </Card>
                  </FadeInView>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Section Comment on travaille ensemble */}
      <section id="process" className="py-16 sm:py-20 lg:py-28 bg-background">
        <Container>
          <FadeInView>
            <SectionTitle
              title={content.process.title}
              subtitle={content.process.subtitle}
            />
          </FadeInView>

          <div className="max-w-6xl mx-auto">
            {/* Timeline verticale mobile, horizontale desktop */}
            <div className="relative">
              {/* Ligne de connexion - visible sur desktop uniquement */}
              <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-border" />

              {/* Grille des étapes */}
              <div className="grid lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-6">
                {content.process.steps.map((step, index) => (
                  <FadeInView key={step.number} delay={0.1 + index * 0.1}>
                    <div className="relative">
                      {/* Ligne verticale mobile */}
                      {index < content.process.steps.length - 1 && (
                        <div className="lg:hidden absolute left-6 top-12 bottom-0 w-0.5 bg-border" />
                      )}
                      
                      <div className="flex items-start lg:flex-col lg:items-center lg:text-center">
                        {/* Numéro */}
                        <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-text-primary text-white flex items-center justify-center text-lg font-semibold mr-4 lg:mr-0 lg:mb-4">
                          {step.number}
                        </div>
                        
                        {/* Contenu */}
                        <div className="flex-grow lg:flex-grow-0">
                          <h3 className="text-xl font-bold text-text-primary mb-2 lg:mb-3">
                            {step.title}
                          </h3>
                          <p className="text-base text-text-secondary leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </FadeInView>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Section FAQ */}
      <section id="faq" className="py-16 sm:py-20 lg:py-28">
        <Container>
          <FadeInView>
            <SectionTitle
              title={content.faq.title}
              subtitle={content.faq.subtitle}
            />
          </FadeInView>

          <div className="max-w-3xl mx-auto">
            <FadeInView delay={0.1}>
              <Accordion>
                {content.faq.items.map((item, index) => (
                  <AccordionItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </Accordion>
            </FadeInView>
          </div>
        </Container>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-background">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeInView>
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
                  {content.contact.title}
                </h2>
                <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
                  {content.contact.description}
                </p>
              </div>
            </FadeInView>

            <FadeInView delay={0.1}>
              <div className="flex flex-col items-center space-y-6 sm:space-y-8">
                {/* Phrase helper */}
                {content.contact.helperText && (
                  <p className="text-base sm:text-lg text-text-secondary/80 text-center max-w-2xl italic">
                    {content.contact.helperText}
                  </p>
                )}

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                  <Button
                    variant="primary"
                    size="lg"
                    href={content.contact.ctaPrimary.href}
                  >
                    {content.contact.ctaPrimary.text}
                  </Button>
                  
                  <Button
                    variant="secondary"
                    size="lg"
                    href={content.contact.ctaSecondary.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content.contact.ctaSecondary.text}
                  </Button>
                </div>
              </div>
            </FadeInView>
          </div>
        </Container>
      </section>
    </main>
  );
}