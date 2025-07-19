import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ expensedashboard }) => {
  const saveFormData = (result) => {
    const newExpense = {
      ...result,
    };
    console.log(newExpense);
    expensedashboard(newExpense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm saveFormData={saveFormData} />
    </div>
  );
};

export default NewExpense;
