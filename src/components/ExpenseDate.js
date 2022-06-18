import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item-date">
      <div className="exp-item-month">{month}</div>
      <div className="exp-item-year">{year}</div>
      <div className="exp-item-day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
