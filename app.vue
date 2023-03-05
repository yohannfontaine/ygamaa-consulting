<script setup>
const { locale, locales } = useI18n();
const { $bootstrap } = useNuxtApp();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
  <!-- Navbar section -->
  <Header />
  <!-- Hero section -->
  <Hero />

  <!-- About section -->
  <HeroBranding />

  <!-- Service section -->
  <EbookIntro />

  <!-- Partners section -->
  <div class="brand-logo-area section-space--ptb_30" id="partner">
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
