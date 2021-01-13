const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const firstFive = User.query().orderBy('lastName').limit(5)
  console.log(firstFive)
  const secondFive = User.query().orderBy('lastName').limit(5).offset(5)
  console.log(secondFive)

  // Get the second 5 users, ordered by lastName

  // -----
  cleanup()
}

run()
