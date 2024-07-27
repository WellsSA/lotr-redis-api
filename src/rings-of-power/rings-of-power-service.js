const RINGS_KEY = 'rings';

const getRings = async redisClient => {
  const rings = await redisClient.lRange(RINGS_KEY, 0, -1);
  return rings.map(JSON.parse);
};

const addRing = async (redisClient, ring) => {
  await redisClient.rPush(RINGS_KEY, JSON.stringify(ring));
};

export default {
  getRings,
  addRing,
};
