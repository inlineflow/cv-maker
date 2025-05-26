import { InputBox } from "./InputBox";
import type { FontColor } from "./types/font";

type SKProps = {
  placeholder?: string;
  fontColor?: FontColor;
  className?: string;
};

// export type SkillEntry = ({ Content, className }: SKProps) => JSX.Element;

export function SkillEntry({ placeholder, fontColor }: SKProps) {
  return (
    <div className="bg-purple-200 rounded-md border-2 p-2 border-none">
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
