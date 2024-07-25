import { format, add } from "date-fns";
import "../App.css"

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">Piggy.</div>
      <div className="time">
        {format(add(new Date(), { days: 0 }), "do MMMM yyyy")}
      </div>
    </div>
  );
};
