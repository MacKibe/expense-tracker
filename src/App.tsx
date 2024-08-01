import { Header } from "./components/Header";
import { Expense } from "./components/Expense";
import { Reports } from "./components/Reports";
import "./App.css";

function App() {

  //
  // State of our data.
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
  // Give the total amount spent
  const totalAmount = data.reduce((total, item) => total + item.itemAmount, 0)
  return (
    <>
      <Header />
      <div className="app_body">
        <Expense data={data}/>
        <Reports totalAmount={totalAmount}/>
      </div>
    </>
  );
}

export default App;
