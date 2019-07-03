'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientsSchema extends Schema {
  up () {
    this.table('clients', (table) => {
      // alter table
      table.integer('state').notNullable().defaultTo(1)
    })
  }

  down () {
    this.table('clients', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ClientsSchema
