import { ExpenseCard } from "./ExpenseCard";
import { Capture_expense } from "./Capture_expense";
import "../App.css";
import { useState } from "react";

export const Expense = () => {
  //
  // Handle showing the component.
  const [showCaptureExpenseComponent, setShowCaptureExpenseComponent] =
    useState(false);

  //
  // Hides button when clicked
  const [hideAddItemButton, setHideAddItemButton] = useState(true);

  //
  // Display the capture expense component and hides the add new item button.
  const handleClick = () => {
    setShowCaptureExpenseComponent(!showCaptureExpenseComponent);
    setHideAddItemButton(!hideAddItemButton);
  };

//   
// Closes the capture expense component and shows the button
 const handleCaptureExpenseClose = () => {
    setHideAddItemButton(true);
    setShowCaptureExpenseComponent(false);
 }

  return (
    <div className="expense_panel">
      {hideAddItemButton && (
        <button className="button add_item" onClick={handleClick}>
          Add Item
        </button>
      )}
      {showCaptureExpenseComponent && (<Capture_expense onClose={handleCaptureExpenseClose} />)}

      <h3>Expenses</h3>
      <ExpenseCard />
    </div>
  );
};
