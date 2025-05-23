import PlusIcon from "./assets/DynamicListPlus.svg?react";
import { useEffect, useState, type FC } from "react";
import { Input } from "./InputBox";
type Style = "regular" | "small";
type Props = {
  style: Style;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const btnStyles: Record<Style, string> = {
  regular: "size-10 mt-2.5",
  small: "size-8 mt-1.5",
};

export const InputButton = ({ style = "regular", callback }: Props) => {
  const [adding, setAdding] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => {
      if (adding) {
        setAdding(false);
      }
    });
  });

  const btn = (
    <button onClick={callback} className="cursor-pointer">
      <PlusIcon className={btnStyles[style]} />
    </button>
  );

  const input = <Input fontColor="dark" label={} />;

  return btn;
};
