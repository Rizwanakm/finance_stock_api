import mongoose, { Schema, Document } from "mongoose";

export interface IStock extends Document {
  symbol: string;
  price: number;
  date: Date;
}

const StockSchema: Schema = new Schema({
  symbol: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.model<IStock>("Stock", StockSchema);
