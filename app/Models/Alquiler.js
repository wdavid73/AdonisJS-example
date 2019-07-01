'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Alquiler extends Model {
  static get table (){
    return 'alquileres'
  }

  static get dates () {
    return ['date_delivery', 'return_date']
  }

  static get dateFormat (){
    return 'YYYY-MM-DD'
  }

}

module.exports = Alquiler
