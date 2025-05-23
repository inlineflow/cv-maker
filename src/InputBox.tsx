import { useState, type KeyboardEvent } from "react";
import type { FontColor } from "./types/font";

type Props = {
  placeholderText?: string;
  label: { for: string; text: string };
  fontSizeStyle?: string;
  fontColor?: FontColor;
  width?: string;
};

export const Input = ({
  placeholderText,
  fontSizeStyle,
  label,
  fontColor = "light",
  width,
}: Props) => {
  const [text, setText] = useState("");
  const [active, setActive] = useState(true);
  const lightFont = "text-white placeholder-white";
  const darkFont = "text-black placeholder-gray-400";

  const handleUpdate =
    (updateFunc: (e: string) => void) =>
    (event: React.ChangeEvent<HTMLInputElement>) =>
      updateFunc(event.currentTarget.value);

  const handleEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      setActive(false);
    }
  };

  if (active) {
    const additionalStyles = [
      fontSizeStyle ?? "text-2xl",
      fontColor === "light" ? lightFont : darkFont,
      placeholderText ? "" : "border-b-1 border-black border-solid",
      width ?? "w-min",
    ];
    return (
      <>
        <label htmlFor={label.for} className={"hidden"}>
          {label.text}
        </label>
        <input
          onChange={handleUpdate(setText)}
          onKeyDown={handleEnter}
          value={text}
          id={label.for}
          type="text"
          placeholder={placeholderText}
          className={
            `placeholder:opacity-75
             appearance-none
             outline-hidden ` + additionalStyles.join(" ")
          }
        />
      </>
    );
  }

  if (!active) {
    return (
      <>
        <p>{text}</p>
      </>
    );
  }
};
