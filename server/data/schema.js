import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
type Query {
  person(name: String): Person
  allPersons: [Person]
  getFortuneCookie: String
}

type Person {
  id: ID!
  name: String!
  address: String!
  posts: [Post]
}

input PersonInput {
    name: String
    address: String
}

type Post {
  title: String!
  author: Person
  views: Int
}


type Mutation {
    addPerson(input: PersonInput): Person
    deletePerson(id: ID!): String
}

type FortuneCookie {
  name: String!
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default schema
