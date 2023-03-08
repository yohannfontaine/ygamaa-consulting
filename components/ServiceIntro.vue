<template>
  <div
    class="ebook-feature section-space--pt_120 section-space--pb_60 section"
    id="service"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-wrapper text-center section-space--mb_60">
            <span class="section-sub-title mb-20 font-weight--bold wow move-up">
              {{ $t("home.services.title") }}
            </span>
            <h2 class="section-title font-weight--blod wow move-up">
              {{ $t("home.services.description") }}
            </h2>
          </div>
        </div>
      </div>
      <ServiceDetails />
    </div>
  </div>
</template>