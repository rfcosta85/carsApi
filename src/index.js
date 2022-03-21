import path from 'path'
import fastify from 'fastify'
import multer from 'fastify-multer'
import helmet from 'fastify-helmet'
import fastifyStatic from 'fastify-static'
import routes from './routes/routes.js'

const __dirname = path.resolve()

const app = fastify({
  logger: true,
})

app.register(fastifyStatic, {
  root: path.join(__dirname, 'public'),
  prefix: '/public/',
})

app.register(multer.contentParser)

app.register(helmet)

app.register(routes)

app.listen(3000, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`
  🚀 Server ready at: ${address}
  ⭐️ See sample requests: http://pris.ly/e/ts/rest-fastify#3-using-the-rest-api`)
})
