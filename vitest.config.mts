import { defineConfig } from 'vitest/config'

const root = new URL('.', import.meta.url).pathname

export default defineConfig({
  // Les alias Nuxt ne sont pas disponibles hors du runtime Nuxt : on les
  // rejoue ici pour que les tests unitaires importent le même code que l'app.
  resolve: {
    alias: {
      '~': root,
      '@': root,
    },
  },
  test: {
    include: ['tests/**/*.spec.ts'],
    environment: 'node',
  },
})
