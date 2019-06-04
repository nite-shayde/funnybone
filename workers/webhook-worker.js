const express = require('express');
// var path = require
const app = express();
const childProcess = require('child_process');
// var githubUsername = 'Donald'


app.post('/webhooks/github', (req, res) => {
  // var sender = req.body.sender;
  // var branch = req.body.ref;


  childProcess.execFile(`${__dirname}/deploy.sh`, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return res.sendStatus(500);
    }
    console.log(stdout);
    res.sendStatus(200);
  });
});

app.listen(5000, () => console.log('webhook worker listening on 5000'));
