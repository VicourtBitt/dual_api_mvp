require('dotenv').config()
const { Sequelize } = require('sequelize')

const USER = process.env.SQL_USER
const PASSWORD = process.env.SQL_PASSWORD

const sequelize = new Sequelize('gc2024', USER, PASSWORD, {
    host: process.env.SQL_URI,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

sequelize.authenticate()
.then(() => {
    console.log('MVP GC24 MySQL - Connection has been established successfully.')
})
.catch(err => {
    console.error('Unable to connect to the database:', err)
})

module.exports = sequelize