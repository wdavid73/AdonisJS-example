'use strict'

class ValidatorClient {
  get rules () {
    return {
      names : 'required',
      lastnames : 'required',
      cellphone : 'integer|required|min:10|max:15',
      address : 'email|required'
    }
  }

  get messages(){
    return {
      'names.required' : 'Porfavor ingrese su Nombre o sus Nombres',
      'lastnames.required' : 'Porfavor ingrese su apellido o sus apellidos',
      'cellphone.required' : 'Profavor ingrese un numero de telefono',
      'cellphone.min' : 'El numero de telefono ingresado es muy pequeño',
      'cellphone.max' : 'El numero de telefono ingresado es muy grande',
      'address.required' : 'Porfavor ingrese su correo electronico',
      'address.email' : 'Porfavor ingrese un correo electronico valido'
    }
  }



  async fails(error){
    this.ctx.session.withErrors(error).flashAll()
    return this.ctx.response.redirect('back')
  }
}

module.exports = ValidatorClient
