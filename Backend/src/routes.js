const express = require('express');
const routes = express.Router();

const Events = require('./Controllers/Events');
const Langs = require('./Controllers/Langs');

routes.get('/langs/:context/:lang', Langs.getLang);
routes.get('/homeData', Events.getHomeTicketsAndEvents);
routes.get('/printTickets', Events.printTickets);
routes.use('/templates', express.static(__dirname + '/templates'));

module.exports = routes;