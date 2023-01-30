const express = require("express");
const app = express();
const router = express.Router();
const ClaimController = require("./claimController");

const claimController = new ClaimController();
app.use(express.json());

router.post("/ussd", (req, res) => claimController.handleUSSDClaim(req, res));
router.post("/sms", (req, res) => {
  console.log("req", req.body);

  claimController.handleSMSClaim(req, res);
});
router.post("/telegram", (req, res) =>
  claimController.handleTelegramClaim(req, res)
);

app.use("/claims", router);

module.exports = app;

const PORT = 5699;
const HOST = "0.0.0.0";
app.listen(PORT, HOST);
