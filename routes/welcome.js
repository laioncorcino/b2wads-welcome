const routes = require('express').Router()
const WelcomeController = require('../controllers/welcome-controller')

routes.get('/', WelcomeController.welcome)

module.exports = routes
