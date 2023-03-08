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
    <Header />
    <!-- Hero section -->
    <Hero />

    <!-- About section -->
    <HeroBranding />

    <!-- Service section -->
    <ServiceIntro />

    <!-- Partners section -->
    <div class="brand-logo-area section" id="partner">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title-wrapper text-center section-space--mb_60">
              <h2 class="section-title mb-15 wow move-up">
                {{ $t("home.partners.title") }}
              </h2>
              <span class="section-text wow move-up">{{
                $t("home.partners.description")
              }}</span>
            </div>
          </div>
        </div>

        <BrandLogo />
      </div>
    </div>
    <!-- Footer section -->
    <FooterMain />
  </NuxtLayout>
</template>





<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
