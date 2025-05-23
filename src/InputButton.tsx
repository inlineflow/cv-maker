import PlusIcon from "./assets/DynamicListPlus.svg?react";
import { useEffect, useState } from "react";
import { InputBox } from "./InputBox";
type Style = "regular" | "small";
type Props = {
  style: Style;
  InputBox: () => InputBox;
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const btnStyles: Record<Style, string> = {
  regular: "size-10 mt-2.5",
  small: "size-8 mt-1.5",
};

export const InputButton = ({
  style = "regular",
  InputBox,
  callback,
}: Props) => {
  const [canAdd, setCanAdd] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => {
      if (canAdd) {
        setCanAdd(false);
      }
    });
  });

  const btn = (
    <button onClick={callback} className="cursor-pointer">
      <PlusIcon className={btnStyles[style]} />
    </button>
  );
  const InputComponent = InputBox();
  const input = (
    <div>
      <InputComponent onClick={onClickInput} />
    </div>
  );
  return btn;
};
