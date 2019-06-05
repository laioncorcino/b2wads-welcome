var HttpStatus = require('http-status-codes');

const welcomeService = require('../services/welcome-service');


const WelcomeController = {
  async welcome(req, res) {
    
    /**
     * Implemente um retorno JSON asíncrono
     * com código 200, que chama o método welcome()
     * de services/welcome-service.js
     */

    res.status(HttpStatus.OK).json(await welcomeService.welcome());
  }
}

module.exports = WelcomeController
