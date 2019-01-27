const Post = require('../models/post');

module.exports = (app) => {
  //CREATE
  app.post('/posts/new', (req, res) => {
    //INSTANTIATE INSTANCE OF  POST MODEL
    const post = new Post(req.body);

    //Save instance of post model to db
    post.save((err, post) => {
      //redirect to the root
      return res.redirect(`/`);
    })
  });
};
