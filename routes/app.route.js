const controller = require("../controllers/app.controller");
const routes = require("express").Router();


routes.get("/portfolioContent", controller.portfolioAppRoute);

module.exports = routes