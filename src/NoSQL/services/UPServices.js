const collection = require('../config/database2');
const userPreferences = require('../models/UserPreferences');

const createUserPreference = async (data) => {
    const { userRegisterId, username, skills, interest } = data;
    const userPreference = {
        userRegisterId,
        username,
        skills,
        interest
    }
    const result = await userPreferences.insertOne(userPreference);
    return result;
}

const getUsers = async () => {
    const result = await userPreferences.find();
    return result;
}

const getUserPreference = async (userRegisterId) => {
    const result = await collection.findOne({userRegisterId: userRegisterId});
    // console.log(userRegisterId);
    return result;
}

const updateUserPreference = async (userRegisterId, data) => {
    const result = await userPreferences.update({userRegisterId}, {$set: data});
    return result;
}

const deleteUserPreference = async (userRegisterId) => {
    const result = await userPreferences.findOneAndDelete({userRegisterId});
    return result;
}

module.exports = {
    createUserPreference,
    getUsers,
    getUserPreference,
    updateUserPreference,
    deleteUserPreference
}