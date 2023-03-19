<template>
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
</template>