require('dotenv').config();
const express = require('express');
const routes = require('./router');

const app = express();
const PORT = process.env.SQL_PORT
routes(app);

app.listen(PORT, () => {
    console.log(`SQL Server is running on port ${PORT}`);
})