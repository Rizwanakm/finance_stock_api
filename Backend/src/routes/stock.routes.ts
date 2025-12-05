import express from "express";
import { addStock, getStocks } from "../controllers/stock.controllers";

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Stock:
 *       type: object
 *       required:
 *         - symbol
 *         - price
 *       properties:
 *         symbol:
 *           type: string
 *           description: Stock symbol (e.g., AAPL)
 *         price:
 *           type: number
 *           description: Stock price
 *         date:
 *           type: string
 *           format: date
 *           description: Date of entry
 *       example:
 *         symbol: AAPL
 *         price: 190.5
 *         date: 2025-12-05
 */

/**
 * @swagger
 * /stocks/add:
 *   post:
 *     summary: Add a new stock
 *     tags: [Stocks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Stock'
 *     responses:
 *       200:
 *         description: Stock created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Stock'
 */
router.post("/add", addStock);

/**
 * @swagger
 * /stocks:
 *   get:
 *     summary: Get all stocks
 *     tags: [Stocks]
 *     responses:
 *       200:
 *         description: List of stocks
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Stock'
 */
router.get("/", getStocks);

export default router;
