import { useCases, type Audience, type I18n, type Locale, type UseCaseSet } from '~/data/usecases'

export interface SectorOption {
  sector: string
  label: I18n
}

/**
 * Ramène un code de locale i18n au sous-ensemble couvert par le contenu curé.
 * Les codes Nuxt ('fr' / 'en') coïncident déjà, mais `locale` est typé `string`
 * côté i18n : ce garde-fou évite un accès `undefined` si une locale est ajoutée
 * sans que le contenu suive.
 */
export function toLocale(code: string): Locale {
  return code.startsWith('en') ? 'en' : 'fr'
}

/**
 * Rend un champ bilingue dans la locale courante.
 *
 * Passer par une fonction plutôt que d'indexer (`title[loc]`) dans les
 * templates : la signature garantit un `string` en sortie, là où l'indexation
 * fait perdre le typage au compilateur de templates.
 */
export function pick(text: I18n, code: string): string {
  return text[toLocale(code)]
}

/**
 * Secteurs proposés dans le select « entreprise », dérivés du contenu curé
 * pour qu'il n'existe qu'une seule source de vérité.
 */
export function enterpriseSectors(): SectorOption[] {
  return useCases
    .filter((set): set is UseCaseSet & { sector: string } =>
      set.audience === 'entreprise' && Boolean(set.sector))
    .map(({ sector, label }) => ({ sector, label }))
}

/**
 * Résout le set à afficher. Filtrage pur en mémoire, aucun `fetch`.
 *
 * - `particulier` → le set du quotidien, `sector` est ignoré.
 * - `entreprise` → le set du secteur ; `undefined` tant qu'aucun secteur
 *   valide n'est choisi (l'UI affiche alors son état vide).
 */
export function findUseCaseSet(
  audience: Audience,
  sector?: string | null,
): UseCaseSet | undefined {
  if (audience === 'particulier') {
    return useCases.find(set => set.audience === 'particulier')
  }
  if (!sector) return undefined
  return useCases.find(set => set.audience === 'entreprise' && set.sector === sector)
}
