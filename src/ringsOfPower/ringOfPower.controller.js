import express from "express";
import ringsOfPowerService from "./ringOfPower.service.js";

const ringOfPowerController = () => {
  const router = express.Router();

  router.post("/rings", async (req, res) => {
    try {
      await ringsOfPowerService.createRing(req.body);
      res.status(201).json({ message: "Ring added successfully" });
    } catch (error) {
      console.error("Error adding ring:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  router.get("/rings", async (req, res) => {
    try {
      const rings = await ringsOfPowerService.findRings();
      res.json(rings);
    } catch (error) {
      console.error("Error fetching rings:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  router.get("/rings/:id", async (req, res) => {
    const ring = await ringsOfPowerService.findRingById(req.params.id);
    res.json(ring);
  });

  router.put("/rings/:id", async (req, res) => {
    try {
      await ringsOfPowerService.updateRing(req.params.id, req.body);
      res.json({ message: "Ring updated successfully" });
    } catch (error) {
      console.error("Error updating ring:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  router.delete("/rings/:id", async (req, res) => {
    try {
      await ringsOfPowerService.deleteRing(req.params.id);
      res.status(204).json({ message: "Ring deleted successfully" });
    } catch (error) {
      console.error("Error deleting ring:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return router;
};

export default ringOfPowerController;
