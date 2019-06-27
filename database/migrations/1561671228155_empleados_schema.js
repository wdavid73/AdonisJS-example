'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpleadosSchema extends Schema {
  up () {
    this.create('empleados', (table) => {
      table.increments()
      table.string("nombres" , 50).notNullable()
      table.string("apellidos" , 50).notNullable()
      table.string("telefono" , 50).notNullable()
      table.string("direccion" , 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('empleados')
  }
}

module.exports = EmpleadosSchema
