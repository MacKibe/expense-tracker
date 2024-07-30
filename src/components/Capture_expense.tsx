import { useState } from "react";

export const Capture_expense = ({ onClose, addNewExpense }) => {
  //
  // Get and store the data in object
  const [expense, setExpense] = useState({
    itemname:"",
    itemamount:"",
    itemcategory:"",
    itemdate:"",
    itemdescription:""
  })

  const handleChanges = (e) => {
    setExpense({...expense, [e.target.name]:e.target.value})
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewExpense(expense);
    onClose();
  }
  //
  //
  return (
    <form onSubmit={handleSubmit}>
      <h2>Details.</h2>
      <label htmlFor="itemName">Item:</label>
      <input id="itemName" type="text" value={expense.itemname} name="itemname" onChange={(e) => {handleChanges(e)}}/>
      <label htmlFor="itemAmount">Amount:</label>
      <input id="itemAmount" type="number" name="itemamount" value={expense.itemamount} onChange={(e) => {handleChanges(e)}}/>
      <label htmlFor="itemCategory">Category:</label>
      <input id="itemCategory" type="text" name="itemcategory" value={expense.itemcategory} onChange={(e) => {handleChanges(e)}}/>
      <label htmlFor="itemDate">Date:</label>
      <input id="itemDate" type="date" name="itemdate" value={expense.itemdate} onChange={(e) => {handleChanges(e)}}/>
      <label htmlFor="itemDescription">Description:</label>
      <textarea name="itemdescription" value={expense.itemdescription} id="itemDescription" onChange={(e) => {handleChanges(e)}} rows={5}></textarea>
      <button className="button save_button" type="submit">
        Save
      </button>
    </form>
  );
};
