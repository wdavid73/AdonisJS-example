'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlquileresSchema extends Schema {
  up () {
    this.create('alquileres', (table) => {
      table.increments()
      table.date('date_delivery').notNullable()
      table.date('return_date').notNullable()
      table.integer('value').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alquileres')
  }
}

module.exports = AlquileresSchema
