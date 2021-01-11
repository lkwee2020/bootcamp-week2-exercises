exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table.timestamps(true)

  table.string('firstName')
  table.string('lastName')
  table.string('dateBirth')
  table.string('password')
  table.text('bio')

})

exports.down = async knex => knex.schema.dropTableIfExists('users')
