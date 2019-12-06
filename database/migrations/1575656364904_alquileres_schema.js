'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlquileresSchema extends Schema {
  up () {
    this.create('alquileres', (table) => {
      table.increments()
        /*table.integer('clients_id').unsigned().references('id').inTable('clients')
        table.integer('prendas_id').unsigned().references('id').inTable('prendas')*/
        table.integer('clients_id').unsigned().references('id').inTable('clients')
        table.integer('prendas_id').unsigned().references('id').inTable('prendas')
        table.date('date_delivery').notNullable()
        table.date('return_date').notNullable()
        table.integer('value').notNullable()
        table.integer('state').notNullable().defaultTo(1)
        table.timestamps()
    })
  }

  down () {
    this.drop('alquileres')
  }
}

module.exports = AlquileresSchema
