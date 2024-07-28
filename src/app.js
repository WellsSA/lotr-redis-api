import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import ringsOfPowerController from "./ringsOfPower/ringOfPower.controller.js";

dotenv.config();

const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
  }
};

const app = express();

mongoConnection();

app.use(express.json());
app.use(ringsOfPowerController());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
