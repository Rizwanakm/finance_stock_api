import express from "express";
import cors from "cors";
import stockRoutes from "./routes/stock.routes";
import { setupSwagger } from "./swagger";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/stocks", stockRoutes);

// Swagger setup
setupSwagger(app);

export default app;
