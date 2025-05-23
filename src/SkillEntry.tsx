import { Input } from "./InputBox";
import type { FontColor } from "./types/font";

type SKProps = {
  placeholder?: string;
  fontColor?: FontColor;
  className?: string;
};

// export type SkillEntry = ({ Content, className }: SKProps) => JSX.Element;

export function SkillEntry({ placeholder, fontColor }: SKProps) {
  return (
    <>
      <Input
        placeholderText={placeholder}
        width="w-full"
        label={{ for: "skill-entry", text: "Enter your skill: " }}
        fontColor={fontColor}
      />
    </>
    // <li className={className}>
    //   <Content />
    // </li>
  );
}
