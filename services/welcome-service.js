const WelcomeService = {
  async welcome() {
    const newB = {
      nome: 'Victor Chiletto',
      cargo: 'Dev Jr',
      cargoReal: 'function(café): código',
      admissao: new Date('2020-04-06T10:00:00-03:00'),
    }

    return newB
  },
}

module.exports = WelcomeService
