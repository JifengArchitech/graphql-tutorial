import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import bodyParser from 'body-parser'
import schema from './data/schema'
import cors from 'cors'

const GRAPHQL_PORT = 3010

const graphQLServer = express()

graphQLServer.use(cors())
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

graphQLServer.listen(GRAPHQL_PORT, () =>
  console.log(
    `GraphiQL is now running on http://localhost:${GRAPHQL_PORT}/graphiql`
  )
)
