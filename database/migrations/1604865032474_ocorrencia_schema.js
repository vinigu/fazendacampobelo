'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OcorrenciaSchema extends Schema {
  up () {
    this.create('ocorrencias', (table) => {
      table.increments()
      table.integer('cod_setor').notNullable()
      table.string('titulo_ocor').notNullable()
      table.text('desc_ocor','longtext').notNullable()
      table.date('data_ocor')
      table.string('status')
      table.timestamps()
    })
  }

  down () {
    this.drop('ocorrencias')
  }
}

module.exports = OcorrenciaSchema
