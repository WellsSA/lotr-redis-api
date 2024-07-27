import express from 'express';
import mongoose from 'mongoose';
import { createClient } from 'redis';
import dotenv from 'dotenv';
import ringsOfPowerController from './ringsOfPower/ringOfPower.controller.js';

dotenv.config();

const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error.message);
  }
};

const redisConnection = async () => {
  const redisClient = createClient({
    url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
  });

  try {
    await redisClient.connect();
    console.log('Connected to Redis');
  } catch (error) {
    console.error('Error connecting to Redis', error.message);
  }
};

const app = express();

mongoConnection();
redisConnection();

app.use(express.json());
app.use(ringsOfPowerController());

//app.use("/api/rings", ringsOfPowerController(redisClient));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
