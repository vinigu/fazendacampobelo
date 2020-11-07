'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tbsatatuses
 */
class TbSatatusController {
  /**
   * Show a list of all tbsatatuses.
   * GET tbsatatuses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const Status = use("App/Models/TbStatus");
    const clientes = await Status.all();
    
    return clientes;
  }

  /**
   * Render a form to be used for creating a new tbsatatus.
   * GET tbsatatuses/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new tbsatatus.
   * POST tbsatatuses
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    const data = request.only(["tp_status"]);
    
    const status = await Status.create(data);
    
    return status;
  }

  /**
   * Display a single tbsatatus.
   * GET tbsatatuses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing tbsatatus.
   * GET tbsatatuses/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update tbsatatus details.
   * PUT or PATCH tbsatatuses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const status = await Status.findOrFail(params.id);
    const data = request.only(["tp_status"]);
    
    status.merge(data);
    await status.save();
    
    return status
  }

  /**
   * Delete a tbsatatus with id.
   * DELETE tbsatatuses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const status = await Status.findOrFail(params.id);
    await status.delete();
  }
}

module.exports = TbSatatusController
