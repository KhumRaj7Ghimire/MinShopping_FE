// Import Express
import express from "express";

// Import Express async handler
import asyncHandler from "express-async-handler";

// Import Product Modal
import Product from "../models/productModal.js";

// Initializing Express Roouter
const router = express.Router();

// @desc Fetch all products
// @route GET /api/products
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

// @desc Fetch Single Product
// @route GET /api/products/:id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default router;
