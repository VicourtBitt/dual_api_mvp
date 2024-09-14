require('dotenv').config();
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.NOSQL_PORT
routes(app);

app.listen(PORT, () => {
    console.log(`NoSQL Server is running on port ${PORT}`);
})