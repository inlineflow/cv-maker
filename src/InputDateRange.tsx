import { useRef, useState } from "react";
import moment from "moment";

type InputDateProps = {
  htmlID: string;
};

export const InputDateRange = ({ htmlID }: InputDateProps) => {
  const startDateRef = useRef<HTMLInputElement | null>(null);
  const endDateRef = useRef<HTMLInputElement | null>(null);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="date-range">
      <div className="flex gap-5 w-fit">
        <div className="start-date-container">
          <label htmlFor="start-date"></label>
          <input
            type="date"
            name="start-date"
            id="start-date"
            ref={startDateRef}
            value={startDate.toDateString()}
            onChange={(e) => {
              const x = new Date(e.target.value);
              setStartDate(x);
              console.log(x);
            }}
          />
        </div>
        <span> — </span>
        <div className="end-date-container">
          <label htmlFor="end-date"></label>
          <input type="date" name="end-date" id="end-date" ref={endDateRef} />
        </div>
      </div>
      <p className="text-sm opacity-75">{}</p>
    </div>
  );
};
