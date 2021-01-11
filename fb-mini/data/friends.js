const casual = require('casual')
const userData = require('./users')

casual.define('friends', ({ user1ID, user2ID }) => ({
  id: casual.uuid,
  date_request: casual.date,
  requestorId: user1ID,
  requestedId: user2ID,
}))


const friendsData = []

for (let i = 0; i < 20; ++i) {
  const user1ID = casual.random_element(userData).id
  const user2ID = casual.random_element(userData).id
  friendsData.push(casual.friends({ user1ID, user2ID }))
}

module.exports = friendsData