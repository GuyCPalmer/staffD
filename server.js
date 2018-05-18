const express = require('express'),
    app = express(),
    passport = require('passport'),
    auth = require('./routes/auth'),
    cookieParser = require('cookie-parser'),
    cookieSession = require('cookie-session');

auth(passport);
app.use(passport.initialize());

app.use(cookieSession({
    name: 'session',
    keys: ['SECRECT KEY'],
    maxAge: 24 * 60 * 60 * 1000
}));
app.use(cookieParser());

app.get('/', (req, res) => {
    if (req.session.token) {
        //if logged in
        res.cookie('token', req.session.token);
        res.json({
            status: 'session cookie set'
        });
    } else {
        //if not logged in
        res.cookie('token', '');
        res.json({
            status: 'session cookie not set'
        });
    }
});

app.get('/logout', (req, res) => {
    req.logout();
    req.session = null;
    res.redirect('/');
});

app.get('/auth/google', passport.authenticate('google', {
    scope: ['https://www.googleapis.com/auth/userinfo.profile']
}));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    (req, res) => {
        console.log(req.user.token);
        req.session.token = req.user.token;
        res.redirect('/');
    }
);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
