import { Header } from "./components/Header";
import { Expense } from "./components/Expense";
import { Reports } from "./components/Reports";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="app_body">
        <Expense />
        <Reports />
      </div>
    </>
  );
}

export default App;
