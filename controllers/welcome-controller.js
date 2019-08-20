const {welcome} = require("../services/welcome-service");
const WelcomeController = {
  async welcome(req, res) {
    client = await welcome();

    return res.status(200).send(client);

    /**
     * Implemente um retorno JSON asíncrono
     * com código 200, que chama o método welcome()
     * de services/welcome-service.js
     */
  }
};

module.exports = WelcomeController;
