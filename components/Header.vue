<script setup>
const scrolled = ref(false);
const limitPosition = ref(200);
const lastPosition = ref(500);
const showMenu = ref(false);

function handleScroll() {
  if (
    lastPosition.value < window.scrollY &&
    limitPosition.value < window.scrollY
  ) {
    scrolled.value = true;
    // move up!
  }
  if (lastPosition.value > window.scrollY) {
    scrolled.value = true;
    // move down
  }
  lastPosition.value = window.scrollY;
  scrolled.value = window.scrollY > 50;
}

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onDeactivated(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>


<template>
  <ClientOnly>
    <b-navbar
      type="dark"
      toggleable="lg"
      fixed="top"
      class="header-area"
      :class="{
        'is-sticky': scrolled,
        'menu-open': showMenu,
        'navbar-dark': $colorMode.value == 'dark',
      }"
    >
      <b-navbar-brand class="navbar-brand" to="/"
        ><nuxt-img
          format="webp"
          :src="'img/logo/logo-light.png'"
          alt="logo ygamma"
      /></b-navbar-brand>
      <b-navbar-toggle
        target="nav_collapse"
        @click="showMenu = !showMenu"
      ></b-navbar-toggle>
      <b-collapse
        class="default-nav justify-content-center"
        is-nav
        id="nav_collapse"
        v-show="showMenu"
      >
        <b-navbar-nav class="navbar-nav main-menu">
          <b-nav-item href="#home" class="scroll" @click="showMenu = !showMenu"
            ><span>{{ $t("menu.home") }}</span></b-nav-item
          >
          <b-nav-item href="#about" class="scroll" @click="showMenu = !showMenu"
            ><span>{{ $t("menu.about") }}</span></b-nav-item
          >
          <b-nav-item
            href="#service"
            class="scroll"
            @click="showMenu = !showMenu"
            ><span>{{ $t("menu.services") }}</span></b-nav-item
          >
          <b-nav-item
            href="#partner"
            class="scroll"
            @click="showMenu = !showMenu"
            ><span>{{ $t("menu.partners") }}</span></b-nav-item
          >
          <b-nav-item
            href="#contact"
            class="scroll"
            @click="showMenu = !showMenu"
            ><span>{{ $t("menu.contact") }}</span></b-nav-item
          >
        </b-navbar-nav>
        <DarkModeSwitcher></DarkModeSwitcher>
      </b-collapse>
    </b-navbar>
  </ClientOnly>
</template>

<style lang="scss" scoped>
// header section start
.fixed-top {
  z-index: 9;
}
.navbar-brand {
  img {
    width: 180px;
  }
}
.navbar {
  padding: 0;
  &.header-area {
    @media #{$desktop-device, $tablet-device, $large-mobile} {
      padding: 15px;
    }
  }
  .main-menu {
    // responsive
    @media #{$desktop-device, $tablet-device, $large-mobile} {
      padding: 15px 0;
    }
    li {
      .nav-link {
        display: block;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 50px 26px;
        // responsive
        @media #{$laptop-device} {
          padding: 50px 15px;
        }
        @media #{$desktop-device, $tablet-device, $large-mobile} {
          padding: 10px 14px;
        }
        span {
          position: relative;
          &:after {
            content: "";
            width: 0;
            height: 1px;
            bottom: -3px;
            position: absolute;
            left: auto;
            right: 0;
            z-index: -1;
            background-color: $theme-color--black;
            transition: $transition--default;
          }
        }
      }

      &:hover {
        .nav-link {
          span {
            color: $theme-color--black;
            &:after {
              width: 100%;
              left: 0;
              right: auto;
            }
          }
        }
      }
      &.active {
        .nav-link {
          span {
            color: $theme-color--black;
          }
        }
      }
    }
  }
  &.text-white {
    .main-menu {
      .nav-item {
        .nav-link {
          color: $white;
          // responsive
          @media #{$desktop-device, $tablet-device, $large-mobile} {
            color: $black;
          }
        }
        &:hover,
        &.active {
          .nav-link {
            span {
              color: $white;
              // responsive
              @media #{$desktop-device, $tablet-device, $large-mobile} {
                color: $black;
              }
              &:after {
                background-color: $white;
              }
            }
          }
        }
      }
    }
    &.is-sticky {
      .main-menu {
        .nav-item {
          .nav-link {
            color: $black;
          }
          &:hover,
          &.active {
            .nav-link {
              span {
                color: rgba(0, 0, 0, 0.5);
                // responsive
                @media #{$desktop-device, $tablet-device, $large-mobile} {
                  color: $theme-color--default;
                }
                &:after {
                  background-color: $black;
                }
              }
            }
          }
        }
      }
    }
  }
}

.header-area {
  &.text-white {
    .logo-dark {
      display: none;
    }
    .logo-light {
      display: block;
    }
    &.is-sticky {
      &.text-white {
        .logo-dark {
          display: block;
        }
        .logo-light {
          display: none;
        }
      }
    }
  }
}
.header-area {
  &.is-sticky {
    animation: 0.95s ease-in-out 0s normal none 1 running fadeInDown;
    z-index: 999;
    transition: $transition--default;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
    background-color: $white;
    .main-menu {
      li {
        .nav-link {
          padding: 30px 26px;
          // responsive
          @media #{$laptop-device} {
            padding: 30px 15px;
          }
          @media #{$desktop-device, $tablet-device, $large-mobile} {
            padding: 10px 14px;
          }
        }
      }
    }
    .ht-btn--outline {
      line-height: 44px;
    }
  }
}

.dark-mode .header-area {
  &.is-sticky {
    box-shadow: 0 8px 20px 0 rgba(200, 200, 200, 0.3);
    background-color: $black;
  }
}

@media #{$tablet-device, $large-mobile} {
  .menu-open #nav_collapse {
    background-color: $white;
    padding: 5px 20px;
  }

  .dark-mode .menu-open #nav_collapse {
    background-color: $black;
  }
}

#nav_collapse {
  z-index: 1000;
  @media #{$desktop-device, $tablet-device, $large-mobile} {
    order: 3;
  }
}
.navbar-toggler {
  z-index: 1000;
  @media #{$desktop-device, $tablet-device, $large-mobile} {
    order: 3;
  }
  &:focus {
    box-shadow: 0 0 0 0;
  }
}
</style>