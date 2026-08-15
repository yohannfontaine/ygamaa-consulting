<script setup lang="ts">
import type { Audience } from '~/data/usecases'
import { useAudience } from '~/composables/useAudience'

const audience = useAudience()
const options: Audience[] = ['particulier', 'entreprise']

// Les deux portes restent de vrais liens : sans JS elles mènent quand même au
// générateur. Le clic ne fait qu'y présélectionner l'audience.
function choose(value: Audience) {
  audience.value = value
}
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero__inner">
      <p class="hero__eyebrow">{{ $t('hero.eyebrow') }}</p>

      <h1 class="hero__title">{{ $t('hero.title') }}</h1>

      <p class="hero__lead">{{ $t('hero.lead') }}</p>

      <p id="hero-fork-label" class="hero__fork-label">
        {{ $t('hero.fork.label') }}
      </p>
      <nav class="hero__fork" aria-labelledby="hero-fork-label">
        <a
          v-for="option in options"
          :key="option"
          class="hero__door"
          href="#generator"
          @click="choose(option)"
        >
          {{ $t(`hero.fork.${option}`) }}
        </a>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  // Un dégradé sombre de bout en bout : le blanc posé dessus reste ≥ 7:1,
  // donc lisible sans exception.
  background: $gradient--default-two;
  padding-block: $space-10 $space-9;
}

.hero__inner {
  max-width: 52rem;
}

.hero__eyebrow {
  margin-bottom: $space-4;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  color: $c-accent-300;
}

.hero__title {
  margin-bottom: $space-5;
  color: $white;
}

.hero__lead {
  margin-bottom: $space-7;
  max-width: 40rem;
  font-size: $fs-lg;
  color: $c-neutral-200;
}

.hero__fork-label {
  margin-bottom: $space-3;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  color: $c-neutral-300;
}

.hero__fork {
  display: flex;
  flex-wrap: wrap;
  gap: $space-4;
}

// Les deux portes ont le même poids visuel : c'est un aiguillage, pas un
// couple action principale / secondaire.
.hero__door {
  padding: $space-3 $space-6;
  border: 1px solid $c-accent-400;
  border-radius: $radius-pill;
  font-size: $fs-base;
  font-weight: $fw-semibold;
  color: $c-neutral-950;
  background: $c-accent-400;
  text-decoration: none;
  transition: $transition-fast;
}

.hero__door + .hero__door {
  color: $c-accent-300;
  background: transparent;
  border-color: $c-accent-300;
}

.hero__door:hover {
  background: $c-accent-300;
  border-color: $c-accent-300;
  color: $c-neutral-950;
}

.hero__door:focus-visible {
  outline: $focus-ring-width solid $c-accent-300;
  outline-offset: 3px;
}

@media (max-width: 767px) {
  .hero {
    padding-block: $space-8 $space-7;
  }

  .hero__door {
    flex: 1 1 100%;
    text-align: center;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__door {
    transition: none;
  }
}
</style>
