class ClaimController {
  constructor() {
    this.claimService = new (require("./ClaimService"))();
  }

  async handleUSSDClaim(req, res) {
    try {
      const { phoneNumber, claimType, description } = req.body;
      await this.claimService.handleUSSDClaim(
        phoneNumber,
        claimType,
        description
      );
      res.send("Claim submitted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error submitting claim");
    }
  }

  async handleSMSClaim(req, res) {
    try {
      const { phoneNumber, claimType, description } = req.body;
      await this.claimService.handleSMSClaim(
        phoneNumber,
        claimType,
        description
      );
      res.send("Claim submitted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error submitting claim");
    }
  }

  async handleTelegramClaim(req, res) {
    try {
      const { chatId, claimType, description } = req.body;
      await this.claimService.handleTelegramClaim(
        chatId,
        claimType,
        description
      );
      res.send("Claim submitted successfully");
    } catch (error) {
      console.log(error);
      res.status(500).send("Error submitting claim");
    }
  }
}

module.exports = ClaimController;
