const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRoute = require('./routes/user-route');
const messageRoute = require('./routes/message-route')
const contentRoute = require('./routes/content-route');
const { loginRoute, passport } = require('./routes/login-route')
const cookieParse = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan')



const app = express();
// MIDDLEWARE

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParse());
app.use(session({
  secret: 'your funny bone is not really on your elbow wink wink',
  resave: false,
  saveUninitialized: false
}));
app.use(morgan());

// AUTH MIDDLEWARE
app.use(passport.initialize());
app.use(passport.session());



app.get('/', (req, res, next) => {
  if (req.isAuthenticated()) {  
    next();
  } else {
    res.redirect('/login');
  }
})

const verifySession =  (req, res, next) => {
  if (req.isAuthenticated()) {
    res.redirect('/');
  } else {
    next();
  }
}

app.get('/login', verifySession);

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});



app.use(express.static(path.join(__dirname, '../client/dist')))


// ROUTES
app.use('/api/user', userRoute);
app.use('/api/message', messageRoute);
app.use('/api/content', contentRoute);
app.use('/login', loginRoute);




const PORT = process.env.PORT || 8080

app.listen(PORT, () => { console.log(`listening on port ${PORT}`) });