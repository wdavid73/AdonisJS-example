'use strict'

class AlquilerStore {
  get rules () {
    return {
      date_delivery : 'date|required',
      return_date : 'date|required',
      value :'integer|required|min:5|max:6'
    }
  }

  get messages(){
    return {
      'value.required' : 'Porfavor el valor del alquiler',
      'value.min' : 'El valor del alquileres debe ser igual o mayor a $10.000',
      'value.max' : 'El valor del alquileres debe ser igual o mayor a $999.999',

      'date_delivery.required' : 'Porfavor la Fecha de Entrega',
      'return_date.required' : 'Porfavor la Fecha de Devolucion',

    }
  }

  async fails(error){
    this.ctx.session.withErrors(error).flashAll()

    return this.ctx.response.redirect('back')
  }
}

module.exports = AlquilerStore
