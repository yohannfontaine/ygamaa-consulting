<script setup>
</script>

<template>
  <div class="hero-software hero-swiper-btn" id="home">
    <div class="container_f1">
      <div class="swiper-wrapper">
        <Swiper
          :modules="[SwiperAutoplay, SwiperEffectFade, SwiperNavigation]"
          :loop="true"
          :effect="'fade'"
          :autoplay="{
            delay: 8000,
            disableOnInteraction: true,
          }"
          :navigation="{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }"
        >
          <SwiperSlide>
            <div class="hero-item">
              <div class="hero-content">
                <h2 class="h1 hero-content-title">
                  {{ $t("hero.slide1.title") }}
                </h2>
                <h6 class="hero-content-subtitle">
                  {{ $t("hero.slide1.subtitle") }}
                </h6>
                <a href="#about" class="ht-btn ht-btn-md">
                  <span class="btn-icon ml-0 mr-2"
                    ><i class="fa fa-arrow-alt-to-bottom"></i
                  ></span>
                  {{ $t("hero.slide1.plus") }}
                </a>
              </div>
              <div class="hero-thumb pr-100">
                <nuxt-img
                  src="/img/hero/software-thumb-1.png"
                  class="img-fluid"
                  alt="hero thumb"
                  format="webp"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="hero-item">
              <div class="hero-content">
                <h2 class="h1 hero-content-title">
                  {{ $t("hero.slide2.title") }}
                </h2>
                <h6 class="hero-content-subtitle">
                  {{ $t("hero.slide2.subtitle") }}
                </h6>
                <a href="#about" class="ht-btn ht-btn-md">
                  <span class="btn-icon ml-0 mr-2"
                    ><i class="fa fa-arrow-alt-to-bottom"></i></span
                  >{{ $t("hero.slide2.plus") }}
                </a>
              </div>
              <div class="hero-thumb">
                <nuxt-img
                  src="/img/hero/software-thumb-2.png"
                  class="img-fluid"
                  alt="hero thumb"
                  format="webp"
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="hero-item">
              <div class="hero-content">
                <h2 class="h1 hero-content-title">
                  {{ $t("hero.slide3.title") }}
                </h2>
                <h6 class="hero-content-subtitle">
                  {{ $t("hero.slide3.subtitle") }}
                </h6>
                <a href="#about" class="ht-btn ht-btn-md">
                  <span class="btn-icon ml-0 mr-2"
                    ><i class="fa fa-arrow-alt-to-bottom"></i></span
                  >{{ $t("hero.slide3.plus") }}
                </a>
              </div>
              <div class="hero-thumb pr-100">
                <nuxt-img
                  src="/img/hero/software-thumb-3.png"
                  class="img-fluid"
                  alt="hero thumb"
                  format="webp"
                />
              </div>
            </div>
          </SwiperSlide>
          <!-- Optional controls -->
          <div class="swiper-button-prev swiper-button-white"></div>
          <div class="swiper-button-next swiper-button-white"></div>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*---- hero software style start ----*/
.swiper-slide {
  @media #{$large-mobile} {
    padding-top: 60px;
  }
}
.hero {
  &-item {
    height: 970px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 100px;
    // responsive
    @media #{$xlmax-device,$desktop-device} {
      height: 700px;
    }
    @media #{$tablet-device, $large-mobile} {
      flex-direction: column;
      justify-content: center;
      padding-top: 0;
    }
    @media #{$extra-small-mobile} {
      height: 780px;
    }
  }
  &-content {
    width: 490px;
    padding-left: 330px;
    box-sizing: content-box;
    // responsive
    @media #{$xlmax-device,$desktop-device} {
      width: 650px;
      padding-left: 90px;
    }
    @media #{$tablet-device, $large-mobile} {
      width: 470px;
      text-align: center;
      padding-left: 0;
      margin: 100px auto 0;
    }
    @media #{$small-mobile} {
      width: 100%;
      margin: 100px auto 0;
    }
  }
  &-content-title {
    font-weight: 500;
    line-height: 1.3;
    // responsive
    @media #{$xlmax-device} {
      font-size: 50px;
    }
    @media #{$desktop-device} {
      font-size: 42px;
    }
    @media #{$extra-small-mobile} {
      font-size: 24px;
    }
  }
  &-content-subtitle {
    color: #7e7e7e;
    font-weight: 400;
    padding-top: 15px;
    padding-bottom: 55px;
  }
  &-thumb {
    @media #{$xlmax-device} {
      width: 700px;
    }
    &.pr-100 {
      padding-right: 100px;
      // responsive
      @media #{$tablet-device, $large-mobile} {
        width: 450px;
        margin: 0 auto;
        padding-right: 0;
        padding-top: 50px;
      }
      @media #{$small-mobile} {
        width: 100%;
        padding: 50px 15px 0;
      }
    }
  }
}

// slider text animation
.hero-software {
  .swiper-slide {
    background-color: $white;
    background-repeat: no-repeat;
    background-image: url("img/hero/software-shape.png");
    &-active {
      .hero-thumb {
        img {
          animation-fill-mode: both;
          animation-duration: 1s;
          animation-name: fadeInRight;
          animation-delay: 0.5s;
        }
      }

      .hero-content {
        animation-fill-mode: both;
        animation-duration: 1s;
        animation-name: fadeInLeft;
        animation-delay: 0.5s;
      }
    }
  }
}

.dark-mode .hero-software {
  .swiper-slide {
    background-color: $black;
    background-image: none;
  }
}

/*---- hero software style end ----*/

/*----- hero swiper slider button start -----*/

.swiper-button-prev,
.swiper-button-next {
  font-size: 25px;
  color: #fff;
  min-width: 70px;
  min-height: 70px;
  display: block;
  text-align: center;
  line-height: 70px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  background-size: 12px;
  transition: 0.4s;
  opacity: 0;
  visibility: hidden;
  // responsive
  @media #{$large-mobile} {
    min-width: 45px;
    min-height: 45px;
    line-height: 45px;
    background-size: 10px;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
}
.swiper {
  &:hover {
    .swiper-button-prev,
    .swiper-button-next {
      opacity: 1;
      visibility: visible;
    }
  }
}

/*----- hero swiper slider button end -----*/
</style>
