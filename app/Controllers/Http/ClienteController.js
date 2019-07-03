'use strict'

const Cliente = use('App/Models/Cliente')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with clientes
 */
class ClienteController {
  /**
   * Show a list of all clientes.
   * GET clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    return view.render('clientes.index')
  }

  /**
   * Render a form to be used for creating a new cliente.
   * GET clientes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

    return view.render('clientes.form')
  }

  async all ({view}){
    const clientes = await Cliente.all()
    return view.render('clientes.all' , { clientes : clientes.toJSON() })
  }

  /**
   * Create/save a new cliente.
   * POST clientes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {

    const cliente = new Cliente()
    cliente.names = request.input('names')
    cliente.lastnames = request.input('lastnames')
    cliente.cellphone = request.input('cellphone')
    cliente.address = request.input('address')

    await cliente.save()

    return response.redirect('/clientes/all')
  }

  /**
   * Display a single cliente.
   * GET clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing cliente.
   * GET clientes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {

    const clientes_id = await Cliente.find(params.id)
    return view.render('clientes.edit' , {clientes_id})
  }

  /**
   * Update cliente details.
   * PUT or PATCH clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const clientes = await Cliente.find(params.id)
    clientes.names = request.input('names')
    clientes.lastnames = request.input('lastnames')
    clientes.cellphone = request.input('cellphone')
    clientes.address = request.input('address')

    await clientes.save()

    return response.redirect('/clientes/all')
  }

  async view_delete_l ({params , view }) {
    const clientes_id = await Cliente.find(params.id)
    return view.render('clientes.delete' , {clientes_id})
  }

  async delete_log ({params , request , response }){

    const cliente = await Cliente.find(params.id)
    cliente.state = 0
    await cliente.save()
    return response.redirect('/clientes/all')
  }

  /**
   * Delete a cliente with id.
   * DELETE clientes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async view_destroy ({params , view}){
    const cliente = await Cliente.find(params.id)
    return view.render('clientes.destroy' , {cliente})
  }

  async destroy ({ params, request, response }) {
    const cliente = await Cliente.find(params.id)
    await cliente.delete()
    return response.redirect('/clientes/all')
  }
}

module.exports = ClienteController
