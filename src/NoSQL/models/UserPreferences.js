const mongoose = require('mongoose');

const userPreferencesSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    userRegisterId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        default: [],
        required: true
    },
    interest: {
        type: Array,
        default: [],
        required: true
    }
})

const userPreferences = mongoose.model('userPreferences', userPreferencesSchema, 'userData');

module.exports = userPreferences;