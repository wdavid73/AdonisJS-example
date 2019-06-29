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


Route.get('/alquileres' , 'AlquilerController.index').as('home.alquileres')
Route.get('/alquileres/form' , 'AlquilerController.create')
Route.post('/alquileres/registro' , 'AlquilerController.store')

//Route.on('/alquileres/form').render('alquileres.form').as('registro_alquileres')
Route.on('/alquileres/all').render('alquileres.all').as('all_alquileres')