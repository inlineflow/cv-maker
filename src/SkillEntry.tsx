import type { FC, JSX } from "react";

export type SKProps = {
  Content: FC;
  className?: string;
};

export type SkillEntry = ({ Content, className }: SKProps) => JSX.Element;

export function SkillEntry({ Content, className }: SKProps) {
  return (
    <li className={className}>
      <Content />
    </li>
  );
}
