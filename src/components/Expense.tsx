import { Expense_list } from "./Expense_list";
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
          {showCaptureExpenseComponent ? "Add Item" : "Add Item"}
        </button>
      )}
      {showCaptureExpenseComponent && (<Capture_expense onClose={handleCaptureExpenseClose} />)}
      <Expense_list />
    </div>
  );
};
