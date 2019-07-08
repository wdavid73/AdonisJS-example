'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Cliente extends Model {
    static get table (){
        return 'clients'
      }

      Alquiler(){
        return this.hasMany('App/Models/Alquiler' , 'id' ,'alquileres_clients_clients_id')
      }
}

module.exports = Cliente
