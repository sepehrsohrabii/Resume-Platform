const Sequelize = require('sequelize');

const db = new Sequelize('resume_platform_sql', 'admin', '46i0cqQD0tDB.1md', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = db;
