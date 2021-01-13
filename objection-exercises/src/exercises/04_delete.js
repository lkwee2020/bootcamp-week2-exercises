const cleanup = require('../lib/cleanup')
const User = require('../models/User')
const Pet = require('../models/Pet')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  // const cat = User.query().withGraphFetched('pet')
  // console.dir({ depth: 3 })
  // console.log(cat)
  const cat = Pet.query().delete().where('type', 'CAT')
  return cat
  // -----
  cleanup()
}

run()
