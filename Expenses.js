import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filteredData, setfilteredData] = useState("2020");

  const filterfunction = (dropdowndata) => {
    setfilteredData(dropdowndata);
  };

  const filteredExpense = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredData;
  });

  return (
    <div className="expenses">
      <ExpenseFilter
        onFilterpointer={filterfunction}
        onSelected={filteredData}
      />

      {filteredExpense.length === 0 && (
        <p style={{ color: "red" }}>No expenses Found</p>
      )}
      {filteredExpense.length > 0 &&
        filteredExpense.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  );
}
export default Expenses;
