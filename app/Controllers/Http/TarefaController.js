'use strict'
const Setor = use('App/Models/Setor');
const Status = use('App/Models/Status');
const Tarefa = use('App/Models/Tarefa');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tarefas
 */
class TarefaController {
  /**
   * Show a list of all tarefas.
   * GET tarefas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const setorrequest = request.only(["id_tarefa"]);
    const setor = await Setor.all()
    const status = await Status.all()
    if(setorrequest.id_tarefa != null){
      const tarefa = await Tarefa.findOrFail(setorrequest.id_tarefa);
      return view.render('cad_tare', {
        setores: setor.toJSON(),
        statuses: status.toJSON(),
        tarefas: tarefa.toJSON()
      })
    }else{
      const tarefa = {"id":null,"cod_setor":null,"titulo_tarefa":"","desc_tarefa":"","data_tarefa":"","cod_status":null};
      return view.render('cad_tare', {
        setores: setor.toJSON(),
        statuses: status.toJSON(),
        tarefas: tarefa
      })
    }
  }

  /**
   * Render a form to be used for creating a new tarefa.
   * GET tarefas/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new tarefa.
   * POST tarefas
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(["cod_setor", "titulo_tarefa", "desc_tarefa", "data_tarefa", "cod_status"]);
    
    const tarefa = await Tarefa.create(data);
    
    return response.redirect('painel')
  }

  /**
   * Display a single tarefa.
   * GET tarefas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing tarefa.
   * GET tarefas/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update tarefa details.
   * PUT or PATCH tarefas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const tarefa = await Tarefa.findOrFail(params.id);
    const data = request.only(["titulo_tarefa", "desc_tarefa", "data_tarefa", "cod_status"]);
    
    cliente.merge(data);
    await cliente.save();

    return response.redirect('/')
  }

  /**
   * Delete a tarefa with id.
   * DELETE tarefas/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = TarefaController
