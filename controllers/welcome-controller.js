const WelcomeService =  require('../services/welcome-service');

const WelcomeController = {
  async welcome(req, res) {
    const welcome = await WelcomeService.welcome()
    res.status(200).json(welcome)
    /**
     * Implemente um retorno JSON asíncrono
     * com código 200, que chama o método welcome()
     * de services/welcome-service.js
     */
  }
}

module.exports = WelcomeController
