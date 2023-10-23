const express = require('express');
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('todolist', 'invitado', 'invitado', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
