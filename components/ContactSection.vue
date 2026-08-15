<script setup lang="ts">
/**
 * Contact — liens directs, pas de formulaire.
 *
 * Un formulaire supposerait un backend ou un service tiers ; le site est
 * entièrement statique et la CSP reste en `connect-src 'self'`.
 *
 * Le téléphone reste à ajouter une fois le numéro confirmé.
 */
const channels = [
  {
    key: 'email',
    href: 'mailto:contact@ygamaa-consulting.com',
    value: 'contact@ygamaa-consulting.com',
  },
  {
    key: 'linkedin',
    href: 'https://www.linkedin.com/company/y-gamaa-consulting/',
    value: 'Y-GaMaa Consulting',
  },
]
</script>

<template>
  <section id="contact" class="contact">
    <div class="container contact__inner">
      <p class="contact__eyebrow">{{ $t('contact.eyebrow') }}</p>
      <h2 class="contact__title">{{ $t('contact.title') }}</h2>
      <p class="contact__lead">{{ $t('contact.lead') }}</p>

      <ul class="contact__channels">
        <li v-for="channel in channels" :key="channel.key" class="contact__channel">
          <span class="contact__channel-label">{{ $t(`contact.channels.${channel.key}`) }}</span>
          <a class="contact__channel-link" :href="channel.href">{{ channel.value }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  padding-block: $space-9;
  background: var(--yg-surface-sunken);
}

.contact__inner {
  max-width: 44rem;
}

.contact__eyebrow {
  margin-bottom: $space-2;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  color: var(--yg-accent-text);
}

.contact__title {
  margin-bottom: $space-3;
  color: var(--yg-text-heading);
}

.contact__lead {
  margin-bottom: $space-6;
  color: var(--yg-text);
}

.contact__channels {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  gap: $space-5;
  margin: 0;
  padding: 0;
  list-style: none;
}

.contact__channel {
  display: flex;
  flex-direction: column;
  gap: $space-2;
  padding-top: $space-4;
  border-top: 1px solid var(--yg-border);
}

.contact__channel-label {
  font-size: $fs-xs;
  font-weight: $fw-semibold;
  letter-spacing: $eyebrow-letter-spacing;
  text-transform: uppercase;
  color: var(--yg-text-muted);
}

.contact__channel-link {
  font-size: $fs-base;
  font-weight: $fw-semibold;
  color: var(--yg-accent-text);
  // Les adresses longues ne doivent pas déborder sur mobile.
  overflow-wrap: anywhere;
}

.contact__channel-link:focus-visible {
  outline: $focus-ring-width solid var(--yg-focus);
  outline-offset: 2px;
}

@media (max-width: 575px) {
  .contact {
    padding-block: $space-7;
  }
}
</style>
