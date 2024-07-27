import express from 'express';
import ringsOfPowerService from './ringOfPower.service.js';

const ringOfPowerController = (redisClient) => {
  const router = express.Router();

  router.post('/rings', async (req, res) => {
    await ringsOfPowerService.createRing(req.body);
    res.status(201).json({ message: 'Ring added successfully' });
  });

  router.get('/rings', async (req, res) => {
    try {
      const cacheKey = 'rings';
      const cachedRings = await redisClient.get(cacheKey);

      if (cachedRings) {
        return res.json(JSON.parse(cachedRings));
      }

      const rings = await ringsOfPowerService.findRings();
      await redisClient.set(cacheKey, JSON.stringify(rings), {
        EX: 3600, // Expira em 1 hora
      });

      res.json(rings);
    } catch (error) {
      console.error('Error fetching rings:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  // Nova rota que não usa Redis
  router.get('/rings/without-redis', async (req, res) => {
    try {
      const rings = await ringsOfPowerService.findRings();
      res.json(rings);
    } catch (error) {
      console.error('Error fetching rings:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.get('/rings/:id', async (req, res) => {
    const ring = await ringsOfPowerService.findRingById(req.params.id);
    res.json(ring);
  });

  router.put('/rings/:id', async (req, res) => {
    await ringsOfPowerService.updateRing(req.params.id, req.body);
    res.json({ message: 'Ring updated successfully' });
  });

  router.delete('/rings/:id', async (req, res) => {
    await ringsOfPowerService.deleteRing(req.params.id);
    res.status(204).json({ message: 'Ring deleted successfully' });
  });

  return router;
};

export default ringOfPowerController;
