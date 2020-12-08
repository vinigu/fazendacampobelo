'use strict'

const User = use("App/Models/User");
const Hash = use("Hash");

class UserController {

    async login({ request, auth, session, response }) {
        const { email, password } = request.all()
        await auth.attempt(email, password)
        const user = await User.query().where('email', email).first();
        console.log("Não aqui")
        console.log(user);

        if (user) {
            const passwordVerified = await Hash.verify(password, user.password);
            console.log("está aqui")
            if (passwordVerified) {
                console.log('tá aqui')
                    //await auth.remember(!!remember).login(user)

                return response.route('/ocorrencia')
            }
        }

        session.flash({
            notification: {
                type: 'danger',
                message: 'Não conseguimos verificar suas credenciais'
            }
        })

        return response.redirect('back')
            /*
        const { email, password } = request.all()

        console.log(email, password)
        return await auth.attempt(email, password)
      */

    }

    show({ auth, params }) {
        if (auth.user.id !== Number(params.id)) {
            return 'You cannot see someone else\'s profile'
        }
        return auth.user
    }

    async register({ request, auth, response }) {

        let user = await User.create(request.all())

        //generate token for user;
        let token = await auth.attempt(email, password);

        Object.assign(user, token)

        return response.json(user)
    }


}

module.exports = UserController
