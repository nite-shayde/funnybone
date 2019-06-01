const express = require('express');
const helpers = require('../../database-mysql/db-helpers');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Users } = require('../../database-mysql/index');

passport.use(new LocalStrategy(
  function(username, password, done) {
    Users.findOne({ where: { username: username } })
    .then(user => {
      if (!user) { 
        return done(null, false);
      }
      if (user.password !== password) {
         return done(null, false); 
      }
      return done(null, user);
    }).catch((err) => {
      return done(err);
    })
  }
));
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
 
passport.deserializeUser(function(id, done) {
  Users.findOne({ where: { id }}).then((user) => {
    done(null, user);
  }).catch(err => done(err, null));
 

});


router.get('/', (req, res) => {
  res.send("This is the login page");
})

router.post('/', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });


module.exports = { loginRoute: router, passport };