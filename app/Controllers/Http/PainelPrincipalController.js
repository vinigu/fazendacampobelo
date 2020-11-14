'use strict'
const Ocorrencia = use('App/Models/Ocorrencia');
const Setor = use('App/Models/Setor');
const Tarefa = use('App/Models/Tarefa');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class PainelPrincipalController {
     /**
   * Show a list of all ocorrencias.
   * GET ocorrencias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const ocorrencia = await Ocorrencia.all()
    const setor = await Setor.all()
    const tarefa = await Tarefa.all()
    return view.render('painel_principal', {
      ocorrencias: ocorrencia.toJSON(),
      setores: setor.toJSON(),
      tarefas: tarefa.toJSON()
    })
  }

  /**
   * Render a form to be used for creating a new ocorrencia.
   * GET ocorrencias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new ocorrencia.
   * POST ocorrencias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single ocorrencia.
   * GET ocorrencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing ocorrencia.
   * GET ocorrencias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update ocorrencia details.
   * PUT or PATCH ocorrencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a ocorrencia with id.
   * DELETE ocorrencias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PainelPrincipalController
