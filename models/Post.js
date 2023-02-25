const { DataTypes } = require('sequelize');
const db = require('../configs/db');

const Post = db.define(
  'posts',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      // allowNull defaults to true
    },
    image: {
      type: DataTypes.BLOB,
      // allowNull defaults to true
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    // Other model options go here
  }
);

// `db.define` also returns the model
console.log(Post === db.models.posts); // true

module.exports = Post;
