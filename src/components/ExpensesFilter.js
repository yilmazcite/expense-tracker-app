import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const yearChangeHandler = (event) => {
    //console.log(event.target.value);
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value="Select a year">Year</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
