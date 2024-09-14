require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.NOSQL_URI)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.log('error', error);
})

const db = mongoose.connection.useDb('infos');
const collection = db.collection('userData');

module.exports = collection;