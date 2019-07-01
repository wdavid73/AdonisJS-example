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

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

//Without Lucid
Factory.blueprint('App/Models/Alquiler' , (faker) =>{
    return{
        date_delivery : faker.date(),
        return_date : faker.date(),
        value : faker.integer()
    }
})

//With Lucid
//const alquiler = await Factory.model('App/Models/Alquiler').createMany(10)