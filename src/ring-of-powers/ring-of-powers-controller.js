import express from 'express';
import ringOfPowersService from './ring-of-powers-service.js';

const ringOfPowersController = redisClient => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const rings = await ringOfPowersService.getRings(redisClient);
    res.json(rings);
  });

  router.post('/', async (req, res) => {
    const ring = req.body;
    await ringOfPowersService.addRing(redisClient, ring);
    res.status(201).json({ message: 'Ring added successfully' });
  });

  return router;
};

export default ringOfPowersController;
