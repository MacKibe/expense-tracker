export const Capture_expense = ({ onClose }) => {
  return (
    <form>
        <h2>Details.</h2>
      <label htmlFor="itemName">Item:</label>
      <input id="itemName" type="text" />
      <label htmlFor="itemAmount">Amount:</label>
      <input id="itemAmount" type="number" />
      <label htmlFor="itemCategory">Category:</label>
      <input id="itemCategory" type="text" />
      <label htmlFor="itemDate">Date:</label>
      <input id="itemDate" type="date" />
      <label htmlFor="itemDescription">Description:</label>
      <textarea name="itemDescription" id="itemDescription" rows={5}></textarea>
      <button className="button save_button" onClick={onClose}>
        Save
      </button>
    </form>
  );
};
