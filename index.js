var express = require('express');
var session = require('express-session');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var keys = require('./keys.js');

var app = express();

app.use(express.static(__dirname + '/public'));


app.use(session({secret: 'gypsy'}));

app.use(passport.initialize());

app.use(passport.session());




passport.use(new FacebookStrategy({
  clientID: keys.id,
  clientSecret: keys.key,
  callbackURL: 'http://localhost:3000/auth/facebook/callback'
}, function(token, refreshToken, profile, done) {
  return done(null, profile);
}));

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/me',
  failureRedirect: '/login'
}));

passport.serializeUser(function(dataToSerialize, done) {
    done(null, dataToSerialize);
});

passport.deserializeUser(function(dataFromSessionToPutOnReqDotUser, done) {
  done(null, dataFromSessionToPutOnReqDotUser);
});

app.get('/me', function(req, res) {
  res.send(req.user);
});

app.listen(3000, function(){
  console.log('server started successfully');
});
