'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class AlquilerClientePrenda extends Model {
    static get table (){
        return 'alquileres_clientes_prendas'
    }
}

module.exports = AlquilerClientePrenda
