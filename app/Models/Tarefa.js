'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Tarefa extends Model {
    static formatDates (field, value) {
        if (field === 'data_tarefa') {
          return value.format('DD-MM-YYYY')
        }
        return super.formatDates(field, value)
    }
}

module.exports = Tarefa
