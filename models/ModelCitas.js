import Sequelize from "sequelize";
import dataBase from "../config/conexionDatabase.js";

const Cita = dataBase.define('citas', {
        cita_id: {
            type: Sequelize.BIGINT(10),
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        fecha: {
            type: Sequelize.DATE
        },
        barbero: {
            type: Sequelize.STRING
        },
        nombreServicio: {
            type: Sequelize.STRING
        },
        descripcionServicio: {
            type: Sequelize.STRING
        },
        imgCliente: {
            type: Sequelize.STRING
        },
        direccionCliente: {
            type: Sequelize.STRING
        },
        valorServicio: {
            type: Sequelize.STRING
        },
    }, {
        timestamps: false,
        tableName: 'citas'
    }
)

export default Cita;