'use strict'

const User = use("App/Models/User");


class UserController {

    async index({ request, response, view }) {
        const user = await User.all();
        console.log(user.rows)
        if (response.email === user.rows.email) {
            return user;
        } else {
            console.log('Seu login está errado')
        }
    }

}

module.exports = UserController