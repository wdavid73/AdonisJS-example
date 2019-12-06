'use strict'

/*
|--------------------------------------------------------------------------
| ClothSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')
class ClothSeeder {
  async run () {
    const clothsArray = await Factory.model('App/Models/Prenda').createMany(20)
  }
}

module.exports = ClothSeeder
