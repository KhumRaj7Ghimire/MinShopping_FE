// import Express
import express from "express";

// Import dot env
import dotenv from "dotenv";

// Console Color
import colors from "colors";

// DB Connection
import connectDB from "./config/db.js";

// Product Routes
import productRoutes from "./routes/productRoute.js";

// Error Handler
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

// dotenv config
dotenv.config();

// DB connection initialize
connectDB();

// Initializing Express
const app = express();

app.get("/", (req, res) => {
  res.send("API is runnings...");
});

// Product Routes
app.use("/api/products", productRoutes);

// Error Middleware
app.use(notFound);
app.use(errorHandler);

// Server Set Up
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.bold
  )
);
