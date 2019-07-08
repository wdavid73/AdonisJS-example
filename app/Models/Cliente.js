'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
    static get table (){
        return 'clients'
      }

      AlquillerClientePrenda(){
        return this.hasMany('App/Models/AlquilerClientePrenda')
      }
}

module.exports = Cliente
