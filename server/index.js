/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParse = require('cookie-parser');
const session = require('express-session');
const userRoute = require('./routes/user-route');
const messageRoute = require('./routes/message-route');
const contentRoute = require('./routes/content-route');
const { loginRoute, passport } = require('./routes/login-route');

const app = express();
// MIDDLEWARE

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParse());
app.use(session({
  secret: 'your funny bone is not really on your elbow wink wink',
  resave: false,
  saveUninitialized: false,
}));

// AUTH MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
});

/**
 * This function checks to make sure user is aunthenticated
 * and isn't redirected to a login/signup page every refresh
 */
const verifySession = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect('/');
  } else {
    next();
  }
};

app.get('/login', verifySession);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});


app.use(express.static(path.join(__dirname, '../client/dist')));


// ROUTES
app.use('/api/user', userRoute);
app.use('/api/message', messageRoute);
app.use('/api/content', contentRoute);
app.use('/login', loginRoute);


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => { console.log(`listening on port ${PORT}`); });
