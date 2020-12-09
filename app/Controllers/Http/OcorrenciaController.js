'use strict'
const Ocorrencia = use('App/Models/Ocorrencia');
const Setor = use('App/Models/Setor');
const Status = use('App/Models/Status');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with ocorrencias
 */
class OcorrenciaController {
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

    const ocorrequest = request.only(["id_ocorrencia"]);
    const setor = await Setor.all()
    const status = await Status.all()
    if(ocorrequest.id_ocorrencia != null){
      const ocorrencia = await Ocorrencia.findOrFail(ocorrequest.id_ocorrencia);
      return view.render('cadocorrencia', {
        setores: setor.toJSON(),
        statuses: status.toJSON(),
        ocorrencias: ocorrencia.toJSON()
      })
    }else{
      const ocorrencia = {"id":null,"cod_setor":null,"titulo_ocor":"","desc_ocor":"","data_ocor":"","status":null};
      return view.render('cadocorrencia', {
        setores: setor.toJSON(),
        statuses: status.toJSON(),
        ocorrencias: ocorrencia
      })
    }
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
    const data = request.only(["cod_setor", "titulo_ocor", "desc_ocor", "data_ocor", "cod_status" ]);
     
    const ocorrencia = await Ocorrencia.create(data);
    
    return response.redirect('painel')
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

module.exports = OcorrenciaController
