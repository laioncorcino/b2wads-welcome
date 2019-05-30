module.exports = {
  async check(req, res) {
    await res.status(200).json({
      status: "ok"
    })
  }
}
