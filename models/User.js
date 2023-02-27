const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../configs/db');

const User = db.define(
  'users',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      // allowNull defaults to true
    },
    password: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    token: {
      type: DataTypes.STRING,
      defaultValue: '-',
    },
    token_used: {
      type: DataTypes.NUMBER,
      defaultValue: 0,
    },
  },
  {
    timestamps: false,
  }
);

User.verifyPassword = (user, pwd) => bcrypt.compareSync(pwd, user.password);
User.encryptPassword = async (myPlainTextPassword) => {
  const saltRounds = +process.env.SALT_ROUNDS || 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hash = await bcrypt.hashSync(myPlainTextPassword, salt);
  return hash;
};

module.exports = User;
