import express from 'express';
import ringsOfPowerService from './rings-of-power-service.js';

const ringsOfPowerController = redisClient => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const rings = await ringsOfPowerService.getRings(redisClient);
    res.json(rings);
  });

  router.post('/', async (req, res) => {
    const ring = req.body;
    await ringsOfPowerService.addRing(redisClient, ring);
    res.status(201).json({ message: 'Ring added successfully' });
  });

  return router;
};

export default ringsOfPowerController;
