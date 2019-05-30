const HealthCheckService = require("../services/healthcheck-service")

const HealthCheckController = {
  async check(req, res) {
    const status = await HealthCheckService.check()
    await res.status(200).json(status)
  }
}

module.exports = HealthCheckController
