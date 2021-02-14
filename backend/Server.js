const express = require("express");
const products = require("./data/products");

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.get("/hole", (req, res) => {
  res.send("API is hole...");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(5000, console.log("Server Running on port 5000"));
