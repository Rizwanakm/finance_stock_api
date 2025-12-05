import Stock from "../models/stock.model";

export const createStock = async (data: any) => {
  return await Stock.create(data);
};

export const getAllStocks = async () => {
  return await Stock.find();
};
