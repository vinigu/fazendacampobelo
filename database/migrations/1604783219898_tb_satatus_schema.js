'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TbSatatusSchema extends Schema {
  up () {
    this.create('tb_satatuses', (table) => {
      table.increments()
      table.string('tp_status').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tb_satatuses')
  }
}

module.exports = TbSatatusSchema
