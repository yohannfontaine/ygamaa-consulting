// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        // Le SVG porte sa propre bascule clair/sombre ; les navigateurs qui
        // ne le lisent pas retombent sur le PNG, en version claire.
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      // Seasonal logo decoration, empty when off. Overridden at build time by
      // NUXT_PUBLIC_SEASONAL_THEME; see composables/useSeasonalTheme.ts.
      seasonalTheme: "",
    },
  },
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "@nuxtjs/fontaine",
    "@nuxt/content",
  ],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light",
    // Keep the `.dark-mode` / `.light-mode` classes the design tokens target:
    // @nuxtjs/color-mode v4 changed the default suffix to an empty string.
    classSuffix: "-mode",
  },
  i18n: {
    // No browser language detection: on a static site the module switches the
    // locale before hydration, so the prerendered French home page is hydrated
    // in English for non-French browsers (nuxt-modules/i18n#3608). French stays
    // at the root for everyone, English is reached through `/en` and the
    // language switch.
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "EN",
        file: "en-US.json",
      },
      {
        code: "fr",
        language: "fr-FR",
        name: "FR",
        file: "fr-FR.json",
      },
    ],
    baseUrl: "https://ygamaa-consulting.fr",
    langDir: "locales",
    defaultLocale: "fr",
    compilation: {
      strictMessage: false,
    },
    vueI18n: "i18n.config.ts",
  },
  css: [
    // Polices auto-hébergées (woff2 bundlés par Vite) : zéro requête externe,
    // ce qui permet de garder font-src 'self' dans la CSP.
    "@fontsource-variable/inter",
    "@fontsource-variable/space-grotesk",
    "@/assets/scss/style.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_variabls.scss" as *;',
        },
      },
    },
  },
});
