'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientesSchema extends Schema {
  up () {
    this.create('clientes', (table) => {
      table.increments()
      table.string("nombres" , 100).notNullable()
      table.string("apellidos" , 100).notNullable()
      table.string("telefonos" , 100).notNullable()
      table.string("direccion" , 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clientes')
  }
}

module.exports = ClientesSchema
