const db = require('../configs/db');
const Post = require('../models/Post');

const importToDatabase = () => {
  Post.create();
};

importToDatabase();
