import { useEffect, useRef } from "react";
import { useValidity } from "./DynamicListValidityContext";
import { InputBox } from "./InputBox";
import type { FontColor } from "./types/font";
import type { UUID } from "./util/uuid";

type SKProps = {
  id: UUID;
  placeholder?: string;
  fontColor?: FontColor;
  className?: string;
};

// export type SkillEntry = ({ Content, className }: SKProps) => JSX.Element;

export function SkillEntry({ id, placeholder, fontColor }: SKProps) {
  const reportValidity = useValidity();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        console.log("child id: ", id);
        reportValidity(id, false);
      }
    };

    window.addEventListener("click", handleClickOutside, true);
    return () => window.removeEventListener("click", handleClickOutside, true);

    // const timeout = setTimeout(() => {
    //   window.addEventListener("click", handleClickOutside);
    // }, 0);

    // return () => {
    //   clearTimeout(timeout);
    //   window.removeEventListener("click", handleClickOutside);
    // };
  });

  return (
    <div
      ref={ref}
      className="bg-purple-200 rounded-md border-2 p-2 border-none min-w-0.5"
    >
      <InputBox
        placeholderText={placeholder}
        width="w-full"
        label={{ for: "skill-entry", text: "Enter your skill: " }}
        fontColor={fontColor}
      />
    </div>
    // <li className={className}>
    //   <Content />
    // </li>
  );
}
