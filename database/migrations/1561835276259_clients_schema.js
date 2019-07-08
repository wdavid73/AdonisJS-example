'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.createIfNotExists('clients', (table) => {
      table.increments()
      table.string('names' , 100).notNullable()
      table.string('lastnames' , 100).notNullable()
      table.string('cellphone' , 50).notNullable()
      table.string('address' , 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
