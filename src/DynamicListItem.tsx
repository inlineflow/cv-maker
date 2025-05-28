import { useEffect, useRef, type FC } from "react";
import type { UUID } from "./util/uuid";

type DLItemProps = {
  itemId: UUID;
  Component: FC;
  filterOut: (id: UUID) => void;
  className?: string;
};

export const DLItem = ({
  itemId,
  Component,
  filterOut,
  className,
}: DLItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        filterOut(itemId);
      }
    };

    const timeout = setTimeout(() => {
      window.addEventListener("click", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("click", handleClickOutside);
    };
  });

  const rendered = (
    <li ref={ref} className={className}>
      <Component />
    </li>
  );

  return rendered;
};
