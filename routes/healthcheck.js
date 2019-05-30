const routes = require("express").Router()
const HealthcheckController = require('../controllers/healthcheck-controller')

routes.use("/healthcheck", [
  routes.get("/", HealthcheckController.check)
])

module.exports = routes
  