const adminRoutes = require("express").Router();
const adminController = require("../app/controllers/admin.controller");
const withAuth = require("../app/middlewares/auth");

adminRoutes.post('/authenticate', adminController.authenticate)
adminRoutes.get('/listAll', withAuth, adminController.listAll)
adminRoutes.get('/car/getCar/:id', withAuth, adminController.getCarById)
adminRoutes.post('/car/new', withAuth, adminController.newCar)
adminRoutes.put('/car/updateCar/:id', withAuth, adminController.updateCar)
adminRoutes.delete('/car/remove/:id', withAuth, adminController.removeCar)

module.exports = adminRoutes