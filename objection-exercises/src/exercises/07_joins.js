const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const allUsersPets = await User.query().withGraphFetched('pet')

  // Get all users, their pets, AND their children
  // console.dir(allUsersPets, { depth: 3 })
  console.dir(allUsersPetsChildren, { depth: 3 })
  //not sure if i did relations correctly

  // Get all users, their parents, and their grandparents

  // Get all users, their pets, their chilren, and their childrens' pets

  // -----
  cleanup()
}

run()
