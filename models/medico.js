/**
 * @Autor: Quispe Torrez Ever
 * Version: 1.0
 * Laboratorio: 12
 * Date: 24/05/2024
 */

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Medico = sequelize.define('Medico', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especialidad: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Medico;
