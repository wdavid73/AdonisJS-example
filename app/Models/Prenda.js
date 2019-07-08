'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Prenda extends Model {
    static get table (){
        return 'prendas'
      }

      AlquillerClientePrenda(){
        return this.hasMany('App/Models/AlquilerClientePrenda')
      }
}

module.exports = Prenda
