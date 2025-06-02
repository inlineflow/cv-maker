import { type FC, type KeyboardEvent } from "react";
import type { FontColor } from "./types/font";

export type IBProps = {
  placeholderText?: string;
  label: { for: string; text: string };
  fontSizeStyle?: string;
  fontColor?: FontColor;
  width?: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  active?: boolean;
  setActive: (val: boolean) => void;
  fontWeight?: string;
};

export type InputBox = FC<IBProps>;

export const InputBox = ({
  placeholderText,
  fontSizeStyle,
  label,
  fontColor = "light",
  width,
  text,
  setText,
  active = true,
  setActive,
  fontWeight = "font-normal",
}: IBProps) => {
  // const [active, setActive] = useState(isActive);

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
      placeholderText ? "" : "", //"border-b-1 border-black border-solid",
      width ?? "w-min",
    ];
    return (
      <div>
        <label htmlFor={label.for} className={"hidden"}>
          {label.text}
        </label>
        <input
          autoComplete="off"
          onChange={handleUpdate(setText)}
          onKeyDown={handleEnter}
          value={text}
          id={label.for}
          type="text"
          placeholder={placeholderText}
          className={
            `placeholder:opacity-75
             appearance-none
             outline-hidden 
             max-w-full ` + additionalStyles.join(" ")
          }
          autoFocus
        />
      </div>
    );
  }

  if (!active) {
    return (
      <div>
        <p className={fontWeight}>{text}</p>
      </div>
    );
  }
};
