const express = require('express');
const cors = require('cors');
const corsConfig = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true
}
const { Router } = require('express');
const userRoutes = require('./userRoutes.js');

const routes = Router();

routes.get('/infos', (req, res) => {
    res.send('MVP GC24 SQL with MySQL');
})

module.exports = appSQL => {
    appSQL.use(
        express.json(),
        cors(corsConfig),
        routes,
        userRoutes
    )
}