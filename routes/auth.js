var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

app.get('/signup', authController.signup);


app.get('/signin', authController.signin);


<<<<<<< HEAD
app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',failureRedirect: '/signup'}));
=======
app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signup'}
                                                    ));
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855


app.get('/dashboard',isLoggedIn, authController.dashboard);


app.get('/logout',authController.logout);


<<<<<<< HEAD
app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard', failureRedirect: '/signin'}));
=======
app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signin'}
                                                    ));
>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
<<<<<<< HEAD
}};
=======
}


}






>>>>>>> cce95fb11fb031c717b42a1e7ee2aaa48fc3e855
