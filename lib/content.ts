// Contenu centralisé pour toutes les pages du portfolio

export const site = {
  name: "Jordan Pierron",
  email: "Jordan.p9497@gmail.com",
  linkedin: "https://www.linkedin.com/in/jordanpierron/",
};

export const home = {
  hero: {
    headline: "Consultant en solutions d'applications et d'automatisations orientées résultat",
    subtitle: "Compréhension métier approfondie grâce à mes expériences variées. J'identifie rapidement vos problématiques et je les solutionne avec des outils concrets qui transforment votre productivité.",
    chips: ["Apps métier", "Automatisation", "n8n", "IA utile"],
    ctaPrimary: {
      text: "Discuter de votre besoin",
      href: `mailto:${site.email}`,
    },
    ctaSecondary: {
      text: "Voir Medicalia",
      href: "/projects/medicalia",
    },
    ctaSubtext: "Vous n'achetez pas du code : vous achetez du temps gagné.",
    results: {
      title: "Résultats typiques",
      items: [
        { label: "-30%", description: "tâches manuelles" },
        { label: "-50%", description: "erreurs" },
        { label: "+100%", description: "visibilité" },
      ],
      disclaimer: "selon contexte",
    },
  },

  aboutPitch: {
    title: "Qui je suis",
    subtitle: "Un consultant orienté résultat, pas un développeur",
    paragraphs: [
      "Mon parcours est atypique : j'ai exercé comme comptable, barman et vendeur avant de me spécialiser dans la productivité et l'automatisation. Cette diversité d'expériences m'a appris une chose essentielle : peu importe le domaine, il existe toujours des workflows à améliorer, des processus à optimiser.",
      "Ma force ? Une curiosité naturelle alliée à une culture tech solide. J'expérimente, j'assemble des outils, je teste des solutions. Mon positionnement est clair : consultant orienté résultat. Je comprends votre métier avant de proposer une solution. Je privilégie l'impact sur votre productivité plutôt que la complexité technique.",
    ],
    vision: {
      title: "Ma vision",
      text: "L'excellence opérationnelle naît de la simplicité et de l'efficacité. Chaque solution doit apporter un résultat concret, mesurable, dès la première utilisation.",
    },
  },

  strengths: {
    title: "Pourquoi ça marche avec moi",
    subtitle: "Trois piliers qui font la différence dans chaque projet",
    antiRisk: "On vise un gain concret dès la première version.",
    items: [
      {
        title: "Compréhension métier",
        description: "Mon parcours multi-expériences me permet de comprendre rapidement votre contexte et vos enjeux. Diagnostic précis dès les premiers échanges, sans phase de découverte interminable.",
      },
      {
        title: "Solution pragmatique",
        description: "Applications métier et automatisations conçues pour votre réalité opérationnelle. Pas de fonctionnalités superflues, uniquement ce qui génère un résultat mesurable sur votre activité.",
      },
      {
        title: "Livraison claire",
        description: "Spécifications sur 1 page, cycles courts avec démos régulières, et validation à chaque étape. Vous savez exactement où on en est et ce qui arrive ensuite.",
      },
    ],
  },

  offers: {
    title: "Ce que je propose concrètement",
    subtitle: "Des solutions pratiques pour transformer votre activité",
    resultLabel: "Résultat : ",
    items: [
      {
        title: "Application métier clé en main",
        bullets: [
          "Remplace vos fichiers Excel dispersés, conversations WhatsApp et saisies manuelles",
          "Une seule interface centralisée adaptée à vos processus",
          "Accessible partout, synchronisé en temps réel",
        ],
        result: "Tous vos outils en un seul endroit, gain de temps immédiat",
        tech: "React, Next.js, TypeScript", // Stack discrète
      },
      {
        title: "Automatisation workflow",
        bullets: [
          "Moins de tâches manuelles à répéter chaque jour",
          "Plus de fiabilité : moins d'erreurs, plus de cohérence",
          "Notifications automatiques et synchronisation entre vos outils",
        ],
        result: "Libération de votre temps pour l'essentiel, processus fiabilisés",
        tech: "Python, APIs, Webhooks, n8n", // Stack discrète
      },
      {
        title: "IA utile",
        bullets: [
          "Extraction automatique d'informations depuis documents, emails, conversations",
          "Tri et classement intelligent de vos données",
          "Résumé et synthèse pour prise de décision rapide",
          "Contrôle qualité automatique pour éviter les erreurs",
        ],
        result: "Traitement intelligent de vos données, décisions éclairées en temps réel",
        tech: "OpenAI, Claude, LLMs", // Stack discrète
      },
    ],
    example: "👉 Exemple réel : Medicalia",
    ctaText: "Voir les projets",
  },

  projects: {
    inProgressSection: {
      title: "Projets en cours",
      subtitle: "Des solutions en développement pour répondre à des besoins concrets",
      statusLabel: "En cours",
      featuresLabel: "Ce que ça fait :",
      ctaText: "Me contacter",
    },
    featured: {
      title: "Projet phare : Medicalia",
      subtitle: "Une solution digitale complète pour moderniser la gestion médicale",
      teaser: [
        "Medicalia est une application qui transforme la gestion quotidienne d'un cabinet médical. Conçue pour répondre aux contraintes réelles des professionnels de santé, elle centralise rendez-vous, dossiers patients et suivi médical.",
        "Le résultat : une réduction significative du temps administratif et une amélioration de l'expérience patient, avec une interface pensée pour les besoins du terrain.",
      ],
      highlights: [
        { icon: "📱", label: "Scan", description: "Scan rapide de documents médicaux" },
        { icon: "📋", label: "Résumé", description: "Synthèse automatique des dossiers" },
        { icon: "🔲", label: "QR", description: "Codes QR pour accès rapide" },
      ],
      screenshot: "/medicalia/1.jpg",
      screenshotAlt: "Screenshot Medicalia - Interface application",
      ctaText: "Voir Medicalia",
      ctaHref: "/projects/medicalia",
    },
    inProgress: [
      {
        title: "Agent alertes bourse",
        description: "Surveillance intelligente des marchés financiers avec conditions personnalisées, alertes actionnables et résumés quotidiens pour prendre des décisions éclairées.",
        status: "en cours",
        features: [
          "Surveillance en temps réel des actions et indices",
          "Alertes configurables selon vos critères",
          "Résumés quotidiens avec recommandations",
        ],
      },
      {
        title: "Agent cybersécurité mail",
        description: "Protection proactive contre les erreurs d'envoi et les risques de sécurité : détection de BCC/CC, reply-all, pièces jointes, destinataires externes, anti-phishing avec alertes avant envoi.",
        status: "en cours",
        features: [
          "Détection automatique des risques avant envoi",
          "Protection contre les fuites de données",
          "Alertes anti-phishing en temps réel",
        ],
      },
    ],
  },

  process: {
    title: "Comment on travaille ensemble",
    subtitle: "Un processus structuré en 4 étapes pour garantir la réussite de votre projet",
    steps: [
      {
        number: 1,
        title: "Découverte",
        description: "On analyse vos processus actuels, vos contraintes et vos objectifs. J'identifie les opportunités d'amélioration et on définit ensemble les priorités pour maximiser l'impact.",
      },
      {
        number: 2,
        title: "Conception",
        description: "Je propose une solution adaptée à votre contexte, avec des maquettes et prototypes pour valider l'approche avant développement. Vos retours guident chaque ajustement.",
      },
      {
        number: 3,
        title: "Développement",
        description: "Construction itérative avec livraisons régulières pour ajustements en temps réel. Vous voyez l'avancement et pouvez tester au fur et à mesure.",
      },
      {
        number: 4,
        title: "Livraison",
        description: "Déploiement, formation de votre équipe et accompagnement jusqu'à l'adoption complète. Support continu pour garantir que la solution déploie tout son potentiel.",
      },
    ],
  },

  faq: {
    title: "Questions fréquentes",
    subtitle: "Réponses aux questions que vous vous posez",
    items: [
      {
        question: "Quel est le délai de réalisation d'un projet ?",
        answer:
          "Le délai dépend de la complexité et de l'étendue du projet. Pour une automatisation simple ou un outil basique, comptez 2 à 4 semaines. Pour une application métier complète, cela peut prendre 6 à 12 semaines. Nous définissons ensemble un planning réaliste dès la phase de découverte, avec des livraisons intermédiaires pour validation.",
      },
      {
        question: "Proposez-vous un suivi après la livraison ?",
        answer:
          "Oui, absolument. Tous mes projets incluent une période de support initiale (minimum 1 mois) pour garantir une adoption en douceur et répondre aux questions. Je propose également un support continu pour les évolutions, corrections et optimisations futures de votre solution.",
      },
      {
        question: "Comment se passe la communication pendant le projet ?",
        answer:
          "La communication est un pilier de mon approche. Nous organisons des points réguliers (hebdomadaires ou bi-hebdomadaires selon le projet) pour faire le point sur l'avancement, valider les étapes et ajuster si nécessaire. Vous avez également accès à un suivi en temps réel pour consulter l'évolution du projet à tout moment.",
      },
    ],
  },

  contact: {
    title: "Parlons de votre projet",
    description: "Vous avez un projet en tête ? Discutons de la meilleure façon de le concrétiser ensemble. Je réponds généralement sous 24h.",
    helperText: "Décris ton besoin en 5 lignes, je réponds avec une approche + étapes.",
    ctaPrimary: {
      text: "Discuter de votre besoin",
      href: `mailto:${site.email}?subject=Demande%20de%20consultation`,
    },
    ctaSecondary: {
      text: "LinkedIn",
      href: site.linkedin,
    },
    email: site.email,
    linkedin: site.linkedin,
  },

  skills: {
    title: "Technologies et outils",
    subtitle: "Les technologies et outils que j'utilise pour créer des solutions performantes",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "n8n",
      "OpenAI",
      "Claude",
      "APIs",
      "Webhooks",
    ],
  },
};

export const medicalia = {
  pitch: {
    title: "Medicalia",
    subtitle: "Né de l'observation d'un besoin réel",
    paragraphs: [
      "Medicalia est né en observant ma mère gérer au quotidien ses ordonnances, ses rendez-vous médicaux et son suivi de santé. J'ai vu la complexité, le stress et le manque d'organisation qui caractérisaient cette gestion pour une personne isolée.",
      "Medicalia combine en une seule application : un pilulier digital intelligent, un classeur d'ordonnances numériques, un passeport santé complet, une gestion des rendez-vous médicaux et un assistant médical personnel. Tout centralisé, accessible et sécurisé.",
      "L'objectif est simple : réduire le stress, améliorer l'organisation, garantir les rappels importants et centraliser toutes les informations de santé au même endroit. En bonus, la possibilité de gérer à distance pour une personne de son choix (parent isolé, proche en difficulté).",
    ],
  },

  header: {
    backLinkLabel: "Retour aux projets",
    backLinkHref: "/#project",
    title: "Medicalia",
    pitch: "Application mobile et web qui remplace Excel, WhatsApp et les saisies manuelles par une solution centralisée. Réduction du temps administratif de 40% et amélioration de l'expérience patient.",
    ctaText: "Discuter d'un projet similaire",
  },

  problemSolution: {
    title: "Pourquoi Medicalia",
    subtitle: "Né d'une observation et d'un besoin réel",
    problem: {
      title: "Le problème",
      text: "Medicalia est né en observant ma mère gérer au quotidien ses ordonnances, ses rendez-vous médicaux et son suivi de santé. J'ai vu la complexité, le stress et le manque d'organisation qui caractérisaient cette gestion pour une personne isolée.",
    },
    solution: {
      title: "La solution",
      paragraphs: [
        "Medicalia combine en une seule application : un pilulier digital intelligent, un classeur d'ordonnances numériques, un passeport santé complet, une gestion des rendez-vous médicaux et un assistant médical personnel. Tout centralisé, accessible et sécurisé.",
        "L'objectif : réduire le stress, améliorer l'organisation, garantir les rappels importants et centraliser toutes les informations de santé au même endroit. En bonus, la possibilité de gérer à distance pour une personne de son choix (parent isolé, proche en difficulté).",
      ],
    },
  },

  features: {
    title: "Fonctionnalités clés",
    subtitle: "Les principales fonctionnalités qui font la différence",
    items: [
      {
        title: "Pilulier digital",
        description: "Rappels personnalisés pour chaque prise de médicament avec suivi de la prise",
      },
      {
        title: "Classeur d'ordonnances",
        description: "Numérisation et archivage sécurisé de toutes les ordonnances médicales",
      },
      {
        title: "Passeport santé",
        description: "Dossier médical complet et accessible : antécédents, allergies, vaccins, examens",
      },
      {
        title: "Gestion des rendez-vous",
        description: "Planning médical avec rappels automatiques et notifications personnalisées",
      },
      {
        title: "Assistant médical",
        description: "Résumés de consultations, suivi des traitements et rappels importants",
      },
      {
        title: "Gestion à distance",
        description: "Possibilité de gérer le dossier d'un proche avec son autorisation pour rassurer et aider",
      },
    ],
  },

  stack: {
    title: "Stack technique",
    subtitle: "Les technologies utilisées pour construire Medicalia",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Prisma", "Framer Motion"],
  },

  gallery: {
    title: "Galerie",
    subtitle: "Aperçu de l'interface Medicalia",
    screenshots: [
      { src: "/medicalia/1.jpg", alt: "Medicalia - Interface principale" },
      { src: "/medicalia/2.jpg", alt: "Medicalia - Gestion des dossiers" },
    ],
  },

  proof: {
    title: "Ce que ça démontre",
    items: [
      {
        label: "Delivery full-stack :",
        text: "Capacité à livrer une solution complète : application mobile React Native, backend Node.js, base de données PostgreSQL, et déploiement cloud fonctionnel.",
      },
      {
        label: "UX orientée adoption :",
        text: "Interface pensée pour réduire la courbe d'apprentissage. Les professionnels de santé utilisent l'application dès le premier jour sans formation longue.",
      },
      {
        label: "Sécurité de base :",
        text: "Authentification, chiffrement des données sensibles, conformité RGPD, et sauvegardes automatiques pour protéger les informations médicales.",
      },
    ],
  },

  cta: {
    title: "Un projet similaire en tête ?",
    description: "Discutons de votre projet et créons ensemble une solution qui transforme votre activité.",
    buttonText: "Discuter de votre projet",
  },

  galleryCaptions: [
    "Medicalia - Interface principale avec pilulier digital",
    "Medicalia - Gestion des ordonnances et dossiers médicaux",
  ],
};
