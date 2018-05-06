import { Person } from './connectors'

const resolvers = {
  Query: {
    person(_, args) {
      return Person.find({ where: args })
    },
    allPersons(_, args) {
      return Person.findAll()
    }
  },
  Person: {
    posts(person) {
      return person.getPosts()
    }
  },
  Post: {
    author(post) {
      return post.getPerson()
    }
  }
};

export default resolvers
