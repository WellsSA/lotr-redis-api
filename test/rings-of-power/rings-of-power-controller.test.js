import { expect } from 'chai';
import sinon from 'sinon';
import supertest from 'supertest';
import ringsOfPowerService from '../../src/rings-of-power/rings-of-power-service.js';
import app from '../../src/app.js';

const request = supertest(app);

describe('Ring of Powers Controller', function () {
  let redisClient;

  beforeEach(() => {
    redisClient = {};
    sinon.stub(ringsOfPowerService, 'getRings');
    sinon.stub(ringsOfPowerService, 'addRing');
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('GET /api/rings', function () {
    it('should return all rings', async function () {
      const rings = [{ name: 'One Ring', power: 'Invisibility' }];
      ringsOfPowerService.getRings.resolves(rings);

      const res = await request.get('/api/rings');
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal(rings);
    });
  });

  describe('POST /api/rings', function () {
    it('should add a new ring', async function () {
      const newRing = { name: 'One Ring', power: 'Invisibility' };
      ringsOfPowerService.addRing.resolves();

      const res = await request
        .post('/api/rings')
        .send(newRing)
        .set('Content-Type', 'application/json');

      expect(res.status).to.equal(201);
      expect(res.body).to.deep.include({ message: 'Ring added successfully' });
    });
  });
});
