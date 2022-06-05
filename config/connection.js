const sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new sequelize(
    process.env.DB_NAME, 
    process.eventNames.DB_USER, 
    process.env.DB_PASSWORD, 
    {
    host: 'localhost',
    dialect: 'mysql',
    port: 3001
    }
);

module.exports = sequelize;