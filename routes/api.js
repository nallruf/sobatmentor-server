const routes = require('express').Router();
const apiController = require('../controllers/apiController');

routes.get('/landing', apiController.landing);

module.exports = routes;