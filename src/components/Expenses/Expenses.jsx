import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses, deleteExpense }) => {
  return (
    <div className="expenses">
      {expenses.map((eachExp) => {
        return (
          <ExpenseItem
            key={eachExp._id}
            _id={eachExp._id}
            title={eachExp.title}
            amount={eachExp.amount}
            date={new Date(eachExp.date)}
            deleteExpense={deleteExpense}
          />
        );
      })}
    </div>
  );
};

export default Expenses;
