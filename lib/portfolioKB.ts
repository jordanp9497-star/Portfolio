// Base de connaissances du portfolio - Chunks pour RAG
export interface Chunk {
  id: string;
  title: string;
  url: string;
  content: string;
}

export const portfolioChunks: Chunk[] = [
  // Section Hero
  {
    id: "hero-1",
    title: "Hero - Proposition de valeur",
    url: "/#hero",
    content: "Jordan Pierron est un consultant spécialisé en automatisation et applications métier. Proposition de valeur : décupler vos résultats grâce à l'automatisation. Il ne livre pas \"du code\" mais une solution clé en main pensée métier, intégrée à vos outils, qui augmente concrètement la productivité. Résultats typiques : -30% de tâches manuelles, -50% d'erreurs, +100% de visibilité (selon contexte).",
  },

  // Section Qui je suis
  {
    id: "about-1",
    title: "Qui je suis - Parcours",
    url: "/#about",
    content: "Jordan Pierron est un consultant orienté résultat, pas un développeur. Parcours atypique : comptable, barman et vendeur avant de se spécialiser dans la productivité et l'automatisation. Cette diversité d'expériences lui a appris qu'il existe toujours des workflows à améliorer et des processus à optimiser.",
  },
  {
    id: "about-2",
    title: "Qui je suis - Approche",
    url: "/#about",
    content: "Force principale : curiosité naturelle alliée à une culture tech solide. Positionnement : consultant orienté résultat. Il comprend le métier avant de proposer une solution. Il privilégie l'impact sur la productivité plutôt que la complexité technique. Vision : l'excellence opérationnelle naît de la simplicité et de l'efficacité. Chaque solution doit apporter un résultat concret, mesurable, dès la première utilisation.",
  },

  // Section Forces / Pourquoi ça marche
  {
    id: "strengths-1",
    title: "Pourquoi ça marche - Trois piliers",
    url: "/#strengths",
    content: "Trois piliers : 1) Compréhension métier : parcours multi-expériences permettant de comprendre rapidement le contexte et les enjeux. Diagnostic précis dès les premiers échanges. 2) Solution pragmatique : applications métier et automatisations conçues pour la réalité opérationnelle, sans fonctionnalités superflues. 3) Livraison claire : spécifications sur 1 page, cycles courts avec démos régulières, validation à chaque étape.",
  },

  // Section Offres
  {
    id: "offers-1",
    title: "Offres - Application métier clé en main",
    url: "/#offers",
    content: "Application métier clé en main : remplace les fichiers Excel dispersés, conversations WhatsApp et saisies manuelles. Une seule interface centralisée adaptée aux processus. Accessible partout, synchronisé en temps réel. Résultat : tous les outils en un seul endroit, gain de temps immédiat. Technologies : React, Next.js, TypeScript.",
  },
  {
    id: "offers-2",
    title: "Offres - Automatisation workflow",
    url: "/#offers",
    content: "Automatisation workflow : moins de tâches manuelles à répéter chaque jour. Plus de fiabilité : moins d'erreurs, plus de cohérence. Notifications automatiques et synchronisation entre outils. Résultat : libération du temps pour l'essentiel, processus fiabilisés. Technologies : Python, APIs, Webhooks, n8n.",
  },
  {
    id: "offers-3",
    title: "Offres - IA utile",
    url: "/#offers",
    content: "IA utile : extraction automatique d'informations depuis documents, emails, conversations. Tri et classement intelligent des données. Résumé et synthèse pour prise de décision rapide. Contrôle qualité automatique pour éviter les erreurs. Résultat : traitement intelligent des données, décisions éclairées en temps réel. Technologies : OpenAI, Claude, LLMs.",
  },

  // Section Technologies
  {
    id: "skills-1",
    title: "Technologies et outils",
    url: "/#skills",
    content: "Technologies utilisées : React, Next.js, TypeScript, Python, Node.js, PostgreSQL, Prisma, n8n, OpenAI, Claude, APIs, Webhooks.",
  },

  // Section Projets - Medicalia
  {
    id: "project-medicalia-1",
    title: "Projet Medicalia - Présentation",
    url: "/projects/medicalia",
    content: "Medicalia est une application mobile et web qui transforme la gestion quotidienne d'un cabinet médical. Elle centralise rendez-vous, dossiers patients et suivi médical. Résultat : réduction significative du temps administratif et amélioration de l'expérience patient. Application qui remplace Excel, WhatsApp et les saisies manuelles par une solution centralisée. Réduction du temps administratif de 40%.",
  },
  {
    id: "project-medicalia-2",
    title: "Projet Medicalia - Origine",
    url: "/projects/medicalia",
    content: "Medicalia est né en observant la mère de Jordan gérer ses ordonnances, rendez-vous médicaux et suivi de santé. Complexité, stress et manque d'organisation pour une personne isolée. Solution : pilulier digital intelligent, classeur d'ordonnances numériques, passeport santé complet, gestion des rendez-vous médicaux et assistant médical personnel. Tout centralisé, accessible et sécurisé.",
  },
  {
    id: "project-medicalia-3",
    title: "Projet Medicalia - Fonctionnalités",
    url: "/projects/medicalia",
    content: "Medicalia inclut : pilulier digital avec rappels personnalisés, classeur d'ordonnances numériques sécurisé, passeport santé complet (antécédents, allergies, vaccins, examens), gestion des rendez-vous avec rappels automatiques, assistant médical pour résumés de consultations, gestion à distance pour un proche. Technologies : React, Next.js, TypeScript, Tailwind CSS, Node.js, PostgreSQL, Prisma, Framer Motion.",
  },

  // Section Process
  {
    id: "process-1",
    title: "Process - Découverte",
    url: "/#process",
    content: "Étape 1 - Découverte : analyse des processus actuels, contraintes et objectifs. Identification des opportunités d'amélioration. Définition ensemble des priorités pour maximiser l'impact.",
  },
  {
    id: "process-2",
    title: "Process - Conception",
    url: "/#process",
    content: "Étape 2 - Conception : proposition d'une solution adaptée au contexte, avec maquettes et prototypes pour valider l'approche avant développement. Retours qui guident chaque ajustement.",
  },
  {
    id: "process-3",
    title: "Process - Développement",
    url: "/#process",
    content: "Étape 3 - Développement : construction itérative avec livraisons régulières pour ajustements en temps réel. Suivi de l'avancement et tests au fur et à mesure.",
  },
  {
    id: "process-4",
    title: "Process - Livraison",
    url: "/#process",
    content: "Étape 4 - Livraison : déploiement, formation de l'équipe et accompagnement jusqu'à l'adoption complète. Support continu pour garantir que la solution déploie tout son potentiel.",
  },

  // Section FAQ
  {
    id: "faq-1",
    title: "FAQ - Délais",
    url: "/#faq",
    content: "Délai de réalisation : dépend de la complexité et de l'étendue. Automatisation simple ou outil basique : 2 à 4 semaines. Application métier complète : 6 à 12 semaines. Planning réaliste défini dès la phase de découverte, avec livraisons intermédiaires pour validation.",
  },
  {
    id: "faq-2",
    title: "FAQ - Suivi",
    url: "/#faq",
    content: "Suivi après livraison : oui, tous les projets incluent une période de support initiale (minimum 1 mois) pour garantir une adoption en douceur. Support continu proposé pour les évolutions, corrections et optimisations futures.",
  },
  {
    id: "faq-3",
    title: "FAQ - Communication",
    url: "/#faq",
    content: "Communication pendant le projet : points réguliers (hebdomadaires ou bi-hebdomadaires selon le projet) pour faire le point sur l'avancement, valider les étapes et ajuster si nécessaire. Accès à un suivi en temps réel pour consulter l'évolution du projet à tout moment.",
  },

  // Section Contact
  {
    id: "contact-1",
    title: "Contact",
    url: "/#contact",
    content: "Contact : Jordan Pierron. Email : Jordan.p9497@gmail.com. LinkedIn : https://www.linkedin.com/in/jordanpierron/. Répond généralement sous 24h. Pour discuter d'un projet : décrire le besoin en 5 lignes, réponse avec une approche + étapes.",
  },
];
