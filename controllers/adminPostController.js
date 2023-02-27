const Post = require('../models/Post');

const get = async (req, res) => {
  res.render('createPost', {
    flash: req.flash(),
    errors: [],
    user: req.user,
    path: req.route.path,
  });
};
const post = async (req, res) => {
  await Post.create({
    title: req.body.title,
    description: req.body.description,
    image: `http://localhost:4000/uploads/${req.file.filename}`,
    create_at: new Date(),
  });
  res.redirect('/dashboard');
};
module.exports = {
  get,
  post,
};
