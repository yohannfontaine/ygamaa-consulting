/**
 * Contenu curé du générateur de cas d'usage.
 *
 * Module TS pur : importé et filtré côté client, aucun `fetch`, aucun appel
 * réseau. C'est ce qui garantit l'affichage instantané et la CSP stricte
 * (`connect-src 'self'`).
 *
 * ⚠️ CONTENU PLACEHOLDER — rédigé pour valider le modèle et la mécanique.
 * À relire et réécrire avant mise en ligne. Les chiffres de `gain` sont des
 * ordres de grandeur illustratifs, pas des promesses commerciales.
 */

export type Locale = 'fr' | 'en'
export type I18n = Record<Locale, string>

/** Étage de l'offre vers lequel le cas d'usage renvoie. */
export type Tier = 'formation' | 'conseil' | 'implementation'

export type Audience = 'particulier' | 'entreprise'

export interface UseCase {
  title: I18n
  description: I18n
  /** Bénéfice concret, ex : { fr: '~4 h/semaine', en: '~4 hrs/week' } */
  gain: I18n
  tier: Tier
}

export interface UseCaseSet {
  audience: Audience
  /** Requis si `audience === 'entreprise'`, absent pour 'particulier'. */
  sector?: string
  /** Libellé affiché du secteur / du set. */
  label: I18n
  cases: UseCase[]
}

export const useCases: UseCaseSet[] = [
  {
    audience: 'particulier',
    label: {
      fr: 'Au quotidien',
      en: 'Everyday life',
    },
    cases: [
      {
        title: {
          fr: 'Rédiger et répondre plus vite',
          en: 'Write and reply faster',
        },
        description: {
          fr: "Mails, courriers, annonces : dicter l'idée, obtenir un texte clair et le corriger en une passe.",
          en: 'Emails, letters, listings: dictate the idea, get clear text, fix it in one pass.',
        },
        gain: {
          fr: '~3 h par semaine',
          en: '~3 hrs per week',
        },
        tier: 'formation',
      },
      {
        title: {
          fr: 'Préparer ses démarches administratives',
          en: 'Get through admin paperwork',
        },
        description: {
          fr: "Comprendre un courrier officiel, préparer un dossier, savoir quoi demander et à qui.",
          en: 'Understand an official letter, prepare a file, know what to ask and who to ask.',
        },
        gain: {
          fr: 'Moins de dossiers repoussés',
          en: 'Fewer files left on hold',
        },
        tier: 'formation',
      },
      {
        title: {
          fr: 'Apprendre avec un tuteur disponible',
          en: 'Learn with an always-on tutor',
        },
        description: {
          fr: "Réviser, s'entraîner à un entretien, progresser dans une langue à son rythme.",
          en: 'Revise, rehearse an interview, improve a language at your own pace.',
        },
        gain: {
          fr: 'Un accompagnement à la demande',
          en: 'Support on demand',
        },
        tier: 'formation',
      },
    ],
  },
  {
    audience: 'entreprise',
    sector: 'logistique',
    label: {
      fr: 'Logistique, port et transport',
      en: 'Logistics, port and transport',
    },
    cases: [
      {
        title: {
          fr: 'Extraire les données des documents de transport',
          en: 'Extract data from transport documents',
        },
        description: {
          fr: 'CMR, bons de livraison, factures : lecture automatique et reprise dans vos outils, sans ressaisie.',
          en: 'Waybills, delivery notes, invoices: read automatically and pushed into your tools, no re-keying.',
        },
        gain: {
          fr: '~70 % de saisie en moins',
          en: '~70% less data entry',
        },
        tier: 'implementation',
      },
      {
        title: {
          fr: 'Répondre plus vite aux demandes de cotation',
          en: 'Answer quote requests faster',
        },
        description: {
          fr: "Un assistant qui prépare le brouillon de réponse à partir de vos grilles et de l'historique.",
          en: 'An assistant that drafts the reply from your rate grids and past quotes.',
        },
        gain: {
          fr: 'Réponse en heures, pas en jours',
          en: 'Answers in hours, not days',
        },
        tier: 'conseil',
      },
      {
        title: {
          fr: 'Outiller les équipes exploitation',
          en: 'Equip the operations team',
        },
        description: {
          fr: "Former les équipes aux assistants IA sur leurs tâches réelles : suivi, relances, comptes rendus.",
          en: 'Train teams on AI assistants for their real tasks: tracking, follow-ups, reports.',
        },
        gain: {
          fr: 'Autonomie en quelques séances',
          en: 'Autonomy in a few sessions',
        },
        tier: 'formation',
      },
    ],
  },
  {
    audience: 'entreprise',
    sector: 'commerce',
    label: {
      fr: 'Commerce et retail',
      en: 'Retail and commerce',
    },
    cases: [
      {
        title: {
          fr: 'Produire fiches produit et publications',
          en: 'Produce product sheets and posts',
        },
        description: {
          fr: 'Décliner un même produit en fiche boutique, post réseaux et argumentaire vendeur, ton de la marque respecté.',
          en: 'Turn one product into a shop listing, a social post and a sales pitch, all on brand.',
        },
        gain: {
          fr: "~1 journée par mois",
          en: '~1 day per month',
        },
        tier: 'formation',
      },
      {
        title: {
          fr: 'Faire parler les avis clients',
          en: 'Make customer reviews talk',
        },
        description: {
          fr: 'Regrouper les avis multi-plateformes et remonter chaque mois les irritants récurrents.',
          en: 'Pull reviews from every platform and surface recurring pain points each month.',
        },
        gain: {
          fr: 'Les irritants sortent du bruit',
          en: 'Pain points rise above the noise',
        },
        tier: 'implementation',
      },
      {
        title: {
          fr: 'Cadrer les priorités IA du point de vente',
          en: 'Frame the store’s AI priorities',
        },
        description: {
          fr: "Identifier les 3 usages qui rapportent vraiment, et écarter ceux qui coûtent plus qu'ils ne rendent.",
          en: 'Pick the 3 uses that actually pay off, and drop the ones that cost more than they return.',
        },
        gain: {
          fr: 'Une feuille de route en 2 semaines',
          en: 'A roadmap in 2 weeks',
        },
        tier: 'conseil',
      },
    ],
  },
  {
    audience: 'entreprise',
    sector: 'artisanat',
    label: {
      fr: 'Artisanat et BTP',
      en: 'Trades and construction',
    },
    cases: [
      {
        title: {
          fr: 'Dicter devis et comptes rendus de chantier',
          en: 'Dictate quotes and site reports',
        },
        description: {
          fr: 'Parler 2 minutes en fin de chantier, récupérer un compte rendu propre et un devis prêt à envoyer.',
          en: 'Talk for 2 minutes after the job, get a clean report and a quote ready to send.',
        },
        gain: {
          fr: 'Fini les devis du dimanche soir',
          en: 'No more Sunday-night quoting',
        },
        tier: 'formation',
      },
      {
        title: {
          fr: 'Chiffrer à partir des plans et métrés',
          en: 'Estimate from plans and measurements',
        },
        description: {
          fr: 'Pré-remplir le chiffrage depuis vos documents et vos prix, la validation restant humaine.',
          en: 'Pre-fill the estimate from your documents and your prices; a human still signs off.',
        },
        gain: {
          fr: 'Moins d’oublis de poste',
          en: 'Fewer missed line items',
        },
        tier: 'implementation',
      },
      {
        title: {
          fr: 'Trouver où l’IA fait gagner du temps',
          en: 'Find where AI actually saves time',
        },
        description: {
          fr: "Passer le cycle devis-chantier-facture au crible pour cibler les vrais points de friction.",
          en: 'Comb through the quote-to-invoice cycle to target the real friction points.',
        },
        gain: {
          fr: 'Un diagnostic en une demi-journée',
          en: 'A half-day diagnosis',
        },
        tier: 'conseil',
      },
    ],
  },
  {
    audience: 'entreprise',
    sector: 'sante-tourisme',
    label: {
      fr: 'Santé, tourisme et hôtellerie',
      en: 'Health, tourism and hospitality',
    },
    cases: [
      {
        title: {
          fr: 'Répondre aux clients en plusieurs langues',
          en: 'Answer guests in several languages',
        },
        description: {
          fr: 'Demandes de réservation et avis traités en français, anglais et néerlandais, avec votre ton.',
          en: 'Booking requests and reviews handled in French, English and Dutch, in your voice.',
        },
        gain: {
          fr: 'Aucune demande sans réponse',
          en: 'No request left unanswered',
        },
        tier: 'implementation',
      },
      {
        title: {
          fr: 'Synthétiser comptes rendus et courriers',
          en: 'Summarise reports and letters',
        },
        description: {
          fr: 'Transformer des notes en document structuré, relu et prêt à transmettre.',
          en: 'Turn notes into a structured document, proofread and ready to send.',
        },
        gain: {
          fr: '~2 h par semaine',
          en: '~2 hrs per week',
        },
        tier: 'formation',
      },
      {
        title: {
          fr: 'Cartographier l’administratif automatisable',
          en: 'Map out automatable admin work',
        },
        description: {
          fr: "Lister les tâches répétitives, dire lesquelles sont automatisables et à quelles conditions de confidentialité.",
          en: 'List repetitive tasks, flag which are automatable and under what confidentiality conditions.',
        },
        gain: {
          fr: 'Priorités claires, risques cadrés',
          en: 'Clear priorities, scoped risks',
        },
        tier: 'conseil',
      },
    ],
  },
]
