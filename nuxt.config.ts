// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/i18n',
      '@nuxtjs/color-mode',
      '@nuxt/image',
      '@nuxtjs/fontaine',
      '@nuxt/content',
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
          language: 'en-US',
          name: 'EN',
          file: 'en-US.json'
        },
        {
          code: 'fr',
          language: 'fr-FR',
          name: 'FR',
          file: 'fr-FR.json'
        }
      ],
      baseUrl: 'https://ygamaa-consulting.web.app',
      langDir: 'locales',
      defaultLocale: 'fr',
      compilation: {
        strictMessage: false,
      },
      vueI18n: 'i18n.config.ts'
    },
    css: [
    // Polices auto-hébergées (woff2 bundlés par Vite) : zéro requête externe,
    // ce qui permet de garder font-src 'self' dans la CSP.
    '@fontsource-variable/inter',
    '@fontsource-variable/space-grotesk',
    "@/assets/scss/style.scss"],
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
