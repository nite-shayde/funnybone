const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/user-route');
const messageRoute = require('./routes/message-route')
const contentRoute = require('./routes/content-route');
const { Users } = require('../database-mysql/index');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


const app = express();

// middleware
app.use(bodyParser.json());
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
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// add static assests
app.use(express.static(path.join(__dirname, '../client/dist')));

// ROUTES
app.use('/api/user', userRoute);
app.use('/api/message', messageRoute);
app.use('/api/content', contentRoute);


app.get('/', (req, res) => {
  console.log(req.method, req.url)
  res.send('here comes the home page...')
});

app.get('/login', (req, res) => {
  res.send("Invalid username or password");
})

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
    
  });

const PORT = process.env.PORT || 8080

app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});