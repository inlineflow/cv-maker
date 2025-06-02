import { useRef } from "react";

type TextAreaProps = {
  htmlID: string;
  text: string;
  setText: (s: string) => void;
  isActive: boolean;
  onClick: () => void;
};

export const TextArea = ({
  htmlID: htmlID,
  text,
  setText,
  isActive,
  onClick,
}: TextAreaProps) => {
  const ref = useRef<HTMLTextAreaElement | null>(null);
  if (isActive)
    return (
      <div className="w-full">
        <label htmlFor={htmlID} hidden>
          Enter position description
        </label>
        <textarea
          id={htmlID}
          name={htmlID}
          ref={ref}
          onChange={() => setText(ref.current!.value)}
          value={text}
          className="w-full outline-none"
          placeholder={"Enter position description"}
        ></textarea>
      </div>
    );

  return <p onClick={onClick}>{text}</p>;
};
