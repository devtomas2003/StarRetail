const express = require('express');
const routes = express.Router();

const Events = require('./Controllers/Events');
const Langs = require('./Controllers/Langs');

routes.get('/langs/:context/:lang', Langs.getLang);
routes.get('/homeData', Events.getHomeTicketsAndEvents);

module.exports = routes;