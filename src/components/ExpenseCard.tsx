export const ExpenseCard = ({ item }) => {
  //
  // Add background color to different categories.
  let customClassName;

  switch (item.itemCategory) {
    case "Mandatory":
      customClassName = "mandatory_category";
      break;
    case "Non-essential":
      customClassName = "non_essential_category";
      break;
    case "Debt":
      customClassName = "debt_category";
      break;
    case "Savings":
      customClassName = "savings_category";
      break;
  }
  return (
    <div className={`expense_card_item ${customClassName}`}>
      {/* List my items */}
      <p className="item_name">{item.itemName}</p>
      <p className="item_amount">Kshs {item.itemAmount.toLocaleString()}</p>
      <p className="item_date">{item.itemDate}</p>
    </div>
  );
};
