'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('login')

Route.on('/user').render('user')

Route.resource('apiUser', 'UserController').apiOnly();

Route.on('/cadfunc').render('cad_func')

Route.on('/cadocorrencia').render('cadocorrencia')

Route.on('listocorrencia').render('listocorrencia')

Route.resource('status', 'StatusController').apiOnly()

Route.resource('ocorrencia', 'OcorrenciaController').apiOnly()

Route.resource('painel', 'PainelPrincipalController').apiOnly()

Route.resource('setor', 'SetorController').apiOnly()

Route.resource('tarefa', 'tarefaController').apiOnly()