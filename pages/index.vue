<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  dir: true,
  lang: true,
  seo: true,
});
const title = computed(() =>
  t("layouts.title", { title: t(route.meta.title ?? "TBD") })
);
</script>

<template>
  <NuxtLayout>
    <!-- Navbar section -->
    <HeaderSection />
    <!-- Hero section -->
    <Hero />
    <!-- Générateur de cas d'usage -->
    <UseCaseGenerator />
    <!-- Les 3 portes de l'offre -->
    <OfferGateways />
    <!-- Pourquoi moi -->
    <WhyMe />
    <!-- Contact -->
    <ContactSection />
    <!-- Footer section -->
    <FooterSection />
  </NuxtLayout>
</template>

