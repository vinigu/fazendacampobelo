'use strict'

const Database = use('Database')

class TesteController { *
    index(request, response) {
        const teste = yield Database.select('*').from('new_table')
        console.log(teste)
        response.json(teste)
    }
}

module.exports = TesteController