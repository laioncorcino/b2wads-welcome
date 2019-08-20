const WelcomeService = {
  async welcome() {
    /**
     *
     * NewB é como chamamos os novos membros do time.
     *
     * Saiba mais sobre nosso processo de recrutamento em:
     * https://medium.com/@jorgemallet/como-a-b2w-digital-recruta-b633634c5e1b
     *
     * Modifique os valores de `newB` abaixo ↓
     * implemente algumas propriedades a esse objeto
     *
     */

    const cliente = {
      nome: "Raphael",
      sobrenome: "Fleury",
      idade: 24,
      cargo: "estagiario"
    };

    return cliente;
  }
};

module.exports = WelcomeService;
