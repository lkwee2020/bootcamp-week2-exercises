// Write your Pet model here!
const BaseModel = require('./BaseModel')
const { BelongsToOneRelation } = require('objection')

class Pet extends BaseModel {
    static get tableName() {
        return 'pets'
    }

    static get relationMappings() {
        const User = require('./User')
        return {
            user: {
                relation: BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'users.id',
                    to: 'pets.ownerId',
                },
            },            
        }
    }
}

module.exports = Pet