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
      name: "Laion Corcino Faria",
      email: "laion.faria@b2wdigital.com",
      cel: "21 993460699",
      college: "Sistemas de Informação - UFF",
      job: "Software Developer Intern",
      like: ["Read", "Watch baskteball", "Play instruments"]
    }

    return newB
  }
}

module.exports = WelcomeService
