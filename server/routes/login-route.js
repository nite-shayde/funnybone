const express = require('express');

const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Users } = require('../../database-mysql/index');

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
  }),
));
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

router.post('/',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });


module.exports = { loginRoute: router, passport };
