const express = require("express");
const {
  getAllExpenses,
  createExpense,
  deleteExpense,
} = require("../controllers/expenses");
const router = express.Router();

// Routes
router.get("/", getAllExpenses);
router.post("/", createExpense);
router.delete("/:id", deleteExpense);

module.exports = router;
