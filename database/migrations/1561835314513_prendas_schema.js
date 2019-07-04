'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PrendasSchema extends Schema {
  up () {
    this.create('prendas', (table) => {
      table.increments()
      table.string('name' , 100).notNullable()
      table.string('size' , 10).notNullable()
      table.string('color' , 50).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('prendas')
  }
}

module.exports = PrendasSchema
