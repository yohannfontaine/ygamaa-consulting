<script setup lang="ts">
import { offerTiers } from '~/data/offer'

const localePath = useLocalePath()
</script>

<template>
  <section id="offer" class="offer">
    <div class="container">
      <div class="offer__header">
        <p class="offer__eyebrow">{{ $t('offer.eyebrow') }}</p>
        <h2 class="offer__title">{{ $t('offer.title') }}</h2>
        <p class="offer__subtitle">{{ $t('offer.subtitle') }}</p>
      </div>

      <ul class="offer__grid">
        <li v-for="(step, index) in offerTiers" :key="step.tier" class="offer__grid-item">
          <NuxtLink class="offer__card" :to="localePath(step.path)">
            <span class="offer__step">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="offer__card-title">{{ $t(`offer.tiers.${step.tier}.name`) }}</span>
            <span class="offer__card-pitch">{{ $t(`offer.tiers.${step.tier}.pitch`) }}</span>
            <span class="offer__card-more">{{ $t('offer.more') }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.offer {
  padding-block: $space-9;
  background: var(--yg-surface-sunken);
}

.offer__header {
  max-width: 44rem;
  margin-bottom: $space-6;
}

.offer__eyebrow {
  margin-bottom: $space-2;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  color: var(--yg-accent-text);
}

.offer__title {
  margin-bottom: $space-3;
  color: var(--yg-text-heading);
}

.offer__subtitle {
  margin-bottom: 0;
  color: var(--yg-text-muted);
}

.offer__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: $space-4;
  margin: 0;
  padding: 0;
  list-style: none;
}

.offer__grid-item {
  display: flex;
}

// Toute la carte est le lien : la cible de clic couvre la carte entière
// plutôt qu'un « en savoir plus » de deux centimètres.
.offer__card {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: $space-5;
  border: 1px solid var(--yg-border);
  border-radius: $radius-lg;
  background: var(--yg-surface-raised);
  text-decoration: none;
  transition: $transition--default;
}

.offer__card:hover {
  border-color: var(--yg-accent);
  box-shadow: var(--yg-shadow-md);
  transform: translateY(-4px);
}

.offer__card:focus-visible {
  outline: $focus-ring-width solid var(--yg-focus);
  outline-offset: 2px;
}

.offer__step {
  margin-bottom: $space-3;
  font-family: $font-family-mono;
  font-size: $fs-xs;
  color: var(--yg-text-muted);
}

.offer__card-title {
  margin-bottom: $space-3;
  font-family: $heading-font-family-name;
  font-size: $h5-size;
  font-weight: $heading-font-weight;
  line-height: $heading-line-height;
  letter-spacing: $heading-letter-spacing;
  color: var(--yg-text-heading);
}

.offer__card-pitch {
  margin-bottom: $space-5;
  font-size: $fs-sm;
  color: var(--yg-text);
}

.offer__card-more {
  margin-top: auto;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  color: var(--yg-accent-text);
}

@media (max-width: 575px) {
  .offer {
    padding-block: $space-7;
  }
}

@media (prefers-reduced-motion: reduce) {
  .offer__card {
    transition: none;
  }

  .offer__card:hover {
    transform: none;
  }
}
</style>
