const service = require('../services/welcome-service');


const WelcomeController = {
  async welcome(req, res) {
    
    /**
     * Implemente um retorno JSON asíncrono
     * com código 200, que chama o método welcome()
     * de services/welcome-service.js
     */

    await res.status(200).json(await service.welcome());
  }
}

module.exports = WelcomeController
