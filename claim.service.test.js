// claim.service.test.js
const ClaimService = require('../services/claim.service');

describe('ClaimService', () => {
  let service;

  beforeEach(() => {
    service = new ClaimService();
  });

  describe('createClaim', () => {
    it('should create a new claim', async () => {
      const mockClaim = {
        name: 'John Doe',
        policyNumber: '123456',
        claimType: 'auto',
        description: 'Car accident'
      };

      const claim = await service.createClaim(mockClaim);

      expect(claim).toEqual(mockClaim);
    });
  });
});
