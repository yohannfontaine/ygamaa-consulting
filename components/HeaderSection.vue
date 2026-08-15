<script setup lang="ts">
/**
 * Navigation principale, en markup natif.
 *
 * Plus de `bootstrap-vue-next` ni de `ClientOnly` : la navigation est présente
 * dans le HTML prérendu, donc lisible par les moteurs et sans saut de mise en
 * page à l'hydratation. Le collant est fait en CSS (`position: sticky`) plutôt
 * qu'avec un écouteur de scroll.
 */
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()

const menuId = useId()
const open = ref(false)

const sections = ['home', 'generator', 'offer', 'why', 'contact']

// Les autres locales que celle affichée : sur deux langues, ça donne un seul
// lien, ce qui suffit et évite un menu déroulant pour rien.
const otherLocales = computed(() =>
  (locales.value as { code: string, name?: string }[]).filter(l => l.code !== locale.value),
)

// Une ancre sur une page détail doit ramener à l'accueil, d'où le préfixe.
function anchor(section: string) {
  return `${localePath('/')}#${section}`
}
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <NuxtLink class="site-header__brand" :to="localePath('/')">
        <nuxt-img
          src="img/logo/logo-light.png"
          alt="Y-GaMaa Consulting"
          format="webp"
          sizes="sm:150px lg:200px"
          width="200"
          height="69"
        />
      </NuxtLink>

      <button
        class="site-header__toggle"
        type="button"
        :aria-expanded="open"
        :aria-controls="menuId"
        @click="open = !open"
      >
        {{ open ? $t('menu.close') : $t('menu.open') }}
      </button>

      <div :id="menuId" class="site-header__menu" :class="{ 'is-open': open }">
        <nav class="site-header__nav" :aria-label="$t('menu.label')">
          <!-- Ancres en `<a>` natif et non en NuxtLink : le routeur considère
               `/#ancre` comme correspondant à la route `/` et poserait
               `aria-current="page"` sur les cinq liens à la fois. -->
          <a
            v-for="section in sections"
            :key="section"
            class="site-header__link"
            :href="anchor(section)"
            @click="open = false"
          >
            {{ $t(`menu.${section}`) }}
          </a>
        </nav>

        <div class="site-header__tools">
          <NuxtLink
            v-for="other in otherLocales"
            :key="other.code"
            class="site-header__lang"
            :to="switchLocalePath(other.code)"
          >
            {{ other.name ?? other.code.toUpperCase() }}
          </NuxtLink>

          <!-- Seul le switch est côté client : son `aria-checked` dépend de la
               préférence du visiteur, inconnue au prérendu. -->
          <ClientOnly>
            <DarkModeSwitcher />
          </ClientOnly>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--yg-surface);
  border-bottom: 1px solid var(--yg-border);
}

.site-header__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: $space-4;
  padding-block: $space-3;
}

.site-header__brand img {
  display: block;
  width: 200px;
  height: auto;
}

.site-header__toggle {
  display: none;
  margin-left: auto;
  padding: $space-2 $space-4;
  border: 1px solid var(--yg-border-strong);
  border-radius: $radius-pill;
  background: transparent;
  color: var(--yg-text);
  font: inherit;
  font-size: $fs-sm;
  font-weight: $fw-semibold;
}

.site-header__menu {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  gap: $space-5;
}

.site-header__nav {
  display: flex;
  flex-wrap: wrap;
  gap: $space-5;
}

.site-header__link {
  font-size: $fs-sm;
  font-weight: $fw-medium;
  color: var(--yg-text);
  text-decoration: none;
}

.site-header__link:hover {
  color: var(--yg-accent-text);
}

.site-header__link:focus-visible,
.site-header__lang:focus-visible,
.site-header__toggle:focus-visible {
  outline: $focus-ring-width solid var(--yg-focus);
  outline-offset: 2px;
}

.site-header__tools {
  display: flex;
  align-items: center;
  gap: $space-4;
}

.site-header__lang {
  font-size: $fs-sm;
  font-weight: $fw-semibold;
  color: var(--yg-accent-text);
  text-decoration: none;
}

@media (max-width: 991px) {
  .site-header__toggle {
    display: block;
  }

  .site-header__menu {
    display: none;
    flex-basis: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: $space-4;
    padding-bottom: $space-4;
  }

  .site-header__menu.is-open {
    display: flex;
  }

  .site-header__nav {
    flex-direction: column;
    gap: $space-4;
  }

  .site-header__brand img {
    width: 150px;
  }
}
</style>
