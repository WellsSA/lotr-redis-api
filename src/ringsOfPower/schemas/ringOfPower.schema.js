import { Schema, model } from 'mongoose';

const RingOfPowerSchema = new Schema(
  {
    name: { type: String },
    power: { type: String },
  },
  { timestamps: true }
);

export default model('RingOfPower', RingOfPowerSchema);
