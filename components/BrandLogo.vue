<script setup>
const brands = [
  {
    logo: "img/partners/logo-bpifrance.png",
    logoHover: "img/partners/logo-bpifrance.png",
    alt: "partner bpifrance logo",
    height: 47,
    width: 175,
  },
  {
    logo: "img/partners/logo-ca.png",
    logoHover: "img/partners/logo-ca.png",
    alt: "partner crédtit agricole logo",
    height: 98,
    width: 175,
  },
  {
    logo: "img/partners/logo-coface.png",
    logoHover: "img/partners/logo-coface.png",
    alt: "partner coface logo",
    height: 74,
    width: 175,
  },
  {
    logo: "img/partners/logo-franfinance.png",
    logoHover: "img/partners/logo-franfinance.png",
    alt: "partner franfinance logo",
    height: 28,
    width: 175,
  },
  {
    logo: "img/partners/logo-ibm.png",
    logoHover: "img/partners/logo-ibm.png",
    alt: "partner IBM logo",
    height: 175,
    width: 175,
  },
  {
    logo: "img/partners/logo-promod.png",
    logoHover: "img/partners/logo-promod.png",
    alt: "partner promod logo",
    height: 92,
    width: 175,
  },
  {
    logo: "img/partners/logo-renault.png",
    logoHover: "img/partners/logo-renault.png",
    alt: "partner renault logo",
    height: 66,
    width: 175,
  },
  {
    logo: "img/partners/logo-renault-digital.png",
    logoHover: "img/partners/logo-renault-digital.png",
    alt: "partner renault digital logo",
    height: 101,
    width: 175,
  },
  {
    logo: "img/partners/logo-sncf.jpg",
    logoHover: "img/partners/logo-sncf.jpg",
    alt: "partner sncf logo",
    height: 91,
    width: 175,
  },
  {
    logo: "img/partners/logo-keolis-lille.jpg",
    logoHover: "img/partners/logo-keolis-lille.jpg",
    alt: "partner keolis logo",
    height: 175,
    width: 175,
  },
  {
    logo: "img/partners/logo-soprasteria.png",
    logoHover: "img/partners/logo-soprasteria.png",
    alt: "partner soprasteria logo",
    height: 24,
    width: 175,
  },
  {
    logo: "img/partners/logo-softeam.jpeg",
    logoHover: "img/partners/logo-softeam.jpeg",
    alt: "partner softeam logo",
    height: 175,
    width: 175,
  },
];
</script>

<template>
  <div class="row brand-logo-wrapper">
    <div
      v-for="(brand, index) in brands"
      :key="index"
      class="col-lg-2 col-md-3 col-sm-4 col-6 brand-logo wow move-up"
    >
      <div class="brand-logo__image">
        <nuxt-img
          format="webp"
          :src="brand.logo"
          :alt="brand.alt"
          sizes="md:125px lg:175px"
          :height="brand.height"
          :width="brand.width"
          loading="lazy"
        />
      </div>
      <div class="brand-logo__image-hover">
        <nuxt-img
          format="webp"
          :src="brand.logoHover"
          :alt="brand.alt"
          :height="brand.height"
          :width="brand.width"
          loading="lazy"
          sizes="md:125px lg:175px"
        />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
/*=============================================
=            brand logo slider            =
=============================================*/

.brand-logo-wrapper {
  margin-bottom: -100px;

  @media #{$tablet-device} {
    margin-bottom: -50px;
  }
  @media #{$large-mobile} {
    margin-bottom: -30px;
  }
}

.brand-logo-slider {
  &__container {
    padding: 15px 0;
  }
}

.dark-mode {
  .brand-logo-wrapper {
    box-shadow: 0 8px 20px 0 rgba(255, 255, 255, 0.5);
    background-color: $white;
  }
}

.brand-logo {
  align-self: center;
  text-align: center;
  position: relative;
  margin-bottom: 100px;
  @media #{$tablet-device} {
    margin-bottom: 50px;
  }
  @media #{$large-mobile} {
    margin-bottom: 30px;
  }
  &__image {
    transition: all 0.4s linear;
  }

  &__image-hover {
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, 20px);
    transition: all 0.4s linear;
    position: absolute;
    top: 0;
    left: 50%;
  }

  &:hover {
    .brand-logo__image {
      visibility: hidden;
      opacity: 0;
      transform: translateY(-20px);
    }
    .brand-logo__image-hover {
      visibility: visible;
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  &--slider {
    margin-bottom: 0;
  }
}

.brand-logo img {
  width: 175px;
  height: auto;
  @media #{$large-mobile} {
    width: 125px;
  }
}

.section-space--pb_60 {
  &.startup-carousel {
    @media #{$large-mobile} {
      padding-bottom: 20px !important;
    }
  }
}

/*=====  End of brand logo slider  ======*/
</style>