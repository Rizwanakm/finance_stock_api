import { Request, Response } from "express";
import { createStock, getAllStocks } from "../services/stock.services";

export const addStock = async (req: Request, res: Response) => {
  const stock = await createStock(req.body);
  res.json(stock);
};

export const getStocks = async (req: Request, res: Response) => {
  const stocks = await getAllStocks();
  res.json(stocks);
};
