const routes = require("express").Router();

const mainRoutes = require("./routes/main.routes")
const adminRoutes = require("./routes/admin.routes")

routes.use("/", mainRoutes)
routes.use("/admin", adminRoutes)

routes.use((req, res, next) => {
    res.status(404).send({pageError: 404})
})

module.exports = routes