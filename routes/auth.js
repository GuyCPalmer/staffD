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
