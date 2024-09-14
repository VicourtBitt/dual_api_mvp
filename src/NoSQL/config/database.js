require('dotenv').config();
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.NOSQL_URI);
await client.connect();

client.on('error', (error) => {
    console.error(error);
})

client.on('connection', () => {
    console.log('Connected to MongoDB');
})

const dbName = 'infos'
const collectionName = 'userData'

const db = client.db(dbName);
const collection = db.collection(collectionName);

module.exports = collection;