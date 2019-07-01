'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersCmToClientSchema extends Schema {
  up () {
    this.table('users_cm', (table) => {
      // alter table
      this.rename('users_cm' , 'clients')
    })
  }

  down () {
    this.table('users_cm', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UsersCmToClientSchema
