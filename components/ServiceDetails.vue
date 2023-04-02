<script setup>
const services = [
  {
    icon: "img/icons/undraw_to_the_stars_re_wq2x.svg",
    height: 321,
    width: 396,
  },
  {
    icon: "img/icons/undraw_programming_re_kg9v.svg",
    height: 288,
    width: 396,
  },
  {
    icon: "img/icons/undraw_scrum_board_re_wk7v.svg",
    height: 279,
    width: 396,
  },
];
</script>

<template>
  <div class="row">
    <div
      v-for="(service, index) in services"
      :key="service.id"
      class="col-lg-4 col-md-6 wow move-up"
    >
      <div class="service-grid">
        <div class="ht-service-box--two text-center">
          <span>
            <div class="image mb-20">
              <nuxt-img
                :src="service.icon"
                class="img-fluid"
                :alt="$t(`home.services.items[${index}].alt`)"
                :height="service.height"
                :width="service.width"
                loading="lazy"
                sizes="sm:396vw md:256vw lg:216vw xl:296vw"
              />
            </div>
            <div class="content">
              <h3 class="sub-heading">
                {{ $t(`home.services.items[${index}].subheading`) }}
              </h3>
              <h4 class="ht-heading mb-15">
                {{ $t(`home.services.items[${index}].heading`) }}
              </h4>
              <div class="service_text">
                {{ $t(`home.services.items[${index}].text`) }}
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.ht-heading {
  font-size: 18px;
}
</style>