const WelcomeService = require("../../../services/welcome-service")

describe("WelcomeService", () => {
  describe("welcome()", () => {
    it("should return { qualidade: [proatividade, inovacao, conhecimento] } ", async () => {
      const welcome = await WelcomeService.welcome()
      expect(welcome).toMatchObject({
        qualidade: ['proatividade', 'inovacao', 'conhecimento']
      })
    })
  })
})

