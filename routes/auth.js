<<<<<<< HEAD
// const GoogleStrategy = require('passport-google-oauth')
//     .OAuth2Strategy;

// module.exports = function (passport) {
//     passport.serializeUser((user, done) => {
//         done(null, user);
//     });
//     passport.deserializeUser((user, done) => {
//         done(null, user);
//     });
//     passport.use(new GoogleStrategy({
//         clientID: "887616308420-ddtpflmikdpebomcg3mvj5uvbctg941f.apps.googleusercontent.com", //need to add google auth clientID
//         clientSecret: "g06mcVdwHyY0P0qO7pEOMeAG", // need to add google auth clientSecret
//         callbackURL: '/auth/google/callback'
//     }, (token, refreshToken, profile, done) => {
//         return done(null, {
//             profile: profile,
//             token: token
//         });
//     }));
// };
=======
var authController = require('../controllers/authcontroller.js');

module.exports = function(app,passport){

app.get('/signup', authController.signup);


app.get('/signin', authController.signin);


app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',failureRedirect: '/signup'}));


app.get('/dashboard',isLoggedIn, authController.dashboard);


app.get('/logout',authController.logout);


app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard', failureRedirect: '/signin'}));


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}};
>>>>>>> 088b98e5ad17de1b03081fa8b7de74743fdaa14f
