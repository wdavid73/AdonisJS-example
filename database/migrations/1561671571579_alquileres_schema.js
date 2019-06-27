'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AlquileresSchema extends Schema {
  up () {
    this.create('alquileres', (table) => {
      table.increments()
      table.string("tipo" , 50).notNullable()
      table.date("fecha_entrega").notNullable()
      table.date("fecha_devolcion").notNullable()
      table.decimal("valor").notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('alquileres')
  }
}

module.exports = AlquileresSchema
