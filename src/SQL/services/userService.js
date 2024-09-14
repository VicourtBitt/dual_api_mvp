const sequelize = require('../config/database.js');
const { UserInfo, UserRegister } = require('../models');

// Função que cria um novo usuário
const postUser = async (userData) => {
    const {
        cpf,
        name,
        age,
        gender,
        course,
        city,
        phone
    } = userData;

    // Cria um novo registro de usuário
    const userRegister = await UserRegister.create({
        cpf
    });

    // Pega o ID do registro de usuário
    const registerId = userRegister.id;

    // Cria um novo registro de informações do usuário
    const userInfo = await UserInfo.create({name, age, gender, course, city, phone, userRegisterId: registerId});
    return { userRegister, userInfo };
}

const getUser = async (id) => {
    const user = await UserInfo.findByPk(id, { include: UserRegister });
    return user;
}

const getAllUsers = async () => {
    const users = await UserInfo.findAll({ include: UserRegister });
    return users;
}

const deleteUser = async (id) => {
    const user = await UserInfo.findByPk(id);
    await user.destroy();
}

module.exports = { 
    postUser,
    getUser,
    getAllUsers,
    deleteUser
}