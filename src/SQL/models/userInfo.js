const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

// Criação da classe UserInfo, que define as informações do usuário
const UserInfo = sequelize.define('userInfo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.TINYINT,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM("Masculino", "Feminino", "Não-Binário"),
        allowNull: false
    },
    course: {
        type: DataTypes.ENUM("Python", "Java", "Marketing e Design", "Gestão e Vendas"),
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        defaultValue: "Porto Alegre"
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    userRegisterId: {
        type: DataTypes.INTEGER,
        references: {
            model: "userRegister",
            key: "id"
        }
    }
}, { tableName: "userInfo" });

module.exports = UserInfo;