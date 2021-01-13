const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models


const run = async () => {
  // Write Queries and Logs Here !!!
  const myself = await User.transaction(async trx => {
    const lauren = await User.query(trx)
      .insert({
        firstName: 'Lauren',
        lastName: 'Kwee',
        email: 'email@gmail.com',
        age: 2
      })
    console.log(lauren)
    const ronald = await lauren.$relatedQuery('pet', trx)
      .insert({ name: 'Ronald', type: 'BIRD' })
    console.log(ronald)
    cleanup()
    return ronald
  })
  // Insert yourself in the users table

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)

  // -----
}

run()
