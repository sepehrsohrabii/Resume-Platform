const { DataTypes } = require('sequelize');
const db = require('../configs/db');

const MainInfo = db.define(
  'main_informations',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    jobTitle: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    image: {
      type: DataTypes.BLOB,
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
  }
);

// `db.define` also returns the model
console.log(MainInfo === db.models.main_informations); // true

module.exports = MainInfo;
