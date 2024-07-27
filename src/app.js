import express from 'express';
import { createClient } from 'redis';
import dotenv from 'dotenv';
import ringsOfPowerController from './rings-of-power/rings-of-power-controller.js';

dotenv.config();

const app = express();
const redisClient = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
});

await redisClient.connect();

app.use(express.json());
app.use('/api/rings', ringsOfPowerController(redisClient));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
