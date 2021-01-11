
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table.text('text')
    table.string('datePost')
    table.integer('likes')
    table.uuid('userID').references('user_id')

})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
