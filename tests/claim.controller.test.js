// claim.controller.test.js
const request = require('supertest');
const ClaimController = require('../claimController');
const ClaimService = require('../claimService');


describe('ClaimController', () => {
  let claimService;
  let app;

  beforeEach(() => {
    claimService = new ClaimService();
    const claimController = new ClaimController();
    app = require('../server');
  });

  describe('/ussd', () => {
    it('should handle a USSD claim', async () => {
      const spy = jest.spyOn(claimService, 'storeClaim');
      const response = await request(app)
        .post('/ussd')
        .send({
          phoneNumber: '+11234567890',
          claimType: 'accident',
          description: 'Test description',
        });
      expect(spy).toHaveBeenCalledWith('accident', '+11234567890', 'Test description');
      expect(response.statusCode).toBe(200);
      expect(response.text).toBe(
        'Thank you for your claim. Your claim type is accident and the claim description is Test description. Our team will get back to you soon.'
      );
    });
  });
});