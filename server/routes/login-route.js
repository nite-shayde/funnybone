const express = require('express');

const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Users } = require('../../database-mysql/index');

/**
 * This middleware takes an user and checks to see if inputted
 * password matches the password in the database
 */
passport.use(new LocalStrategy(
  ((username, password, done) => {
    Users.findOne({ where: { username } })
      .then((user) => {
        if (!user) {
          return done(null, false);
        }
        if (user.password !== password) {
          return done(null, false);
        }
        return done(null, user);
      }).catch(err => done(err));
  })
));

/**
 * The following 2 middleware's deserialize and serialize the users password
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  Users.findOne({ where: { id } }).then((user) => {
    done(null, user);
  }).catch(err => done(err, null));
});


router.get('/', (req, res) => {
  res.send('This is the login page');
});

/**
 * This route redirects you to the login page on a failed password
 */
router.post('/',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });


module.exports = { loginRoute: router, passport };
