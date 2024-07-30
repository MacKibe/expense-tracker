import { useState } from "react";

export const Capture_expense = ({ addNewExpense }) => {
  // State for the form data
  const [expenseData, setExpenseData] = useState({
    itemname: "",
    itemamount: "",
    itemcategory: "",
    itemdate: "",
    itemdescription: "",
  });

  // Handle input changes
  const handleChanges = (e) => {
    setExpenseData({ ...expenseData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewExpense(expenseData);
    setExpenseData({
      itemname: "",
      itemamount: "",
      itemcategory: "",
      itemdate: "",
      itemdescription: "",
    });
    console.log(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Details</h2>
      <label htmlFor="itemName">Item:</label>
      <input
        id="itemName"
        type="text"
        value={expenseData.itemname}
        name="itemname"
        onChange={handleChanges}
      />
      <label htmlFor="itemAmount">Amount:</label>
      <input
        id="itemAmount"
        type="number"
        name="itemamount"
        value={expenseData.itemamount}
        onChange={handleChanges}
      />
      <label htmlFor="itemCategory">Category:</label>
      <input
        id="itemCategory"
        type="text"
        name="itemcategory"
        value={expenseData.itemcategory}
        onChange={handleChanges}
      />
      <label htmlFor="itemDate">Date:</label>
      <input
        id="itemDate"
        type="date"
        name="itemdate"
        value={expenseData.itemdate}
        onChange={handleChanges}
      />
      <label htmlFor="itemDescription">Description:</label>
      <textarea
        name="itemdescription"
        value={expenseData.itemdescription}
        id="itemDescription"
        onChange={handleChanges}
        rows={5}
      ></textarea>
      <button className="button save_button" type="submit">
        Save
      </button>
    </form>
  );
};
