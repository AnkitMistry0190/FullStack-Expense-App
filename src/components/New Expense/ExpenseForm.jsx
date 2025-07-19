import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ saveFormData }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!enteredTitle.trim() || isNaN(enteredAmount) || !enteredDate) {
      alert("Please enter valid details");
      return;
    }

    const formData = {
      title: enteredTitle.trim(),
      amount: parseFloat(enteredAmount),
      date: new Date(enteredDate),
    };

    try {
      const response = await fetch("http://localhost:5000/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to save expense");
      }

      const result = await response.json();
      console.log("Expense saved:", result);

      saveFormData(result);

      // Reset form
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    } catch (error) {
      console.error("Error submitting expense:", error);
      alert("Failed to save expense. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense-container d-flex flex-wrap gap-3">
        <div className="new-expense-control flex-grow-1">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={(e) => setEnteredTitle(e.target.value)}
          />
        </div>
        <div className="new-expense-control flex-grow-1">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={(e) => setEnteredAmount(e.target.value)}
          />
        </div>
        <div className="new-expense-control flex-grow-1">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={(e) => setEnteredDate(e.target.value)}
          />
        </div>
      </div>
      <div className="actions mt-4 ">
        <button type="submit" className="btn btn-primary">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
