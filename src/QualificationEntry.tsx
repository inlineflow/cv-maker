import { useState } from "react";
import { InputBox } from "./InputBox";
import { TextArea } from "./TextArea";
import { useValidity } from "./DynamicListValidityContext";
import type { PropsWithID } from "./types/prop";

type QualificationEntryProps = PropsWithID<{
  sectionName?: string;
}>;

export const QualificationEntry = ({ id }: QualificationEntryProps) => {
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
      setTimeout(() => reportValidity(id, val), 500);
    } else {
      setIsActive(val);
    }
  };
  // const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div
      className="bg-pink-100 p-5 flex flex-col gap-2"
      onDoubleClick={() => {
        if (!isActive) setActive(true);
      }}
    >
      <InputBox
        label={{ for: "quailification-entry-title", text: "Enter your {x}: " }}
        text={jobTitleText}
        setText={setJobTitleText}
        fontColor="dark"
        fontSizeStyle="text-sm"
        placeholderText="Job Title"
        active={isActive}
        setActive={(val) => setActive(val)}
      />
      <InputBox
        label={{ for: "quailification-entry-dates", text: "Enter your {x}: " }}
        text={dateText}
        setText={setDateText}
        fontColor="dark"
        fontSizeStyle="text-sm"
        placeholderText="Job Title"
        active={isActive}
        setActive={(val) => setActive(val)}
      />
      <TextArea
        id="quailification-entry-desc"
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
