import { ExpenseCard } from "./ExpenseCard";
import { Capture_expense } from "./Capture_expense";
import "../App.css";
import { useState } from "react";

export const Expense = () => {
  //
  // Dummy data.
  const data = [
    {
      itemName: "BusFare",
      itemAmount: 900,
      itemCategory: "Mandatory",
      itemDate: "27-08-2001",
      itemDescription: "Transport",
    },
    {
      itemName: "Rent",
      itemAmount: 9000,
      itemCategory: "Mandatory",
      itemDate: "31-08-2002",
      itemDescription: "Rent",
    },
    {
      itemName: "Chama",
      itemAmount: 500,
      itemCategory: "Savings",
      itemDate: "01-08-2003",
      itemDescription: "Contribution",
    },
    {
      itemName: "Etica MMF",
      itemAmount: 10900,
      itemCategory: "Savings",
      itemDate: "27-08-2004",
      itemDescription: "Contribution",
    },
    {
      itemName: "Creed",
      itemAmount: 6000,
      itemCategory: "Non-essential",
      itemDate: "01-08-2005",
      itemDescription: "Colgne",
    },
    {
      itemName: "Hustle Fund",
      itemAmount: 973,
      itemCategory: "Debt",
      itemDate: "27-08-2006",
      itemDescription: "Contribution",
    },
    {
      itemName: "BusFare",
      itemAmount: 900,
      itemCategory: "Mandatory",
      itemDate: "27-08-2007",
      itemDescription: "Transport",
    },
    {
      itemName: "Rent",
      itemAmount: 9000,
      itemCategory: "Mandatory",
      itemDate: "31-08-2008",
      itemDescription: "Rent",
    },
    {
      itemName: "Chama",
      itemAmount: 500,
      itemCategory: "Savings",
      itemDate: "01-08-2009",
      itemDescription: "Contribution",
    },
    {
      itemName: "Etica MMF",
      itemAmount: 10900,
      itemCategory: "Savings",
      itemDate: "27-08-2010",
      itemDescription: "Contribution",
    },
    {
      itemName: "Creed",
      itemAmount: 6000,
      itemCategory: "Non-essential",
      itemDate: "01-08-2011",
      itemDescription: "Colgne",
    },
    {
      itemName: "Hustle Fund",
      itemAmount: 973,
      itemCategory: "Debt",
      itemDate: "27-08-2012",
      itemDescription: "Contribution",
    },
  ];
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
  };

  return (
    <div className="expense_panel">
      {hideAddItemButton && (
        <button className="button add_item" onClick={handleClick}>
          Add Item
        </button>
      )}
      {showCaptureExpenseComponent && (
        <Capture_expense onClose={handleCaptureExpenseClose} />
      )}

      <div className="expense_card">
      {/* Display from the newest addition */}
        {data.slice().reverse().map((item, index) => (
          <ExpenseCard key={index} item={item} />
        ))}
        ;
      </div>
    </div>
  );
};
