
class HomeController {

    index(req, res) {
        if (!req.session.userName) {
            return res.redirect('/sign-in');
        }
        return res.render('home', { style: 'home', title: 'Home', userName: req.session.userName});
    }
}

module.exports = new HomeController;