<script setup>
const { t } = useI18n();
const head = useLocaleHead({
  dir: true,
  lang: true,
  seo: true,
});
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ t("meta.title") }}</Title>
        <Meta name="description" :content="t('meta.description')" />
        <template v-for="(link, i) in head.link" :key="i">
          <Link
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="(meta, i) in head.meta" :key="i">
          <Meta
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body>
        <HeaderSection />
        <slot />
        <FooterSection />
      </Body>
    </Html>
  </div>
</template>
