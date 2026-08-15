import { describe, expect, it, vi } from 'vitest'
import { useCases, type Tier } from '../data/usecases'
import { enterpriseSectors, findUseCaseSet, pick, toLocale } from '../composables/useCaseFilter'

const TIERS: Tier[] = ['formation', 'conseil', 'implementation']

describe('findUseCaseSet', () => {
  it('renvoie le set particulier, quel que soit le secteur passé', () => {
    const set = findUseCaseSet('particulier')
    expect(set?.audience).toBe('particulier')
    expect(findUseCaseSet('particulier', 'logistique')).toBe(set)
  })

  it('renvoie le set du secteur demandé pour une entreprise', () => {
    const set = findUseCaseSet('entreprise', 'logistique')
    expect(set?.audience).toBe('entreprise')
    expect(set?.sector).toBe('logistique')
  })

  it('renvoie undefined quand le secteur est absent ou inconnu', () => {
    expect(findUseCaseSet('entreprise')).toBeUndefined()
    expect(findUseCaseSet('entreprise', null)).toBeUndefined()
    expect(findUseCaseSet('entreprise', 'aeronautique')).toBeUndefined()
  })

  it('ne déclenche aucun appel réseau', () => {
    const fetchSpy = vi.spyOn(globalThis, 'fetch')
    findUseCaseSet('particulier')
    findUseCaseSet('entreprise', 'commerce')
    enterpriseSectors()
    expect(fetchSpy).not.toHaveBeenCalled()
    fetchSpy.mockRestore()
  })
})

describe('enterpriseSectors', () => {
  it('expose les 4 secteurs V1 avec des slugs uniques', () => {
    const sectors = enterpriseSectors()
    expect(sectors).toHaveLength(4)
    expect(new Set(sectors.map(s => s.sector)).size).toBe(4)
  })

  it('pointe chaque secteur vers un set résoluble', () => {
    for (const { sector } of enterpriseSectors()) {
      expect(findUseCaseSet('entreprise', sector)).toBeDefined()
    }
  })
})

describe('toLocale', () => {
  it('mappe les codes i18n sur les locales du contenu', () => {
    expect(toLocale('fr')).toBe('fr')
    expect(toLocale('en')).toBe('en')
    expect(toLocale('en-US')).toBe('en')
    expect(toLocale('fr-FR')).toBe('fr')
  })

  it('retombe sur le français pour une locale non couverte', () => {
    expect(toLocale('nl')).toBe('fr')
    expect(toLocale('')).toBe('fr')
  })
})

describe('pick', () => {
  const text = { fr: 'bonjour', en: 'hello' }

  it('rend le champ dans la locale demandée', () => {
    expect(pick(text, 'fr')).toBe('bonjour')
    expect(pick(text, 'en-US')).toBe('hello')
  })

  it('retombe sur le français pour une locale non couverte', () => {
    expect(pick(text, 'nl')).toBe('bonjour')
  })
})

describe('intégrité du contenu curé', () => {
  it('contient un set particulier unique et des sets entreprise tous typés', () => {
    const particuliers = useCases.filter(s => s.audience === 'particulier')
    expect(particuliers).toHaveLength(1)
    expect(particuliers[0]!.sector).toBeUndefined()

    for (const set of useCases.filter(s => s.audience === 'entreprise')) {
      expect(set.sector).toBeTruthy()
    }
  })

  it('donne 2 à 3 cas par set', () => {
    for (const set of useCases) {
      expect(set.cases.length).toBeGreaterThanOrEqual(2)
      expect(set.cases.length).toBeLessThanOrEqual(3)
    }
  })

  it('donne à chaque cas un tier valide et les deux locales remplies', () => {
    for (const set of useCases) {
      for (const field of ['fr', 'en'] as const) {
        expect(set.label[field].trim()).not.toBe('')
      }
      for (const c of set.cases) {
        expect(TIERS).toContain(c.tier)
        for (const text of [c.title, c.description, c.gain]) {
          expect(text.fr.trim()).not.toBe('')
          expect(text.en.trim()).not.toBe('')
        }
      }
    }
  })
})
