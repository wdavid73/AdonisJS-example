'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('names' , 100).notNullable()
      table.string('lastnames' , 100).notNullable()
      table.string('cellphone' , 50).notNullable()
      table.string('address' , 100).notNullable()
      table.integer('state').notNullable().defaultTo(1)
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientsSchema
