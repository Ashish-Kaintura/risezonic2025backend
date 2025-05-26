const express = require("express");
const connectDB = require("./config/db");
const serviceRoutes = require("./routes/services");
const blogeRoutes = require("./routes/blogs");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/services", serviceRoutes);
app.use("/api/blogs", blogeRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.send("Risezonic API is running");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
