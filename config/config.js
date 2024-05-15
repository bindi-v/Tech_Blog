const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
const sequelize = process.env.PSQLDB_URL
  ? new Sequelize(process.env.PSQLDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      port: 5432
    });

module.exports = sequelize;  