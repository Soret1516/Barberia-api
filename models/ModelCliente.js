import Sequelize from "sequelize";
import dataBase from "../config/conexionDatabase.js";

const Cliente = dataBase.define('clientes', {
  cliente_id: {
    type: Sequelize.BIGINT(10),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  documento: {
    type: Sequelize.STRING
  },
  nombre: {
    type: Sequelize.STRING
  },
  apellido: {
    type: Sequelize.STRING
  },
  telefono: {
    type: Sequelize.STRING
  },
  correo: {
    type: Sequelize.STRING
  },
  barrio: {
    type: Sequelize.STRING
  },
  direccion: {
    type: Sequelize.STRING
  },
  foto: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false,
  tableName: 'clientes'
})

export default Cliente