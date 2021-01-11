const casual = require('casual')
const userData = require('./users')

casual.define('posts', ({ userID }) => ({
    id: casual.uuid,
    text: casual.text,
    datePost: casual.date,
    likes: casual.integer(from = 0, to = 500),
    user_id: userID,
}))

const postsData = []

for (let i = 0; i < 20; ++i) {
  const userID = casual.random_element(userData).id
  postsData.push(casual.posts({ userID }))
}

module.exports = postsData