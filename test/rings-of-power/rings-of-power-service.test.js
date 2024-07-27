import { expect } from 'chai';
import sinon from 'sinon';
import ringsOfPowerService from '../../src/rings-of-power/rings-of-power-service.js';

describe('Rings of Power Service', function () {
  let redisClient;

  beforeEach(() => {
    redisClient = {
      lRange: sinon.stub(),
      rPush: sinon.stub(),
    };
  });

  describe('getRings', function () {
    it('should return an array of rings', async function () {
      const fakeRings = [
        JSON.stringify({ name: 'One Ring', power: 'Invisibility' }),
      ];
      redisClient.lRange.resolves(fakeRings);

      const rings = await ringsOfPowerService.getRings(redisClient);
      expect(rings).to.deep.equal([
        { name: 'One Ring', power: 'Invisibility' },
      ]);
    });
  });

  describe('addRing', function () {
    it('should add a ring successfully', async function () {
      const ring = { name: 'One Ring', power: 'Invisibility' };
      redisClient.rPush.resolves(1);

      await ringsOfPowerService.addRing(redisClient, ring);
      sinon.assert.calledWith(
        redisClient.rPush,
        sinon.match.string,
        JSON.stringify(ring)
      );
    });
  });
});
