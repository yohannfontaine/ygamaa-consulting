import type { Tier } from './usecases'

/**
 * Les trois étages de l'offre et leur page détail.
 *
 * Source de vérité unique du lien étage → route : le `tier` d'un cas d'usage
 * suffit à savoir vers quelle page l'envoyer, sans table de correspondance
 * dupliquée dans les composants.
 */
export interface OfferTier {
  tier: Tier
  /** Chemin non localisé — à passer dans `localePath()`. */
  path: string
}

export const offerTiers: OfferTier[] = [
  { tier: 'formation', path: '/formation' },
  { tier: 'conseil', path: '/conseil' },
  { tier: 'implementation', path: '/implementation' },
]

export function offerPath(tier: Tier): string {
  return offerTiers.find(o => o.tier === tier)?.path ?? '/'
}
