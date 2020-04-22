const express = require('express');
let app = express();
const helper = require('../helpers/github');
const parser = require('body-parser');
const db = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));
app.use(parser.json());

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  var username = req.body.username;
  helper.getReposByUsername(username, (err, data) => {
    if (err) {
      throw (err);
    }
    //var destructuredRepos = [];
    for (var i = 0; i < data.length; i++) {
      db.save(data[i]);
    }
  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
  db.topRatings((err, data) => {
    if (err) return console.log(err);
    res.json(data);
  });
  //console.log(topRepos);
  //res.json(topRepos);
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

