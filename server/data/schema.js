import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers'

const typeDefs = `
type Query {
  person(name: String): Person
  allPersons: [Person]
}

type Person {
  name: String!
  address: String!
  posts: [Post]
}

type Post {
  title: String!
  author: Person
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
