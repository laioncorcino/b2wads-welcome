const routes = require('express').Router()
const HealthCheckController = require('../controllers/healthcheck-controller')

routes.get('/', HealthCheckController.status)

module.exports = routes
