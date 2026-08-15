<script setup lang="ts">
const { tm, rt } = useI18n()

const proofs = computed(() => tm('why.proofs') as unknown[])
</script>

<template>
  <section id="why" class="why">
    <div class="container">
      <div class="why__header">
        <p class="why__eyebrow">{{ $t('why.eyebrow') }}</p>
        <h2 class="why__title">{{ $t('why.title') }}</h2>
      </div>

      <div class="why__body">
        <p class="why__lead">{{ $t('why.lead') }}</p>

        <dl class="why__proofs">
          <div v-for="(proof, index) in proofs" :key="index" class="why__proof">
            <dt class="why__proof-term">{{ rt((proof as { term: string }).term) }}</dt>
            <dd class="why__proof-detail">{{ rt((proof as { detail: string }).detail) }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.why {
  padding-block: $space-9;
  background: var(--yg-bg);
}

.why__header {
  max-width: 44rem;
  margin-bottom: $space-6;
}

.why__eyebrow {
  margin-bottom: $space-2;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  color: var(--yg-accent-text);
}

.why__title {
  margin-bottom: 0;
  color: var(--yg-text-heading);
}

.why__lead {
  max-width: 40rem;
  margin-bottom: $space-7;
  font-size: $fs-lg;
  color: var(--yg-text);
}

.why__proofs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: $space-5;
  margin: 0;
}

.why__proof {
  padding-top: $space-4;
  border-top: 2px solid var(--yg-accent);
}

.why__proof-term {
  margin-bottom: $space-2;
  font-family: $heading-font-family-name;
  font-size: $h6-size;
  font-weight: $heading-font-weight;
  color: var(--yg-text-heading);
}

.why__proof-detail {
  margin: 0;
  font-size: $fs-sm;
  color: var(--yg-text-muted);
}

@media (max-width: 575px) {
  .why {
    padding-block: $space-7;
  }
}
</style>
