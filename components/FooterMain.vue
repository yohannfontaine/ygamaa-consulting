<script setup>
const socialLinks = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/yohann-fontaine-a680331b/",
    icon: "linkedin-in",
    label: "Voir le compte linkedin",
  },
  {
    name: "Github",
    url: "https://github.com/yohannfontaine",
    icon: "github",
    label: "Voir le compte github",
  },
];
</script>


<template>
  <div class="footer-area-wrapper section" id="contact">
    <div class="footer-area section-space--ptb_90">
      <div class="container">
        <div class="row footer-widget-wrapper">
          <div class="col-lg-12 col-md-12 footer-widget">
            <div class="footer-widget__logo mb-30">
              <router-link to="/">
                <nuxt-img
                  src="img/logo/logo-light.png"
                  class="logo-dark"
                  alt="logo ygamaa"
                  format="webp"
                />
                <nuxt-img
                  src="img/logo/logo-light.png"
                  class="img-fluid logo-light"
                  alt="logo ygamaa"
                  format="webp"
                />
              </router-link>
            </div>
            <ul class="footer-widget__list">
              <li>
                {{ $t("footer.company.address.street") }}<br />{{
                  $t("footer.company.address.city")
                }}
              </li>
              <li>
                <a
                  href="mailto:yohann.fontaine@gmail.com"
                  class="hover-style-link"
                  >{{ $t("footer.company.email") }}</a
                >
              </li>
              <li>
                <a href="tel:0608462848" class="hover-style-link">{{
                  $t("footer.company.phone")
                }}</a>
              </li>
              <li>
                <a
                  href="https://ygamaa-consulting.web.app"
                  class="hover-style-link"
                  >ygamaa-consulting.web.app</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright-area border-top section-space--ptb_30">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 text-center text-md-left">
            <span class="copyright-text">
              &copy; {{ new Date().getFullYear() }}
              <a href="https://ygamaa-consulting.web.app">Y-GAMAA Consulting</a>
              <br />Made by Yohann Fontaine with
              <font-awesome-icon :icon="['fas', 'heart']" class="text-danger" />
            </span>
          </div>
          <div class="col-md-6 text-center text-md-right">
            <ul class="list ht-social-networks solid-rounded-icon">
              <li v-for="link in socialLinks" :key="link.name" class="item">
                <a
                  :href="link.url"
                  class="social-link"
                  :aria-label="link.label"
                >
                  <font-awesome-icon :icon="['fab', link.icon]" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/*=============================================
=            06. Footer Css           =
=============================================*/

.footer-widget-wrapper {
  margin-bottom: -35px;
}

.footer-widget {
  margin-bottom: 30px;

  &__title {
    margin-top: -3px;
    color: $theme-color--black;
  }

  &__list {
    li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.app-showcase_footer {
  & .heading {
    font-size: 48px;
    line-height: 1.34;
    font-weight: 300;
    margin-bottom: 15px;

    @media #{$large-mobile} {
      font-size: 32px;
    }
  }

  & .sub-title {
    line-height: 1.78;
    font-weight: 400;
  }

  & .showcase-background__links {
    a {
      @media #{$extra-small-mobile} {
        display: block;
      }
    }
    img {
      border-radius: 5px;
      margin-right: 10px;
      @media #{$extra-small-mobile} {
        margin-right: 0px;
        margin-bottom: 5px;
      }
    }
  }
}

.copyright-text {
  display: inline-block;

  @media #{$large-mobile} {
    margin-bottom: 15px;
  }
}

.app-landing_footer-share {
  margin-top: 30px;
}

.logo-light {
  display: none;
  width: 180px;
}
.bg_drak-footer {
  .logo-light {
    display: block;
  }
  .logo-dark {
    display: none;
  }
}

.body-gradient {
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0, #f6f5f9),
    color-stop(60%, #fff)
  );
}

/*=====  End of footer ======*/

.ht-social-networks {
  & .item {
    display: inline-block;
    & .social-link {
      display: block;
      padding: 5px 8px;
    }
  }
  &.large-icon {
    & .social-link {
      padding: 5px 13px;
      font-size: 20px;
    }
  }
  &.extra-large-icon {
    & .social-link {
      padding: 5px 15px;
      font-size: 30px;
    }
  }
  &.flat-round,
  &.solid-rounded-icon {
    & .item {
      margin: 8px;
    }
    & .social-link {
      font-size: 18px;
      display: block;
      text-align: center;
      height: 48px;
      width: 48px;
      line-height: 40px;
      background: #ededed;
      color: #696969;
      border-radius: 50%;
      position: relative;
      &:hover {
        color: $white;
        background: $theme-color--default;
      }
    }
  }
  &.solid-rounded-icon {
    & .social-link {
      background: transparent;
      border: 1px solid #ededed;
      &:hover {
        border: 1px solid $theme-color--default;
        color: $white;
      }
    }
  }
  &.icon-tilte {
    & .link-icon {
      font-size: 16px;
      min-width: 16px;
      margin-right: 10px;
    }
  }
  &.tilte-style {
    & .social-link {
      position: relative;
      &::before {
        content: "-";
        position: absolute;
        top: 50%;
        left: -5px;
        transform: translateY(-50%);
        color: #333;
      }

      &:hover {
        & .link-text {
          &::after {
            background-color: #38cb89;
            width: 100%;
            left: 0;
          }
        }
      }
    }
    & .item {
      &:first-child {
        & .social-link {
          &::before {
            display: none;
          }
        }
      }
    }
    & .link-text {
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 500;
      color: #333;
      position: relative;
      padding: 5px 0;
      z-index: 1;
      &::before {
        content: "";
        height: 2px;
        bottom: 0;
        position: absolute;
        left: 0;
        right: 0;
        z-index: -2;
        background: rgba(0, 0, 0, 0.2);
      }
      &::after {
        content: "";
        height: 2px;
        width: 0;
        bottom: 0;
        position: absolute;
        left: auto;
        right: 0;
        z-index: -1;
        transition: width 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
      }
    }
  }
}
</style>