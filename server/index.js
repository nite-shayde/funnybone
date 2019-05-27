const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(req.method, req.url)
});

const PORT = process.env.port || 8080

app.listen(PORT, () => { console.log(`listening on port ${PORT}`)});