import * as http from 'http'
import * as dotenv from 'dotenv'
import { ApolloServer } from 'apollo-server-express'

// import * as cors from 'cors'
// import * as express from 'express'

import { frontend } from '../dist/ssr/main'
import { genSchema } from './utils/genSchema'

export async function runServer() {
  dotenv.config()

  const app = frontend()
  const httpServer = http.createServer(app)
  const port = process.env.PORT || 8000
  const host = process.env.HOST

  const apolloServer = new ApolloServer({
    schema: genSchema(),
    introspection: true
  })

  app.disable('x-powered-by')

  // app.use(cors({
    // origin: '*',
    // credentials: true
  // }))

  await apolloServer.start()
  apolloServer.applyMiddleware({ 
    app,
    // cors: false
  })

  httpServer.listen(port, () => {
    console.log(`🚀 Server running on port ${ host }:${ port }`)
  })
}