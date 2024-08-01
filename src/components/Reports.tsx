import "../App.css";
import { format, add } from "date-fns";
export const Reports = ({ totalAmount }) => {
  //
  // Format total value
  const formattedAmount = totalAmount.toLocaleString();
  return (
    <div className="reports_panel">
      <div className="time">
        <p>{format(add(new Date(), { days: 0 }), "do MMMM yyyy")}</p>
      </div>
      <div>
        <p>MoneySpent: Kshs {formattedAmount}</p>
      </div>
    </div>
  );
};
