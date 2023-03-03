<script setup>
const brands = [
  {
    logo: "img/partners/logo-bpifrance.png",
    logoHover: "img/partners/logo-bpifrance.png",
    alt: "partner bpifrance logo",
  },
  {
    logo: "img/partners/logo-ca.png",
    logoHover: "img/partners/logo-ca.png",
    alt: "partner crédtit agricole logo",
  },
  {
    logo: "img/partners/logo-coface.jpg",
    logoHover: "img/partners/logo-coface.jpg",
    alt: "partner coface logo",
  },
  {
    logo: "img/partners/logo-franfinance.png",
    logoHover: "img/partners/logo-franfinance.png",
    alt: "partner franfinance logo",
  },
  {
    logo: "img/partners/logo-ibm.png",
    logoHover: "img/partners/logo-ibm.png",
    alt: "partner IBM logo",
  },
  {
    logo: "img/partners/logo-promod.png",
    logoHover: "img/partners/logo-promod.png",
    alt: "partner promod logo",
  },
  {
    logo: "img/partners/logo-renault.png",
    logoHover: "img/partners/logo-renault.png",
    alt: "partner renault logo",
  },
  {
    logo: "img/partners/logo-renault-digital.png",
    logoHover: "img/partners/logo-renault-digital.png",
    alt: "partner renault digital logo",
  },
  {
    logo: "img/partners/logo-sncf.jpg",
    logoHover: "img/partners/logo-sncf.jpg",
    alt: "partner sncf logo",
  },
  {
    logo: "img/partners/logo-keolis-lille.jpg",
    logoHover: "img/partners/logo-keolis-lille.jpg",
    alt: "partner keolis logo",
  },
  {
    logo: "img/partners/logo-soprasteria.png",
    logoHover: "img/partners/logo-soprasteria.png",
    alt: "partner soprasteria logo",
  },
  {
    logo: "img/partners/logo-softeam.jpeg",
    logoHover: "img/partners/logo-softeam.jpeg",
    alt: "partner softeam logo",
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
        <img :src="brand.logo" class="img-fluid" :alt="brand.alt" />
      </div>
      <div class="brand-logo__image-hover">
        <img :src="brand.logoHover" class="img-fluid" :alt="brand.alt" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import "../assets/scss/variabls.scss";
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
    width: 100%;
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
.section-space--pb_60 {
  &.startup-carousel {
    @media #{$large-mobile} {
      padding-bottom: 20px !important;
    }
  }
}

/*=====  End of brand logo slider  ======*/
</style>