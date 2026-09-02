<script setup lang="ts">
const route = useRoute()
const { locale } = useI18n()

const chemin = computed(() =>
  locale.value === 'en' ? route.path.replace(/^\/en/, '') || '/' : route.path,
)

const { data: page } = await useAsyncData(`legal-${route.path}`, () =>
  queryCollection(locale.value === 'en' ? 'legal_en' : 'legal_fr')
    .path(chemin.value)
    .first(),
)

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>

<template>
  <NuxtLayout>
    <HeaderSection />
    <ContentRenderer v-if="page" :value="page" class="content" />
    <FooterSection />
  </NuxtLayout>
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
