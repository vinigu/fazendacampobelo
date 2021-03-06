'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OcorrenciaSchema extends Schema {
  up () {
    this.create('ocorrencias', (table) => {
      table.increments()
      table.integer('cod_setor').unsigned().references('id').inTable('setor')
      table.string('titulo_ocor').notNullable()
      table.text('desc_ocor','longtext').notNullable()
      table.date('data_ocor')
      table.integer('cod_status').unsigned().references('id').inTable('statuses')
      table.timestamps()
    })
  }

  down () {
    this.drop('ocorrencias')
  }
}

module.exports = OcorrenciaSchema
