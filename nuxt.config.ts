// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/i18n',
      '@nuxtjs/color-mode',
      '@nuxt/image-edge',
      '@nuxtjs/fontaine',
      '@nuxt/content',
      '@bootstrap-vue-next/nuxt',
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
      baseUrl: 'https://ygamaa-consulting.web.app',
      lazy: true,
      langDir: 'lang',
      defaultLocale: 'fr',
      compilation: {
        strictMessage: false,
      },
      vueI18n: './i18n.config.ts'
    },
    css: [
    'bootstrap/dist/css/bootstrap.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'animate.css/animate.min.css',
    "@/assets/scss/style.scss"],
    vite: {
        css: {
          preprocessorOptions: {
            scss: {
              additionalData: '@use "@/assets/scss/_variabls.scss" as *;'
            }
          }
        }
      },
      image: {
        staticFilename: '[publicPath]/images/[name]-[hash][ext]'
    }
})
