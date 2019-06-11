const WelcomeService = require("../../../services/welcome-service")

describe("WelcomeService", () => {
  describe("welcome()", () => {
    it("should return { status: 'ok' } ", async () => {
      const welcome = await WelcomeService.welcome()
      expect(welcome).toMatchObject({
        qualidade1: 'proatividade',
        qualidade2: 'inovacao',
        qualidade3: 'conhecimento',
      })
    })
  })
})

