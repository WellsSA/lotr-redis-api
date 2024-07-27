import { Schema, model } from "mongoose";

const RingOfPowerSchema = new Schema(
  {
    name: { type: String, required: true },
    power: { type: String, required: true },
  },
  { timestamps: true }
);

export default model("RingOfPower", RingOfPowerSchema);
