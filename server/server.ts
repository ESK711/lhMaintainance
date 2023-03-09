import * as http from 'http'
import * as dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'

import { frontend } from '../dist/ssr/main'
import { genSchema } from './utils/genSchema'

export async function startServer() {
  dotenv.config()

  let serverStarted = false
  let displayError: any
  async function stop(arg0: any) {}

  const app = frontend()
  const httpServer = http.createServer(app)
  const port = process.env.PORT || 8060
  const host = process.env.HOST

  const apolloServer = new ApolloServer({
    schema: genSchema(),
    introspection: true,
    context: ({ req, res }: any ) => ({ req, res })
  })

  app.disable('x-powered-by')

  await apolloServer.start()
  apolloServer.applyMiddleware({ 
    app,
    cors: false
  })

  if (!serverStarted) {
    httpServer.listen(port, async () => {
      try {
        serverStarted = true
        console.log(`🚀 Server running on port ${ host }:${ port }`)
      } catch(err) {
        displayError = err?.message
        console.error('SERVER FAILED TO START!')
        console.error(`ERROR: ${ displayError }`)
        await new Promise(res => stop(res))
      }
    })
  }
  
}