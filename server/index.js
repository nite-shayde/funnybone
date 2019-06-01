const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/user-route');
const messageRoute = require('./routes/message-route')
const contentRoute = require('./routes/content-route');
const { Users } = require('../database-mysql/index');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const cookieParse = require('cookie-parser');
const session = require('express-session');



const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cookieParse());
app.use(session({ 
  secret: 'your funny bone is not really on your elbow wink wink',
  resave: false,
  saveUninitialized: false
}));

// AUTH MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());
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

// const authenticate = ;
// add static assests
app.use(express.static(path.join(__dirname, '../client/dist')))


// ROUTES
app.use('/api/user', userRoute);
app.use('/api/message', messageRoute);
app.use('/api/content', contentRoute);


app.get('/login', (req, res) => {
  res.send("This is the login page");
})

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

const PORT = process.env.PORT || 8080

app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});