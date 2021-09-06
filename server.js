const { loadNuxt, build } = require('nuxt')

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start () {
  // Nous obtenons l'instance Nuxt
  const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

  // On fournit chaque route avec Nuxt.js
  app.use(nuxt.render)

  // Construit uniquement en mode développement avec rechargement à chaud
  if (isDev) {
    build(nuxt)
  }
  // Écoute le serveur
  app.listen('passenger')
  console.log('Server listening on `localhost:' + port + '`.')
}

start()
