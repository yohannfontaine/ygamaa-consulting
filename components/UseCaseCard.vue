<script setup lang="ts">
import type { UseCase } from '~/data/usecases'
import { pick } from '~/composables/useCaseFilter'
import { offerPath } from '~/data/offer'

defineProps<{ useCase: UseCase }>()

const { locale } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <article class="use-case-card">
    <p class="use-case-card__tier">
      <NuxtLink class="use-case-card__tier-link" :to="localePath(offerPath(useCase.tier))">
        {{ $t(`generator.tiers.${useCase.tier}`) }}
      </NuxtLink>
    </p>

    <h3 class="use-case-card__title">
      {{ pick(useCase.title, locale) }}
    </h3>

    <p class="use-case-card__description">
      {{ pick(useCase.description, locale) }}
    </p>

    <p class="use-case-card__gain">
      <span class="use-case-card__gain-label">{{ $t('generator.gain') }}</span>
      <span class="use-case-card__gain-value">{{ pick(useCase.gain, locale) }}</span>
    </p>
  </article>
</template>

<style lang="scss" scoped>
.use-case-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: $space-5;
  border: 1px solid var(--yg-border);
  border-radius: $radius-lg;
  background: var(--yg-surface-raised);
  transition: $transition--default;
}

.use-case-card:hover {
  border-color: var(--yg-accent);
  box-shadow: var(--yg-shadow-md);
  transform: translateY(-4px);
}

.use-case-card__tier {
  margin-bottom: $space-3;
  font-size: $fs-xs;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  // Accent-text (et non accent-vivid) : c'est une information, pas un décor.
  color: var(--yg-accent-text);
}

.use-case-card__tier-link {
  color: inherit;
  text-decoration: none;
}

.use-case-card__tier-link:hover {
  text-decoration: underline;
}

.use-case-card__tier-link:focus-visible {
  outline: $focus-ring-width solid var(--yg-focus);
  outline-offset: 2px;
}

.use-case-card__title {
  margin-bottom: $space-3;
  font-size: $h5-size;
  line-height: $heading-line-height;
  color: var(--yg-text-heading);
}

.use-case-card__description {
  margin-bottom: $space-4;
  font-size: $fs-sm;
  color: var(--yg-text);
}

.use-case-card__gain {
  // `auto` colle le gain en bas quelle que soit la longueur du texte : les
  // cartes d'une même rangée restent alignées.
  margin-top: auto;
  margin-bottom: 0;
  padding-top: $space-3;
  border-top: 1px solid var(--yg-border);
  font-size: $fs-sm;
}

.use-case-card__gain-label {
  color: var(--yg-text-muted);
}

.use-case-card__gain-value {
  margin-left: $space-2;
  font-weight: $fw-semibold;
  color: var(--yg-text-heading);
}

@media (prefers-reduced-motion: reduce) {
  .use-case-card {
    transition: none;
  }

  .use-case-card:hover {
    transform: none;
  }
}
</style>
