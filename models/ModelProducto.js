import Sequelize from "sequelize";
import dataBase from "../config/conexionDatabase.js";

const Producto = dataBase.define('productos', {
  producto_id: {
    type: Sequelize.BIGINT(10),
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: Sequelize.STRING
  },
  descripcion: {
    type: Sequelize.STRING
  },
  valor: {
    type: Sequelize.INTEGER
  },
  cantidad: {
    type: Sequelize.INTEGER
  },
  imagenProducto: {
    type: Sequelize.STRING
  }
})

export default Producto