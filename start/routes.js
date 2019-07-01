'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('index')
Route.on('/contact').render('contact').as('contact')

/* ### Alquileres ### */
//Routing Usando Route.group
Route.group(() => {
    Route.get('/', 'AlquilerController.index').as('home.alquileres')
    Route.get('form' , 'AlquilerController.create')
    Route.post('registro' , 'AlquilerController.store')
    Route.get('all' , 'AlquilerController.all')
    Route.get('edit/:id' , 'AlquilerController.edit')
    Route.put('/:id' ,'AlquilerController.update')
}).prefix('alquileres')






//Routing Basico
//Route.get('/alquileres' , 'AlquilerController.index').as('home.alquileres')
//Route.get('/alquileres/form' , 'AlquilerController.create')
//Route.post('/alquileres/registro' , 'AlquilerController.store')
//Route.get('/alquileres/all' , 'AlquilerController.all')