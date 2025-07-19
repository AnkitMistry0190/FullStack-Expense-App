import React, { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/New Expense/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/expenses");
        const data = await response.json();
        console.log(data);
        setExpenses(data);
      } catch (error) {
        console.error("HTTP request failed", error);
      }
    };
    fetchExpenses();
  }, []);

  const deleteExpense = async (_id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/expenses/${_id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete expense");
      }

      setExpenses((prev) => prev.filter((eachExp) => eachExp._id !== _id));
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  const expensedashboard = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="app">
      <h1 className="text-center pt-3">Expense App</h1>
      <NewExpense expensedashboard={expensedashboard} />
      <Expenses expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
};

export default App;
