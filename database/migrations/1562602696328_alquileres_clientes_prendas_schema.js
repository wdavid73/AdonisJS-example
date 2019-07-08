'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlquileresClientesPrendasSchema extends Schema {
  up () {
    this.create('alquileres_clientes_prendas', (table) => {
      table.increments()
      table.integer('alquileres_id').notNullable().references('id').inTable('alquileres')
      table.timestamps()
    })
  }

  down () {
    this.drop('alquileres_clientes_prendas')
  }
}

module.exports = AlquileresClientesPrendasSchema
