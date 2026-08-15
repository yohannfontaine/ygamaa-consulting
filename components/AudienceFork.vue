<script setup lang="ts">
import type { Audience } from '~/data/usecases'

/**
 * Segmented control particulier / entreprise.
 *
 * Radios natives volontairement : on récupère gratuitement la navigation aux
 * flèches, le regroupement lu par les lecteurs d'écran et le fonctionnement
 * sans JS. Le style ne fait que masquer l'input, jamais le retirer du flux
 * focusable.
 */
const model = defineModel<Audience>({ required: true })

const groupName = useId()
const options: Audience[] = ['particulier', 'entreprise']
</script>

<template>
  <fieldset class="audience-fork">
    <legend class="audience-fork__legend">
      {{ $t('generator.audience.legend') }}
    </legend>

    <div class="audience-fork__options">
      <template v-for="option in options" :key="option">
        <input
          :id="`${groupName}-${option}`"
          v-model="model"
          class="audience-fork__input"
          type="radio"
          :name="groupName"
          :value="option"
        >
        <label class="audience-fork__label" :for="`${groupName}-${option}`">
          {{ $t(`generator.audience.${option}`) }}
        </label>
      </template>
    </div>
  </fieldset>
</template>

<style lang="scss" scoped>
.audience-fork {
  border: 0;
  margin: 0;
  padding: 0;
  min-inline-size: 0; // un fieldset ne rétrécit pas sans ça
}

.audience-fork__legend {
  float: left; // legend + flexbox : le float évite le rendu natif imprévisible
  width: 100%;
  margin-bottom: $space-3;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  color: var(--yg-text-muted);
}

.audience-fork__options {
  clear: both;
  display: inline-flex;
  gap: $space-1;
  padding: $space-1;
  border: 1px solid var(--yg-border);
  border-radius: $radius-pill;
  background: var(--yg-surface-sunken);
}

.audience-fork__input {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.audience-fork__label {
  display: block;
  margin: 0;
  padding: $space-2 $space-5;
  border-radius: $radius-pill;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  color: var(--yg-text);
  cursor: pointer;
  transition: $transition-fast;
}

.audience-fork__input:checked + .audience-fork__label {
  background: var(--yg-accent);
  color: var(--yg-on-accent);
  box-shadow: var(--yg-shadow-sm);
}

.audience-fork__input:focus-visible + .audience-fork__label {
  outline: $focus-ring-width solid var(--yg-focus);
  outline-offset: 2px;
}

.audience-fork__input:not(:checked) + .audience-fork__label:hover {
  background: var(--yg-accent-soft);
  color: var(--yg-accent-text);
}

@media (prefers-reduced-motion: reduce) {
  .audience-fork__label {
    transition: none;
  }
}
</style>
