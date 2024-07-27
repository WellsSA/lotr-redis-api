import Ring from "./ringOfPower.model.js";

const createRing = async (ring) => {
  const newRing = new Ring(ring);
  await newRing.save();
};

const findRings = async () => {
  const rings = await Ring.find();
  return rings;
};

const findRingById = async (id) => {
  const ring = await Ring.findById(id);
  return ring;
};

const updateRing = async (id, ring) => {
  const updatedRing = await Ring.findByIdAndUpdate(id, ring, { new: true });
  return updatedRing;
};

const deleteRing = async (id) => {
  await Ring.findByIdAndDelete(id);
};

export default {
  createRing,
  findRings,
  findRingById,
  updateRing,
  deleteRing,
};
