import express from "express";
import ringsOfPowerService from "./ringsOfPower.service.js";

const ringOfPowerController = (redisClient) => {
  const router = express.Router();

  router.get("/rings", async (req, res) => {
    const rings = await ringsOfPowerService.getRings(redisClient);
    res.json(rings);
  });

  router.post("/rings", async (req, res) => {
    const ring = req.body;
    await ringsOfPowerService.addRing(redisClient, ring);
    res.status(201).json({ message: "Ring added successfully" });
  });

  router.get("/rings/:id", async (req, res) => {
    const id = req.params.id;
    const ring = await ringsOfPowerService.getRingById(redisClient, id);
    res.json(ring);
  });

  router.put("/rings/:id", async (req, res) => {
    const id = req.params.id;
    const ring = req.body;
    await ringsOfPowerService.updateRing(redisClient, id, ring);
    res.json({ message: "Ring updated successfully" });
  });

  router.delete("/rings/:id", async (req, res) => {
    const id = req.params.id;
    await ringsOfPowerService.deleteRing(redisClient, id);
    res.status(204).json({ message: "Ring deleted successfully" });
  });

  return router;
};

export default ringOfPowerController;
