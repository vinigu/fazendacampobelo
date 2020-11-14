'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TarefaSchema extends Schema {
  up () {
    this.create('tarefas', (table) => {
      table.increments()
      table.integer('cod_setor').unsigned().references('id').inTable('setor')
      table.string('titulo_tarefa').notNullable()
      table.text('desc_tarefa').notNullable()
      table.date('data_tarefa')
      table.integer('cod_status').unsigned().references('id').inTable('statuses')
      table.timestamps()
    })
  }

  down () {
    this.drop('tarefas')
  }
}

module.exports = TarefaSchema
