import type { Audience } from '~/data/usecases'

/**
 * Audience choisie, partagée entre le hero et le générateur : cliquer sur une
 * porte du hero présélectionne le générateur plus bas dans la page.
 *
 * `useState` et non un `ref` de module : au rendu serveur, un ref de module est
 * partagé entre toutes les requêtes, si bien que le choix d'un visiteur
 * fuiterait sur le suivant.
 */
export function useAudience() {
  return useState<Audience>('audience', () => 'particulier')
}
