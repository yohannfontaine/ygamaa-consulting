<script setup>
</script>

<template>
  <div class="hero-branding bg-cover section" id="about">
    <div class="container-fluid container-fluid--cp-150">
      <div class="hero-branding">
        <div class="hero-content">
          <h2 class="h1 hero-content-title">{{ $t("branding.hero.title") }}</h2>
          <p
            class="hero-content-subtitle mt-20"
            v-html="$t('branding.hero.description')"
          ></p>
          <div class="slider-button mt-30">
            <a href="#contact" class="ht-btn">{{ $t("branding.hero.more") }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*---- hero branding start ----*/
#about {
  @media #{xlmax-device, $laptop-device, $desktop-device, $tablet-device} {
    background-image: url("img/undraw_maker_launch.svg");
    background-position: bottom 0px left 20px;
    background-size: 48%;
    background-repeat: no-repeat;
  }
}

.hero {
  &-branding {
    display: flex;
  }
  &-content {
    display: flex;
    flex-direction: column;
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

.slider-button {
  align-self: center;
}
/*---- hero branding end ----*/
</style>
