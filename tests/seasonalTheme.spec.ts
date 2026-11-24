import { describe, expect, it } from 'vitest'
import { SEASONAL_THEMES, parseSeasonalTheme } from '../composables/useSeasonalTheme'

describe('parseSeasonalTheme', () => {
  it('recognises every declared theme', () => {
    for (const theme of SEASONAL_THEMES) {
      expect(parseSeasonalTheme(theme)).toBe(theme)
    }
  })

  // The value is typed by hand in the GitHub settings.
  it('forgives case, accents and surrounding spaces', () => {
    expect(parseSeasonalTheme('Noël')).toBe('noel')
    expect(parseSeasonalTheme(' NOEL ')).toBe('noel')
    expect(parseSeasonalTheme('noël')).toBe('noel')
  })

  it('falls back to no theme for empty or unknown values', () => {
    expect(parseSeasonalTheme('')).toBeNull()
    expect(parseSeasonalTheme('   ')).toBeNull()
    expect(parseSeasonalTheme('halloween')).toBeNull()
    expect(parseSeasonalTheme('noel2026')).toBeNull()
  })

  // Nuxt parses environment overrides, so `123` or `true` arrive as non-strings.
  it('falls back to no theme for non-string values', () => {
    expect(parseSeasonalTheme(undefined)).toBeNull()
    expect(parseSeasonalTheme(null)).toBeNull()
    expect(parseSeasonalTheme(123)).toBeNull()
    expect(parseSeasonalTheme(true)).toBeNull()
  })
})
