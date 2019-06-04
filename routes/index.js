const routes = require('express').Router()
const HealthcheckRoutes = require('./healthcheck')
const WelcomeRoutes = require('./welcome')

routes.use('/healthcheck', HealthcheckRoutes)
routes.use('/welcome', WelcomeRoutes)

module.exports = routes
