import { useEffect, useRef, type FC } from "react";
import type { UUID } from "./util/uuid";

type DLItemProps = {
  itemId: UUID;
  Component: FC;
  sendFilter: (predicate: (id: UUID) => boolean) => void;
};

export const DLItem = ({ itemId, Component, sendFilter }: DLItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        sendFilter((id) => id !== itemId);
        crypto.randomUUID();
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

  return (
    <li ref={ref}>
      <Component />
    </li>
  );
};
