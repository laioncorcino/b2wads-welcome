const HealthCheckService = {
  async check() {
    return await {
      status: "ok"
    }
  }
}

module.exports = HealthCheckService
