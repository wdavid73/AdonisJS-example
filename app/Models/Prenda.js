'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Prenda extends Model {
    static get table (){
        return 'prendas'
      }

      Alquiler(){
        return this.hasMany('App/Models/Alquiler', 'id' ,'alquileres_prendas_prendas_id')
      }
}

module.exports = Prenda
