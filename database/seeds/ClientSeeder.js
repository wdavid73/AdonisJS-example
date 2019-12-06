'use strict'

/*
|--------------------------------------------------------------------------
| ClientSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ClientSeeder {
  async run () {
    const clientsArray = await Factory.model('App/Models/Cliente').createMany(20)
  }
}

module.exports = ClientSeeder