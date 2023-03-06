<script setup>
const bgImg = {
  backgroundImage: "url('img/undraw_maker_launch.svg')",
  backgroundPosition: "bottom 0px left 20px",
  backgroundSize: "50%",
  backgroundRepeat: "no-repeat",
};
</script>

<template>
  <div class="hero-branding bg-cover section" :style="bgImg" id="about">
    <div class="container-fluid container-fluid--cp-150">
      <div class="hero-branding">
        <div class="hero-content">
          <h2 class="h1 hero-content-title">{{ $t("branding.hero.title") }}</h2>
          <h6
            class="hero-content-subtitle mt-20"
            v-html="$t('branding.hero.description')"
          ></h6>
          <div class="slider-button mt-30">
            <a href="mailto:demo@example.com" class="ht-btn ht-btn-md">{{
              $t("branding.hero.more")
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*---- hero branding start ----*/
.hero {
  &-branding {
    display: flex;
    // responsive
    @media #{$large-mobile} {
      height: 550px;
    }
  }
  &-content {
    width: 540px;
    padding-top: 30px;
    margin-left: auto;
    // responsive
    @media #{$large-mobile} {
      width: 380px;
    }
    @media #{$small-mobile} {
      width: 100%;
    }
    &-title {
      // responsive
      @media #{$small-mobile} {
        font-size: 28px;
      }
      @media #{$extra-small-mobile} {
        font-size: 24px;
      }
    }
    &-subtitle {
      color: #696969;
      font-weight: 400;
      line-height: 1.8;
    }
  }
}
/*---- hero branding end ----*/
</style>
