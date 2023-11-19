

class SignInController {
    //[GET] /sign-in
    index (req, res) {
        if(req.session.userName) {
            res.redirect('/');
        }
        res.render('register', {style: 'register', title: 'Register'});
    }

    register (req, res){
        const userName = req.body.inputName;
        req.session.userName = userName;
        res.redirect('/');
    }
}

module.exports = new SignInController;