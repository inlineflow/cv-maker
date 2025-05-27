import { useEffect, useRef, type FC } from "react";

type DLItemProps = {
  itemId: number;
  Component: FC;
  sendFilter: (predicate: (id: number) => boolean) => void;
};

export const DLItem = ({ itemId, Component, sendFilter }: DLItemProps) => {
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        sendFilter((id) => id !== itemId);
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
