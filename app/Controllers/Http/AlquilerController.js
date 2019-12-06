'use strict'

const Alquiler = use('App/Models/Alquiler')
const Cliente = use('App/Models/Cliente')
const Prenda = use('App/Models/Prenda')

const {validate} = use('Validator')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with alquilers
 */
class AlquilerController {
  /**
   * Show a list of all alquilers.
   * GET alquilers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.responseonst Prenda 
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    return view.render('alquileres.index')

  }

  /**
   * Render a form to be used for creating a new alquiler.
   * GET alquilers/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

    const cliente = await Cliente.all()
    const prenda = await Prenda.all()
    return view.render('alquileres.form' , {cliente : cliente.toJSON() , prenda : prenda.toJSON()})
    
    
  }

  /**
   * Create/save a new alquiler.
   * POST alquilers
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const alquiler = new Alquiler()
    alquiler.date_delivery = request.input('date_delivery')
    alquiler.return_date = request.input('return_date')
    alquiler.value = request.input('value')
    alquiler.clients_id = request.input('cliente_id')
    alquiler.prendas_id = request.input('prendas_id')

    await alquiler.save()
    return response.redirect('/api/v1')

  }

  /**
   * Display a single alquiler.
   * GET alquilers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing alquiler.
   * GET alquilers/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const alquileres_id = await Alquiler.find(params.id)
    return view.render('alquileres.edit' , {alquileres_id})

  }

  async details({params , view}){
    const id = await Alquiler.find(params.id)
    const cliente = await Cliente.all()
    const cli = cliente.toJSON()
    const prenda = await Prenda.all()
    const pre = prenda.toJSON()
    let p = '' , c = ''

    cli.forEach(cliente => {
      if (cliente.id == id.clients_id){
        c = cliente
      }
    });

    pre.forEach(prenda => {
      if ( prenda.id == id.prendas_id){
        p = prenda
      }
    })
    return view.render('alquileres.info.info' , {cliente : c , prenda : p})
  }


  async view_delete_l ({params , view }) {
    const alquileres_id = await Alquiler.find(params.id)
    const cliente = await Cliente.all()
    const cli = cliente.toJSON()
    const prenda = await Prenda.all()
    const pre = prenda.toJSON()
    let p = '' , c = ''

    cli.forEach(cliente => {
      if (cliente.id == alquileres_id.clients_id){
        c = cliente
      }
    });

    pre.forEach(prenda => {
      if ( prenda.id == alquileres_id.prendas_id){
        p = prenda
      }
    })
    return view.render('alquileres.delete' , {alquileres_id, cliente : c , prenda : p})
  }

  /**
   * Update alquiler details.
   * PUT or PATCH alquilers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {

    const alquiler = await Alquiler.find(params.id)
    alquiler.date_delivery = request.input('date_delivery')
    alquiler.return_date = request.input('return_date')
    alquiler.value = request.input('value')

    await alquiler.save()

    return response.redirect('/api/v1/alquileres/all')


  }

  async all ({view}){

    const alquileres = await Alquiler.all()
    const cliente = await Cliente.all()
    const prenda = await Prenda.all()
    return view.render('alquileres.all' , { alquileres : alquileres.toJSON(),cliente : cliente.toJSON(),prenda : prenda.toJSON()})
  }

  

  async delete_l ({params , request , response }){

    const alquiler = await Alquiler.find(params.id)
    alquiler.state = 0
    await alquiler.save()
    return response.redirect('/api/v1/alquileres/all')
  }
  
  async view_destroy ({params , view }) {
    const alquileres_id = await Alquiler.find(params.id)
    const cliente = await Cliente.all()
    const cli = cliente.toJSON()
    const prenda = await Prenda.all()
    const pre = prenda.toJSON()
    let p = '' , c = ''

    cli.forEach(cliente => {
      if (cliente.id == alquileres_id.clients_id){
        c = cliente
      }
    });

    pre.forEach(prenda => {
      if ( prenda.id == alquileres_id.prendas_id){
        p = prenda
      }
    })
    return view.render('alquileres.destroy' , {alquileres_id, cliente : c , prenda : p})
  }
  /**
   * Delete a alquiler with id.
   * DELETE alquilers/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const alquiler = await Alquiler.find(params.id)
    await alquiler.delete()
    return response.redirect('/api/v1/alquileres/all')
  }
}

module.exports = AlquilerController
