// user.js
const Sequelize = require('sequelize');
const sequelize = require('./config');

const Tasks = sequelize.define('Tasks', {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
});

module.exports = Tasks;
