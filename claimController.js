const ClaimService = require('./ClaimService');
const claimService = new ClaimService();

const ClaimController = {
  handleUSSDClaim: async (req, res) => {
    const { phoneNumber, claimType, description } = req.body;
    try {
      await claimService.handleUSSDClaim(phoneNumber, claimType, description);
      res.send('Claim submitted successfully');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error submitting claim');
    }
  },
  handleSMSClaim: async (req, res) => {
    const { phoneNumber, claimType, description } = req.body;
    try {
      await claimService.handleSMSClaim(phoneNumber, claimType, description);
      res.send('Claim submitted successfully');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error submitting claim');
    }
  },
  handleTelegramClaim: async (req, res) => {
    const { chatId, claimType, description } = req.body;
    try {
      await claimService.handleTelegramClaim(chatId, claimType, description);
      res.send('Claim submitted successfully');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error submitting claim');
    }
  }
};

module.exports = ClaimController;
