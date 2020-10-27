require('babel-polyfill')
const functions = require('firebase-functions')
const next_1 = require('next')

const app = next_1.default({
  conf: {
    dev: process.env.NODE_ENV !== 'production',
    distDir: '.next',
  },
})

const handleRequest = app.getRequestHandler()

let shouldPrepare = true

exports.next = functions.https.onRequest(async (req, res) => {
  res.header('Cache-Control', 'public, max-age=86400, s-maxage=86400')

  if (shouldPrepare) {
    shouldPrepare = false
    await app.prepare()
  }

  await handleRequest(req, res)
})
