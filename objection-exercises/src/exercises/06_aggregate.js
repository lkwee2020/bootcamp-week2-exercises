const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const numUsers = User.query().resultSize()

  // Get the average age of users
  const avgAge = User.query().avg('age as avgAge')

  // Get the total number of dogs
  const dog = Pet.query().where('type','DOG').resultSize()
  console.log(numUsers,avgAge,dog)

  // -----
  cleanup()
}

run()
