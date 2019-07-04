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
    //Registro
    Route.get('form' , 'AlquilerController.create')
    Route.post('registro' , 'AlquilerController.store')
    Route.get('all' , 'AlquilerController.all')
    //ACtualizar
    Route.get('edit/:id' , 'AlquilerController.edit')
    Route.put('update/:id' ,'AlquilerController.update')
    //Borrado Logico
    Route.get('delete/:id' , 'AlquilerController.view_delete_l')
    Route.put('del/:id','AlquilerController.delete_l')
    //Borrado Permanente
    Route.get('destroy/:id' , 'AlquilerController.view_destroy')
    Route.delete('des/:id' , 'AlquilerController.destroy')
}).prefix('alquileres')

/* $$$ Clientes $$$ */

Route.group( () =>{
    Route.get('/' , 'ClienteController.index')
    Route.get('all' , 'ClienteController.all')
    //Registro
    Route.get('form' , 'ClienteController.create')
    Route.post('registro' , 'ClienteController.store')
    //Actualizar
    Route.get('edit/:id' , 'ClienteController.edit')
    Route.put('update/:id' , 'ClienteController.update')
    //Borrado Logico
    Route.get('delete/:id' , 'ClienteController.view_delete_l')
    Route.put('del/:id' , 'ClienteController.delete_log')
    //Borrado Permanente
    Route.get('destroy/:id' , 'ClienteController.view_destroy')
    Route.get('des/:id' , 'ClienteController.destroy')
    //Buscar un Cliente
    Route.get('buscar' , 'ClienteController.view_find')
    Route.post('buscado' , 'ClienteController.find')
}).prefix('clientes')


/* %% Prendas %% */

Route.on('/prendas').render('prendas.index')
Route.on('/prendas/all').render('prendas.all')
Route.on('/prendas/form').render('prendas.form')
Route.on('/prendas/find').render('prendas.find')

//Routing Basico
//Route.get('/alquileres' , 'AlquilerController.index').as('home.alquileres')
//Route.get('/alquileres/form' , 'AlquilerController.create')
//Route.post('/alquileres/registro' , 'AlquilerController.store')
//Route.get('/alquileres/all' , 'AlquilerController.all')