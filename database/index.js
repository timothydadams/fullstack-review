const mongoose = require('mongoose');
//configure for heroku env
mongoose.connect(process.env.MONGODB); //'mongodb://localhost/fetcher'

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  ghRepoID: {type: Number, unique: true},
  fullName: String,
  description: String,
  ghUsername: String,
  link: String,
  rating: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (userRepo) => {
  var newRepo = new Repo({
    ghRepoID: userRepo.id,
    fullName: userRepo.full_name,
    description: userRepo.description,
    ghUsername: userRepo.username,
    link: userRepo.html_url,
    rating: userRepo.forks
  });

  newRepo.save((err, repo) => {
    if (err) return console.log(err);
    console.log('Repo added successfully!');
  });
};

let topRatings = (cb) => {
  //should return the top 25 repos with the highest rating (starcount)
  const query = Repo.find();
  query.collection(Repo.collection);
  query.sort({rating: 'desc'}) //.limit(25)
  query.exec(cb);
  //var stuff = Repo.find({}); //.sort({rating: 'desc'}).limit(25);
  //return stuff;
};

module.exports.save = save;
module.exports.topRatings = topRatings;