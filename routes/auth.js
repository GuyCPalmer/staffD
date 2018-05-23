// var authController = require('../controllers/auth_controller.js');

// module.exports = function(app,){




// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated())
//         return next();

//     res.redirect('/signin');
// }};

module.exports = {
    isAuthenticated: function (req, res, next) {
        var user = firebase.auth().currentUser;
        if (user !== null) {
            req.user = user;
            next();
        } else {
            res.redirect('/signin');
        }
    }
}

