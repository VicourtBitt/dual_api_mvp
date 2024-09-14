const express = require('express');
const { Router } = require('express');
const cors = require('cors');
const corsConfig = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true
}
const UPRoutes = require('./UPRoutes.js');

const routes = Router();
routes.get('/preferences', (req, res) => {
    res.send('MVP GC24 NoSQL with MongoDB');
})

module.exports = appNoSQL => {
    appNoSQL.use(
        express.json(),
        cors(corsConfig),
        routes,
        UPRoutes
    )
}