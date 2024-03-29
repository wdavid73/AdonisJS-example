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

Route.on('/api/v1').render('index')
Route.on('/api/v1/contact').render('contact').as('contact')

/* ### Alquileres ### */
//Routing Usando Route.group
Route.group(() => {
    Route.get('/', 'AlquilerController.index').as('home.alquileres')
    //Registro
    Route.get('registrer' , 'AlquilerController.create')
    Route.post('registro' , 'AlquilerController.store').validator('ValidatorAlquiler')
    Route.get('all' , 'AlquilerController.all')
    //ACtualizar
    Route.get('edit/:id' , 'AlquilerController.edit')
    Route.put('update/:id' ,'AlquilerController.update').validator('ValidatorAlquiler')
    //Borrado Logico
    Route.get('delete/:id' , 'AlquilerController.view_delete_l')
    Route.put('del/:id','AlquilerController.delete_l')
    //Borrado Permanente
    Route.get('destroy/:id' , 'AlquilerController.view_destroy')
    Route.delete('des/:id' , 'AlquilerController.destroy')

    //Detalles
    Route.get('info/cliente/:id' , 'AlquilerController.details')
}).prefix('/api/v1/alquileres')

/* $$$ Clientes $$$ */

Route.group( () =>{
    Route.get('/' , 'ClienteController.index')
    Route.get('all' , 'ClienteController.all')
    //Registro
    Route.get('registrer' , 'ClienteController.create')
    Route.post('registro' , 'ClienteController.store').validator('ValidatorClient')
    //Actualizar
    Route.get('edit/:id' , 'ClienteController.edit')
    Route.put('update/:id' , 'ClienteController.update').validator('ValidatorClient')
    //Borrado Logico
    Route.get('delete/:id' , 'ClienteController.view_delete_l')
    Route.put('del/:id' , 'ClienteController.delete_log')
    //Borrado Permanente
    Route.get('destroy/:id' , 'ClienteController.view_destroy')
    Route.delete('des/:id' , 'ClienteController.destroy')
    //Buscar un Cliente
    Route.get('search' , 'ClienteController.view_find')
    Route.post('buscado' , 'ClienteController.find').validator('ValidatorClient')
}).prefix('/api/v1/clientes')


/* %% Prendas %% */

Route.group( ()=>{
    Route.get('/' , 'PrendaController.index')
    Route.get('all' , 'PrendaController.all')
    //Registro
    Route.get('registrer' , 'PrendaController.create')
    Route.post('registro' , 'PrendaController.store')
    //Borrando Logico
    Route.get('delete/:id' , 'PrendaController.delete_log')
    //Borrando Permanente
    Route.get('destroy/:id' , 'PrendaController.destroy_view')
    Route.delete('des/:id' , 'PrendaController.destroy')
    //Buscar
    Route.get('search' , 'PrendaController.view_find')
    Route.post('buscado' , 'PrendaController.find')
}).prefix('/api/v1/prendas')

//Routing Basico
//Route.get('/alquileres' , 'AlquilerController.index').as('home.alquileres')
//Route.get('/alquileres/form' , 'AlquilerController.create')
//Route.post('/alquileres/registro' , 'AlquilerController.store')
//Route.get('/alquileres/all' , 'AlquilerController.all')