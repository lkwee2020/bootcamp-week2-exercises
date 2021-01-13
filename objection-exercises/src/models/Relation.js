// Write your relation model here!
const BaseModel = require('./BaseModel')
const { ManyToManyRelation } = require('objection')

class Friends extends BaseModel {
    static get tableName() {
        return 'friends'
    }

    static get relationMappings() {
        const User = require('./User')
        return {
            user: {
                relation: ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'users.id',
                        through: {
                            from: 'friends.parentId',
                            to: 'friends.childId',
                        },
                    to: 'users.id',
                },
            },            
        },
    }
}

module.exports = Pet