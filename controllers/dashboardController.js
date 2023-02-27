const Post = require('../models/Post');

const dashboardController = async (req, res) => {
  const posts = await Post.findAll();
  res.render('dashboard', {
    user: req.user,
    path: req.route.path,
    posts,
  });
};

module.exports = dashboardController;
