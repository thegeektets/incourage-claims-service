class ClaimController {
  constructor() {
    this.claimService = new (require("./ClaimService"))();
  }

  async handleUSSDClaim(req, res) {
    if (!req.body) throw new Error("Body is missing from the request");

    const { phoneNumber, claimType, description } = req.body;

    if (!phoneNumber || !claimType || !description) {
      return res.status(400).send("Missing parameters");
    }

    try {
      await this.claimService.handleUSSDClaim(req, res);
      res.send("Claim submitted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error submitting claim");
    }
  }

  async handleSMSClaim(req, res) {
    if (!req.body) throw new Error("Body is missing from the request");

    const { phoneNumber, claimType, description } = req.body;

    if (!phoneNumber || !claimType || !description) {
      return res.status(400).send("Missing parameters");
    }

    try {
      await this.claimService.handleSMSClaim(req, res);
      res.send("Claim submitted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error submitting claim");
    }
  }

  async handleTelegramClaim(req, res) {
    if (!req.body) throw new Error("Body is missing from the request");

    const { chatId, claimType, description } = req.body;

    if (!chatId || !claimType || !description) {
      return res.status(400).send("Missing parameters");
    }

    try {
      await this.claimService.handleTelegramClaim(req, res);
      res.send("Claim submitted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error submitting claim");
    }
  }
}

module.exports = ClaimController;
