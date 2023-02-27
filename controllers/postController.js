const Post = require('../models/Post');

const postController = async (req, res) => {
  const post = await Post.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.render('post', {
    Title: post.title,
    Desc: post.description,
    Image: post.image,
    Created_at: post.created_at,
    user: req.user,
    path: req.route.path,
  });
};

module.exports = postController;
