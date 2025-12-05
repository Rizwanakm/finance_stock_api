import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Finance Stock Market API",
      version: "1.0.0",
      description: "API for managing stock data",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // <- files containing annotations
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Application) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
