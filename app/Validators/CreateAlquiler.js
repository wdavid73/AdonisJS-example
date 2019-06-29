'use strict'

class CreateAlquiler {
  get rules () {
    return {
      'date_delivery' :'require' ,
      'return_date' : 'require',
      'value' : 'require'
    }
  }

  get messages (){
    return {
      'required' : 'Whoa now {{ field }} is required'
    }
  }

  async fails(error){
    this.ctx.session.withErrors(error)
      .flashAll()

    return this.ctx.response.redirect('back')
  }
}

module.exports = CreateAlquiler
