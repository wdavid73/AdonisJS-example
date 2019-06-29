'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Alquiler extends Model {
  static get table (){
    return 'alquileres'
  }
}

module.exports = Alquiler
