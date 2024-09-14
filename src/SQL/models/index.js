const sequelize = require('../config/database.js');

const UserInfo = require('./userInfo.js');
const UserRegister = require('./userRegister.js');

// Relacionamento entre UserInfo e UserRegister
UserRegister.hasOne(UserInfo, {
    foreignKey: 'userRegisterId'
});

UserInfo.belongsTo(UserRegister, {
    foreignKey: 'userRegisterId'
});

module.exports = {
    sequelize,
    UserInfo,
    UserRegister
};