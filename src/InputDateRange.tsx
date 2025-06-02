import { useState } from "react";
import moment from "moment";

type InputDateProps = {
  htmlID: string;
};

const dateFormat = "YYYY-MM-DD"; // ISO-8601

export const InputDateRange = ({ htmlID }: InputDateProps) => {
  const [displayStartDate, setDisplayStartDate] = useState("");
  const [displayEndDate, setDisplayEndDate] = useState("");
  const startDate = moment(displayStartDate, dateFormat);
  const endDate = moment(displayEndDate, dateFormat);

  const diffDates = (startDate, endDate): string => {
    const totalMonths = endDate.diff(startDate, "months");
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const yearsStr = years != 0 ? `${years} years` : "";
    return `${yearsStr} ${months} months`;
  };

  return (
    <div className="date-range">
      <div className="flex gap-5 w-fit">
        <div className="start-date-container">
          <label htmlFor="start-date"></label>
          <input
            type="date"
            name="start-date"
            id="start-date"
            value={displayStartDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDisplayStartDate(e.target.value);
            }}
          />
        </div>
        <span> — </span>
        <div className="end-date-container">
          <label htmlFor="end-date"></label>
          <input
            type="date"
            name="end-date"
            id="end-date"
            value={displayEndDate}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDisplayEndDate(e.target.value);
            }}
          />
        </div>
      </div>
      <p className="text-sm opacity-75">{diffDates(startDate, endDate)}</p>
    </div>
  );
};
