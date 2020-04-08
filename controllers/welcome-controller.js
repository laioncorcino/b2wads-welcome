const WelcomeService = require('../services/welcome-service')

const WelcomeController = {
  async welcome(_req, res) {
    res.json(await WelcomeService.welcome())
  },
}

module.exports = WelcomeController
