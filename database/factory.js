'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/Cliente', async (faker) => {
  return {
    names: faker.first(),
    lastnames: faker.last(),
    cellphone : faker.phone(),
    address : faker.email(),
  }
})

Factory.blueprint('App/Models/Prenda', async (faker) => {
  return {
    name: faker.word(),
    size: faker.word(),
    color : faker.color(),
  }
})

