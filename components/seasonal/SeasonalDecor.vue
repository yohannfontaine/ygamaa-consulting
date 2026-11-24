<script setup lang="ts">
/**
 * Draws the decoration of the active seasonal theme inside the logo's SVG.
 *
 * Adding a theme means adding its id to `SEASONAL_THEMES` and its component
 * to the table below; the logo and the header stay untouched.
 */
import type { Component } from 'vue'
import type { DecorAnchors, SeasonalTheme } from '~/composables/useSeasonalTheme'
import SeasonalNoel from './SeasonalNoel.vue'

// A `Record` over the theme union: a theme declared without its decoration
// fails the type check instead of silently drawing nothing.
const DECORATIONS: Record<SeasonalTheme, Component> = {
  noel: SeasonalNoel,
}

defineProps<{
  theme: SeasonalTheme
  anchors: DecorAnchors
  anime: boolean
}>()
</script>

<template>
  <component :is="DECORATIONS[theme]" :anchors="anchors" :anime="anime" />
</template>
