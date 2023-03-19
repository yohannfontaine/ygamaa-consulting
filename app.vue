<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
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
    <!-- About section -->
    <AboutSection />
    <!-- Service section -->
    <ServiceSection />
    <!-- Partners section -->
    <PartnerSection />
    <!-- Footer section -->
    <FooterSection />
  </NuxtLayout>
</template>

