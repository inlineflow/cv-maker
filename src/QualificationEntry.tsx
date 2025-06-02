import { useState } from "react";
import { InputBox } from "./InputBox";
import { TextArea } from "./TextArea";
import { useValidity } from "./DynamicListValidityContext";
import type { PropsWithID } from "./types/prop";
import { InputDateRange } from "./InputDateRange";

type QualificationEntryProps = PropsWithID<{
  sectionName?: string;
}>;

export const QualificationEntry = ({
  id,
  sectionName,
}: QualificationEntryProps) => {
  const [jobTitleText, setJobTitleText] = useState("");
  const [dateText, setDateText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  // const [textAreaActive, setTextAreaActive] = useState(true);
  const [isActive, setIsActive] = useState(true);
  const reportValidity = useValidity();
  const setActive = (val: boolean) => {
    if (
      jobTitleText.length === 0 &&
      dateText.length === 0 &&
      descriptionText.length === 0
    ) {
      reportValidity(id, val);
    } else {
      setIsActive(val);
    }
  };
  // const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div
      className="bg-pink-100 p-5 flex flex-col gap-2 w-full"
      onDoubleClick={() => {
        if (!isActive) setActive(true);
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
        active={isActive}
        setActive={(val) => setActive(val)}
        width="w-full"
        fontWeight="font-bold"
      />
      <InputDateRange htmlID="start-date" />
      {/* <InputBox
        label={{
          for: "quailification-entry-dates",
          text: `Enter your ${sectionName}: `,
        }}
        text={dateText}
        setText={setDateText}
        fontColor="dark"
        fontSizeStyle="text-sm"
        placeholderText="Job Title"
        active={isActive}
        setActive={(val) => setActive(val)}
      /> */}
      <TextArea
        htmlID="quailification-entry-desc"
        text={descriptionText}
        setText={setDescriptionText}
        isActive={isActive}
        onClick={() => setActive(!isActive)}
      />
      {isActive && (
        <div className="flex gap-2">
          <button
            onClick={() => setActive(!isActive)}
            className="bg-purple-500 rounded-md text-white w-1/2"
          >
            Save
          </button>
          <button
            onClick={() => setActive(!isActive)}
            className="bg-pink-200 rounded-md text-black w-1/2"
          >
            Close
          </button>
        </div>
      )}
      {/* <InputBox
        label={{ for: "quailification-entry", text: "Enter your {x}: " }}
        text={descriptionText}
        setText={setDescriptionText}
        fontColor="dark"
        fontSizeStyle="text-sm"
        placeholderText="Job Title"
      /> */}
    </div>
  );
};
