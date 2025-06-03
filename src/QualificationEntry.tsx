import { useState } from "react";
import { InputBox } from "./InputBox";
import { TextArea } from "./TextArea";
import { useValidity } from "./DynamicListValidityContext";
import type { PropsWithID } from "./types/prop";
import { InputDateRange } from "./InputDateRange";

type QualificationEntryProps = PropsWithID<{
  sectionName?: string;
}>;

const diffDates = (
  startDate: moment.Moment,
  endDate: moment.Moment
): string => {
  const totalMonths = endDate.diff(startDate, "months");
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const yearsStr = years != 0 ? `${years} years` : "";
  return `${yearsStr} ${months} months`;
};

export const QualificationEntry = ({
  id,
  sectionName,
}: QualificationEntryProps) => {
  const [jobTitleText, setJobTitleText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [displayStartDate, setDisplayStartDate] = useState("");
  const [displayEndDate, setDisplayEndDate] = useState("");
  const [active, __setActive] = useState(true);
  const reportValidity = useValidity();
  const setActive = (val: boolean) => {
    if (
      jobTitleText.length === 0 &&
      dateText.length === 0 &&
      descriptionText.length === 0
    ) {
      reportValidity(id, val);
    } else {
      __setActive(val);
    }
  };

  if (active)
    return (
      <div
        className="bg-pink-100 p-5 flex flex-col gap-2 w-full"
        onDoubleClick={() => {
          if (!active) setActive(true);
        }}
      >
        <InputBox
          label={{
            for: "quailification-entry-title",
            text: `Enter your ${sectionName}: `,
          }}
          text={jobTitleText}
          setText={setJobTitleText}
          fontColor="dark"
          fontSizeStyle="text-xl"
          placeholderText="Job Title"
          active={active}
          setActive={(val) => setActive(val)}
          width="w-full"
          fontWeight="font-bold"
        />
        <InputDateRange
          displayStartDate={displayStartDate}
          setDisplayStartDate={setDisplayStartDate}
          displayEndDate={displayEndDate}
          setDisplayEndDate={setDisplayEndDate}
        />
        <TextArea
          htmlID="quailification-entry-desc"
          text={descriptionText}
          setText={setDescriptionText}
          isActive={active}
          onClick={() => setActive(!active)}
        />
        {active && (
          <div className="flex gap-2">
            <button
              onClick={() => setActive(!active)}
              className="bg-purple-500 rounded-md text-white w-1/2"
            >
              Save
            </button>
            <button
              onClick={() => setActive(!active)}
              className="bg-pink-200 rounded-md text-black w-1/2"
            >
              Close
            </button>
          </div>
        )}
      </div>
    );

  if (!active) return;

  <div
    className="bg-pink-100 p-5 flex flex-col gap-2 w-full"
    onDoubleClick={() => {
      if (!active) setActive(true);
    }}
  >
    <h3>{jobTitleText}</h3>
    <h4>{companyText}</h4>
    <div>
      <span>{displayStartDate}</span>
      <span> — </span>
      <span>{displayEndDate}</span>
    </div>
    <p>{descriptionText}</p>
  </div>;
};
