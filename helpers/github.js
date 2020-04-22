const request = require('request');
//const config = require('../config.js');

let getReposByUsername = (username, cb) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.GH_TOKEN || config.TOKEN}`
    }
  };

  request(options, (error, response, body) => {
    if (error) {
      throw error;
    }
    if (response.statusCode == 200) {
      //save array of objects as JSON object
      const repos = JSON.parse(body);
      //call the save function in db index.js
      cb(null, repos);
    }
  });

};

module.exports.getReposByUsername = getReposByUsername;