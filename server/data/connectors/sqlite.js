import Sequelize from 'sequelize'
import casual from 'casual'
import _ from 'lodash'

const db = new Sequelize('blog', null, null, {
  dialect: 'sqlite',
  storage: './blog.sqlite',
})

const PersonModel = db.define('person', {
  name: { type: Sequelize.STRING },
  address: { type: Sequelize.STRING },
})

const PostModel = db.define('post', {
  title: { type: Sequelize.STRING }
})

PersonModel.hasMany(PostModel)
PostModel.belongsTo(PersonModel)

// create mock data with a seed, so we always get the same
casual.seed(123)
db.sync({ force: true }).then(() => {
  _.times(3, () => {
    return PersonModel.create({
      name: casual.name,
      address: casual.address
    }).then((person) => {
      return person.createPost({
        title: `A post by ${person.name} at ${person.address}`
      })
    })
  })
})

const Person = db.models.person
const Post = db.models.post

export { Person, Post }
