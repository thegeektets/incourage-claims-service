// claim.controller.test.js
const request = require('supertest');
const app = require('../app');
const ClaimController = require('../controllers/claim.controller');
const claimService = require('../services/claim.service');

describe('ClaimController', () => {
  let controller;

  beforeEach(() => {
    controller = new ClaimController(claimService);
  });

  describe('createClaim', () => {
    it('should return a 201 status code', async () => {
      const mockClaim = {
        name: 'John Doe',
        policyNumber: '123456',
        claimType: 'auto',
        description: 'Car accident'
      };

      claimService.createClaim = jest.fn().mockResolvedValue();

      const response = await request(app)
        .post('/claims')
        .send(mockClaim);

      expect(response.status).toBe(201);
      expect(claimService.createClaim).toHaveBeenCalledWith(mockClaim);
    });

    it('should return a 400 status code if the request is invalid', async () => {
      const response = await request(app)
        .post('/claims')
        .send({});

      expect(response.status).toBe(400);
    });
  });
});

