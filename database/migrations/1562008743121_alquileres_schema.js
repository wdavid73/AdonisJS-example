'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlquileresSchema extends Schema {
  up () {
    this.table('alquileres', (table) => {
      // alter table
      table.integer('state').notNullable().defaultTo(1)
    })
  }

  down () {
    this.table('alquileres', (table) => {
      // reverse alternations
    })
  }
}

module.exports = AlquileresSchema
