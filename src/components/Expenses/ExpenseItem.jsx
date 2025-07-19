import React, { useState } from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ _id, date, title, amount, deleteExpense }) => {
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="expense-item d-flex mb-4">
      <div className="expense-date">
        <div className="day fs-3">{day}</div>
        <div className="month">{month}</div>
        <div className="year">{year}</div>
      </div>
      <div className="expense-description p2 fs-2">{title}</div>
      <div className="expense-amount ms-auto p2">{amount}</div>
      <button className="delBtn" onClick={() => deleteExpense(_id)}>
        X
      </button>
    </div>
  );
};

export default ExpenseItem;
