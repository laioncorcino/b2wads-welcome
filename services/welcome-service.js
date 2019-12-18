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
      name: "Igor Assuncao",
      nickname: "Igor Bom / Igor Princeso",
      age: 23,
      team: "Afiliados",
      skills: ["Node.Js", "Python", "Docker"]
    }

    return newB
  }
}

module.exports = WelcomeService
