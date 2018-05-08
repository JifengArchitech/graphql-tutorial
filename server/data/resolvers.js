import { Person, Post } from './connectors/sqlite'
import FortuneCookie from './connectors/api'

const resolvers = {
  Query: {
    person(_, args) {
      return Person.find({ where: args })
    },
    allPersons(_, args) {
      return Person.findAll()
    },
    getFortuneCookie() {
      return FortuneCookie.getOne()
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
  },
  Mutation: {
      addPerson(_, args) {
          return Person.create(args.input)
      },
      deletePerson(_, args) {
          return Person.destroy({where:args})
      }
  }
}

export default resolvers
