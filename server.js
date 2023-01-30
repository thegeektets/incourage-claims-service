const express = require("express");
const app = express();
const router = express.Router();
const ClaimController = require("./ClaimController");

router.post("/ussd", (req, res) => ClaimController.handleUSSDClaim(req, res));
router.post("/sms", (req, res) => ClaimController.handleSMSClaim(req, res));
router.post("/telegram", (req, res) =>
  ClaimController.handleTelegramClaim(req, res)
);

app.use("/claims", router);

module.exports = app;

const PORT = 3000;
const HOST = "0.0.0.0";
app.listen(PORT, HOST);
