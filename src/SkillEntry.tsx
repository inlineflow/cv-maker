import type { FC, JSX } from "react";

type skProps = {
  Content: FC;
  className: string;
};

export type SkillEntry = ({ Content, className }: skProps) => JSX.Element;

export function SkillEntry({ Content, className }: skProps) {
  return (
    <li className={className}>
      <Content />
    </li>
  );
}
