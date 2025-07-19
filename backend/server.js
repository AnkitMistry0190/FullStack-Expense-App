const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const PORT = process.env.PORT || 5000;
const expenseRoutes = require("./routes/expenses");
const connectDB = require("./connectDb");

// Connections
dotenv.config();
connectDB();

// Middlewares
app.use(cors()); // Allow requests from frontend
app.use(express.json()); // Parse JSON request bodies

// API routes
app.use("/api/expenses", expenseRoutes);

//Listening Port
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
