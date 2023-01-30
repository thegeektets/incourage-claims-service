const express = require('express');
const app = express();
const router = express.Router();
const ClaimController = require('./ClaimController');

router.post('/ussd', ClaimController.handleUSSDClaim);
router.post('/sms', ClaimController.handleSMSClaim);
router.post('/telegram', ClaimController.handleTelegramClaim);

app.use('/claims', router);


