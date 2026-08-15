<script setup lang="ts">
import { enterpriseSectors, findUseCaseSet, pick } from '~/composables/useCaseFilter'
import { useAudience } from '~/composables/useAudience'

/**
 * Générateur de cas d'usage — la pièce maîtresse de la page.
 *
 * Tout est résolu en mémoire depuis `data/usecases.ts` : aucun `fetch`, donc
 * aucune latence réseau et la CSP reste en `connect-src 'self'`.
 */
const { locale } = useI18n()

// Partagé avec le hero : la porte choisie plus haut arrive présélectionnée.
const audience = useAudience()
const sector = ref<string | null>(null)
const sectors = enterpriseSectors()
const selectId = useId()

// Changer d'audience remet le secteur à zéro : sans ça, revenir sur
// « entreprise » réafficherait le secteur choisi avant le détour par
// « particulier », ce qui donne un résultat surgi de nulle part.
watch(audience, () => {
  sector.value = null
})

const currentSet = computed(() => findUseCaseSet(audience.value, sector.value))
const cases = computed(() => currentSet.value?.cases ?? [])
const awaitingSector = computed(() => audience.value === 'entreprise' && !currentSet.value)
</script>

<template>
  <section id="generator" class="generator">
    <div class="container">
      <div class="generator__header">
        <p class="generator__eyebrow">{{ $t('generator.eyebrow') }}</p>
        <h2 class="generator__title">{{ $t('generator.title') }}</h2>
        <p class="generator__subtitle">{{ $t('generator.subtitle') }}</p>
      </div>

      <div class="generator__controls">
        <AudienceFork v-model="audience" />

        <div v-if="audience === 'entreprise'" class="generator__sector">
          <label class="generator__sector-label" :for="selectId">
            {{ $t('generator.sector.label') }}
          </label>
          <select :id="selectId" v-model="sector" class="generator__sector-select">
            <option :value="null">{{ $t('generator.sector.placeholder') }}</option>
            <option v-for="option in sectors" :key="option.sector" :value="option.sector">
              {{ pick(option.label, locale) }}
            </option>
          </select>
        </div>
      </div>

      <!-- Le contenu change sans rechargement : `aria-live` fait annoncer le
           nouveau résultat aux lecteurs d'écran. -->
      <div class="generator__results" aria-live="polite">
        <p v-if="awaitingSector" class="generator__empty">
          {{ $t('generator.empty') }}
        </p>

        <template v-else>
          <p class="visually-hidden">
            {{ $t('generator.count', cases.length) }}
          </p>
          <ul class="generator__grid">
            <li v-for="useCase in cases" :key="useCase.title.fr" class="generator__grid-item">
              <UseCaseCard :use-case="useCase" />
            </li>
          </ul>
        </template>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.generator {
  padding-block: $space-9;
  background: var(--yg-bg);
}

.generator__header {
  max-width: 44rem;
  margin-bottom: $space-6;
}

.generator__eyebrow {
  margin-bottom: $space-2;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  color: var(--yg-accent-text);
}

.generator__title {
  margin-bottom: $space-3;
  color: var(--yg-text-heading);
}

.generator__subtitle {
  margin-bottom: 0;
  color: var(--yg-text-muted);
}

.generator__controls {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: $space-5;
  margin-bottom: $space-6;
}

.generator__sector-label {
  display: block;
  margin-bottom: $space-3;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  color: var(--yg-text-muted);
}

.generator__sector-select {
  min-width: 16rem;
  padding: $space-2 $space-4;
  border: 1px solid var(--yg-border-strong);
  border-radius: $radius-pill;
  background: var(--yg-surface);
  color: var(--yg-text);
  font-family: inherit;
  font-size: $fs-sm;
}

.generator__sector-select:focus-visible {
  outline: $focus-ring-width solid var(--yg-focus);
  outline-offset: 2px;
}

.generator__empty {
  padding: $space-6;
  border: 1px dashed var(--yg-border-strong);
  border-radius: $radius-lg;
  text-align: center;
  color: var(--yg-text-muted);
}

.generator__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
  gap: $space-4;
  margin: 0;
  padding: 0;
  list-style: none;
}

.generator__grid-item {
  display: flex;
}

@media (max-width: 575px) {
  .generator {
    padding-block: $space-7;
  }

  .generator__sector-select {
    min-width: 100%;
  }
}
</style>
