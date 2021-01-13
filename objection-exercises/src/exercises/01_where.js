const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const usersSpecificName1 = await User.query().where('firstName', 'John')
  // Do the same with object notation

  const usersSpecificName2 = await User.query().where({ firstName: 'John' })
  console.log(usersSpecificName1)
  console.log(usersSpecificName2)

  // Get all DOGS and BIRDS
  const dog = await Pet.query().where({ type: 'DOG' })
  const bird = await Pet.query().where({ type: 'BIRD' })
  console.log(dog,bird)
  // -----
  cleanup()
}

run()
