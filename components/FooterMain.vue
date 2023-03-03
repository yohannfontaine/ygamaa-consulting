<script setup>
const socialLinks = [
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/yohann-fontaine-a680331b/",
    icon: "linkedin-in",
  },
  {
    name: "Github",
    url: "https://github.com/yohannfontaine",
    icon: "github",
  },
];
</script>


<template>
  <div class="footer-area-wrapper" id="contact">
    <div class="footer-area section-space--ptb_90">
      <div class="container">
        <div class="row footer-widget-wrapper">
          <div class="col-lg-6 col-md-6 footer-widget">
            <h6 class="footer-widget__title mb-20">Who we are</h6>
            <ul class="footer-widget__list">
              <li>
                <a href="#about" class="hover-style-link">About us</a>
              </li>
              <li>
                <router-link to="/" class="hover-style-link"
                  >Before you go</router-link
                >
              </li>
              <li>
                <router-link to="/" class="hover-style-link"
                  >Online check in</router-link
                >
              </li>
              <li>
                <router-link to="/" class="hover-style-link">FAQ</router-link>
              </li>
            </ul>
          </div>
          <div class="col-lg-6 col-md-6 footer-widget">
            <div class="footer-widget__logo mb-30">
              <router-link to="/">
                <img
                  src="/img/logo/logo-light.png"
                  class="logo-dark"
                  alt="logo"
                  height="100px"
                />
                <img
                  src="/img/logo/logo-light.png"
                  class="img-fluid logo-light"
                  alt="logo"
                />
              </router-link>
            </div>
            <ul class="footer-widget__list">
              <li>{{ $t("footer.company.address") }}</li>
              <li>
                <a href="mailto:demo@example.com" class="hover-style-link">{{
                  $t("footer.company.email")
                }}</a>
              </li>
              <li>
                <a href="tel:0123456789" class="hover-style-link">{{
                  $t("footer.company.phone")
                }}</a>
              </li>
              <li>
                <a
                  href="https://ygamaa.io"
                  target="_blank"
                  class="hover-style-link hover-style-link--green"
                  >ygamaa.io</a
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
              <a href="https://ygamaa.io/">Y-GAMAA Consulting</a>
              <br />Made by Yohann Fontaine with
              <font-awesome-icon :icon="['fas', 'heart']" class="text-danger" />
            </span>
          </div>
          <div class="col-md-6 text-center text-md-right">
            <ul class="list ht-social-networks solid-rounded-icon">
              <li v-for="link in socialLinks" :key="link.name" class="item">
                <a :href="link.url" target="blank" class="social-link">
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

.app-landing_footer {
  & .heading {
    z-index: 2;
    position: relative;
  }

  & .app-landing-background__links img {
    border-radius: 5px;
    margin-right: 10px;
    // responsive
    @media #{$small-mobile} {
      margin-bottom: 5px;
    }
  }
}

.social-group__list {
  & .ht-social-networks.tilte-style {
    .link-text {
      color: #cccccc;

      &::before {
        background: rgba(255, 255, 255, 0.2);
      }

      &:hover {
        color: $white;
      }
    }

    & .social-link {
      &::before {
        color: #ccc;
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

.bg_drak-footer {
  background: #242659;
  border-top: 3px solid #5556ca;

  & .footer-widget {
    &__title {
      color: $white;
    }

    &__list {
      li {
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  & .copyright-text {
    color: rgba(255, 255, 255, 0.7);
  }

  & .border-top {
    border-top: 1px solid rgba(237, 237, 237, 0.1) !important;
  }

  & .ht-social-networks.solid-rounded-icon .social-link {
    color: #fff;
  }

  & .tweet__text {
    background-color: #fff;
  }

  & .tweet__heading {
    color: #fff;
  }
}

.app-landing_footer-share {
  margin-top: 30px;

  & .ht-social-networks.large-icon .social-link {
    color: $white;
  }
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

.footer-widget-agency {
  & .footer-widget {
    &:nth-child(1) {
      align-items: flex-end;
      display: flex;

      @media #{$tablet-device,$large-mobile} {
        align-items: flex-start;
      }
    }

    &:nth-child(2) {
      padding-left: 25px;

      @media #{$tablet-device,$large-mobile} {
        padding-left: 15px;
      }
    }

    &:nth-child(3) {
      padding-left: 50px;

      @media #{$tablet-device,$large-mobile} {
        padding-left: 15px;
      }
    }
  }
}

.ebook-footer {
  & .horizontal-list ul li {
    color: #6d70a6;

    &::before {
      content: "";
      position: absolute;
      top: 8px;
      left: -2px;
      content: "";
      height: 16px;
      width: 1px;
      background: #6d70a6;
    }
  }

  & .ht-social-networks.tilte-style {
    .link-text {
      &::before {
        background: rgba(89, 69, 230, 0.2);
      }

      &:hover {
        color: $theme-color--default;

        &::after {
          background-color: rgba(89, 69, 230, 0.2);
        }
      }
    }

    & .social-link {
      padding: 10px 14px;

      &:hover {
        & .link-text {
          &::after {
            background-color: $theme-color--default;
          }
        }
      }
    }
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

/*=============================================
=            twitter feed            =
=============================================*/

.tweet__text {
  position: relative;
  font-size: 14px;
  border: 1px solid #ededed;
  border-radius: 5px;
  padding: 19px 20px 25px;
  margin-bottom: 25px;
  word-wrap: break-word;
  background-color: rgba(89, 69, 230, 0.05);
}

.tweet__text a {
  color: #38cb89;
  display: block;
}

.tweet__text a:hover {
  color: #5945e6;
}

.tweet__text:after {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  left: 33px;
  bottom: -10px;
  border-color: transparent #f7fbfe transparent transparent;
  border-width: 10px;
}

.tweet__text:before {
  content: "";
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  left: 30px;
  bottom: -12px;
  border-color: transparent #ededed transparent transparent;
  border-width: 12px;
}

.tweet__info {
  position: relative;
  padding-left: 55px;
}

.tweet__info:before {
  content: "\f099";
  color: #5945e6;
  display: block;
  font-size: 18px;
  line-height: 1;
  position: absolute;
  top: 0;
  left: 23px;
  font-family: "Font Awesome 5 Brands";
}

.tweet__heading {
  font-size: 14px;
  color: #333;
}

.tweet__date {
  font-size: 14px;
  color: #ababab;
}

/*=====  End of twitter feed  ======*/
</style>