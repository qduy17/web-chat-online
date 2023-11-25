

class SignInController {
    //[GET] /sign-in
    index (req, res) {
        if(req.session.userName) {
            return res.redirect('/');
        }
        return res.render('register', {style: 'register', title: 'Register'});
    }

    register (req, res){
        const userName = req.body.inputName;
        req.session.userName = userName;
        return res.redirect('/');
    }
}

module.exports = new SignInController;