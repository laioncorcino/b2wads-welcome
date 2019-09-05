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

    const newB = {
      // Adicione propriedades aqui
      nome: "Isabella Cunha",
      idade: 23,
      curso: "Sistemas de Informacao",
      universidade: "UFF",
      periodo: "6",
    }

    return newB
  }
}

module.exports = WelcomeService
