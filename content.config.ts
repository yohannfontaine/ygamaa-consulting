import { defineCollection, defineContentConfig } from '@nuxt/content'

// Deux collections plutôt qu'une : le contenu anglais vit sous `en/`, et le
// préfixe de dossier ne doit pas se retrouver dans les chemins de requête —
// on l'efface ici plutôt que de le composer à chaque appel de `queryCollection`.
export default defineContentConfig({
  collections: {
    legal_fr: defineCollection({
      type: 'page',
      source: { include: '**', exclude: ['en/**'] },
    }),
    legal_en: defineCollection({
      type: 'page',
      source: { include: 'en/**', prefix: '' },
    }),
  },
})
