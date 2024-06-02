/**
 * @Autor: Quispe Torrez Ever
 * Version: 1.0
 * Laboratorio: 12
 * Date: 24/05/2024
 */

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite'
});

module.exports = sequelize;
