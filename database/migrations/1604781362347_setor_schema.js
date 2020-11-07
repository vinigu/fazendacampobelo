'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetorSchema extends Schema {
  up () {
    this.create('setor', (table) => {
      table.increments()
      table.string('nome_setor').notNullable()
      table.string('ativo_sn').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('setor')
  }
}

module.exports = SetorSchema
