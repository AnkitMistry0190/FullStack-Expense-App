const Expense = require("../models/expenses");

// @desc    Get all expenses
// @route   GET /api/expenses
// @access  Public (or protected if you add auth)
const getAllExpenses = async (req, res) => {
  try {
    const expense = await Expense.find();
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};
// @desc    Create a single expense
// @route   POST /api/expenses
// @access  Public (or protected if you add auth)
const createExpense = async (req, res) => {
  const { title, amount, date } = req.body;
  try {
    const newExpense = new Expense({ title, amount, date });
    await newExpense.save();
    res.status(201).json(newExpense);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
    console.error(error);
  }
};

// @desc    Delete a single expense
// @route   DELETE /api/expenses/:id
// @access  Public (or protected if you add auth)
const deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedExpense = await Expense.findByIdAndDelete(id);
    if (!deletedExpense) {
      return res.status(404).json({ message: "Expense not found" });
    }
    res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("Delete Error:", error);
    res.status(500).json({ message: "Server error while deleting expense" });
  }
};

module.exports = {
  getAllExpenses,
  createExpense,
  deleteExpense,
};
