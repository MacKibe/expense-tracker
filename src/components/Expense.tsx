import { ExpenseCard } from "./ExpenseCard";
import { Capture_expense } from "./Capture_expense";
import "../App.css";
import { useState } from "react";
import addItem from "../assets/light_plus.svg"

export const Expense = (props) => {
// State of expenses
const [expenses, setExpenses] = useState(props.data);
const [showCapture, setShowCapture] = useState(false);

// Update the expenses
const addNewExpense = (expenseData) => {
  setExpenses([...expenses, expenseData]);
};

return (
  <div className="expense_panel">
    <button
      className="button add_item"
      onClick={() => setShowCapture(!showCapture)}
    >
      {showCapture ? "Close" : "Add Item"}
    </button>

    {showCapture && <Capture_expense addNewExpense={addNewExpense} />}

    <div className="expense_card">
      {/* Display from the newest addition */}
      {expenses
        .slice()
        .reverse()
        .map((item, index) => (
          <ExpenseCard key={index} item={item} />
        ))}
    </div>
  </div>
);
};