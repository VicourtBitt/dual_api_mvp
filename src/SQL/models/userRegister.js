const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

// Criação da classe UserRegister, que define o registro do usuário
const UserRegister = sequelize.define('userRegister', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { tableName: "userRegister" });

module.exports = UserRegister;