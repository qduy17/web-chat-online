const { register } = require("module");

class SignInController {

    //[GET] /sign-in
    index (req, res) {
        res.render('register', {style: 'register', title: 'Register'});
    }
}

module.exports = new SignInController;