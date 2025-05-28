import { useEffect, useRef, type FC } from "react";
import type { UUID } from "./util/uuid";

type DLItemProps = {
  itemId: UUID;
  Component: FC;
  sendFilter: (predicateMaker: () => (id: UUID) => boolean) => void;
  className?: string;
};

export const DLItem = ({
  itemId,
  Component,
  sendFilter,
  className,
}: DLItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        sendFilter(() => (id) => id !== itemId);
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
