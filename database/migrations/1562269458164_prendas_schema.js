'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrendasSchema extends Schema {
  up () {
    this.table('prendas', (table) => {
      // alter table
      table.integer('state').notNullable().defaultTo(1)
    })
  }

  down () {
    this.table('prendas', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PrendasSchema
