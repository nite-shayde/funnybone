const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user-route');
const messageRoute = require('./routes/message-route')
const contentRoute = require('./routes/content-route');

const app = express();
app.use(bodyParser.json());

// add static assests

// ROUTES
app.use('/api/user', userRoute);
app.use('/api/message', messageRoute);
app.use('/api/content', contentRoute);

app.get('/', (req, res) => {
  console.log(req.method, req.url)
  res.send('here comes the home page...')
});

const PORT = process.env.PORT || 8080

app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});