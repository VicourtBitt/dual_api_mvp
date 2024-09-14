const UPServices = require('../services/UPServices');

const createUserPreference = async (req, res) => {
    try {
        const result = await UPServices.createUserPreference(req.body);
        res.status(200).json({msg: result});
    } catch (error) {
        res.status(400).json({'error': error.message});
    }
}

const getUsers = async (req, res) => {
    try {
        const result = await UPServices.getUsers();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({'error': error.message});
    }
}

const getUserPreference = async (req, res) => {
    try {
        const result = await UPServices.getUserPreference(parseInt(req.params.userRegisterId));
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({'error': error.message});
    }
}

const updateUserPreference = async (req, res) => {
    try {
        const result = await UPServices.updateUserPreference(parseInt(req.params.userRegisterId), req.body);
        res.status(200).json({msg: result});
    } catch (error) {
        res.status(400).json({'error': error.message});
    }
}

const deleteUserPreference = async (req, res) => {
    try {
        const result = await UPServices.deleteUserPreference(parseInt(req.params.userRegisterId));
        res.status(200).json({msg: result});
    } catch (error) {
        res.status(400).json({'error': error.message});
    }
}

module.exports = {
    createUserPreference,
    getUsers,
    getUserPreference,
    updateUserPreference,
    deleteUserPreference
}