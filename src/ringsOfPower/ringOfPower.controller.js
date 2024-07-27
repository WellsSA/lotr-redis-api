import express from "express";
import ringsOfPowerService from "./ringOfPower.service.js";

const ringOfPowerController = () => {
  const router = express.Router();

  router.post("/rings", async (req, res) => {
    await ringsOfPowerService.createRing(req.body);
    res.status(201).json({ message: "Ring added successfully" });
  });

  router.get("/rings", async (req, res) => {
    const rings = await ringsOfPowerService.findRings();
    res.json(rings);
  });

  router.get("/rings/:id", async (req, res) => {
    const ring = await ringsOfPowerService.findRingById(req.params.id);
    res.json(ring);
  });

  router.put("/rings/:id", async (req, res) => {
    await ringsOfPowerService.updateRing(req.params.id, req.body);
    res.json({ message: "Ring updated successfully" });
  });

  router.delete("/rings/:id", async (req, res) => {
    await ringsOfPowerService.deleteRing(req.params.id);
    res.status(204).json({ message: "Ring deleted successfully" });
  });

  return router;
};

export default ringOfPowerController;
