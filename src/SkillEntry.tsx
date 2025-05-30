import { useEffect, useRef, useState } from "react";
import { useValidity } from "./DynamicListValidityContext";
import { InputBox } from "./InputBox";
import type { FontColor } from "./types/font";
import type { PropsWithID } from "./types/prop";

type SKProps = PropsWithID<{
  placeholder?: string;
  fontColor?: FontColor;
  className?: string;
}>;

// export type SkillEntry = ({ Content, className }: SKProps) => JSX.Element;

export function SkillEntry({ id, placeholder, fontColor }: SKProps) {
  const [skillText, setSkillText] = useState("");
  const reportValidity = useValidity();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (skillText === "") reportValidity(id!, false);
      }
    };

    window.addEventListener("click", handleClickOutside, true);
    return () => window.removeEventListener("click", handleClickOutside, true);
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
        text={skillText}
        setText={setSkillText}
        fontColor={fontColor}
      />
    </div>
    // <li className={className}>
    //   <Content />
    // </li>
  );
}
