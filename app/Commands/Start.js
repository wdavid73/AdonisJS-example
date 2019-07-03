'use strict'

const { Command } = require('@adonisjs/ace')

class Start extends Command {
  static get signature () {
    return 'start'
  }

  static get description () {
    return 'Tell something helpful about this command'
  }

  async handle (args, options) {
    this.info('Dummy implementation for start command')
  }
}

module.exports = Start
