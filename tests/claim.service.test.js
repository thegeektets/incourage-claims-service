const ClaimService = require('../claimService');
const telegramBot = require('node-telegram-bot-api');
const twilio = require('twilio');

jest.mock('node-telegram-bot-api');
jest.mock('twilio');

describe('ClaimService', () => {
  let claimService;
  let twilioClient;
  let telegramBotInstance;

  beforeEach(() => {
    telegramBotInstance = {
      sendMessage: jest.fn()
    };
    telegramBot.mockImplementation(() => telegramBotInstance);
    twilioClient = {
      messages: {
        create: jest.fn()
      }
    };
    twilio.mockImplementation(() => twilioClient);

    claimService = new ClaimService();
  });

  describe('handleSMSClaim', () => {
    it('should store the claim and send an sms to the user', async () => {
      twilioClient.messages.create.mockResolvedValue({ sid: 'message_sid' });

      const req = {
        body: {
          phoneNumber: '+11234567890',
          claimType: 'type1',
          description: 'description1'
        }
      };
      const res = {
        send: jest.fn()
      };

      await claimService.handleSMSClaim(req, res);

      expect(twilioClient.messages.create).toHaveBeenCalledWith({
        to: '+11234567890',
        from: '+11234567890',
        body: 'Thank you for your claim. Your claim type is type1 and the claim description is description1. Our team will get back to you soon.'
      });
      expect(res.send).toHaveBeenCalledWith(
        'Thank you for your claim. Your claim type is type1 and the claim description is description1. Our team will get back to you soon.'
      );
    });
  });

  describe('handleTelegramClaim', () => {
    it('should store the claim and send a message to the telegram user', async () => {
      const req = {
        body: {
          claimType: 'type1',
          description: 'description1',
          chatId: '12345',
          phoneNumber: '+11234567890'
        }
      };
      const res = {};

      await claimService.handleTelegramClaim(req, res);

      expect(telegramBotInstance.sendMessage).toHaveBeenCalledWith(
        '12345',
        'Thank you for your claim. Your claim type is type1 and the claim description is description1. Our team will get back to you soon.'
      );
    });
  });
});
