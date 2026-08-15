<script setup lang="ts">
/**
 * Le logo, en SVG inline.
 *
 * Trois variantes, parce qu'un même verrou ne tient pas à toutes les tailles :
 * en dessous d'environ 40px de haut le phare s'empâte et le descripteur
 * devient illisible. Chacune est donc un cadrage distinct, pas une mise à
 * l'échelle du précédent.
 *
 *   complet  phare + mot + curseur + descripteur — accueil, pied de page
 *   reduit   phare + mot + curseur               — en-tête
 *   mobile   mot + curseur                       — en-tête étroit
 *
 * Le mot est vectorisé (Space Grotesk Bold, corps 34, approche -0.6) et non
 * composé en `<text>` : un logotype ne doit jamais s'afficher dans une police
 * de secours pendant le chargement de la fonte. Le descripteur, lui, reste du
 * texte — il est traduit.
 *
 * Les deux encres viennent de `--yg-brand-ink` / `--yg-brand-accent`, donc le
 * mode sombre est gratuit et le logo ne suit pas les couleurs d'interface.
 */
const props = withDefaults(defineProps<{ variante?: 'complet' | 'reduit' | 'mobile' }>(), {
  variante: 'reduit',
})

const { t } = useI18n()

// Cadres relevés sur la géométrie du verrou : le mot occupe y 16.2→40, le
// phare y 2→54, le descripteur descend jusqu'à 58.
const CADRES = {
  complet: '0 2 249.2 56',
  reduit: '0 2 230.53 52',
  mobile: '0 16.2 163.53 23.8',
} as const

const avecPhare = computed(() => props.variante !== 'mobile')
// Sans phare, le mot revient à l'origine du cadre.
const motX = computed(() => (avecPhare.value ? 67 : 0))
const viewBox = computed(() => CADRES[props.variante])

// Contour de « Y-GaMaa », tracé à x=0 pour une ligne de pied à y=40.
const MOT = 'M8.36 40.00V31.81L0.27 16.20H5.27L10.30 26.40H10.91L15.95 16.20H20.94L12.85 31.81V40.00ZM22.93 33.27V29.39H32.99V33.27ZM45.18 40.48Q42.73 40.48 40.74 39.37Q38.75 38.27 37.58 36.14Q36.40 34.02 36.40 30.96V25.24Q36.40 20.65 38.99 18.19Q41.57 15.72 45.99 15.72Q50.38 15.72 52.77 18.05Q55.17 20.38 55.17 24.36V24.50H50.75V24.22Q50.75 22.97 50.23 21.95Q49.70 20.93 48.64 20.33Q47.59 19.74 45.99 19.74Q43.61 19.74 42.25 21.20Q40.89 22.66 40.89 25.18V31.02Q40.89 33.51 42.25 35.02Q43.61 36.53 46.06 36.53Q48.51 36.53 49.63 35.24Q50.75 33.95 50.75 31.98V31.64H45.11V27.83H55.17V40.00H51.02V37.72H50.41Q50.17 38.30 49.65 38.95Q49.12 39.59 48.07 40.03Q47.01 40.48 45.18 40.48ZM64.23 40.48Q62.43 40.48 61.00 39.85Q59.57 39.22 58.74 38.01Q57.90 36.80 57.90 35.07Q57.90 33.34 58.74 32.16Q59.57 30.99 61.05 30.39Q62.53 29.80 64.43 29.80H69.06V28.85Q69.06 27.66 68.31 26.89Q67.56 26.13 65.93 26.13Q64.33 26.13 63.55 26.86Q62.77 27.59 62.53 28.75L58.58 27.42Q58.99 26.13 59.89 25.06Q60.79 23.99 62.31 23.32Q63.82 22.66 66.00 22.66Q69.33 22.66 71.27 24.33Q73.20 25.99 73.20 29.15V35.44Q73.20 36.46 74.16 36.46H75.52V40.00H72.66Q71.40 40.00 70.59 39.39Q69.77 38.78 69.77 37.76V37.72H69.12Q68.99 38.13 68.51 38.79Q68.04 39.46 67.02 39.97Q66.00 40.48 64.23 40.48ZM64.98 37.01Q66.78 37.01 67.92 36.01Q69.06 35.00 69.06 33.34V33.00H64.74Q63.55 33.00 62.87 33.51Q62.19 34.02 62.19 34.93Q62.19 35.85 62.90 36.43Q63.62 37.01 64.98 37.01ZM77.91 40.00V16.20H86.24L90.35 36.94H90.96L95.08 16.20H103.41V40.00H99.06V19.50H98.44L94.36 40.00H86.95L82.87 19.50H82.26V40.00ZM112.67 40.48Q110.87 40.48 109.44 39.85Q108.01 39.22 107.18 38.01Q106.34 36.80 106.34 35.07Q106.34 33.34 107.18 32.16Q108.01 30.99 109.49 30.39Q110.97 29.80 112.87 29.80H117.50V28.85Q117.50 27.66 116.75 26.89Q116.00 26.13 114.37 26.13Q112.77 26.13 111.99 26.86Q111.21 27.59 110.97 28.75L107.02 27.42Q107.43 26.13 108.33 25.06Q109.23 23.99 110.75 23.32Q112.26 22.66 114.44 22.66Q117.77 22.66 119.71 24.33Q121.64 25.99 121.64 29.15V35.44Q121.64 36.46 122.60 36.46H123.96V40.00H121.10Q119.84 40.00 119.03 39.39Q118.21 38.78 118.21 37.76V37.72H117.56Q117.43 38.13 116.95 38.79Q116.48 39.46 115.46 39.97Q114.44 40.48 112.67 40.48ZM113.42 37.01Q115.22 37.01 116.36 36.01Q117.50 35.00 117.50 33.34V33.00H113.18Q111.99 33.00 111.31 33.51Q110.63 34.02 110.63 34.93Q110.63 35.85 111.34 36.43Q112.06 37.01 113.42 37.01ZM131.72 40.48Q129.92 40.48 128.49 39.85Q127.06 39.22 126.23 38.01Q125.40 36.80 125.40 35.07Q125.40 33.34 126.23 32.16Q127.06 30.99 128.54 30.39Q130.02 29.80 131.92 29.80H136.55V28.85Q136.55 27.66 135.80 26.89Q135.05 26.13 133.42 26.13Q131.82 26.13 131.04 26.86Q130.26 27.59 130.02 28.75L126.08 27.42Q126.48 26.13 127.39 25.06Q128.29 23.99 129.80 23.32Q131.31 22.66 133.49 22.66Q136.82 22.66 138.76 24.33Q140.70 25.99 140.70 29.15V35.44Q140.70 36.46 141.65 36.46H143.01V40.00H140.15Q138.89 40.00 138.08 39.39Q137.26 38.78 137.26 37.76V37.72H136.62Q136.48 38.13 136.00 38.79Q135.53 39.46 134.51 39.97Q133.49 40.48 131.72 40.48ZM132.47 37.01Q134.27 37.01 135.41 36.01Q136.55 35.00 136.55 33.34V33.00H132.23Q131.04 33.00 130.36 33.51Q129.68 34.02 129.68 34.93Q129.68 35.85 130.39 36.43Q131.11 37.01 132.47 37.01Z'
</script>

<template>
  <!--
    Le `<svg>` est délibérément enveloppé plutôt que racine du composant : un
    élément racine reçoit les attributs hérités du parent, et le rendu serveur
    de Vue ne préserve alors pas la casse des noms d'attributs — `viewBox`
    sortait en `viewbox`. Les navigateurs recasent l'attribut au parsing HTML,
    mais l'API SVG du DOM, elle, est sensible à la casse.
  -->
  <span
    class="brand"
    :class="`brand--${variante}`"
    role="img"
    :aria-label="`${t('brand.name')} — ${t('brand.descriptor')}`"
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewBox"
    aria-hidden="true"
    focusable="false"
  >
    <!-- Le phare. Dessiné sur une grille de 64, ramené à 52 de haut. -->
    <g v-if="avecPhare" transform="translate(0 2) scale(0.8125)">
      <path class="brand__accent" d="M34 12 L60 4 L60 24 Z" />
      <rect class="brand__accent" x="22" y="9" width="11" height="12" rx="2" />
      <rect class="brand__ink" x="19" y="21" width="17" height="5" rx="2" />
      <path class="brand__ink" d="M22.5 26 h10 L37 54 H18 Z" />
      <rect class="brand__ink" x="14" y="53" width="27" height="6" rx="3" />
    </g>

    <g :transform="`translate(${motX} 0)`">
      <path class="brand__ink" :d="MOT" />
      <!-- Le curseur, calé exactement sur la hauteur de capitale du mot. -->
      <rect
        class="brand__accent"
        x="148.76"
        y="16.2"
        width="10.77"
        height="23.8"
        rx="1.94"
      />
    </g>

    <!--
      Descripteur en texte vivant, donc traduit. Le cadre est figé sur la
      version française (la plus longue) : une traduction plus large que
      ~180 unités déborderait, il faut alors élargir `CADRES.complet`.
    -->
    <text
      v-if="variante === 'complet'"
      class="brand__desc"
      x="68.5"
      y="55"
    >{{ t('brand.descriptor').toUpperCase() }}</text>
  </svg>
  </span>
</template>

<style lang="scss" scoped>
// La hauteur porte la mise à l'échelle ; la largeur suit le rapport du cadre.
// Les appelants n'ont qu'une valeur à surcharger.
.brand {
  display: inline-flex;
  height: 44px;
}

.brand > svg {
  display: block;
  width: auto;
  height: 100%;
}

.brand__ink {
  fill: var(--yg-brand-ink);
}

.brand__accent {
  fill: var(--yg-brand-accent);
}

.brand__desc {
  fill: var(--yg-brand-accent);
  font-family: $font-family-name;
  font-size: 10.5px;
  font-weight: $fw-medium;
  letter-spacing: 1.6px;
}
</style>
