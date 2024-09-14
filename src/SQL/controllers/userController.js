const sequelize = require('../config/database.js');
const userService = require("../services/userService.js");

const postUser = async (req, res) => {
    const userData = req.body;
    try {
        const user = await userService.postUser(userData);
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await userService.getUser(id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await userService.deleteUser(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    postUser,
    getUser,
    getAllUsers,
    deleteUser
}