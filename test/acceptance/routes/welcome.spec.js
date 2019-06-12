const request = require("supertest")

const app = require("../../../app")

describe("Welcome test", () => {
  describe("GET /welcome", () => {
    let res = undefined

    beforeAll(async () => {
      res = await request(app).get("/welcome")
    })

    it("should return 200", () => {
      expect(res.status).toBe(200)
    })

    it("should res.body have qualidade: [proatividade, inovacao, conhecimento]", () => {
      expect(res.body.qualidade).toContain("proatividade")
      expect(res.body.qualidade).toContain("inovacao")
      expect(res.body.qualidade).toContain("conhecimento")
    })
  })
})