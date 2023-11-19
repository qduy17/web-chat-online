
class HomeController {

    index(req, res) {
        if (!req.session.userName) {
            res.redirect('/sign-in');
        }
        res.render('home', { style: 'home', title: 'Home', userName: req.session.userName});
    }
}

module.exports = new HomeController;