import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, setenteredTitle] = useState("");
  const [enteredAmount, setenteredAmount] = useState("");
  const [enteredDate, setenteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setenteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setenteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setenteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenses = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenses);
    setenteredTitle("");
    setenteredAmount("");
    setenteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-03-03"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
