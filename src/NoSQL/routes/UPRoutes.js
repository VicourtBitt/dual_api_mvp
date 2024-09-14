const { Router } = require('express');
const UPController = require('../controller/UPController');

const routes = Router();

routes.get('/preferences/get', UPController.getUsers);
routes.get('/preferences/get/:userRegisterId', UPController.getUserPreference);
routes.delete('/preferences/delete/:userRegisterId', UPController.deleteUserPreference);

module.exports = routes;