class HomeController {

    //[GET] /sign-in
    index (req, res) {
        res.render('home', {style: 'home', title: 'Home'});
    }
}

module.exports = new HomeController;