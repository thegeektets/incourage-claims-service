const TelegramBot = require("node-telegram-bot-api");
const twilio = require("twilio");
const admin = require("firebase-admin");

let defaultApp = null;
try {
  defaultApp = admin.app();
} catch (error) {
  defaultApp = null;
}

if (!defaultApp) {
  admin.initializeApp({
    credential: admin.credential.cert(
      require("./incourage-claims-service-85cdbe0ada25.json")
    ),
    databaseURL: "https://incourage-claims-service.firebaseio.com",
  });
}
class ClaimService {
  constructor() {
    this.db = admin.firestore();
    let token = "";
    let accountSid = "";
    let authToken = "";

    // this.telegramBot = new TelegramBot(token, { polling: true });
    // this.twilioClient = twilio(accountSid, authToken);
  }
  async storeClaim(claimType, phoneNumber, description) {
    try {
      const claimRef = this.db.collection("claims").doc();
      await claimRef.set({
        id: claimRef.id,
        type: claimType,
        phoneNumber: phoneNumber,
        description: description,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
      throw new Error("Error storing claim");
    }
  }
  // other methods

  async handleUSSDClaim(req, res) {
    const { phoneNumber, claimType, description } = req.body;
    try {
      await this.storeClaim(claimType, phoneNumber, description);
      res.send(
        `Thank you for your claim. Your claim type is ${claimType} and the claim description is ${description}. Our team will get back to you soon.`
      );
    } catch (error) {
      console.log(error);
      // error handling
    }
  }

  async handleTelegramClaim(req, res) {
    const { claimType, description, chatId, phoneNumber } = req.body;
    try {
      await this.storeClaim(claimType, phoneNumber, description);
      // this.telegramBot.sendMessage(
      //   chatId,
      //   `Thank you for your claim. Your claim type is ${claimType} and the claim description is ${description}. Our team will get back to you soon.`
      // );
    } catch (error) {
      console.log(error);
      // error handling
    }
  }

  async handleSMSClaim(req, res) {
    const { phoneNumber, claimType, description } = req.body;
    try {
      // send sms using twilio
      // const message = await twilioClient.messages.create({
      //   to: phoneNumber,
      //   from: "+11234567890",
      //   body: `Thank you for your claim. Your claim type is ${claimType} and the claim description is ${description}. Our team will get back to you soon.`,
      // });
      await this.storeClaim(claimType, phoneNumber, description);
      console.log(message.sid);
      res.send(
        `Thank you for your claim. Your claim type is ${claimType} and the claim description is ${description}. Our team will get back to you soon.`
      );
    } catch (error) {
      console.log(error);
      // error handling
    }
  }
}

module.exports = ClaimService;
