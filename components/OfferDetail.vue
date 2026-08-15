<script setup lang="ts">
import type { Tier } from '~/data/usecases'

/**
 * Corps commun aux trois pages détail : elles ne diffèrent que par leur
 * contenu i18n, pas par leur structure.
 */
const props = defineProps<{ tier: Tier }>()

const { t, tm, rt } = useI18n()
const localePath = useLocalePath()

const points = computed(() => tm(`offer.detail.${props.tier}.points`) as unknown[])

useHead({
  title: computed(() => t(`offer.detail.${props.tier}.title`)),
})
</script>

<template>
  <article class="offer-detail">
    <header class="offer-detail__hero">
      <div class="container offer-detail__inner">
        <p class="offer-detail__eyebrow">{{ $t('offer.eyebrow') }}</p>
        <h1 class="offer-detail__title">{{ $t(`offer.detail.${tier}.title`) }}</h1>
        <p class="offer-detail__lead">{{ $t(`offer.detail.${tier}.lead`) }}</p>
      </div>
    </header>

    <div class="container offer-detail__inner offer-detail__body">
      <h2 class="offer-detail__section-title">{{ $t('offer.detail.covers') }}</h2>
      <ul class="offer-detail__points">
        <li v-for="(point, index) in points" :key="index" class="offer-detail__point">
          {{ rt(point as string) }}
        </li>
      </ul>

      <p class="offer-detail__actions">
        <NuxtLink class="offer-detail__cta" :to="`${localePath('/')}#contact`">
          {{ $t('offer.detail.cta') }}
        </NuxtLink>
        <NuxtLink class="offer-detail__back" :to="`${localePath('/')}#offer`">
          {{ $t('offer.detail.back') }}
        </NuxtLink>
      </p>
    </div>
  </article>
</template>

<style lang="scss" scoped>
.offer-detail__hero {
  background: $gradient--default-two;
  padding-block: $space-9 $space-8;
}

.offer-detail__inner {
  max-width: 48rem;
}

.offer-detail__eyebrow {
  margin-bottom: $space-3;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  color: $c-accent-300;
}

.offer-detail__title {
  margin-bottom: $space-4;
  color: $white;
}

.offer-detail__lead {
  margin-bottom: 0;
  font-size: $fs-lg;
  color: $c-neutral-200;
}

.offer-detail__body {
  padding-block: $space-8;
}

.offer-detail__section-title {
  margin-bottom: $space-5;
  font-size: $h4-size;
  color: var(--yg-text-heading);
}

.offer-detail__points {
  margin: 0 0 $space-8;
  padding: 0;
  list-style: none;
}

.offer-detail__point {
  position: relative;
  padding: $space-4 0 $space-4 $space-6;
  border-bottom: 1px solid var(--yg-border);
  color: var(--yg-text);
}

// Puce décorative : `aria-hidden` implicite puisqu'elle vient d'un
// pseudo-élément, la liste reste sémantiquement une liste.
.offer-detail__point::before {
  content: '';
  position: absolute;
  top: calc(#{$space-4} + 0.6em);
  left: 0;
  width: 10px;
  height: 2px;
  background: var(--yg-accent);
}

.offer-detail__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: $space-5;
  margin: 0;
}

.offer-detail__cta {
  padding: $space-3 $space-6;
  border-radius: $radius-pill;
  background: var(--yg-accent);
  color: var(--yg-on-accent);
  font-weight: $fw-semibold;
  text-decoration: none;
  transition: $transition-fast;
}

.offer-detail__cta:hover {
  background: var(--yg-accent-hover);
}

.offer-detail__cta:focus-visible,
.offer-detail__back:focus-visible {
  outline: $focus-ring-width solid var(--yg-focus);
  outline-offset: 2px;
}

.offer-detail__back {
  color: var(--yg-accent-text);
  font-size: $fs-sm;
  font-weight: $fw-semibold;
}

@media (max-width: 575px) {
  .offer-detail__hero {
    padding-block: $space-7 $space-6;
  }

  .offer-detail__body {
    padding-block: $space-7;
  }
}

@media (prefers-reduced-motion: reduce) {
  .offer-detail__cta {
    transition: none;
  }
}
</style>
