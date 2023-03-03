<template>
  <div class="row">
    <div
      v-for="(ebook, index) in ebooks"
      :key="ebook.id"
      class="col-lg-4 col-md-6 wow move-up"
    >
      <div class="service-grid">
        <div class="ht-service-box--two text-center">
          <a href="">
            <div class="image mb-20">
              <img
                :src="ebook.icon"
                class="img-fluid"
                :alt="$t(`home.services.items[${index}].alt`)"
              />
            </div>
            <div class="content">
              <h6 class="sub-heading">
                {{ $t(`home.services.items[${index}].subheading`) }}
              </h6>
              <h6 class="ht-heading mb-15">
                {{ $t(`home.services.items[${index}].heading`) }}
              </h6>
              <div class="service_text">
                {{ $t(`home.services.items[${index}].text`) }}
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EbookFeature",
  data() {
    return {
      ebooks: [
        {
          icon: "img/icons/undraw_to_the_stars_re_wq2x.svg",
        },
        {
          icon: "img/icons/undraw_programming_re_kg9v.svg",
        },
        {
          icon: "img/icons/undraw_scrum_board_re_wk7v.svg",
        },
      ],
    };
  },
};
</script>
