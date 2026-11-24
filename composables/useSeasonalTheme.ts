/**
 * Seasonal theme of the site (Christmas, ...), fixed at build time.
 *
 * The value comes from `NUXT_PUBLIC_SEASONAL_THEME`, which the deploy
 * workflows fill from the `SEASONAL_THEME` repository variable: turning a
 * theme on or off is a settings change plus a redeploy, not a commit.
 */

/**
 * Every theme the site knows how to draw. A theme added here without its
 * decoration in `components/seasonal/SeasonalDecor.vue` fails the type check.
 */
export const SEASONAL_THEMES = ['noel'] as const

export type SeasonalTheme = (typeof SEASONAL_THEMES)[number]

/**
 * Where a decoration may sit on the logo, in the logo's viewBox units.
 *
 * The logo derives these from its own geometry, so a decoration never needs
 * to know which lockup it is drawn on: a hat goes on `top`, ambient effects
 * (snow, ...) stay within `area`.
 */
export interface DecorAnchors {
  /** Middle of the top edge of the shape a hat sits on, and its width. */
  top: { x: number, y: number, width: number }
  area: { x: number, y: number, width: number, height: number }
}

/**
 * Turns a raw setting into a known theme, or `null` for no theme.
 *
 * The value is typed by hand in the GitHub settings, so case, accents and
 * stray spaces are forgiven. Anything unknown means no theme rather than a
 * failed build: a typo must not block a deploy.
 */
export function parseSeasonalTheme(value: unknown): SeasonalTheme | null {
  if (typeof value !== 'string') return null
  const key = value.normalize('NFD').replace(/\p{Diacritic}/gu, '').trim().toLowerCase()
  return SEASONAL_THEMES.find(theme => theme === key) ?? null
}

export function useSeasonalTheme(): SeasonalTheme | null {
  return parseSeasonalTheme(useRuntimeConfig().public.seasonalTheme)
}
