import PlusIcon from "./assets/DynamicListPlus.svg?react";
import { useEffect, useRef, useState, type JSX } from "react";
type Style = "regular" | "small";
type Props = {
  style: Style;
  InputBox: () => JSX.Element;
  // callback: () => void;
};

const btnStyles: Record<Style, string> = {
  regular: "size-10 mt-2.5",
  small: "size-8 mt-1.5",
};

export const InputButton = ({
  style = "regular",
  InputBox,
}: // callback: onOutsideClick,
// callback,
Props) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (active) {
        console.log(ref);
      }

      if (ref.current && !ref.current.contains(event.target as Node)) {
        setActive(false);
      }
    };

    const timeout = setTimeout(() => {
      window.addEventListener("click", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [active]);

  // useEffect(() => {
  //   const handler = () => {
  //     if (active) {
  //       setTimeout(() => setActive(false), 50);
  //     }
  //   };
  //   window.addEventListener("click", handler);
  //   return () => window.removeEventListener("click", handler);
  // });

  const btn = (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setActive(true);
      }}
      className="cursor-pointer"
    >
      <PlusIcon className={btnStyles[style]} />
    </button>
  );
  // const InputComponent = InputBox();
  const input = <InputBox />;
  if (active) return <div ref={ref}>{input}</div>;
  if (!active) return <div ref={ref}>{btn}</div>;
};
