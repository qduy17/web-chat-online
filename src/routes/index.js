const signInRouter = require('./signIn');
const homeRouter = require('./home');

function route(app) {

    app.use('/sign-in', signInRouter)  

    app.use('/', homeRouter)
}

module.exports = route;