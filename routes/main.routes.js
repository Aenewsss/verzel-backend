const mainRoutes = require("express").Router();

const mainController = require("../app/controllers/main.controller");

mainRoutes.get('/listAll', mainController.listAll)
mainRoutes.get('/car/:id', mainController.getCarById)

module.exports = mainRoutes