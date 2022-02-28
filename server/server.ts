import * as http from 'http'
import * as dotenv from 'dotenv'
import * as session from 'express-session'
// import * as connectRedis from 'connect-redis'
import { ApolloServer } from 'apollo-server-express'

import * as cors from 'cors'
import * as express from 'express'

// import { frontend } from '../dist/ssr/main'
import { genSchema } from './utils/genSchema'
// import { redis } from './utils/redis'

export async function runServer() {
  dotenv.config()

  const app = express()
  const httpServer = http.createServer(app)
  // const RedisStore = connectRedis(session)
  const port = process.env.PORT || 8000
  const host = process.env.HOST

  const apolloServer = new ApolloServer({
    schema: genSchema(),
    introspection: true
  })

  app.disable('x-powered-by')

  app.use(cors({
    origin: '*',
    credentials: true
  }))

  // app.set('trust proxy', 1) // trust first proxy
  app.use(
    session({
      // store: new RedisStore({
        // client: redis
      // }),
      name:'uuid',
      secret: `${ process.env.SESSION_SECRET }`,
      resave: false,
      saveUninitialized: false,
      cookie: {
        // path: app,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        // secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
      }
    })
  )

  await apolloServer.start()
  apolloServer.applyMiddleware({ 
    app,
    // cors: false
  })

  httpServer.listen(port, () => {
    console.log(`🚀 Server running on port ${ host }:${ port }`)
  })
}