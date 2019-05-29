var express = require("express");
// var path = require
var app = express();
var childProcess = require('child_process');
// var githubUsername = 'Donald'


app.post("/webhooks/github", function (req, res) {
    // var sender = req.body.sender;
    // var branch = req.body.ref;

 
    childProcess.execFile(__dirname + '/deploy.sh', function(err, stdout, stderr){
      if (err) {
       console.error(err);
       return res.sendStatus(500);
      }
      console.log(stdout)
      res.sendStatus(200);
    });

})

app.listen(5000, () => console.log('webhook worker listening on 5000'));
