
exports.up = async knex => knex.schema.createTable('friends', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table.uuid('requestorId').references('users.id')
    table.uuid('requestedId').references('users.id')
    table.string('date_request')

})

exports.down = async knex => knex.schema.dropTableIfExists('friends')
