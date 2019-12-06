'use strict'
const Prenda = use('App/Models/Prenda')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with prendas
 */
class PrendaController {
  /**
   * Show a list of all prendas.
   * GET prendas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return view.render('prendas.index')
  }

  /**
   * Render a form to be used for creating a new prenda.
   * GET prendas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    return view.render('prendas.form')
  }

  /**
   * Create/save a new prenda.
   * POST prendas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const prenda = new Prenda()
    prenda.name = request.input('name')
    prenda.color = request.input('color')
    var size = request.input('size')

    var size =  (size == 1) ? prenda.size = "XS" : 
                  (size == 2) ? prenda.size = "S" : 
                    (size == 3) ? prenda.size = "M" : 
                      (size == 4) ? prenda.size = "L" :
                        (size == 5) ? prenda.size = "XL" : 
                          (size == 6) ? prenda.size = "2XL" : "Otra"
    
    await prenda.save()
    return response.redirect('/api/v1')
  }

  /**
   * Display a single prenda.
   * GET prendas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing prenda.
   * GET prendas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update prenda details.
   * PUT or PATCH prendas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a prenda with id.
   * DELETE prendas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */

  async destroy_view ({params , view}){
    const prenda = await Prenda.find(params.id)
    return view.render('prendas.destroy' , {prenda})
  }

  async destroy ({ params, request, response }) {
    const prenda = await Prenda.find(params.id)
    await prenda.delete()
    return response.redirect('/api/v1/prendas/all')
  }

  async all ({view}){
    const prenda = await Prenda.all()
    return view.render('prendas.all' , {prenda : prenda.toJSON()})
  }
  async view_find ({view}){
    return view.render('prendas.find')
  }
  async find({params , request , response , view}){
    const size_front = request.input('size')
    var s
    var data = new Array()
    
    if(size_front == 1){s = 'XS'}
    if(size_front == 2){s = 'S'}
    if(size_front == 3){s = 'M'}
    if(size_front == 4){s = 'L'}
    if(size_front == 5){s = 'XL'}
    if(size_front == 6){s = '2XL'}

    const size_all = await Prenda.all()
    const size_js = size_all.toJSON()
    for(var field in size_js){
      if(size_js[field].state === 1){
        const size = size_js[field].size
        if(size == s){
          data.push(size_js[field])
        }
      }
    }
    return view.render('prendas.find' , {data})
  }

  async delete_log({params , request , response}){
    const prenda = await Prenda.find(params.id)
    prenda.state = 0
    await prenda.save()
    return response.redirect('/api/v1/prendas/all')
  }
}

module.exports = PrendaController
