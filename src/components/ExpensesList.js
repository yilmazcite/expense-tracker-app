import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list-fallback">Found no expenses.</h2>;
  }
  //The list is rendered and the actual date is retrieved and displayed as the first item of the list.
  //It's because the local date is retrieved when the component is rendered for the very first time.
  //Since the 'id' is empty during the first render, the items object is filtered below.
  //So that the first render with the empty list will not be displayed:
  return (
    <ul className="expenses-list">
      {props.items
        .filter((expense) => {
          return expense.id !== "" ? (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ) : (
            ""
          );
        })
        .map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
    </ul>
  );
};

export default ExpensesList;
