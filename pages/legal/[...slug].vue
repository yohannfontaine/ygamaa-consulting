<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

// Firebase Hosting redirects `/legal` to `/legal/`, while the prerenderer
// renders `/legal`. Strip the trailing slash so the key matches the prerendered
// payload: otherwise the client re-runs the query through SQLite WASM, which
// the CSP blocks, and the page falls back to a 404.
const path = computed(() => route.path.replace(/\/+$/, '') || '/')

const chemin = computed(() =>
  locale.value === 'en' ? path.value.replace(/^\/en/, '') || '/' : path.value,
)

const { data: page } = await useAsyncData(`legal-${path.value}`, () =>
  queryCollection(locale.value === 'en' ? 'legal_en' : 'legal_fr')
    .path(chemin.value)
    .first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" class="content" />
</template>

<style lang="scss">
.content {
  margin: 100px auto 0px auto;

  h1 {
    text-align: center;
    margin: 20px;
  }

  h2 {
    font-size: 2em;
  }

  max-width: 800px;
  width: 90%;
}
</style>
