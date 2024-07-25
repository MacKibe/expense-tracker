export const ExpenseCard = () => {
  const data = [
    {
      itemName: "BusFare",
      itemAmount: 900,
      itemCategory: "Mandatory",
      itemDate: "27-08-2009",
      itemDescription: "Transport",
    },
    {
      itemName: "Rent",
      itemAmount: 9000,
      itemCategory: "Mandatory",
      itemDate: "31-08-2009",
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
      itemDate: "27-08-2009",
      itemDescription: "Contribution",
    },
    {
      itemName: "Creed",
      itemAmount: 6000,
      itemCategory: "Non-essential",
      itemDate: "01-08-2009",
      itemDescription: "Colgne",
    },
    {
      itemName: "Hustle Fund",
      itemAmount: 973,
      itemCategory: "Debt",
      itemDate: "27-08-2009",
      itemDescription: "Contribution",
    },
    {
      itemName: "BusFare",
      itemAmount: 900,
      itemCategory: "Mandatory",
      itemDate: "27-08-2009",
      itemDescription: "Transport",
    },
    {
      itemName: "Rent",
      itemAmount: 9000,
      itemCategory: "Mandatory",
      itemDate: "31-08-2009",
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
      itemDate: "27-08-2009",
      itemDescription: "Contribution",
    },
    {
      itemName: "Creed",
      itemAmount: 6000,
      itemCategory: "Non-essential",
      itemDate: "01-08-2009",
      itemDescription: "Colgne",
    },
    {
      itemName: "Hustle Fund",
      itemAmount: 973,
      itemCategory: "Debt",
      itemDate: "27-08-2009",
      itemDescription: "Contribution",
    },
  ];
  //
  // Add background color to different categories.
  const elementItem ({data})

  return (
    <div className="expense_card">
      {/* List my items */}
      {data.map((item, index) => (
        <div key={index} className={element_class_name}>
          <p className="item_name">{item.itemName}</p>
          <p className="item_amount">Kshs {item.itemAmount}</p>
          <p className="item_date">{item.itemDate}</p>
        </div>
      ))}
    </div>
  );
};
