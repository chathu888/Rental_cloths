require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware - only once each
app.use(cors()); // Remove manual CORS headers if using this
app.use(express.json());

// Debugging logs
console.log("Current directory:", __dirname);
console.log("Product.js path:", path.join(__dirname, "models", "Product.js"));
console.log(
  "Product.js exists:",
  require("fs").existsSync(path.join(__dirname, "models", "Product.js"))
);

// Routes
const productsRouter = require("./routes/products");
const rentalsRouter = require("./routes/rentals");
app.use("/api/products", productsRouter);
app.use("/api/rentals", rentalsRouter);

// Basic route
app.get("/", (req, res) => {
  res.send("Style Rentals API");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
