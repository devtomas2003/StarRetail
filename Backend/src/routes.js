const express = require('express');
const routes = express.Router();

const Events = require('./Controllers/Events');

routes.get('/homeData', Events.getHomeTicketsAndEvents);

module.exports = routes;