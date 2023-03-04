// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/i18n',
      '@nuxtjs/color-mode',
      '@nuxt/image-edge',
      'bootstrap-vue-next/nuxt',
      'nuxt-swiper',
    ],
    colorMode: {
      preference: 'system', // default value of $colorMode.preference
      fallback: 'light',
    },
    i18n: {
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
        redirectOn: 'root',  // recommended
      },
      locales: [
        {
          code: 'en',
          iso: 'en-US',
          name: 'EN',
          file: 'en-US.json'
        },
        {
          code: 'fr',
          iso: 'fr-FR',
          name: 'FR',
          file: 'fr-FR.json'
        }
      ],
      lazy: true,
      langDir: 'lang',
      defaultLocale: 'fr',
      // add `vueI18n` option to `@nuxtjs/i18n` module options
      vueI18n: {
        legacy: false,
      }
    },
    css: [
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'animate.css/animate.min.css',
    "@/assets/scss/style.scss"],
    app: {
      pageTransition: { name: 'page', mode: 'out-in' }
    },
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "@/assets/scss/_variabls.scss" as *;'
            }
          }
        }
      }
})
